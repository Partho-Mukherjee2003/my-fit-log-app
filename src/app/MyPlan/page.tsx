"use client";
import React, { useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { ExerciseContext } from "@/Context/ExerciseContext";
import TodaysCardPage from "../TodayandSaveCardDetails/TodaysCards";
import SaveCardPage from "../TodayandSaveCardDetails/SaveCards";

const MyPlanPage = () => {
  const { saveLater, todaysPlan } = useContext(ExerciseContext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const list = activeTab === "today" ? todaysPlan : saveLater;

  let totalCalories = 0;
  let totalTime = 0;

  list.forEach((exercise) => {
    totalTime = totalTime + Number(exercise.duration);
    totalCalories = totalCalories + Number(exercise.caloriesBurned);
  });
  const [sortBy,setSortBy] = useState<"duration" | "calories" | "rating">("duration");
  return (
    <div className="min-h-screen bg-[#0d0d0d] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
          My Plan
        </h1>
        <p className="mb-6 mt-1 text-sm text-gray-400 sm:mb-8 sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Stats card */}
        <div className="mb-6 rounded-2xl bg-[#1a1a1a] px-4 py-5 sm:mb-8 sm:px-8 sm:py-6 lg:px-10 lg:py-8">
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            <div>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Exercises</p>
              <p className="text-xl font-extrabold text-lime-400 sm:text-2xl lg:text-3xl">
                {list.length}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Minutes</p>
              <p className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl">
                {totalTime}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Calories</p>
              <p className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl">
                {totalCalories}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {/* Toggle buttons */}
          <div className="flex w-full items-center gap-1 rounded-full border border-gray-800 bg-[#1a1a1a] p-1 sm:w-auto">
            <button
              onClick={() => setActiveTab("today")}
              className={`flex-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors sm:flex-none ${
                activeTab === "today"
                  ? "bg-[#2a2a2a] font-bold text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors sm:flex-none ${
                activeTab === "saved"
                  ? "bg-[#2a2a2a] font-bold text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort dropdown */}
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="select border border-lime-400 bg-black text-white"
          >
            <option disabled={true}>Sort by</option>
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories Burn</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>

        {/* Tab content */}
        {activeTab === "today" ? (
          todaysPlan.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 px-4 py-12 text-center sm:py-20">
              <h2 className="mb-2 text-lg font-extrabold uppercase text-white sm:text-xl">
                Nothing Here Yet
              </h2>
              <p className="mb-6 max-w-sm text-sm text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/"
                className="rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-lime-300"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {todaysPlan.map((exercise) => (
                <TodaysCardPage key={exercise.id} exercise={exercise} />
              ))}
            </div>
          )
        ) : saveLater.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 px-4 py-12 text-center sm:py-20">
            <h2 className="mb-2 text-lg font-extrabold uppercase text-white sm:text-xl">
              No Saved Exercises
            </h2>
            <p className="mb-6 max-w-sm text-sm text-gray-400">
              Save a lift for later and it&apos;ll show up here.
            </p>
            <Link
              href="/"
              className="rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-lime-300"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {saveLater.map((exercise) => (
              <SaveCardPage key={exercise.id} exercise={exercise} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
