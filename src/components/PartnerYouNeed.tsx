"use client";

import React from "react";

const PartnerYouNeed = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[30vh] md:min-h-[40vh] w-full overflow-hidden px-4 sm:px-6">

      <h1
        className="absolute tracking-wider text-[25vw] sm:text-[24vw] md:text-[20vw] font-extrabold text-transparent stroke-text select-none leading-none "
        aria-hidden="true"
      >
        Valnee
      </h1>

      <div className="relative sm:-top-20 md:-top-15 -top-10 z-10 text-center px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
          The{" "}
          <span className="font-[lobster] text-[#79FFFF] font-normal">
            Partner
          </span>{" "}
          You Actually Need
        </h2>
      </div>

    </section>
  );
};

export default PartnerYouNeed;
