"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Step {
  title: string;
  heading: string;
  text: string;
}

const steps: Step[] = [
  {
    title: "Step 1",
    heading: "Strategic Blueprinting",
    text: "We don't just ask what you want to build; we validate your vision. Through a targeted discovery session, we define the core problem, confirm market fit, and establish the metrics for success. We align on a single, powerful direction.",
  },
  {
    title: "Step 2",
    heading: "Laser-Focused MVP Definition",
    text: "We translate your vision into a crystal-clear feature list, prioritizing only the essentials that drive your core business goal. You get a detailed, proven blueprint document that completely de-risks the build phase.",
  },
  {
    title: "Step 3",
    heading: "Rapid, Quality-Driven Development",
    text: "Get to market faster without sacrificing quality. We execute in fast, focused sprints using clean, modular code and rigorous testing, ensuring every component is built for stability and future scale.",
  },
  {
    title: "Step 4",
    heading: "Launch with Confidence & Scale",
    text: "Your production-ready MVP is delivered with a complete technical handoff and seamless deployment. We provide the essential post-launch monitoring and dedicated support you need to immediately start gathering feedback and prepping for your next growth phase.",
  },
];

export default function StackScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const placeholderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const GAP = 10;

      gsap.set(cards, { yPercent: 150, opacity: 0.6 });
      gsap.set(placeholderRef.current, { opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=4000",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            yPercent: (i * GAP) / 2,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            onStart: () => {
              card.style.zIndex = `${100 + i}`;
            },
          },
          i * 0.8
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-[#000718] text-white overflow-hidden pb-40">
      <div
        ref={containerRef}
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <div ref={headingRef} className="absolute top-24 2xl:top-32 text-center z-[999]">
          <h2 className="text-3xl px-5 md:text-4xl font-semibold">
            Streamlining Every Step of Your{" "}
            <span className="italic text-blue-400">Founder Journey</span>
          </h2>
        </div>
        <div className="relative mt-20 md:mt-24 flex justify-center w-full">
          <div
            ref={placeholderRef}
            className="relative bg-gradient-to-b from-[#006AFF] to-[#000718] w-full max-w-5xl h-[500px] rounded-3xl flex justify-center items-center mb-5"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el!;
                }}
                className="absolute max-w-5xl inset-3 flex flex-col justify-center items-center rounded-3xl overflow-hidden shadow-xl border border-blue-800/40 py-10 md:p-10 px-5 md:px-20"
              >
                <div className="absolute inset-0 bg-[#000d1f] bg-opacity-95 rounded-3xl"></div>
                <div className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none bg-[url('/images/cardframe.png')] bg-cover bg-center" />

                <div className="relative flex flex-col items-center text-center space-y-4 md:space-y-8">
                  <div className="rounded-full border border-white/20 px-4 py-1 bg-[#030E2E] my-6 md:my-10 text-sm sm:text-base">
                    {step.title}
                  </div>
                  <div className="text-3xl md:text-5xl font-bold text-blue-400">
                    {step.heading}
                  </div>
                  <div className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-200">
                    {step.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
