"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Check, X } from "lucide-react";
import { Workout } from "@/types/workout";

interface PlanWorkoutCardProps {
  workout: Workout;
  showMarkDone: boolean;
  onMarkDone: (id: number) => void;
  onRemove: (id: number) => void;
}

const PlanWorkoutCard = ({
  workout,
  showMarkDone,
  onMarkDone,
  onRemove,
}: PlanWorkoutCardProps) => {
  return (
    <div className="flex items-center gap-5 border-b border-white/10 py-4 last:border-b-0">
      {/* Left: Image */}
      <Link
        href={`/workouts/${workout.id}`}
        className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#151a20]"
      >
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </Link>

      {/* Middle: Workout information */}
      <div className="min-w-0 flex-1">
        <Link href={`/workouts/${workout.id}`}>
          <h3 className="truncate text-sm font-bold uppercase text-white hover:text-[#ccff00]">
            {workout.name}
          </h3>
        </Link>

        <p className="mt-1 truncate text-xs text-white/40">
          {workout.equipment}
        </p>

        <div className="mt-2 flex items-center gap-4 text-xs text-white/40">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" />
            {workout.caloriesBurned} kcal
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="btn btn-sm rounded-full border-white/10 bg-white/5 px-4 text-xs font-semibold uppercase tracking-wider text-white/70 hover:bg-white/10"
        >
          View Details
        </Link>

        {showMarkDone && (
          <button
            onClick={() => onMarkDone(workout.id)}
            className="btn btn-sm rounded-full border-0 bg-[#ccff00] px-4 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#ccff00]"
          >
            <Check className="h-3.5 w-3.5" />
            Mark as Done
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          className="btn btn-sm btn-square rounded-full border-white/10 bg-white/5 text-white/50 hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-300"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;