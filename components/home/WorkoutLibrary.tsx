"use client";

import { useEffect, useMemo, useState } from "react";
import { getWorkouts } from "@/lib/api";
import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";
import WorkoutFilters, { SortOption } from "./WorkoutFilters";

const WorkoutLibrary = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("Duration");

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch {
        setError("Failed to load workouts.");
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  const filteredAndSortedWorkouts = useMemo(() => {
    const filtered = workouts.filter((workout) =>
      workout.name.toLowerCase().includes(search.toLowerCase()),
    );

    return [...filtered].sort((a, b) => {
      if (sortBy === "Duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "Calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    });
  }, [workouts, search, sortBy]);

  return (
    <section id="library" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="mb-10">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          The Library
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <WorkoutFilters
        search={search}
        onSearchChange={setSearch}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {loading && (
        <div className="mt-10 flex justify-center">
          <span className="loading loading-spinner loading-lg text-[#ccff00]" />
        </div>
      )}

      {error && (
        <div className="alert alert-error mt-8">
          <span>{error}</span>
        </div>
      )}

      {!loading && !error && (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAndSortedWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}

      {!loading && !error && filteredAndSortedWorkouts.length === 0 && (
        <div className="py-16 text-center text-sm text-white/40">
          No workouts found.
        </div>
      )}
    </section>
  );
};

export default WorkoutLibrary;