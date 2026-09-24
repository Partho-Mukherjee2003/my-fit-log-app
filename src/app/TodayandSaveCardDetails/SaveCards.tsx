import React from "react";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import type { ExercisesType } from "@/Types/ExercisesTypes";
import Image from "next/image";

const SaveCardPage = ({ exercise }: { exercise: ExercisesType }) => {
  return (
    <div className="flex items-center my-3 gap-4 rounded-2xl border border-white/10 bg-[#0f1218] p-3 sm:gap-5">
      {/* Image */}
      <Image
        width={400}
        height={500}
        src={exercise.image}
        alt={exercise.name}
        className="h-15 w-25 shrink-0 rounded-xl object-cover sm:h-15 sm:w-25"
      />

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-base font-bold uppercase tracking-wide text-white">
          {exercise.name}
        </h3>
        <p className="text-xs text-gray-500">{exercise.equipment}</p>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-300">
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-[#b6f000]" />
            {exercise.duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <Flame size={13} className="text-[#b6f000]" />
            {exercise.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5">
            <Star size={13} className="text-[#b6f000]" />
            {exercise.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-3">
        <button className="hidden rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white sm:block">
          View Details
        </button>
        <button className="flex items-center gap-1.5 rounded-full bg-[#c6f700] px-4 py-1.5 text-xs font-semibold text-black">
          <Check size={13} />
          <span className="hidden sm:inline">Mark as Done</span>
        </button>
        <button className="text-gray-500">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default SaveCardPage;
