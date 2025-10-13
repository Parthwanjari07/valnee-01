"use client";

import Image from "next/image";
import React from "react";
import { GradientCTAButton } from "./ui/gradient-cta-button";

export default function BuildNextBigThing() {
  return (
    <section className="relative w-full min-h-screen bg-[#000718] text-white px-4 sm:px-8 md:px-12 lg:px-20 py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full md:w-1/2 h-56 md:h-72 lg:h-100 max-w-3xl mb-12">
        <Image
          src="/images/keyboard.png"
          alt="Keyboard"
          fill
          className="rounded-2xl object-contain md:scale-130"
          priority
        />
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4">
        <span className="relative font-bold bg-gradient-to-b from-white via-blue-100 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]">
          Let’s Build Your Next Big Thing
        </span>
      </h2>
      <p className="text-white text-lg font-normal text-center max-w-2xl mb-8 leading-relaxed">
        Let’s schedule a free, no-obligation consultation to explore how we can
        help you achieve your goals.
      </p>

      <GradientCTAButton
        href="/contact"
        primaryLabel="Let's Build Your MVP"
        secondaryLabel="Let's connect"
        className="rounded-2xl w-full sm:w-auto"
        size="md"
        fullWidth
      />
    </section>
  );
}
