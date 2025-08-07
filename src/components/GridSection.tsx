"use client";

import React from "react";
import Image from "next/image";
import "reactflow/dist/style.css";
import GlowingKeyboard from "./GlowingKeyboard";

export default function GridSection() {
  return (
    <section className="relative w-full bg-[#00020D] text-white py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 auto-rows-fr">
          {/* Tile 1 - Main CTA */}
          <div className="lg:col-span-6 bg-center rounded-xl bg-no-repeat shadow-lg flex flex-col min-h-[390px] items-center justify-center p-6 lg:p-8 overflow-hidden"
            style={{
              backgroundImage: "url(/images/tile1-bg.png)",
              backgroundSize: "cover",
            }}
          >
            <Image
              src="/images/keyboard.png"
              alt="Keyboard"
              width={500}
              height={250}
              className="mb-6 flex md:hidden max-w-full h-auto"
            />
            <div className="p-4 hidden md:flex rounded-xl bg-[#222c3a]/30 w-fit mb-4">
              <GlowingKeyboard
                glowColor="#7FDBFF"
                highlight={[
                  {
                    startRow: 2,
                    startIndex: 2,
                    text: ["A", "U", "T", "O", "M", "A", "T", "E"],
                  },
                  {
                    startRow: 3,
                    startIndex: 3,
                    text: ["W", "I", "T", "H"],
                  },
                  {
                    startRow: 4,
                    startIndex: 2,
                    text: ["V", "A", "L", "N", "E", "E"]
                  }
                ]}
              />
            </div>
            <h2 className="font-sans font-normal text-xl md:text-2xl mb-4 text-center" 
              style={{ fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif" }}>
              Let&apos;s Build Your Next Big Thing
            </h2>
            <p className="font-sans font-normal text-base text-white/80 text-center max-w-md" 
              style={{ fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif" }}>
              Let&apos;s schedule a free, no-obligation call to discuss your project and see how we can help bring your ideas to life.
            </p>
          </div>

          {/* Tile 2 - Custom AI Solutions */}
          <div className="lg:col-span-5 bg-center rounded-xl bg-no-repeat shadow-lg flex flex-col min-h-[390px] justify-start overflow-hidden"
            style={{ 
              backgroundImage: "url(/images/tile2-bg.png)",
              backgroundSize: "cover"
            }}>
            <div className="p-6 lg:p-8 h-full flex flex-col justify-start">
              <h3
                className="font-sans font-normal text-xl mb-3"
                style={{
                  fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif",
                  textShadow: "0 2px 8px #7FDBFF, 0 1px 2px #7FDBFF"
                }}
              >
                Custom AI Solutions
              </h3>
              <p
                className="font-sans text-base text-white/80 text-left leading-relaxed"
                style={{
                  fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif"
                }}
              >
                We streamline your business processes to increase efficiency, eliminate errors to boost your profits, according to your specific needs.
              </p>
            </div>
          </div>

          {/* Tile 3 - Team Collaboration */}
          <div className="lg:col-span-5 bg-center rounded-xl bg-no-repeat shadow-lg flex flex-col min-h-[390px] justify-between overflow-hidden"
            style={{ 
              backgroundImage: "url(/images/tile3-bg.png)",
              backgroundSize: "cover"
            }}>
            <div className="flex flex-col justify-between h-full p-6 lg:p-8">
              <Image
                src="/images/collaboration.png"
                alt="People"
                width={193}
                height={32}
                className="mb-4 max-w-full h-auto"
              />
              <div className="flex-1 flex flex-col justify-center">
                <h3
                  className="font-sans font-semibold text-xl lg:text-2xl mb-4 leading-tight"
                  style={{
                    fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif",
                    textShadow: "0 2px 8px #7FDBFF, 0 1px 2px #7FDBFF"
                  }}
                >
                  You&apos;re<br />
                  Part of<br />
                  The Team
                </h3>
              </div>
              <p
                className="font-sans text-xs lg:text-sm text-white/80 max-w-[200px] mt-auto"
                style={{ fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif" }}
              >
                Realtime updates of your project&apos;s progress.
              </p>
            </div>
          </div>

          {/* Tile 4 - Meet Our Experts */}
          <div className="lg:col-span-6 bg-center rounded-xl bg-no-repeat shadow-lg flex flex-col md:flex-row min-h-[390px] items-center justify-center overflow-hidden"
            style={{ 
              backgroundImage: "url(/images/tile4-bg.png)",
              backgroundSize: "cover"
            }}>
            {/* Left: Image */}
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2 p-4">
              <Image
                src="/images/people.png"
                alt="People"
                width={250}
                height={250}
                className="object-contain max-w-full h-auto"
              />
            </div>
            
            {/* Right: Text */}
            <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start w-full md:w-1/2 p-4 md:pr-6 lg:pr-8">
              <h3
                className="font-sans font-semibold text-xl md:text-2xl mb-2 w-full"
                style={{
                  fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif",
                  textShadow: "0 2px 8px #7FDBFF, 0 1px 2px #7FDBFF"
                }}
              >
                Meet Our Experts
              </h3>
              <h4
                className="w-full mb-3 font-medium"
                style={{
                  textShadow: "0 2px 8px #7FDBFF, 0 1px 2px #7FDBFF"
                }}
              >
                Passionate People, Powerful Products.
              </h4>
              <p
                className="font-sans font-normal text-sm md:text-base text-white/80 w-full leading-relaxed"
                style={{
                  fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif"
                }}
              >
                Our team of senior engineers and designers are dedicated to bringing your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}