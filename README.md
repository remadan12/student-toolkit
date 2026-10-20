# Student Toolkit MVP

A mobile-first Next.js + TypeScript + Tailwind starter for a secondary-school learning platform.

## Included
- Responsive student dashboard
- Subject cards for Math, Physics, Chemistry, and Biology
- Interactive step-by-step Physics solver with hints, instant feedback, score, and retry
- Accessible progress bar and keyboard-friendly inputs
- Prisma schema for users, subjects, lessons, quizzes, questions, attempts, progress, and tools
- Example authenticated progress API contract (demo endpoint deliberately requires auth integration before persistence)

## Requirements
- Node.js 20+
- PostgreSQL (for database-backed features)

## Run locally
1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and set `DATABASE_URL`.
3. Generate Prisma client: `npm run db:generate`
4. Apply database migrations: `npm run db:migrate`
5. Start dev server: `npm run dev`
6. Open `http://localhost:3000`

The dashboard and solver prototype can be explored before connecting authentication or the database. Persistent progress is not enabled until you add an authentication provider and implement the protected submission flow.

## Suggested next steps
1. Add Auth.js or a managed authentication provider.
2. Implement server-side quiz scoring and protected progress writes.
3. Add real lesson content and quiz seed data.
4. Add automated tests and accessibility checks before launch.

## Security notes
- Never expose `Question.answerKey` to client components.
- Validate payloads server-side and calculate final scores on the server.
- Scope every progress query to the authenticated user.
- Do not put database credentials in client-side code.
