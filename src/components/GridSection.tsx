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
        <div className="w-full lg:col-span-6 bg-center rounded-xl shadow-lg flex flex-col min-h-[390px]"
          style={{ backgroundImage: "url(/images/tile1-bg.png)" }}>
          {/* Content for Tile 1 */}
        </div>
        {/* Tile 2 */}
        <div className="w-full lg:col-span-5 bg-center rounded-xl shadow-lg flex flex-col min-h-[390px]"
          style={{ backgroundImage: "url(/images/tile2-bg.png)" }}>
          {/* Content for Tile 2 */}
        </div>
        {/* Tile 3 */}
        <div className="w-full lg:col-span-5 bg-center rounded-xl shadow-lg flex flex-col min-h-[390px]"
          style={{ backgroundImage: "url(/images/tile3-bg.png)" }}>
          {/* Content for Tile 3 */}
        </div>
        {/* Tile 4 */}
        <div className="w-full lg:col-span-6 bg-center rounded-xl shadow-lg flex flex-col min-h-[390px]"
          style={{ backgroundImage: "url(/images/tile4-bg.png)" }}>
          {/* Content for Tile 4 */}
        </div>
      </div>
    </section>
    </>
  );
}
