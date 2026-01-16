import React from "react";

const HeroCard = ({ head, subHead }) => {
  if (subHead === "Matriculation") {
    return (
      <div className="relative bg-white/10 backdrop-blur rounded-xl py-6 px-4 text-center overflow-hidden">
        <span className="absolute top-0 right-0 text-[10px] font-semibold text-yellow-400 bg-yellow-400/15 px-3 py-1 rounded-bl-lg tracking-wide">
          Coming Soon
        </span>

        <p className="text-2xl font-bold text-green-400">Matriculation</p>
      </div>
    );
  }
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl py-4">
      <p className="text-2xl font-bold text-green-400">{head}</p>
      <p className="text-sm opacity-80">{subHead}</p>
    </div>
  );
};

export default HeroCard;
