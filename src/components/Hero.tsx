// src/components/Hero.tsx
"use client";

import { ArrowUpRight, Lightbulb, Stars, WandSparkles } from "lucide-react";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";

export default function Hero() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <section className="relative h-screen bg-[#00020D] w-auto">
      {/* Video on bottom half */}
      {/* <video
        className="absolute inset-0 bottom-0 w-full h-screen lg:h-auto object-cover"
        src="/herobg.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}

      {/* Blend Overlay */}
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        <Image
          src="/images/heroBlend.png"
          alt="blend overlay"
          fill
          className="object-cover mix-blend-soft-light opacity-60"
          priority
        />
      </div>

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
          <span className="bg-white/10 text-white px-3 py-1 rounded-full inline-flex text-sm border border-white/20">
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
          </span>
        </div>

        <div className="relative w-fit mx-auto">
          {/* Morphing Ellipse Effect merged with text */}
          <div className="absolute inset-0 flex items-stretch z-0 pointer-events-none select-none">
            <div className="relative w-full h-full">
              <Image
                src="/images/titleEllipse1.png"
                alt="Title highlight 1"
                fill
                className="object-cover w-full h-full opacity-60 blur-[180px] mix-blend-lighten animate-pulse"
                priority
              />
              
            </div>
          </div>
          <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-center text-transparent bg-clip-text bg-[linear-gradient(120deg,#f8fafc_0%,#cbd5f5_12%,#f1f5ff_25%,#6bc1ff_38%,#eef2ff_52%,#c7d2fe_66%,#f9fafb_82%,#94a3b8_100%)] drop-shadow-[0_12px_40px_rgba(59,130,246,0.25)]">
            <span className="pr-24 flex flex-wrap items-center justify-center gap-3">
              <span className=" text-transparent bg-clip-text bg-[linear-gradient(120deg,#f8fafc_0%,#94a3b8_30%,#f8fafc_55%,#dbeafe_75%,#94a3b8_100%)]">
                Build
              </span>
              <span className="inline-flex w-[4ch] justify-center">
                <FlipWords
                  words={words}
                  className="w-full text-center font-semibold text-transparent bg-clip-text bg-[linear-gradient(120deg,#f8fafc_0%,#cbd5f5_12%,#f1f5ff_25%,#6bc1ff_38%,#eef2ff_52%,#c7d2fe_66%,#f9fafb_82%,#94a3b8_100%)] drop-shadow-[0_12px_40px_rgba(59,130,246,0.25)]"
                />
              </span>
            </span>
            <span className="block text-transparent bg-clip-text bg-[linear-gradient(105deg,#f8fafc_0%,#dbeafe_20%,#94a3b8_45%,#f1f5ff_65%,#94a3b8_88%,#f8fafc_100%)]">
              experiences with Valnee Solutions
            </span>
            <span className="pointer-events-none absolute inset-x-0 -bottom-2 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />
          </h1>
        </div>

        <p className="mt-6 max-w-2xl text-gray-300 text-lg">
          Technical team for Non-tech Founders, Entrepreneurs and Buisnesses
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          >
            <span className="absolute inset-0 z-10 rounded-full bg-[#04091b]/90 transition-colors duration-700 group-hover:bg-[#0f172a]/60" />
            <span className="pointer-events-none absolute inset-0 z-30 translate-x-[-120%] bg-white/35 transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
            <span className="pointer-events-none absolute -inset-5 z-0 rounded-full opacity-0 blur-[90px] bg-[radial-gradient(circle_at_30%_20%,rgba(76,124,255,0.55),transparent_65%)] transition-opacity duration-700 group-hover:opacity-90" />
            <span className="relative z-20 inline-flex items-center gap-4 rounded-full bg-[linear-gradient(135deg,#1f4fe6,#4d7dff)] px-11 py-3 text-base font-semibold text-white shadow-[0_26px_70px_rgba(32,92,230,0.5)] transition-all duration-500 group-hover:scale-[1.05] group-hover:shadow-[0_36px_115px_rgba(99,140,255,0.65)]">
              <span className="pointer-events-none absolute inset-0 rounded-full border border-white/35 opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
              <span className="pointer-events-none absolute inset-x-3 top-0 h-1/2 rounded-full bg-white/60 opacity-90 blur-md mix-blend-screen" />
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.55)_55%,transparent_80%)] opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[130%] group-hover:opacity-100" />
              <span className="relative z-10 flex flex-col overflow-hidden text-left leading-tight">
                <span className="transition-transform duration-300 group-hover:-translate-y-full">Talk to Founder</span>
                <span className="absolute left-0 top-full text-xs font-medium text-white/70 transition-transform duration-300 group-hover:-translate-y-full group-hover:delay-100">
                  Let&apos;s build magic
                </span>
              </span>
              <span className="relative z-10 ml-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#1f4fe6] transition-all duration-500 group-hover:translate-x-2.5 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:shadow-[0_14px_45px_rgba(108,150,255,0.6)]">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                <span className="pointer-events-none absolute inset-0 rounded-full border border-white/60 group-hover:border-transparent" />
              </span>
            </span>
          </a>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="px-12 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
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
