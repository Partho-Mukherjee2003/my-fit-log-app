"use client";
import React, { useContext } from "react";
import { Calendar } from "lucide-react";
import type { ExercisesType } from "@/Types/ExercisesTypes";
import { ExerciseContext } from "@/Context/ExerciseContext";
import { toast } from "react-toastify";

const TodaysPlanBtn = ({
  exerciseDetail,
}: {
  exerciseDetail: ExercisesType;
}) => {
  const exerciseProvider = useContext(ExerciseContext);
  if (!exerciseProvider) {
    throw new Error("TodaysPlanBtn must be used within an ExerciseProvider");
  }
  const { todaysPlan, setTodaysPlan } = exerciseProvider;
  const handleTodaysPlan = () => {
    const alreadyAdded = todaysPlan.some(item => item.id === exerciseDetail.id)
    if (alreadyAdded === true) {
      toast.warning("This exercise is already added to today's plan");
      return;
    }
    setTodaysPlan([...todaysPlan, exerciseDetail]);
    {toast.success("Successfully added this exercise today's plan");}

  };
  console.log(todaysPlan)
  return (
    <button
      onClick={() => handleTodaysPlan()}
      className="pointer flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-lg px-5 py-3 transition-colors"
    >
      <Calendar size={18} />
      Add to today&apos;s plan
    </button>
  );
};

export default TodaysPlanBtn;
