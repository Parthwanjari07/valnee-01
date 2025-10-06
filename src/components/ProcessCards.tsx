"use client";

import React, { useEffect, useState } from "react";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Strategic Blueprinting",
    description:
      "We don't just ask what you want to build; we validate your vision. Through a targeted discovery session, we define the core problem, confirm market fit, and establish the metrics for success. We align on a single, powerful direction.",
  },
  {
    title: "Laser-Focused MVP Definition",
    description:
      "We translate your vision into a crystal-clear feature list, prioritizing only the essentials that drive your core business goal. You get a detailed, proven blueprint document that completely de-risks the build phase.",
  },
  {
    title: "Rapid, Quality-Driven Development",
    description:
      "Get to market faster without sacrificing quality. We execute in fast, focused sprints using clean, modular code and rigorous testing, ensuring every component is built for stability and future scale.",
  },
  {
    title: "Launch with Confidence & Scale",
    description:
      "Your production-ready MVP is delivered with a complete technical handoff and seamless deployment. We provide the essential post-launch monitoring and dedicated support you need to immediately start gathering feedback and prepping for your next growth phase.",
  },
];

export default function ProcessCards() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-[#000718] py-32 text-white">
      {/* Title */}
      <h2 className="mb-24 sticky top-20 sm:top-36 text-2xl sm:text-4xl font-semibold text-center z-20">
        Streamlining Every Step of Your{" "}
        <span className="italic text-gray-300">Founder Journey</span>
      </h2>

      <div className="relative w-full max-w-5xl px-6">
        {/* 🔵 Big blue background card */}
        <div className="sticky top-48 sm:top-64 inset-0 mx-auto w-full max-w-5xl h-[500px] rounded-3xl bg-gradient-to-b from-[#006AFF]  to-[#000718] pointer-events-none" />

        {/* Sticky cards */}
        {steps.map((step, i) => (
          <div
            key={i}
            style={{ top: `${i * 15 + (isMobile ? 200 : 280)}px` }}
            className="sticky mb-32 ml-0 sm:ml-10 max-w-4xl rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-14 shadow-[0_-8px_25px_rgba(0,0,0,0.6),0_8px_25px_rgba(0,0,0,0.6)] border border-white/10 z-10"
          >
            {/* Background frame (image) */}
            <div className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none bg-[url('/images/cardframe.png')] bg-cover bg-center" />

            {/* Content */}
            <div className="relative flex justify-center flex-col items-center align-middle text-center space-y-4 md:space-y-8">
              <div className="rounded-full border border-white/20 px-4 py-1 bg-[#030E2E] my-6 md:my-10 text-sm sm:text-base">
                Step {i + 1}
              </div>
              <div className="text-3xl md:text-5xl font-bold text-blue-400">
                {step.title}
              </div>
              <div className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-200">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
