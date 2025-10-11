"use client";

import Image from "next/image";
import PartnerYouNeed from "./PartnerYouNeed";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#000718] via-[#010d25] to-[#02103a] text-white px-6 sm:px-8 md:px-12 lg:px-20 py-24 overflow-hidden">
      <PartnerYouNeed />

      <div className="relative max-w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mx-5 items-center my-30">
        {/* LEFT TEXT SECTION */}
        <div className="space-y-8 relative z-10 md:px-10">
          <div className="absolute -left-90 inset-0 w-full h-full opacity-100 -z-1">
              <Image
                src="/images/whyusleftbg.png"
                alt="Decorative overlay"
                fill
                className="object-contain scale-150 sm:scale-300"
              />
            </div>
          <div className="absolute -left-90 inset-0 w-full h-full opacity-100 -z-1">
              <Image
                src="/images/whyusleftbg.png"
                alt="Decorative overlay"
                fill
                className="object-contain scale-150 sm:scale-300"
              />
            </div>
          <p className="text-sm sm:text-base md:text-xl italic text-white leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p className="text-sm sm:text-base md:text-xl italic text-white leading-relaxed">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>

          <button className="mt-4 inline-flex items-center gap-3 bg-white text-black font-medium px-3 py-3 rounded-md shadow-lg hover:shadow-cyan-400/20 transition duration-300 text-base sm:text-lg">
            Start Your Build Today
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-black text-white rounded-lg sm:rounded-xl">
              <span className="-rotate-45 text-lg sm:text-xl">→</span>
            </span>
          </button>
        </div>

        {/* RIGHT VISUAL SECTION */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] lg:w-[640px] lg:h-[640px]">
            
            <div className="absolute inset-0 w-full h-full opacity-100 -z-1">
              <Image
                src="/images/whyusleftbg.png"
                alt="Decorative overlay"
                fill
                className="object-contain scale-150 sm:scale-300"
              />
            </div>

            <Image
              src="/images/ringsection.png"
              alt="Glowing Ring"
              fill
              className="object-contain scale-170 z-10"
            />

            {/* Top Card */}
            {/* <div className="absolute -top-[5%] left-[5%] md:top-[5%] lg:top-[15%] xl:-top-[7%] bg-gradient-to-r from-[#010819] to-[#00a7fe] rounded-lg shadow-lg px-4 py-3 sm:px-5 sm:py-4 max-w-[200px] md:max-w-[390px] z-20 backdrop-blur-sm">
              <h4 className="font-semibold text-sm sm:text-base md:text-lg xl:text-2xl text-[#79FFFF]">
                Technical Translation & Strategy
              </h4>
              <p className="text-[7px] md:text-sm text-gray-300 xl:text-[15px] leading-snug">
                You don’t need to write a perfect specification. We act as your
                product strategist, turning your vision into a clear development
                blueprint.
              </p>
            </div> */}

            {/* Right Card */}
            {/* <div className="absolute top-[40%] -right-[10%] md:-right-[15%] lg:-right-[20%]  bg-gradient-to-r from-[#010819] to-[#00a7fe] rounded-lg shadow-lg px-4 py-3 sm:px-5 sm:py-4 max-w-[200px] md:max-w-[390px] z-20 backdrop-blur-sm">
              <h4 className="font-semibold text-sm sm:text-base md:text-lg xl:text-2xl text-[#79FFFF]">
                Predictable Budget & Timeline
              </h4>
              <p className="text-[7px] md:text-sm text-gray-300 xl:text-[15px] leading-snug">
                No surprises. We operate on a fixed milestone contract with
                radical transparency, demystifying the development process.
              </p>
            </div> */}

            {/* Bottom Card */}
            {/* <div className="absolute -bottom-[10%] -left-[10%] md:bottom-[0%] md:-left-[25%] lg:bottom-[15%] lg:-left-[30%] xl:bottom-[0%]  bg-gradient-to-r from-[#010819] to-[#00a7fe] rounded-lg shadow-lg px-4 py-3 sm:px-5 sm:py-4 max-w-[200px] md:max-w-[390px] z-20 backdrop-blur-sm">
              <h4 className="font-semibold text-sm sm:text-base md:text-lg xl:text-2xl text-[#79FFFF]">
                An Asset, Not a Liability
              </h4>
              <p className="text-[7px] md:text-sm text-gray-300 xl:text-[15px] leading-snug">
                You own your code, always. We deliver clean, well-documented, and
                scalable code that becomes the foundation of your business.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
