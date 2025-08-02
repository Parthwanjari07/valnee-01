"use client";

import { Lightbulb, Stars, WandSparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-auto">
      {/* Video on bottom half */}
      <video
        className="absolute inset-0 w-full h-screen object-cover"
        src="/herobg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

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
      <div className="absolute w-full inset-0 h-1/3 z-10 pointer-events-none">
        <Image
          src="/images/sparkles.png"
          alt="sparkles"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
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
              <Image
                src="/images/titleEllipse2.png"
                alt="Title highlight 2"
                fill
                className="object-cover w-full h-full blur-[180px] mix-blend-lighten animate-pulse delay-200"
                priority
              />
            </div>
          </div>

          <Image
            src="/images/heroText.svg"
            alt="Empowering Your Business with Innovative Software Solutions"
            width={800}
            height={400}
            className="relative z-10"
            priority
          />
        </div>

        <p className="mt-6 max-w-2xl text-gray-300 text-lg">
          Custom-built digital solutions designed to scale your business,
          enhance user experience, and future-proof your tech
        </p>

        {/* Bottom text */}
        <div className="absolute bottom-4 left-4 text-gray-400 text-sm z-40">
          One-Stop Digital Innovation Partner
        </div>
        <div className="absolute bottom-4 right-4 text-gray-400 text-sm z-40">
          Valnee Solutions
        </div>
      </div>
    </section>
  );
}
