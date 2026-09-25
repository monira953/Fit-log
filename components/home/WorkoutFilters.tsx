"use client";

import { Search, SlidersHorizontal } from "lucide-react";

const WorkoutFilters = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <label className="input flex w-full items-center gap-2 rounded-full border-white/10 bg-[#11151a] md:max-w-md">
        <Search className="h-4 w-4 text-white/40" />

        <input
          type="text"
          placeholder="Search workouts..."
          className="grow text-sm text-white placeholder:text-white/30"
        />
      </label>

      <button className="btn rounded-full border-white/10 bg-[#11151a] text-xs font-semibold uppercase tracking-wider text-white/70 hover:bg-[#181d23]">
        <SlidersHorizontal className="h-4 w-4" />
        Filter
      </button>
    </div>
  );
};

export default WorkoutFilters;