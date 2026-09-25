import React from "react";

const ExerciseLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d0d]">
      <span className="loading loading-spinner text-success">
        Loading workouts…
      </span>
    </div>
  );
};

export default ExerciseLoading;
