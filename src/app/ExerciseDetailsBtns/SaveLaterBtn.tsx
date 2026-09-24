"use client";
import React, { useContext } from "react";
import { Bookmark } from "lucide-react";
import type { ExercisesType } from "@/Types/ExercisesTypes";
import { ExerciseContext } from "@/Context/ExerciseContext";
import { toast } from "react-toastify";

const SaveLaterBtn = ({
  exerciseDetail,
}: {
  exerciseDetail: ExercisesType;
}) => {
  const exerciseProvider = useContext(ExerciseContext);
  if (!exerciseProvider) {
    throw new Error("TodaysPlanBtn must be used within an ExerciseProvider");
  }
  const { saveLater, setSaveLater } = exerciseProvider;
  const handleSaveLater = () => {
    const alreadyAdded = saveLater.some(
      (item) => item.id === exerciseDetail.id,
    );
    if (alreadyAdded === true) {
      toast.warning("This exercise is already saved ");
      return;
    }
    setSaveLater([...saveLater, exerciseDetail]);
    {
      toast.success("Successfully Saved exercise for later");
    }
  };
  console.log(saveLater);
  return (
    <button
      onClick={() => handleSaveLater()}
      className="flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 text-white font-semibold rounded-lg px-5 py-3 transition-colors"
    >
      <Bookmark size={18} />
      Save for later
    </button>
  );
};

export default SaveLaterBtn;
