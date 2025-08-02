"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Michael Rodriguez",
    title: "CEO",
    company: "Michlen&co.",
    text: "As a startup founder, i needed a quick way to build a professional-looking product. this component library was exactly what i needed. the documentation is clear, and the components are production-ready",
    avatar: "/images/avatar.png",
  },
  {
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechNova",
    text: "Great experience with the team. The delivery was smooth and the design exceeded expectations.",
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

  const goNext = () => {
    if (splideRef.current) {
      splideRef.current.go('+1');
    }
  };

  const goPrev = () => {
    if (splideRef.current) {
      splideRef.current.go('-1');
    }
  };
  return (
    <div className="h-full">
    <section className="relative w-full bg-[#00020D]">
    <div className="max-w-7xl mx-auto px-4 pt-20 z-20">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-[var(--font-sf-pro)] bg-gradient-to-b from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
          Valnee Builds Future-Ready Tech That Solves Real<br />
          Problems and Drives Business Forward.
        </h1>
    </div>
    </section>
    <section className="relative w-full h-full bg-[#00020D] py-20">
      {/* Background image with preserved top and bottom edges */}
      <div className="absolute inset-x-0 top-0 bottom-0 z-10 w-full h-full pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/testimonialsBg.svg"
            alt="Background pattern"
            width={2000}
            height={1000}
            className="w-full h-full"
            style={{ 
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              objectPosition: 'center'
            }}
            priority
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#00020D] via-[#00020D]/80 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="relative">
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              perPage: 3,
              gap: "1.5rem",
              arrows: false,
              pagination: false,
              breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1 },
              },
            }}
            className="z-20"
          >
            {testimonials.map((t, i) => (
              <SplideSlide key={i}>
              <div
                className="relative rounded-2xl p-8 min-h-[420px] h-[520px] flex flex-col 
                bg-[#00102A]/20 border border-[#ffffff]/6
                shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm
                transition-all duration-300"
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between' 
                }}
              >
                {/* Faint textGibberish background */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none select-none rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: 'url(/images/textGibberish.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.38
                  }}
                />
                
                {/* Testimonial SVG Badge instead of text */}
                <div className="absolute top-6 left-6 z-10">
                  <Image
                    src="/images/testimonial.svg"
                    alt="Testimonial"
                    width={150}
                    height={48}
                    className="opacity-90"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-20 mb-auto">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t.text}
                  </p>
                </div>

                {/* Semi-circle background - full width at bottom */}
                <div className="absolute bottom-0 left-0 w-full z-0">
                  <Image
                    src="/images/semicircle.svg"
                    alt="background decoration"
                    width={1000}
                    height={100}
                    className="w-full h-auto object-cover opacity-80"
                    style={{ 
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      objectPosition: 'bottom center'
                    }}
                  />
                </div>

                {/* Profile section */}
                <div className="relative z-10 flex flex-col items-center mt-auto mb-24">
                  <div className="bg-gray-700/70 rounded-lg p-3 mb-3 backdrop-blur-sm border border-gray-600/30">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="opacity-90"
                    />
                  </div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">
                    {t.company}, {t.title}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        </div>
        
        {/* Custom navigation arrows */}
        <div className="flex gap-4 justify-end mt-8">
          <button 
            onClick={goPrev}
            className="w-12 h-12 rounded-full bg-[#00102A]/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#00102A]/80 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={goNext}
            className="w-12 h-12 rounded-full bg-[#00102A]/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#00102A]/80 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}