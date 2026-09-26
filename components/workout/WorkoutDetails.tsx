"use client";

import Image from "next/image";
import { PlusCircle, Bookmark, Check } from "lucide-react";
import { toast } from "react-toastify";
import { Workout } from "@/types/workout";
import WorkoutStats from "./WorkoutStats";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutDetailsProps {
  workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  const {
    addToPlan,
    saveForLater,
    isInPlan,
    isSaved,
  } = useFitLog();

  const addedToPlan = isInPlan(workout.id);
  const savedForLater = isSaved(workout.id);

  const handleAddToPlan = () => {
    if (addedToPlan) return;

    addToPlan(workout);
    toast.success("Added to today's plan!");
  };

  const handleSaveForLater = () => {
    if (savedForLater) return;

    saveForLater(workout);
    toast.success("Saved for later!");
  };

  return (
    <main className="bg-[#090b0e]">
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#11151a] lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[320px] bg-[#151a20] sm:min-h-[450px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#ccff00]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ccff00]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-4 text-sm leading-6 text-white/50">
              {workout.description}
            </p>

            <div className="mt-8">
              <WorkoutStats workout={workout} />
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={handleAddToPlan}
                disabled={addedToPlan}
                className="btn gap-2 rounded-full border-0 bg-[#ccff00] px-6 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#ccff00] disabled:bg-[#ccff00] disabled:text-black disabled:opacity-100"
              >
                {addedToPlan ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <PlusCircle className="h-4 w-4" />
                )}
                {addedToPlan ? "Added to Plan" : "Add to Today's Plan"}
              </button>

              <button
                onClick={handleSaveForLater}
                disabled={savedForLater}
                className="btn btn-outline gap-2 rounded-full border-white/30 px-6 text-xs font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white hover:text-black disabled:border-[#ccff00] disabled:bg-transparent disabled:text-[#ccff00] disabled:opacity-100"
              >
                {savedForLater ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Bookmark className="h-4 w-4" />
                )}
                {savedForLater ? "Saved" : "Save for Later"}
              </button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            Instructions
          </h2>

          <div className="mt-6 grid gap-3">
            {workout.instructions.map((instruction, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-white/10 bg-[#11151a] p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
                  {index + 1}
                </span>

                <p className="pt-1 text-sm leading-6 text-white/60">
                  {instruction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkoutDetails;