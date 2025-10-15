"use client";
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function VideoTestimonial() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full text-white font-sans overflow-hidden mb-16">
      <div className="relative z-10 w-full max-w-5xl mx-4">
        <div className="relative overflow-hidden backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg p-6 md:p-10">
          <div className="absolute -top-[20%] w-full h-full opacity-100 pointer-events-none ">
            <Image
              src="/images/whyusleftbg.png"
              alt="Decorative glow left"
              fill
              className="object-contain scale-200 opacity-100"
            />
          </div>
          <div className="absolute -top-[40%] w-full h-full opacity-100 pointer-events-none ">
            <Image
              src="/images/whyusleftbg.png"
              alt="Decorative glow left"
              fill
              className="object-contain opacity-100"
            />
          </div>
          <div className="absolute top-[35%] -left-[40%] w-full h-full opacity-100 pointer-events-none ">
            <Image
              src="/images/whyusleftbg.png"
              alt="Decorative glow left"
              fill
              className="object-contain scale-125 opacity-100"
            />
          </div>

          <div className="absolute inset-0 bg-[#000718]/30 rounded-2xl -z-10"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-w-9 aspect-h-16 border-2 rounded-3xl overflow-hidden shadow-md">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="https://mfaebogwihppaoyyclzs.supabase.co/storage/v1/object/public/videos/video_20251012_152403%20(1).mp4"
                  poster="/images/videopreview.png"
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="auto"
                >
                  Your browser does not support the video.
                </video>

                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md border border-white/20 rounded-full p-2.5 text-white hover:bg-black/60 transition-all duration-300"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="relative w-full md:w-2/3">
              <div className="h-25 w-25 md:h-36 md:w-36 absolute top-10 right-0 md:-top-4 md:right-4 pointer-events-none select-none opacity-80 md:opacity-80">
                <Image
                  src="/images/quotemark.svg"
                  alt="Quotation Mark"
                  fill
                  className=""
                />
              </div>

              <div className="relative z-10 md:pr-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-6">
                  Testimonial
                </h2>
                <blockquote className="text-white text-base sm:text-lg font-[lora] leading-relaxed">
                  <p>
                    Valnee Solutions delivered amazing project for us with
                    incredible efficiency, going from ideation to execution in
                    just a few weeks. Their communication is excellent and we
                    highly recommend their team for a cost-effective,
                    high-quality solution.
                  </p>
                </blockquote>

                <div className="my-6 md:my-8 w-32 md:w-40">
  <div className="relative w-full aspect-[5/1]"> {/* maintain aspect ratio */}
    <Image
      src="/images/starrating.png"
      alt="rating stars"
      fill
      className="object-contain"
      sizes="(max-width: 768px) 8rem, 10rem"
      priority
    />
  </div>
</div>

                <div className="flex items-center gap-4">
                  <Image
                    height={60}
                    width={60}
                    src="/images/signalmintlogo.svg"
                    alt="Signamet logo"
                    className="h-14 w-14 sm:h-16 sm:w-16"
                  />
                  <div>
                    <div className="font-semibold text-white text-base sm:text-lg">
                      Aryaveer Singh
                    </div>
                    <div className="text-gray-400 text-sm sm:text-base">
                      Co-Founder @ Signalmint
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
