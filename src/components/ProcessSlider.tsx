// src/components/ProcessSlider.tsx
"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Splide as SplideType } from "@splidejs/splide";

const slides = [
  { title: "Free Consultation", text: "We start with a no-strings-attached discovery session to understand your vision, challenges, and goals.", icon: "/icons/consultation.png" },
  { title: "Initial Quotation", text: "You get a transparent cost and timeline breakdown — no hidden surprises.", icon: "/icons/quotation.png" },
  { title: "1-Week POC", text: "We rapidly design & develop a functional prototype so you can see your idea in action before committing big.", icon: "/icons/poc.png" },
  { title: "MVP Development", text: "Our team builds your Minimum Viable Product with speed, precision, and scalability in mind.", icon: "/icons/mvp.png" },
  { title: "Client Testing", text: "You test. You explore. You break things. We gather your feedback to make it perfect.", icon: "/icons/scaling.png" },
  { title: "Iterative Refinement", text: "We fine-tune the product through agile sprints until it matches your vision and user needs.", icon: "/icons/testing.png" },
  { title: "Launch", text: "We deploy your product into the real world — fully functional and market-ready.", icon: "/icons/launch.png" },
  { title: "Post Launch Support", text: "Continuous monitoring, updates, and improvements to keep your product future-proof.", icon: "/icons/support.png" },
];

export default function ProcessSlider() {
  const mainSliderRef = useRef<SplideType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getRealIndex = (i: number) => {
    const n = slides.length;
    return ((i % n) + n) % n;
  };

  // move to target using the shortest direction
  const goToIndex = (target: number) => {
    const n = slides.length;
    const forward = (target - activeIndex + n) % n;
    const backward = (activeIndex - target + n) % n;
    if (forward === 0 || backward === 0) return;
    if (forward <= backward) mainSliderRef.current?.go(`+${forward}`);
    else mainSliderRef.current?.go(`-${backward}`);
  };

  const goNext = () => mainSliderRef.current?.go("+1");
  const goPrev = () => mainSliderRef.current?.go("-1");

  // depth/scale based on distance from active
  const cardStyle = (i: number) => {
    const n = slides.length;
    const right = (i - activeIndex + n) % n;
    const left = (activeIndex - i + n) % n;
    const isRight = right < left;
    const d = Math.min(right, left); // 0..n-1
    const level = Math.min(d, 3);    // clamp to 0..3

    const scale = [1, 0.92, 0.86, 0.80][level];
    const rot = (isRight ? 1 : -1) * [0, 6, 9, 11][level];
    const z = -60 * level;
    const y = 6 * level;

    return {
      transform: `translateZ(${z}px) translateY(${y}px) rotateY(${rot}deg) scale(${scale})`,
      transition: "transform 600ms cubic-bezier(0.22,1,0.36,1), opacity 600ms",
      willChange: "transform",
      opacity: [1, 0.9, 0.75, 0.6][level],
    } as React.CSSProperties;
  };

  return (
    <section className="relative w-full py-10">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Bento Card */}
        <div className="relative rounded-3xl border border-white/20 shadow-[0_0_20px_rgba(0,255,255,0.2)] backdrop-blur-md overflow-hidden min-h-[88vh] md:min-h-[84vh] sm:min-h-[70vh]">
          {/* Background */}
          <Image
            src="/images/bento-card.png"
            alt="Bento Background"
            fill
            className="object-cover opacity-90 pointer-events-none select-none"
          />

          {/* Top-left tile (keeps your bigger size) */}
          <div className="absolute top-6 left-6 z-20">
            <Image
              src="/images/bento-tile.png"
              alt="Bento Tile"
              width={250}
              height={96}
              className="opacity-90"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full p-6 md:p-10">
            {/* Center carousel with neighbors visible + smooth depth */}
            <div className="w-full perspective-[1200px] transform-gpu">
              <Splide
                ref={mainSliderRef}
                options={{
                  type: "loop",
                  focus: "center",
                  gap: "1.25rem",
                  arrows: false,
                  pagination: false,
                  speed: 650,
                  easing: "cubic-bezier(0.22,1,0.36,1)",
                  drag: true,
                  wheel: false,
                  // lock the slide box size -> prevents height jump
                  fixedWidth: 300,
                  fixedHeight: 300,
                  padding: { left: "2rem", right: "2rem" },
                  breakpoints: {
                    1280: { fixedWidth: 280, fixedHeight: 280, padding: { left: "1.5rem", right: "1.5rem" } },
                    1024: { fixedWidth: 260, fixedHeight: 260 },
                    640:  { fixedWidth: 240, fixedHeight: 240 },
                  },
                }}
                // update before and after move so scaling matches motion (no snap/jump)
                onMove={(_splide: SplideType, newIndex: number) => setActiveIndex(getRealIndex(newIndex))}
                onMoved={(splide: SplideType) => setActiveIndex(getRealIndex(splide.index))}
                className="relative w-full min-h-[340px] md:min-h-[380px] flex items-center justify-center"
              >
                {slides.map((slide, i) => (
                  <SplideSlide key={i} className="flex items-center justify-center">
                    <div
                      style={cardStyle(i)}
                      className="w-[250px] h-[250px] md:w-[250px] md:h-[250px] rounded-xl border border-white/50 shadow-[inset_0_0_15px_rgba(255,255,255,0.08)] bg-transparent backdrop-blur-sm flex flex-col items-center justify-center text-center px-5"
                    >
                      <div className="">
                        <Image src={slide.icon} alt={slide.title} width={82} height={82} />
                      </div>
                      <h3 className="text-white text-base md:text-md font-semibold mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-gray-300 text-xs md:text-sm">
                        {slide.text}
                      </p>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>

            {/* Arrows (normal behavior: left goes left, right goes right) */}
            <div className="flex justify-between w-fu   ll mt-6">
              <button
                onClick={goPrev}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white/20"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white/20"
              >
                <ChevronRight />
              </button>
            </div>

            {/* Timeline + bottom tiles (inside the card) */}
            <div className="w-full mt-10 relative pt-8">
              {/* Glowing horizontal line */}
              <div className="pointer-events-none absolute left-0 right-0 top-7 h-px bg-cyan-400/40 shadow-[0_0_14px_rgba(0,255,255,0.9)]"></div>

              <div className="flex justify-between items-start relative z-10">
                {slides.map((slide, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <Image
                      src="/images/timeline-circle.png"
                      alt="Step"
                      width={26}
                      height={26}
                      className="-mt-3 mb-2"
                    />
                    <button
                      onClick={() => goToIndex(i)}
                      className={`flex items-center justify-center rounded-lg transition-all ${
                        activeIndex === i
                          ? " bg-cyan-400/20"
                          : " hover:bg-white/10"
                      }`}
                    >
                      <Image src={slide.icon} alt={slide.title} width={40} height={40} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
