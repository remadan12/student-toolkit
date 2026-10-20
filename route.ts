import { NextResponse } from "next/server";
import { progressSubmissionSchema } from "@/lib/validation";

// Demo contract only. Connect your authentication provider and Prisma before
// enabling writes. Never accept a userId from the request body as identity.
export async function POST(request: Request) {
  const parsed = progressSubmissionSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid progress payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      message: "Payload validated. Connect authenticated user lookup and Prisma persistence before production use.",
      accepted: parsed.data,
    },
    { status: 202 }
  );
}
