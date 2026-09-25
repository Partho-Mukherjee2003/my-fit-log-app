"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { ExerciseContext } from "@/Context/ExerciseContext";

const NavBar = () => {
  const exerciseProvider = useContext(ExerciseContext);

  if (!exerciseProvider) {
    throw new Error("NavBar must be used within an ExerciseProvider");
  }

  const { saveLater, todaysPlan } = exerciseProvider;
  const [active, setActive] = useState("workouts");

  const activeStyle = "bg-[#1c2a0a] text-[#b6f000]";
  const normalStyle = "text-gray-400 hover:text-gray-200";

  const Links = (
    <>
      <Link href="/">
        <button
          onClick={() => setActive("workouts")}
          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium ${
            active === "workouts" ? activeStyle : normalStyle
          }`}
        >
          Workouts
        </button>
      </Link>
      <Link href="/MyPlan">
        <button
          onClick={() => setActive("plan")}
          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium ${
            active === "plan" ? activeStyle : normalStyle
          }`}
        >
          My Plan
        </button>
      </Link>
    </>
  );

  return (
    <div className="mt-5 container mx-auto bg-[#0b0d10] border border-white/5 lg:mb-5 shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

      {/* Overlay backdrop */}
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 z-40 hidden max-lg:peer-checked:block"
      ></label>

      <div className="navbar px-4 lg:px-6">
        <div className="navbar-start">
          <label
            htmlFor="navbar-1-toggle"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Link href="/" className="cursor-pointer flex items-center gap-2">
            <Image src={logo} width={30} height={35} alt="logo" />
            <span className="text-lg font-extrabold uppercase tracking-wide text-white">
              FitLog
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2">{Links}</ul>
        </div>

        <div className="navbar-end gap-5">
          <Link href="/MyPlan">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span>Plan</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b6f000] px-1.5 text-xs font-bold text-black">
                {todaysPlan.length}
              </span>
            </div>
          </Link>
          <Link href="/MyPlan">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span>Saved</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/20 bg-[#15181c] px-1.5 text-xs font-bold text-white">
                {saveLater.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="hidden max-lg:peer-checked:block relative z-50 px-4 pb-4">
        <ul className="flex flex-col gap-2">{Links}</ul>
      </div>
    </div>
  );
};

export default NavBar;
