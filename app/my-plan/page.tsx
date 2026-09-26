"use client";

import { useMemo, useState } from "react";
import PlanMetrics from "@/components/my-plan/PlanMetrics";
import PlanTabs from "@/components/my-plan/PlanTabs";
import PlanWorkoutCard from "@/components/my-plan/PlanWorkoutCard";
import EmptyPlan from "@/components/my-plan/EmptyPlan";
import { useFitLog } from "@/context/FitLogContext";

type SortOption = "Duration" | "Calories" | "Rating";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortOption>("Duration");

  const { plan, saved, removeFromPlan, removeFromSaved, markDone } =
    useFitLog();

  const currentWorkouts = useMemo(() => {
    const workouts = activeTab === "plan" ? plan : saved;

    return [...workouts].sort((a, b) => {
      if (sortBy === "Duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "Calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    });
  }, [activeTab, plan, saved, sortBy]);

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#090b0e]">
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/50">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-10">
          <PlanMetrics workouts={plan} />
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <PlanTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            planCount={plan.length}
            savedCount={saved.length}
          />

          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn flex rounded-full border-white/10 bg-[#11151a] text-xs font-semibold uppercase tracking-wider text-white/70 hover:bg-[#181d23]"
            >
              Sort By: {sortBy}
              <span className="ml-1">⌄</span>
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-2 w-48 rounded-2xl border border-white/10 bg-[#11151a] p-2 shadow-xl"
            >
              {(["Duration", "Calories", "Rating"] as SortOption[]).map(
                (option) => (
                  <li key={option}>
                    <button
                      onClick={() => setSortBy(option)}
                      className={
                        sortBy === option
                          ? "bg-[#ccff00] text-black hover:bg-[#ccff00]"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }
                    >
                      {option}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          {currentWorkouts.length === 0 ? (
            <EmptyPlan type={activeTab} />
          ) : (
            <div className="rounded-2xl border border-white/10 bg-[#11151a] px-5">
              {currentWorkouts.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  showMarkDone={activeTab === "plan"}
                  onRemove={handleRemove}
                  onMarkDone={markDone}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default MyPlanPage;
