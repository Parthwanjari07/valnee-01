"use client";

import React from "react";

const PartnerYouNeed = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[40vh] w-full overflow-hidden px-4 sm:px-6">
      {/* Background Text */}
      <h1
        className="absolute text-[30vw] sm:text-[24vw] md:text-[18vw] font-extrabold text-transparent stroke-text select-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        Valnee
      </h1>

      {/* Foreground Heading */}
      <div className="relative md:-top-30 -top-10 z-10 text-center px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
          The{" "}
          <span className="font-[lobster] text-white font-normal">
            Partner
          </span>{" "}
          You Actually Need
        </h2>
      </div>

    </section>
  );
};

export default PartnerYouNeed;
