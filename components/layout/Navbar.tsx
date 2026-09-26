"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  const isWorkoutsActive =
    pathname === "/" || pathname.startsWith("/workouts");

  const isPlanActive = pathname.startsWith("/my-plan");

  return (
    <header className="border-b border-white/10 bg-[#090b0e]">
      <nav className="navbar mx-auto h-16 max-w-7xl px-5 sm:px-8">
        {/* Logo */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FitLog"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
              priority
            />

            <span className="text-sm font-bold tracking-[0.18em] text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="navbar-center">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className={`btn btn-sm rounded-full border-0 px-5 text-xs font-semibold uppercase tracking-wider ${
                isWorkoutsActive
                  ? "bg-[#ccff00] text-black hover:bg-[#ccff00]"
                  : "bg-transparent text-white/50 hover:bg-white/5 hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`btn btn-sm rounded-full border-0 px-5 text-xs font-semibold uppercase tracking-wider ${
                isPlanActive
                  ? "bg-[#ccff00] text-black hover:bg-[#ccff00]"
                  : "bg-transparent text-white/50 hover:bg-white/5 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>
        </div>

        {/* Counters */}
        <div className="navbar-end">
          <div className="flex items-center gap-5">
            {/* Plan Counter */}
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 transition hover:text-white"
            >
              <span>Plan</span>

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-2 font-bold text-black">
                {plan.length}
              </span>
            </Link>

            {/* Saved Counter */}
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 transition hover:text-white"
            >
              <span>Saved</span>

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/20 px-2 font-bold text-white/70">
                {saved.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;