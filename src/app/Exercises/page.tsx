import ExercisesCard from "@/Components/ExerciseCard";
import React from "react";
import type { ExercisesType } from "@/Components/ExerciseCard";

const ExercisesPromise = async (): Promise<ExercisesType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) {
    throw new Error("failed to fetch books");
  }
  return res.json();
};

const ExercisesPage = async () => {
  const Exercises = await ExercisesPromise();

  return (
    <div
      id="library"
      className="bg-[#0d0d0d] min-h-screen px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
    >
      <div className="container mx-auto mb-10 sm:mb-15">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl font-extrabold uppercase tracking-wide">
          The Library
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mt-1 mb-8 sm:mb-10">
          Twelve lifts covering every major muscle group.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Exercises.map((exercise) => (
            <ExercisesCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;
