import { Workout } from "@/types/workout";

interface WorkoutStatsProps {
  workout: Workout;
}

const WorkoutStats = ({ workout }: WorkoutStatsProps) => {
  const specs: { label: string; value: string | number }[] = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {specs.map((spec) => (
        <div key={spec.label} className="flex items-center justify-between py-3">
          <span className="text-xs font-bold uppercase tracking-wider text-white/40">
            {spec.label}
          </span>
          <span className="text-sm font-semibold text-white">{spec.value}</span>
        </div>
      ))}
    </div>
  );
};

export default WorkoutStats;