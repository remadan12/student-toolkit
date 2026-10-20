import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import PhysicsSolver from "@/features/tools/physics-solver/PhysicsSolver";

export default function PhysicsSolverPage() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-indigo-700"><ArrowLeft size={17} />Dashboard</Link>
        <Link href="/" className="inline-flex items-center gap-2 font-bold"><GraduationCap className="text-indigo-600" />Student Toolkit</Link>
      </header>
      <PhysicsSolver />
    </div>
  );
}
