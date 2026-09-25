import React from "react";
import { Check, Clock, Flame, Star } from "lucide-react";
import type { ExercisesType } from "@/Types/ExercisesTypes";
import Image from "next/image";
import Link from "next/link";
import RemoveBtn from "@/Components/RemoveBtn";

const SaveCardPage = ({ exercise }: { exercise: ExercisesType }) => {
  return (
    <div className="my-3 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0f1218] p-3 sm:flex-row sm:items-center sm:gap-5">
      {/* Image + Info */}
      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5">
        <Image
          width={400}
          height={500}
          src={exercise.image}
          alt={exercise.name}
          className="h-16 w-24 shrink-0 rounded-xl object-cover sm:h-17.5 sm:w-31.25"
        />

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-bold uppercase tracking-wide text-white sm:text-base">
            {exercise.name}
          </h3>
          <p className="truncate text-xs text-gray-500">{exercise.equipment}</p>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-300 sm:gap-x-4">
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
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <Link
          href={`/Exercises/${exercise.id}`}
          className="flex-1 cursor-pointer rounded-full border border-white/20 px-4 py-2 text-center text-xs font-medium text-white sm:flex-none sm:py-1.5"
        >
          View Details
        </Link>
        <button className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#c6f700] px-4 py-2 text-xs font-semibold text-black sm:flex-none sm:py-1.5">
          <Check size={13} />
          Mark as Done
        </button>
        <RemoveBtn id={exercise.id} type="saved" name={exercise.name} />
      </div>
    </div>
  );
};

export default SaveCardPage;
