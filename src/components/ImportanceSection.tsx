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

      <div className="relative flex flex-col md:flex-row w-full max-w-7xl bg-[#10182A]/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">

        <div className="flex-1 border-b md:border-b-0 md:border-r border-white/10 md:pt-15">
          <div className="p-6 sm:p-8 relative flex flex-col items-center md:items-start text-center md:text-left md:ml-15 ">
            <div className="absolute -z-1 md:-top-4 right-0 w-[180px] sm:w-[250px] md:w-[300px] opacity-90 pointer-events-none">
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
              className={`${lora.className} space-y-5 text-gray-300 sm:mb-8 text-sm sm:text-base`}
            >
              <li>“Poor quality code that needs a rewrite”</li>
              <li>“They disappear after the job is done”</li>
              <li>“Misaligned incentives on milestone payments”</li>
            </ul>

            <div className="relative w-20 sm:w-28 md:w-32 h-auto md:self-start mt-7 md:mt-7">
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
        <div className="flex-1">
          <div className="flex flex-col-reverse md:flex-col p-6 sm:p-8 relative items-center md:items-start text-center md:text-left md:ml-15">
            <div className="relative right-0 lg:-right-[50%] w-28 sm:w-40 md:w-44 h-auto mb-8 mt-5 md:mb-10">
              <Image
                src="/images/skull.svg"
                alt="ghost"
                width={180}
                height={200}
                className="object-contain scale-125 mx-auto md:mx-0"
              />
            </div>

            <div>
              <h3 className="text-[#4CD1F0] text-xl sm:text-2xl font-semibold mb-4">
                The Agency Trap
              </h3>
              <ul
                className={`${lora.className} space-y-5 text-gray-300 text-sm sm:text-base`}
              >
                <li>“Inflated billable hours”</li>
                <li>“Slow progress and poor communication”</li>
                <li>“Feeling like a hostage”</li>
              </ul>
            </div>
            <div className="absolute md:-bottom-10 -left-10 md:-left-10 w-[180px] sm:w-[250px] md:w-[300px] opacity-90 pointer-events-none -z-1">
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
