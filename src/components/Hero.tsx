// src/components/Hero.tsx
"use client";

import Image from "next/image";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

export default function Hero() {

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#00020D]">
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
        <div className="relative z-40 flex flex-col items-center justify-center flex-1 w-full text-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 lg:py-36">
          <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap items-center justify-center max-w-full">
            {/* Main pill: avatars + text + embedded FAST chip */}
            <div className="relative inline-flex items-center gap-2 sm:gap-2 rounded-full border border-white bg-white shadow-lg px-2 py-0.5 sm:px-3 sm:py-1 overflow-hidden">
              {/* Static glow */}
              <span className="pointer-events-none absolute -inset-0.5 rounded-full bg-white opacity-20 blur-md" />
              {/* Pill-wide white shimmer overlay */}
              <span
                className="pointer-events-none absolute inset-0 rounded-full z-20"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.2) 60%, transparent 100%)",
                  animation: "sparkle-sweep-paused 5s linear 0s infinite",
                  width: "200%",
                  left: "-50%",
                  filter: "blur(0.8px)",
                  mixBlendMode: "normal",
                }}
              />

              <div className="relative z-10 flex -space-x-1.5 sm:-space-x-2">
                <Image src="https://framerusercontent.com/images/dRU460eX51GyZswEa8XXGmbpWII.png" alt="Founder avatar" width={20} height={20} className="h-3.5 w-3.5 sm:h-5 sm:w-5 rounded-full ring-1 sm:ring-2 ring-white object-cover" />
                <Image src="https://framerusercontent.com/images/mvtXROTJXMdy5P4OQiYu7M2M234.png" alt="Founder avatar" width={20} height={20} className="h-3.5 w-3.5 sm:h-5 sm:w-5 rounded-full ring-1 sm:ring-2 ring-white object-cover" />
                <Image src="https://framerusercontent.com/images/mDJYqZ2MM6QWu3XXMAIC4lRzFtw.png" alt="Founder avatar" width={20} height={20} className="h-3.5 w-3.5 sm:h-5 sm:w-5 rounded-full ring-1 sm:ring-2 ring-white object-cover" />
              </div>
              <span className="relative z-10 text-[10px] sm:text-[12px] leading-[1.3] font-light text-[#000000]">
                Trusted for a faster MVP.
              </span>

              {/* Embedded FAST chip with higher contrast */}
              <span className="relative z-10 inline-flex items-center rounded-full bg-white px-1.5 sm:px-2.5 py-[1px] sm:py-[2px] shadow ring-1 ring-black/10">
                <span className="text-[10px] sm:text-[12px]">⚡️</span>
                <span className="text-[10px] sm:text-[12px] italic text-[#031E2E]">FAST</span>
              </span>
            </div>
          </div>

          <div className="relative w-full max-w-5xl mx-auto flex justify-center">
            {/* Glowing effect SVG behind text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <Image
                src="/glowing effect.svg"
                alt="Glowing effect"
                width={800}
                height={400}
                className="w-full max-w-4xl h-auto opacity-100 brightness-150 contrast-125"
                priority
              />
            </div>
            
            <h1 className="relative z-10 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white" style={{ color: '#FFFFFF' }}>
              <span className="block sm:whitespace-nowrap">Stop Hiring <span className="font-[family-name:var(--font-lobster)]" style={{ fontWeight: 480 }}>Freelancers</span> Who <span className="inline-flex items-center gap-1 text-white/80">Disappear <Image src="/icons/emoji.svg" alt="emoji" width={48} height={48} className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /></span></span>
              <span className="block mt-2 sm:whitespace-nowrap">
                <span className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-2 gap-y-1 sm:gap-3">
                  <span 
                    className="inline-flex items-center justify-center px-4 sm:px-5 py-1 sm:py-1 bg-white rounded-3xl whitespace-nowrap"
                    style={{ 
                      transform: 'rotate(-2deg)',
                      fontFamily: 'var(--font-cal-sans)',
                      color: '#3FA9E0',
                      fontSize: 'clamp(1.5rem, 5vw, 3.25rem)',
                      fontWeight: 600,
                      lineHeight: '150%'
                    }}
                  >
                    Start Building
                  </span>
                  <span className="sm:whitespace-nowrap">With a Partner Who <span className="font-[family-name:var(--font-lobster)]" style={{ fontWeight: 480 }}>Delivers.</span></span>
                </span>
              </span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-8 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />
            </h1>
          </div>

          <p className="relative z-20 mt-14 max-w-4xl text-sm sm:text-base md:text-lg px-4" style={{ color: '#D1D5DB' }}>
            We translate your vision into a scalable, launch-ready MVP, so you can focus on building your <span className="font-semibold" style={{ color: '#FFFFFF' }}>business.</span>
          </p>
          <div className="relative z-20 mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none px-4">
            {/* Black primary button */}
{/* CTA Button */}
          <button 
            onClick={() => window.location.href = "/contact"}
            className="flex flex-row justify-center items-center gap-2 bg-white rounded-xl flex-none px-4 py-2.5 md:px-4 md:py-2.5 w-full sm:w-auto min-w-[218px] h-auto md:h-[56px] hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ease-out cursor-pointer group"
          >
            <span 
              className="text-black text-center text-lg md:text-xl leading-[150%] [font-family:var(--font-sf-pro)] group-hover:text-gray-800 transition-colors duration-300"
            >
              Talk to Founder
            </span>
            <div 
              className="flex items-center justify-center bg-black rounded-lg p-2.5 w-9 h-9 group-hover:bg-gray-800 group-hover:rotate-12 transition-all duration-300 ease-out"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-[-30deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out"
              >
                <path 
                  d="M2 8L14 8M14 8L8 2M14 8L8 14" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

            {/* Moving Border Button */}
            <MovingBorderButton
              as="a"
              href="https://mfaebogwihppaoyyclzs.supabase.co/storage/v1/object/public/brochure/Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="0.85rem"
              duration={3000}
              containerClassName="w-full sm:w-[218px] h-12 sm:h-[56px] hover:scale-110 transition-transform duration-300"
              className="bg-black border-white text-white font-medium"
              borderClassName="bg-[radial-gradient(white_40%,transparent_60%)]"
              aria-label="Download Brochure"
            >
              <div className="flex items-center justify-center gap-2 w-full h-full px-5 sm:px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                <span className="whitespace-nowrap">Download Brochure</span>
              </div>
            </MovingBorderButton>
          </div>
        </div>

        
        
      </div>
    </section>
  );
}
