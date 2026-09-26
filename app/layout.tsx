import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FitLogProvider } from "@/context/FitLogContext";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "A dark, no-nonsense workout library for planning and tracking your training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#090b0e] text-white">
        <FitLogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />

          <ToastContainer
            position="bottom-right"
            autoClose={2500}
            theme="dark"
          />
        </FitLogProvider>
      </body>
    </html>
  );
}