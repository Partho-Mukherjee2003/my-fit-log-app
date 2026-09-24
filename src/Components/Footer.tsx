import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const FooterPage = () => {
  return (
    <footer className="rounded-2xl mx-auto container w-full bg-[#0b0d10] border-y border-white/5">
      <div className=" flex flex-col items-center justify-between gap-3 px-4 py-8 sm:flex-row lg:px-6">
        {/* Left: logo + brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} width={20} height={20} alt="logo" />
          <span className="text-sm font-extrabold uppercase tracking-wide text-white">
            FitLog
          </span>
        </Link>

        {/* Right: copyright */}
        <p className="text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
