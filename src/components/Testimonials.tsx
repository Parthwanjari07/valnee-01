// src/components/Testimonials.tsx

"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const testimonials = [
  {
    name: "Vinay Israni",
    title: "Student",
    company: "Mumbai University",
    text: "I had the opportunity to work with Parth, and he built an AI Resume Analyzer project for me. This project was a great help, and I was able to include it in my college portfolio. His support and technical skills made a big difference in completing my work successfully.",
    avatar: "/images/avatar.png",
  },
  {
    name: "Anshika Agrawal",
    title: "Executive Director",
    company: "Sci-fi Systems and Solutions",
    text: "The final landing page was professional, on-brand, and easy to use. We appreciated your patience, commitment, and willingness to refine the design until it matched our vision, and we'd recommend your services with confidence.",
    avatar: "/images/avatar.png",
  },
  {
    name: "Alex Chen",
    title: "Founder",
    company: "NextEdge",
    text: "The tools and support were exactly what we needed. Fantastic collaboration and solid results.",
    avatar: "/images/avatar.png",
  },
];

export default function Testimonials() {
  const splideRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Ensure autoplay starts when component mounts
    if (splideRef.current && splideRef.current.splide) {
      const autoplay = splideRef.current.splide.Components.Autoplay;
      if (autoplay) {
        autoplay.play();
      }
    }
  }, []);

  const goNext = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go('+1');
    }
  };

  const goPrev = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go('-1');
    }
  };

  const toggleAutoplay = () => {
    if (splideRef.current && splideRef.current.splide) {
      const autoplay = splideRef.current.splide.Components.Autoplay;
      if (autoplay) {
        if (isPlaying) {
          autoplay.pause();
        } else {
          autoplay.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const goToSlide = (index: number) => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go(index);
    }
  };

  return (
    <>
      <section className="relative w-full bg-[#00020d]">
        <div className="max-w-7xl mx-auto px-4 pt-20 z-20">
          <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-[var(--font-sf-pro)] bg-gradient-to-b from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
            Valnee Builds Future-Ready Tech That Solves Real<br />
            Problems and Drives Business Forward.
          </h1>
        </div>
      </section>

      <section className="relative w-full py-20 bg-[#00020d]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cool Stuff With
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="relative">
            <Splide
              ref={splideRef}
              options={{
                type: "loop",
                perPage: 2,
                gap: "2rem",
                arrows: false,
                pagination: false,
                autoplay: true,
                interval: 3000,
                pauseOnHover: true,
                pauseOnFocus: true,
                speed: 800,
                easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                breakpoints: {
                  1024: { perPage: 2 },
                  768: { perPage: 1 },
                },
              }}
              onMove={(splide: any) => setCurrentSlide(splide.index)}
              className="z-20"
            >
              {testimonials.map((t, i) => (
                <SplideSlide key={i}>
                  <div className="bg-[#0A1628]/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 min-h-[320px]">
                    {/* Profile section at top */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative flex-shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={64}
                          height={64}
                          className="rounded-full"
                        />
                        {/* Verified badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#00091A]">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {t.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {t.title} @ {t.company}
                        </p>
                      </div>
                    </div>

                    {/* Additional info */}
                    <p className="text-gray-500 text-xs mb-4 border-b border-gray-800 pb-4">
                      Previously Co-Founder and CEO • Speaker • Community Builder
                    </p>

                    {/* Testimonial text */}
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {t.text}
                    </p>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          {/* Custom navigation controls */}
          <div className="flex flex-col items-center gap-6 mt-12">
            {/* Progress indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'w-8 bg-blue-500' 
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-4 justify-center">
              <button 
                onClick={goPrev}
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all bg-[#0A1628]/60 border border-blue-900/30 backdrop-blur-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={toggleAutoplay}
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all bg-[#0A1628]/60 border border-blue-900/30 backdrop-blur-sm"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              
              <button 
                onClick={goNext}
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all bg-[#0A1628]/60 border border-blue-900/30 backdrop-blur-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}