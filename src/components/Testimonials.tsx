"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
  return (
    <section className="relative w-full bg-[#00020D] py-20 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#00020D] via-[#00020D]/80 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl text-white font-bold mb-12">
          Testimonials
        </h2>

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            gap: "1.5rem",
            arrows: true,
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
                className="relative rounded-2xl p-6 min-h-[420px] h-[520px] flex flex-col justify-between
                bg-transparent border border-white/10
                shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                transition-all duration-300"
              >
                {/* Faint textGibberish background */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none select-none"
                  style={{
                    backgroundImage: 'url(/images/textGibberish.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.38
                  }}
                />
                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-md font-medium">
                  Testimonial
                </div>

                {/* Content */}
                <div className="relative z-10 mt-12">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {t.text}
                  </p>
                </div>

                {/* Semi-circle background */}
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-16"
                  style={{
                    backgroundImage: 'url(/images/semicircle.svg)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat'
                  }}
                />

                {/* Profile section */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-gray-700 rounded-lg p-3 mb-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="opacity-80"
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
    </section>
  );
}