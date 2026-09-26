import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#090b0e] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ccff00]">
          404 — Page Not Found
        </p>

        <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-7xl">
          Wrong Route.
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-white/50 sm:text-base">
          Looks like this workout got lost. The page you&apos;re looking for
          doesn&apos;t exist or may have been moved.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="btn gap-2 rounded-full border-0 bg-[#ccff00] px-6 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#ccff00]"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;