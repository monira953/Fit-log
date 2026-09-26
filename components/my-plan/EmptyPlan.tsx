import { Dumbbell } from "lucide-react";
import Link from "next/link";

interface EmptyPlanProps {
  type: "plan" | "saved";
}

const EmptyPlan = ({ type }: EmptyPlanProps) => {
  const isPlan = type === "plan";

  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-[#11151a] px-6 py-16 text-center">
      <Dumbbell className="mx-auto h-8 w-8 text-white/20" />

      <h3 className="mt-5 text-lg font-bold uppercase text-white">
        {isPlan ? "Nothing Here Yet" : "Nothing Saved Yet"}
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/40">
        {isPlan
          ? "Browse the library and add a lift to get today moving."
          : "Save workouts you want to come back to later."}
      </p>

      <Link
        href="/"
        className="btn mt-6 rounded-full border-0 bg-[#ccff00] px-6 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#ccff00]"
      >
        Go to Workouts
      </Link>
    </div>
  );
};

export default EmptyPlan;