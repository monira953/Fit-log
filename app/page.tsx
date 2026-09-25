import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";

const Page = () => {
  return (
    <main className="bg-[#090b0e]">
      {/* Banner */}
      <section className="px-5 pt-10 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#15191e] px-6 py-12 sm:px-10 lg:py-16">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
            {/* Text */}
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
                Workout Library
              </p>

              <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Train With Intent.
                <br />
                Log Every Set.
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

              <div className="mt-8">
                <a
                  href="#library"
                  className="btn gap-2 rounded-full border-0 bg-[#ccff00] px-6 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#ccff00]"
                >
                  Browse Workouts
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative h-[320px] w-full max-w-md sm:h-[380px] lg:h-[420px] lg:w-[420px]">
              <Image
                src="/banner.png"
                alt="Workout"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <WorkoutLibrary />
    </main>
  );
};

export default Page;