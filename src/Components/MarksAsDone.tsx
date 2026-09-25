"use client";
import React, { useState } from "react";
import { Check, PartyPopper } from "lucide-react";
import { toast } from "react-toastify";

type Props = {
  id?: string | number;
  name: string;
};

const MarksAsDone = ({  name }: Props) => {
  const [isDone, setIsDone] = useState(false);

  const handleMarkAsBtn = () => {
    if (isDone) return; // already done hole abar click e kaj korbe na

    setIsDone(true);

    toast.success(`🎉 Great job! You completed ${name}!`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <button
      onClick={handleMarkAsBtn}
      disabled={isDone}
      className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:flex-none sm:py-1.5 ${
        isDone
          ? "cursor-not-allowed bg-[#1c2a0a] text-[#b6f000]"
          : "cursor-pointer bg-[#c6f700] text-black"
      }`}
    >
      {isDone ? (
        <>
          <PartyPopper size={13} />
          Done
        </>
      ) : (
        <>
          <Check size={13} />
          Mark as Done
        </>
      )}
    </button>
  );
};

export default MarksAsDone;
