import WorkoutCard from "./WorkoutCard";
import WorkoutFilters from "./WorkoutFilters";

const WorkoutLibrary = () => {
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

      <WorkoutFilters />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <WorkoutCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutLibrary;