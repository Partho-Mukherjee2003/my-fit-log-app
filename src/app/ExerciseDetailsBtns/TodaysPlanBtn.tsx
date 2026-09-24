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
      const alreadyAdded = todaysPlan.some(
        (item) => item.id === exerciseDetail.id,
      );

  const handleTodaysPlan = () => {

    if (alreadyAdded ){
      toast.warning("This exercise is already Added today's plan ");
      return;
    }
    setTodaysPlan([...todaysPlan, exerciseDetail]);
    {toast.success("Successfully added this exercise today's plan");}

  };
  console.log(todaysPlan)
  return (
    <button
      onClick={() => handleTodaysPlan()}
      className={
        "pointer flex items-center justify-center gap-2 alreadyAdded? bg-lime-400 text-black hover:bg-lime-300  font-bold rounded-lg px-5 py-3 transition-colors"
      }
    >
      <Calendar size={18} />
      {alreadyAdded ? "Already added" : "Add to today's plan"}
    </button>
  );
};

export default TodaysPlanBtn;
