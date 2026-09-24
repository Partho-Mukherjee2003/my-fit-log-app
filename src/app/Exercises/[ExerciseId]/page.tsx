import Image from "next/image";
import React from "react";
import TodaysPlanBtn from "@/app/ExerciseDetailsBtns/TodaysPlanBtn";
import SaveLaterBtn from "@/app/ExerciseDetailsBtns/SaveLaterBtn";

const ExerciseDetailsPage = async ({
  params,
}: {
  params: Promise<{ ExerciseId: string }>;
}) => {
  const { ExerciseId } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${ExerciseId}`,
  );
  const exerciseDetail = await res.json();
  const {

    name,
    image,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = exerciseDetail;

  return (
    <div className="bg-[#0d0d0d] min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image */}
        <div className="relative w-full  aspect-4/3  lg:h-full lg:aspect-auto rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight">
            {name}
          </h1>

          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl">
            {description}
          </p>

          {/* Muscle group badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {muscleGroups?.map((muscle: string, index: number) => (
              <span
                key={index}
                className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Info table */}
          <div className="mt-6 rounded-xl overflow-hidden border border-gray-800">
            {[
              { label: "EQUIPMENT", value: equipment },
              { label: "DIFFICULTY", value: difficulty },
              { label: "SETS", value: sets },
              { label: "REPS", value: reps },
              { label: "DURATION", value: `${duration} min` },
              { label: "CALORIES", value: `${caloriesBurned} kcal` },
              { label: "RATING", value: rating },
            ].map((row, index) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-4 sm:px-5 py-3 ${
                  index % 2 === 0 ? "bg-[#141414]" : "bg-[#1a1a1a]"
                }`}
              >
                <span className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wide">
                  {row.label}
                </span>
                <span className="text-white text-sm sm:text-base font-medium">
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-white text-lg sm:text-xl font-extrabold uppercase">
              Instructions
            </h2>
            <ol className="mt-4 space-y-3">
              {instructions?.map((step: string, index: number) => (
                <li
                  key={index}
                  className="text-gray-300 text-sm sm:text-base flex gap-3"
                >
                  <span className="text-gray-500 font-medium">
                    {index + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <TodaysPlanBtn exerciseDetail={exerciseDetail} />
            <SaveLaterBtn exerciseDetail={exerciseDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailsPage;
