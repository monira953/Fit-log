import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#11151a] transition hover:border-white/20"
    >
      <div className="relative h-48 bg-[#151a20]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#ccff00]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#ccff00]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-3 text-lg font-bold uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-sm text-white/40">{workout.equipment}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-white/50">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" /> {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;