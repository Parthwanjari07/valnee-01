"use client";

import React from "react";
import Image from "next/image";
import { Lobster, Lora } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});
const lora = Lora({
  subsets: ["latin"],
  weight: "600",
});

const FreelancerAgencySection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#000718] text-white px-4 sm:px-6 md:px-10 py-20 overflow-hidden">
      {/* Top Right Glow Placeholder */}
      {/* <div className="absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[400px] opacity-60 pointer-events-none">
        <Image
          src="/images/whyusleftbg.png"
          alt="top-right-glow"
          width={400}
          height={400}
          className="object-contain scale-150 md:scale-200"
        />
      </div> */}

      {/* Bottom Left Glow Placeholder */}
      {/* <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[400px] opacity-80 pointer-events-none">
        <Image
          src="/images/whyusleftbg.png"
          alt="bottom-left-glow"
          width={400}
          height={400}
          className="object-contain scale-150 md:scale-200"
        />
      </div> */}

      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug mb-12 sm:mb-16 max-w-3xl">
        Your Idea is Too Important for{" "}
        <span className={`${lobster.className} text-[#4CD1F0]`}>
          Freelancer Roulette
        </span>{" "}
        or{" "}
        <span className={`${lobster.className} text-[#F3A83B]`}>
          Agency Bloat.
        </span>
      </h2>

      {/* Combined Container */}
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-[#10182A]/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
        {/* Left Section - Freelancer Gamble */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-white/10">
          <div className="p-6 sm:p-8 relative flex flex-col items-center md:items-start text-center md:text-left">
            <div className="absolute top-4 right-0 w-[180px] sm:w-[250px] md:w-[300px] opacity-90 pointer-events-none">
              <Image
                src="/images/cardtop.png"
                alt="top-right-glow"
                width={300}
                height={300}
                className="object-contain scale-125 md:scale-150 filter blur-lg drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              />
            </div>

            <h3 className="text-[#4CD1F0] mt-6 sm:mt-10 text-xl sm:text-2xl font-semibold mb-4">
              The Freelancer Gamble
            </h3>
            <ul
              className={`${lora.className} space-y-3 text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base`}
            >
              <li>“Poor quality code that needs a rewrite”</li>
              <li>“They disappear after the job is done”</li>
              <li>“Misaligned incentives on milestone payments”</li>
            </ul>

            {/* Dice SVG Placeholder */}
            <div className="relative w-20 sm:w-28 md:w-32 h-auto md:self-start">
              <Image
                src="/images/dice.svg"
                alt="dice"
                width={128}
                height={128}
                className="object-contain mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Agency Trap */}
        <div className="flex-1">
          <div className="flex flex-col-reverse md:flex-col p-6 sm:p-8 relative items-center md:items-start text-center md:text-left">
            {/* Ghost SVG Placeholder */}
            <div className="relative w-28 sm:w-40 md:w-44 h-auto mb-8 md:mb-10">
              <Image
                src="/images/skull.svg"
                alt="ghost"
                width={180}
                height={200}
                className="object-contain mx-auto md:mx-0"
              />
            </div>

            <div>
              <h3 className="text-[#4CD1F0] text-xl sm:text-2xl font-semibold mb-4">
                The Agency Trap
              </h3>
              <ul
                className={`${lora.className} space-y-3 text-gray-300 text-sm sm:text-base`}
              >
                <li>“Inflated billable hours”</li>
                <li>“Slow progress and poor communication”</li>
                <li>“Feeling like a hostage”</li>
              </ul>
            </div>
            <div className="absolute bottom-8 left-30 w-[180px] sm:w-[250px] md:w-[300px] opacity-90 pointer-events-none">
              <Image
                src="/images/cardbottom.png"
                alt="top-right-glow"
                width={300}
                height={300}
                className="object-contain scale-125 md:scale-150 filter blur-lg drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerAgencySection;
