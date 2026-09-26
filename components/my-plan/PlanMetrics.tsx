"use client";

import { Workout } from "@/types/workout";

interface PlanMetricsProps {
  workouts: Workout[];
}

const PlanMetrics = ({ workouts }: PlanMetricsProps) => {
  const totalMinutes = workouts.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = workouts.reduce((sum, w) => sum + w.caloriesBurned, 0);

  const metrics = [
    { label: "Exercises", value: workouts.length },
    { label: "Minutes", value: totalMinutes },
    { label: "Calories", value: totalCalories },
  ];

  return (
    <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-[#11151a]">
      {metrics.map((metric) => (
        <div key={metric.label} className="px-6 py-5 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
            {metric.label}
          </p>
          <p className="mt-1 text-2xl font-black text-white">{metric.value}</p>
        </div>
      ))}
    </div>
  );
};

export default PlanMetrics;