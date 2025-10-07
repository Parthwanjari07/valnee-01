// src/components/Hero.tsx
"use client";

import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { GradientCTAButton } from "./ui/gradient-cta-button";

export default function Hero() {
  const words = ["Faster", "Launch-ready", "Investor-ready", "Scalable","Secure"];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video on bottom half */}
      {/* <video
        className="absolute inset-0 bottom-0 w-full h-screen lg:h-auto object-cover"
        src="/herobg.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}

      {/* Sparkles */}
      {/* <div className="absolute w-full inset-0 h-1/3 z-10 pointer-events-none">
        <Image
          src="/images/sparkles.png"
          alt="sparkles"
          fill
          className="object-cover object-top"
          priority
        />
      </div> */}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-between text-white z-20">
        <div className="relative z-30 flex flex-col items-center justify-center flex-1 w-full text-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 lg:py-36">
          <div className="flex gap-1 mb-4 sm:mb-6 flex-wrap items-center text-center justify-center max-w-full">
            {/* <span className="bg-white/10 text-white px-3 py-1 rounded-full inline-flex text-sm border border-white/20">
              <Stars className="mr-1 w-5 h-5" />
              AI-Powered
            </span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full inline-flex text-sm border border-white/20">
              <Lightbulb className="mr-1 w-5 h-5" />
              Smart solution
            </span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full inline-flex text-sm border border-white/20">
              <WandSparkles className="mr-1 w-5 h-5" />
              Customised
            </span> */}
          </div>

          <div className="relative w-full max-w-7xl mx-auto flex justify-center">
            <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-transparent bg-clip-text bg-[linear-gradient(120deg,#f8fafc_0%,#cbd5f5_12%,#f1f5ff_25%,#6bc1ff_38%,#eef2ff_52%,#c7d2fe_66%,#f9fafb_82%,#94a3b8_100%)] drop-shadow-[0_12px_40px_rgba(59,130,246,0.25)]">
              <span className="mt-6 flex flex-wrap items-baseline justify-start gap-2 sm:gap-3">
                <span className="text-transparent bg-clip-text bg-[linear-gradient(120deg,#f8fafc_0%,#94a3b8_30%,#f8fafc_55%,#dbeafe_75%,#94a3b8_100%)]">
                  Build
                </span>
                <span className="inline-flex min-w-[150px] sm:min-w-[200px] md:min-w-[250px] justify-center">
                  <FlipWords
                    words={words}
                    className="w-full text-center font-semibold"
                    textClassName="text-transparent bg-clip-text bg-[linear-gradient(120deg,#f8fafc_0%,#cbd5f5_12%,#f1f5ff_25%,#6bc1ff_38%,#eef2ff_52%,#c7d2fe_66%,#f9fafb_82%,#94a3b8_100%)] drop-shadow-[0_12px_40px_rgba(59,130,246,0.25)]"
                  />
                </span>
              </span>
              <span className="flex flex-col items-start justify-start mt-2">
                <span className="flex flex-wrap items-baseline justify-start gap-2 sm:gap-3 text-transparent bg-clip-text bg-[linear-gradient(105deg,#f8fafc_0%,#dbeafe_20%,#94a3b8_45%,#f1f5ff_65%,#94a3b8_88%,#f8fafc_100%)]">
                  MVP&apos;s with
                  <span className="relative inline-flex flex-col items-start text-transparent bg-clip-text bg-[linear-gradient(105deg,#f8fafc_0%,#dbeafe_20%,#94a3b8_45%,#f1f5ff_65%,#94a3b8_88%,#f8fafc_100%)]">
                    Valnee Solutions
                    <svg
                      className="pointer-events-none -mt-3 sm:-mt-4 md:-mt-5 lg:-mt-6 xl:-mt-8 mb-4 sm:mb-6 md:mb-8 w-[130%] sm:w-[150%] md:w-[180%] lg:w-[220%] max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem]"
                      viewBox="0 0 280 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        <linearGradient
                          id="valneeUnderlineGradient"
                          x1="0"
                          y1="24"
                          x2="280"
                          y2="24"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M18 26 C 120 12 160 12 262 26"
                        stroke="url(#valneeUnderlineGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-2 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />
            </h1>
          </div>

          <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg px-4">
            Technical team for Non-tech Founders, Entrepreneurs and Businesses
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none px-4">
            <GradientCTAButton
              href="/contact"
              primaryLabel="Talk to Founder"
              secondaryLabel="Let&apos;s build magic"
              className="rounded-2xl w-full sm:w-auto"
              size="md"
              fullWidth
            />
            <button className="relative inline-flex h-12 sm:h-17 w-full sm:w-auto overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="px-8 sm:px-17 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 py-1 text-sm sm:text-base font-medium text-white backdrop-blur-3xl">
                Book a Call
              </span>
            </button>
          </div>
        </div>

        {/* Bottom text */}
        <div className="w-full flex items-end justify-between px-4 sm:px-6 md:px-8 pb-4 z-40">
          <div className="text-gray-400 text-xs sm:text-sm">
            One-Stop Digital Innovation Partner
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">
            Valnee Solutions
          </div>
        </div>
      </div>
    </section>
  );
}
