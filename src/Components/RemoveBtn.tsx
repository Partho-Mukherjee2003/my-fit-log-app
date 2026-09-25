'use client'
import React, { useContext } from 'react';
import {  X } from "lucide-react";
import { ExerciseContext } from '@/Context/ExerciseContext';
import { toast } from 'react-toastify';


type Props = {
  id: string | number;
  name : string;
  type: "today" | "saved" | "done"
  isDone ?: boolean
};


const RemoveBtn = ({ id, type,name, }: Props) => {
  const {setTodaysPlan,setSaveLater} = useContext(ExerciseContext);

  const handleRemove = () =>{
    if (type === "today"){
      setTodaysPlan((prev) => prev.filter((exercise) => exercise.id !== id));
      toast.success("Successfuly remove from today's plan")
    }
    else if (type === 'done'){
      setTodaysPlan((prev) => prev.filter((exercise) => exercise.id !== id));
      toast.success(`🎉 Great job! You completed ${name}!`);

    }
    else{
      setSaveLater((prev) => prev.filter((exercise) => exercise.id !== id));
      toast.success("Successfuly remove from save list");

    }
  }

  return (
    <button
      onClick={()=>handleRemove()}
      aria-label="Remove"
      className="shrink-0 cursor-pointer p-1 text-gray-500 hover:text-gray-300"
    >
      <X size={16} />
    </button>
  );
};

export default RemoveBtn;
