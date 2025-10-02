// src/components/Hero.tsx
"use client";

import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { GradientCTAButton } from "./ui/gradient-cta-button";

export default function Hero() {
  const words = ["Faster", "Launch-ready", "Investor-ready", "Scalable","Secure"];

  return (
    <section className="relative h-screen w-auto">
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
      <div className="absolute inset-0 flex flex-col items-center justify-around text-white z-20">
      <div className="relative z-30 flex flex-col items-center py-36 h-full text-center px-4">
        <div className="flex gap-2 mb-6 flex-wrap items-center text-center justify-around">
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

        <div className="relative w-fit mx-auto">
          <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-center text-transparent bg-clip-text bg-[linear-gradient(120deg,#f8fafc_0%,#cbd5f5_12%,#f1f5ff_25%,#6bc1ff_38%,#eef2ff_52%,#c7d2fe_66%,#f9fafb_82%,#94a3b8_100%)] drop-shadow-[0_12px_40px_rgba(59,130,246,0.25)]">
            <span className="pr-135 mt-12 flex flex-wrap items-center justify-center gap-3">
              <span className=" text-transparent bg-clip-text bg-[linear-gradient(120deg,#f8fafc_0%,#94a3b8_30%,#f8fafc_55%,#dbeafe_75%,#94a3b8_100%)]">
                Build
              </span>
              <span className="inline-flex w-[4ch] justify-center">
                <FlipWords
                  words={words}
                  className="w-full text-center font-semibold"
                  textClassName="text-transparent bg-clip-text bg-[linear-gradient(120deg,#f8fafc_0%,#cbd5f5_12%,#f1f5ff_25%,#6bc1ff_38%,#eef2ff_52%,#c7d2fe_66%,#f9fafb_82%,#94a3b8_100%)] drop-shadow-[0_12px_40px_rgba(59,130,246,0.25)]"
                />
              </span>
            </span>
            <span className="flex flex-wrap text-md  text-transparent bg-clip-text bg-[linear-gradient(105deg,#f8fafc_0%,#dbeafe_20%,#94a3b8_45%,#f1f5ff_65%,#94a3b8_88%,#f8fafc_100%)]">
              MVP&apos;s with
              <span className="relative ml-4 inline-flex flex-col items-center">
                <span className="block text-transparent bg-clip-text bg-[linear-gradient(105deg,#f8fafc_0%,#dbeafe_20%,#94a3b8_45%,#f1f5ff_65%,#94a3b8_88%,#f8fafc_100%)]">Valnee Solutions</span>
                <svg
                  className="pointer-events-none -mt-6 lg:-mt-8 mb-8 w-[100%] lg:w-[220%] max-w-[32rem]"
                  viewBox="0 0 280 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
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
            <span className="pointer-events-none absolute inset-x-0 -bottom-2 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />
          </h1>
        </div>

        <p className="mt-6 max-w-2xl text-gray-300 text-lg">
          Technical team for Non-tech Founders, Entrepreneurs and Businesses
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <GradientCTAButton
            href="/contact"
            primaryLabel="Talk to Founder"
            secondaryLabel="Let&apos;s build magic"
            className="rounded-2xl"
            size="sm"
          />
          <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="px-12 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Book a Call
            </span>
          </button>
        </div>
        </div>

        {/* Bottom text */}
        <div className="items-end">
        <div className="absolute bottom-4 left-4 text-gray-400 text-sm z-40">
          One-Stop Digital Innovation Partner
        </div>
        <div className="absolute bottom-4 right-4 text-gray-400 text-sm z-40">
          Valnee Solutions
        </div>
        </div>
      </div>
    </section>
  );
}
