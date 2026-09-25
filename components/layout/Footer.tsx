import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d10]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between md:px-6">
        
        <div className="flex items-center gap-2">
          <Dumbbell className="h-4 w-4 text-[#ccff00]" />

          <span className="font-bold tracking-wider text-white">
            FITLOG
          </span>
        </div>

        <p>
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;