import Image from "next/image";
import React from "react";
import hero from "@/assets/banner.png";


const Banner = () => {
  return (
    <div className="py-6 px-4 sm:py-10">
      <div className="container mx-auto hero bg-[#1a1a1a] rounded-3xl   overflow-hidden">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-16 py-10 lg:py-16 px-6 lg:px-16 w-full">
          {/* Image */}
          <Image
            src={hero}
            width={400}
            height={400}
            alt="Fit banner picture"
            className="w-56 sm:w-72 lg:w-100 h-auto object-contain"
            priority
          />

          {/* Text content */}
          <div className="text-center lg:text-left flex-1">
            <p className="text-lime-400 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
              Workout Library
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold uppercase leading-tight text-white">
              Train With Intent. <br className="hidden lg:block" />
              Log Every Set.
            </h1>

            <p className="py-5 sm:py-6 text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a href="#library">
              <button className="cursor-pointer bg-lime-400 hover:bg-lime-300 text-black font-bold rounded-lg px-6 py-3 transition-colors">
                Browse Workouts
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
