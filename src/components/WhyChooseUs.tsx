"use client";

import Image from "next/image";
import PartnerYouNeed from "./PartnerYouNeed";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#000718] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-20 min-h-screen  overflow-hidden">
        <PartnerYouNeed/>
      <div className="flex justify-center items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 items-center">
        <div className="relative flex justify-center items-center mt-10 lg:mt-0 order-1 lg:order-2">
          <div className="relative w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] lg:w-[680px] lg:h-[680px]">
            {/* Background Glow Layers */}
            <Image
              src="/images/whyusleftbg.png"
              alt="Glowring background"
              fill
              className="object-contain opacity-40 scale-150 sm:scale-200"
            />

            <div className="absolute inset-0 w-full h-full opacity-40">
              <Image
                src="/images/whyusleftbg.png"
                alt="Decorative overlay"
                fill
                className="object-contain scale-150 sm:scale-200"
              />
            </div>

            {/* Glowing Ring */}
            <Image
              src="/images/glowring.png"
              alt="Glowing Ring"
              fill
              className="object-contain z-10"
            />

            {/* Floating Cards */}
            <div className="absolute top-1 sm:top-32 left-12 sm:left-20 bg-[url('/images/whyuscardtop.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg px-4 py-3 text-xs sm:text-sm max-w-[140px] sm:max-w-[200px] z-10">
              <h4 className="font-semibold text-sm sm:text-lg">
                Lorem ipsum
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-300 leading-snug">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>

            <div className="absolute bottom-16 sm:bottom-28 -left-8 sm:left-10 bg-[url('/images/whyuscardleft.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg px-4 py-3 text-xs sm:text-sm max-w-[140px] sm:max-w-[200px] z-10">
              <h4 className="font-semibold text-sm sm:text-lg">
                Lorem ipsum
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-300 leading-snug">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>

            <div className="absolute top-24 sm:top-72 right-0 sm:right-4 bg-[url('/images/whyuscardright.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg px-4 py-3 text-xs sm:text-sm max-w-[140px] sm:max-w-[200px] z-10">
              <h4 className="font-semibold text-sm sm:text-lg">
                Lorem ipsum
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-300 leading-snug">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
        </div>

        {/* LEFT SECTION (Text + Stats) */}
        <div className="relative space-y-8 order-2 lg:order-1">
          {/* Background Image (decorative) */}
          <div className="absolute inset-0 -left-32 sm:-left-40 md:-left-64 w-full h-full pointer-events-none opacity-30 md:opacity-60">
            <Image
              src="/images/whyusleftbg.png"
              alt="Why us background"
              fill
              className="object-contain scale-150 md:scale-200"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold z-10">
            Why choose Valnee Solutions?
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 z-10">
            Deliver intuitive, engaging mobile applications that your users will
            love. From native iOS and Android to cross-platform solutions, we
            create mobile experiences that are fast, user-friendly, and designed
            to become an indispensable part of your customers&apos; daily lives.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 mt-10">
            <div>
              <p className="text-xs sm:text-sm text-blue-400 border-t border-blue-400 pt-2 mb-2">
                Lorem ipsum dolor sit amet
              </p>
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
                38<span className="text-xl sm:text-2xl">%</span>
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-blue-400 border-t border-blue-400 pt-2 mb-2">
                Lorem ipsum dolor sit amet
              </p>
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
                40<span className="text-xl sm:text-2xl">%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
