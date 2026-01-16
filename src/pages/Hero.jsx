import React from "react";
import HeroCard from "../components/HeroCard";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image / Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.webm"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Build Your Child’s
            <span className="block text-green-400 mt-2">
              Strong Educational Foundation
            </span>
            with AL-Wataniya
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg opacity-90">
            A CBSE-pattern, English-medium school providing holistic education
            in an Islamic environment with modern learning methods.
          </p>

          {/* Trust Points */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-blue-300">
            <span>✔ Government Registered</span>
            <span>✔ Safe & Hygienic Campus</span>
            <span>✔ Qualified Teachers</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition">
              Apply for Admission →
            </button>
            <button className="px-8 py-4 border border-green-400 text-green-300 rounded-full hover:bg-green-400 hover:text-black transition">
              View School Details
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <HeroCard head={'Pre-Nursery'} subHead={'Starting Classes'} />
            <HeroCard head={'Std-IV'} subHead={'Highest Grade'} />
            <HeroCard head={'CCTV'} subHead={'Full Surveillance'} />
            <HeroCard head={'AI Lab'} subHead={'Modern Learning'} />
            <HeroCard head={'Coming Soon'} subHead={'Matriculation'} />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
