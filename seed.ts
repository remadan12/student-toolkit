import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const subjects = [
    { name: "Mathematics", slug: "mathematics", grade: 9 },
    { name: "Physics", slug: "physics", grade: 9 },
    { name: "Chemistry", slug: "chemistry", grade: 9 },
    { name: "Biology", slug: "biology", grade: 9 },
  ];

  for (const subject of subjects) {
    await prisma.subject.upsert({
      where: { slug: subject.slug },
      update: { name: subject.name, grade: subject.grade },
      create: subject,
    });
  }

  const physics = await prisma.subject.findUniqueOrThrow({ where: { slug: "physics" } });
  await prisma.lesson.upsert({
    where: { subjectId_slug: { subjectId: physics.id, slug: "motion-and-speed" } },
    update: { title: "Motion and Speed", published: true },
    create: {
      subjectId: physics.id,
      title: "Motion and Speed",
      slug: "motion-and-speed",
      summary: "Understand distance, time, and average speed.",
      difficulty: 1,
      published: true,
      content: [
        { type: "paragraph", text: "Average speed is total distance divided by total time." },
        { type: "formula", latex: "v = \\frac{d}{t}" },
      ],
    },
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
