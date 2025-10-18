// src/app/page.tsx
import Hero from "@/components/Hero";
import FaqSection from "@/components/FAQ";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";
import NewFooter from "@/components/NewFooter";
import ImportanceSection from "@/components/ImportanceSection";
import MeetTheFounder from "@/components/MeetTheFounder";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CardEffect from "@/components/CardEffect";
import LaunchOnTime from "@/components/LaunchOnTime";
import ValneesCorePillars from "@/components/ValneeCorePillars";


export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      
      {/* Blue Spiral Divider - slightly overlaps Hero */}
      <div className="relative w-full bg-[#000718] -mt-35 sm:-mt-55 md:-mt-55 pointer-events-none">
        <Image
          src="/images/blueSpiral.svg"
          alt="Blue spiral decoration"
          width={1920}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <ImportanceSection/>
      <WhyChooseUs/>
      <CardEffect/>
      <ValneesCorePillars/>
      {/* <BuildNextBigThing/> */}
      <MeetTheFounder />
      <TestimonialCarousel/>
      <FaqSection/>
      <LaunchOnTime />
      < NewFooter/>
    </main>
  );
}
