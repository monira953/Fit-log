import Link from "next/link";
import { Dumbbell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b border-white/10 bg-[#0b0d10]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-4 w-4 text-[#ccff00]" />

          <span className="text-sm font-bold tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-xs font-medium text-white/60 transition hover:text-white"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-4 py-2 text-xs font-medium text-white/60 transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-1.5 text-[10px] font-bold uppercase text-black"
          >
            Plan <span className="ml-1">0</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-bold uppercase text-white"
          >
            Saved <span className="ml-1">0</span>
          </Link>

          <button
            type="button"
            className="hidden p-2 text-white/60 transition hover:text-white sm:block"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;