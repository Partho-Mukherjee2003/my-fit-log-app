import Image from "next/image";
import React from "react";
import { Clock, Flame, Star } from "lucide-react";

export interface ExercisesType {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

const ExerciseCard = ({ exercise }: { exercise: ExercisesType }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden max-w-sm w-full shadow-lg">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={exercise.image}
          alt={exercise.name}
          
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Muscle group badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {exercise.muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-white font-extrabold text-lg uppercase leading-snug">
          {exercise.name}
        </h2>

        {/* Equipment */}
        <p className="text-gray-400 text-sm mt-1">{exercise.equipment}</p>

        {/* Divider */}
        <div className="border-t border-gray-700 my-3" />

        {/* Stats row */}
        <div className="flex items-center justify-between text-gray-300 text-sm">
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-gray-400" />
            <span>{exercise.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame size={16} className="text-gray-400" />
            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span>{exercise.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
