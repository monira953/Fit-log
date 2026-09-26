"use client";

import { Search, ChevronDown } from "lucide-react";

export type SortOption = "Duration" | "Calories" | "Rating";

interface WorkoutFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
}

const SORT_OPTIONS: SortOption[] = ["Duration", "Calories", "Rating"];

const WorkoutFilters = ({
  search,
  onSearchChange,
  sortBy,
  onSortChange,
}: WorkoutFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <label className="input flex w-full items-center gap-2 rounded-full border-white/10 bg-[#11151a] md:max-w-md">
        <Search className="h-4 w-4 text-white/40" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search workouts..."
          className="grow text-sm text-white placeholder:text-white/30"
        />
      </label>

      {/* Sort By */}
      <div className="dropdown dropdown-start">
        <button
          tabIndex={0}
          className="btn flex rounded-full border-white/10 bg-[#11151a] text-xs font-semibold uppercase tracking-wider text-white/70 hover:bg-[#181d23]"
        >
          Sort By: {sortBy}
          <ChevronDown className="h-4 w-4" />
        </button>

        <ul
          tabIndex={0}
          className="menu dropdown-content z-50 mt-2 w-48 rounded-2xl border border-white/10 bg-[#11151a] p-2 shadow-xl"
        >
          {SORT_OPTIONS.map((option) => (
            <li key={option}>
              <button
                onClick={() => onSortChange(option)}
                className={
                  sortBy === option
                    ? "bg-[#ccff00] text-black hover:bg-[#ccff00]"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutFilters;
