"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import VideoTestimonial from "./VideoTestimonial";

const testimonials = [
  {
    id: 1,
    name: "Anshika Agarwal",
    title: "Executive Director - Sci-Fi Systems & Solutions",
    logo: "/images/testimonial.png",
    message:
      "The final landing page was professional, on-brand, and easy to use. We appreciated your patience, commitment, and willingness to refine the design until it matched our vision, and we’d recommend your services with confidence.",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    title: "Founder - NovaLabs",
    logo: "/images/testimonial.png",
    message:
      "You brought our product vision to life seamlessly. The speed and clarity throughout the project were unmatched.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    title: "CEO - TechSphere",
    logo: "/images/testimonial.png",
    message:
      "From design to execution, everything was top-notch. A pleasure collaborating with a team that truly listens.",
  },
  {
    id: 4,
    name: "Aman Verma",
    title: "CTO - CloudGen",
    logo: "/images/testimonial.png",
    message:
      "We were impressed by the creativity and precision in every iteration. You exceeded expectations at every step.",
  },
];
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  const current = testimonials[index];

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-16 md:py-20 bg-[#0b1120]  bg-no-repeat text-white overflow-hidden">
      <div className="absolute -right-[40%] top-[5%] w-full h-1/2 opacity-90 z-10">
        <Image
          src="/images/videotestibg.svg"
          alt="Decorative overlay"
          fill
          className="object-contain"
        />
      </div>
      <div className="text-center mb-12 md:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-white max-w-3xl mx-auto tracking-wide">
          Trusted by{" "}
          <span className="text-cyan-400 font-thin font-[lobster]">
            Founders
          </span>{" "}
          Who Build Fast and Think Bigger
        </h2>
      </div>

      <VideoTestimonial />

      <div className="relative w-full max-w-5xl min-h-[550px] md:min-h-[450px] mx-auto px-4 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="relative w-full bg-[#0b1120] rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col justify-between shadow-2xl overflow-hidden"
          >
            <div className="absolute top-[40%] -left-[40%] w-full h-full opacity-100 pointer-events-none z-0">
              <Image
                src="/images/whyusleftbg.png"
                alt="Decorative glow left"
                fill
                className="object-contain scale-200"
              />
            </div>
            <div className="absolute -top-[20%] -right-[30%] w-full h-full opacity-100 pointer-events-none z-0">
              <Image
                src="/images/whyusleftbg.png"
                alt="Decorative glow right"
                fill
                className="object-contain scale-200"
              />
            </div>
            <div className="absolute -top-[20%] -right-[30%] w-full h-full opacity-100 pointer-events-none z-0">
              <Image
                src="/images/whyusleftbg.png"
                alt="Decorative glow right"
                fill
                className="object-contain scale-200"
              />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-6 md:mb-8">
              <div className="relative w-full md:w-1/3 flex-shrink-0 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                  <Image
                    src={current.logo}
                    alt={current.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 w-full md:w-2/3 md:pl-10">
                <div className="relative w-5 h-5 mb-4">
                  <Image
                    src="/images/quotes.svg"
                    alt="Quote icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {current.message}
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-4 w-full mt-4">
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-lg md:text-xl">
                  {current.name}
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  {current.title}
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-3 md:space-x-4">
                <button
                  onClick={() => paginate(-1)}
                  className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-white/5 hover:bg-white/20 transition duration-300 ease-in-out"
                >
                  <ChevronLeft
                    strokeWidth={2}
                    className="text-gray-300 w-6 h-6 md:w-8 md:h-8"
                  />
                </button>
                <span className="text-white text-base text-center w-24">
                  <span className="text-3xl md:text-4xl font-light text-gray-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-500 mx-1">/</span>
                  <span className="text-base md:text-lg text-gray-500">
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                </span>
                <button
                  onClick={() => paginate(1)}
                  className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-white/5 hover:bg-white/20 transition duration-300 ease-in-out"
                >
                  <ChevronRight
                    strokeWidth={2}
                    className="text-gray-300 w-6 h-6 md:w-8 md:h-8"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
