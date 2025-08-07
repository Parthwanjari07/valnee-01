"use client";

import React from "react";
import Image from "next/image";
import "reactflow/dist/style.css";



export default function GridSection() {

  return (
    <>
    {/* <div
      className="absolute inset-0 w-full h-full z-0"
      style={{
        backgroundImage: "url(/images/gridbg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    /> */}
    <section className="relative w-full bg-[#00020D] text-white py-20 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-11 gap-4 z-10">
        {/* Tile 1 */}
        <div className="w-full lg:col-span-6 bg-center rounded-xl bg-no-repeat shadow-lg flex flex-col min-h-[390px] items-center justify-center p-8"
          style={{ backgroundImage: "url(/images/tile1-bg.png)" }}>
          <Image
            src="/images/keyboard.png"
            alt="Keyboard"
            width={500}
            height={250}
            className="mb-6"
          />
          <h2 className="font-sans font-normal text-2xl md:text-3xl mb-4" style={{ fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif" }}>
            Let's Build Your Next Big Thing
          </h2>
          <p className="font-sans font-normal text-base text-white/80 text-center max-w-md" style={{ fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif" }}>
            Let's schedule a free, no-obligation call to discuss your project and see how we can help bring your ideas to life.
          </p>
        </div>
        {/* Tile 2 */}
        <div className="w-full lg:col-span-5 bg-center rounded-xl bg-no-repeat shadow-lg flex flex-col min-h-[390px]"
          style={{ backgroundImage: "url(/images/tile2-bg.png)" }}>
          {/* Content for Tile 2 */}
        </div>
        {/* Tile 3 */}
        <div className="w-full lg:col-span-5 bg-center rounded-xl bg-no-repeat shadow-lg flex flex-col min-h-[390px]"
          style={{ backgroundImage: "url(/images/tile3-bg.png)" }}>
          {/* Content for Tile 3 */}
        </div>
        {/* Tile 4 */}
        <div className="w-full lg:col-span-6 bg-center rounded-xl bg-no-repeat shadow-lg flex flex-col md:flex-row min-h-[390px] items-center justify-center"
          style={{ backgroundImage: "url(/images/tile4-bg.png)" }}>
          {/* Left: Image */}
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/images/people.png"
              alt="People"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
          {/* Right: Text */}
          <div className="flex flex-col justify-center items-start w-72 mr-20 md:mr-0 text-left px-0 md:px-4 break-words">
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
              className="w-full"
              style={{
            textShadow: "0 2px 8px #7FDBFF, 0 1px 2px #7FDBFF"
              }}
            >
              Passionate People, Powerful Products.
            </h4>
            <p
              className="font-sans font-normal text-base flex-wrap text-white/80 w-full break-words"
              style={{
            fontFamily: "SF Pro Display, SF Pro Text, SF UI, sans-serif",
            textShadow: "0 2px 8px #7FDBFF, 0 1px 2px #7FDBFF",
            wordBreak: "break-word"
              }}
            >
              Our team of senior engineers and designers are dedicated to bringing your vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
