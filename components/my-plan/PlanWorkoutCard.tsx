"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Check, X } from "lucide-react";
import { Workout } from "@/types/workout";

interface PlanWorkoutCardProps {
  workout: Workout;
  onMarkDone: (id: number) => void;
  onRemove: (id: number) => void;
}

const PlanWorkoutCard = ({ workout, onMarkDone, onRemove }: PlanWorkoutCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#11151a]">
      <Link href={`/workouts/${workout.id}`}>
        <div className="relative h-44 bg-[#151a20]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-300 hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/workouts/${workout.id}`}>
          <h3 className="text-lg font-bold uppercase text-white hover:text-[#ccff00]">
            {workout.name}
          </h3>
        </Link>

        <p className="mt-1 text-sm text-white/40">{workout.equipment}</p>

        <div className="mt-3 flex items-center gap-4 text-xs text-white/40">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" /> {workout.caloriesBurned} kcal
          </span>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`/workouts/${workout.id}`}
            className="btn btn-sm flex-1 rounded-full border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-wider text-white/70 hover:bg-white/10"
          >
            View Details
          </Link>

          <button
            onClick={() => onMarkDone(workout.id)}
            className="btn btn-sm gap-1 rounded-full border-0 bg-[#ccff00] px-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#ccff00]"
          >
            <Check className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={() => onRemove(workout.id)}
            className="btn btn-sm btn-square rounded-full border-white/10 bg-white/5 text-white/50 hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-300"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlanWorkoutCard;