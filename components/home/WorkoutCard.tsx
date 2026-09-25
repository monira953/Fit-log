import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WorkoutCard = () => {
  return (
    <article className="group rounded-2xl border border-white/10 bg-[#11151a] p-5 transition hover:border-white/20">
      <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-[#151a20]">
        <span className="text-4xl font-black uppercase text-white/10">
          FIT
        </span>
      </div>

      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
        Chest
      </p>

      <h3 className="mt-2 text-lg font-bold text-white">
        Bench Press
      </h3>

      <p className="mt-2 text-sm text-white/40">
        Barbell • Compound
      </p>

      <Link
        href="/workouts/bench-press"
        className="btn btn-sm mt-5 w-full rounded-full border-0 bg-white/5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#ccff00] hover:text-black"
      >
        View Workout
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
};

export default WorkoutCard;