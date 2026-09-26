import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d10]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />

          <span className="text-sm font-bold tracking-[0.18em] text-white">
            FITLOG
          </span>
        </div>

        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;