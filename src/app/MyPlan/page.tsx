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

  return (
    <div className="bg-[#0d0d0d] min-h-screen px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl font-extrabold uppercase tracking-wide">
          My Plan
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mt-1 mb-8">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Stats card */}
        <div className="bg-[#1a1a1a] rounded-2xl px-6 sm:px-10 py-6 sm:py-8 mb-8">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-gray-400 text-xs sm:text-sm mb-1">Exercises</p>
              <p className="text-lime-400 text-2xl sm:text-3xl font-extrabold">
                2
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs sm:text-sm mb-1">Minutes</p>
              <p className="text-white text-2xl sm:text-3xl font-extrabold">
                23
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs sm:text-sm mb-1">Calories</p>
              <p className="text-white text-2xl sm:text-3xl font-extrabold">
                190
              </p>
            </div>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          {/* Toggle buttons — functional tabs */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-full p-1 flex items-center gap-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                activeTab === "today"
                  ? "bg-[#2a2a2a] text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                activeTab === "saved"
                  ? "bg-[#2a2a2a] text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Sort By</span>
            <button className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-3 py-2 flex items-center gap-2 text-white hover:border-gray-600 transition-colors">
              Duration
              <ChevronDown size={16} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Tab content (Conditional Rendering based on activeTab) */}
        {activeTab === "today" ? (
          todaysPlan.length === 0 ? (
            <div className="border border-dashed border-gray-800 rounded-2xl py-16 sm:py-20 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-white text-lg sm:text-xl font-extrabold uppercase mb-2">
                Nothing Here Yet
              </h2>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href="/">
                <button className="bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-full px-6 py-3 transition-colors">
                  Go to workouts
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {todaysPlan.map
                ? todaysPlan.map((exercise) => (
                    <TodaysCardPage key={exercise.id} exercise={exercise} />
                  ))
                : todaysPlan.map((exercise) => (
                    <TodaysCardPage key={exercise.id} exercise={exercise} />
                  ))}
            </div>
          )
        ) : saveLater.length === 0 ? (
          <div className="border border-dashed border-gray-800 rounded-2xl py-16 sm:py-20 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-lg sm:text-xl font-extrabold uppercase mb-2">
              No Saved Exercises
            </h2>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Save a lift for later and it&apos;ll show up here.
            </p>
            <Link href="/">
              <button className="bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-full px-6 py-3 transition-colors">
                Go to workouts
              </button>
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
