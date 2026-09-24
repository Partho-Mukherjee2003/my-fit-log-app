"use client";
import React, { createContext, ReactNode, useState } from "react";
import type { ExercisesType } from "@/Types/ExercisesTypes";

interface ExerciseContextType {
  todaysPlan: ExercisesType[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<ExercisesType[]>>;
  saveLater: ExercisesType[];
  setSaveLater: React.Dispatch<React.SetStateAction<ExercisesType[]>>;
}
export const ExerciseContext = createContext<ExerciseContextType>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  saveLater: [],
  setSaveLater: () => {},
});

const ExerciseProvider = ({ children }: { children: ReactNode }) => {

  const [todaysPlan, setTodaysPlan] = useState<ExercisesType[]>([]);
  const [saveLater, setSaveLater] = useState<ExercisesType[]>([]);

  const sharedData: ExerciseContextType = {
    todaysPlan,
    setTodaysPlan,
    saveLater,
    setSaveLater,
  };

  return (
    <ExerciseContext.Provider value={sharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;
