// src/components/Hero.tsx
"use client";

import Image from "next/image";

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
        <div className="relative z-30 flex flex-col items-center justify-center flex-1 w-full text-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 lg:py-36">
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
                Trusted by 20+ visionary founders.
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
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <Image
                src="/glowing effect.svg"
                alt="Glowing effect"
                width={800}
                height={400}
                className="w-full max-w-4xl h-auto opacity-100 brightness-150 contrast-125"
                priority
              />
            </div>
            
            <h1 className="relative z-10 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white">
              <span className="block sm:whitespace-nowrap">Stop Hiring <span className="font-[family-name:var(--font-lobster)]">Freelancers</span> Who <span className="text-white/80">Disappear. 😑</span></span>
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
                  <span className="sm:whitespace-nowrap">With a Partner Who <span className="font-[family-name:var(--font-lobster)]">Delivers.</span></span>
                </span>
              </span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-2 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />
            </h1>
          </div>

          <p className="mt-6 max-w-4xl text-gray-300 text-sm sm:text-base md:text-lg px-4">
            We translate your vision into a scalable, launch-ready MVP, so you can focus on building your <span className="font-semibold text-white">business.</span>
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none px-4">
            {/* Black primary button */}
            <a
              href="/contact"
              className="w-full sm:w-[218px] inline-flex items-center justify-center gap-2 h-12 sm:h-[56px] px-5 sm:px-6 sm:whitespace-nowrap rounded-xl bg-black text-white font-medium shadow-sm border border-white/10 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Talk to Founder"
            >
             
              Talk to Founder
      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="0.5" width="36" height="36" rx="8" fill="black"/>
  <g transform="translate(18, 18.5) scale(1.7) translate(-18, -18.5)">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.8122 21.0254L19.846 20.7657L20.8153 17.1507L12.9839 21.6722L12.4839 20.8062L20.3153 16.2847L16.7 15.3167L16.9582 14.3501L22.2229 15.7607L20.8122 21.0254Z" fill="white"/>
  </g>
</svg>




            </a>

            {/* White secondary button with icon */}
            <a
              href="https://mfaebogwihppaoyyclzs.supabase.co/storage/v1/object/public/brochure/Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[218px] inline-flex items-center justify-center gap-2 h-12 sm:h-[56px] px-5 sm:px-6 sm:whitespace-nowrap rounded-xl bg-white text-black font-medium shadow-sm border border-black/10 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Download Brochure"
            >
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
              Download Brochure
            </a>
          </div>
        </div>

        
        
      </div>
    </section>
  );
}
