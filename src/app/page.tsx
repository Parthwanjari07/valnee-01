// src/app/page.tsx
import AIToolsSection from "@/components/AIToolsSection";
import Services from "@/components/services";
import FlowDiagramSection from "@/components/FlowDiagramSection";
import GridSection from "@/components/GridSection";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FAQ";
import CTASection from "@/components/cta";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";

import NewFooter from "@/components/NewFooter";
import ImportanceSection from "@/components/ImportanceSection";
import MeetTheFounder from "@/components/MeetTheFounder";
import PartnerYouNeed from "@/components/PartnerYouNeed";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CardEffect from "@/components/CardEffect";



export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      
      {/* Blue Spiral Divider - slightly overlaps Hero */}
      <div className="relative w-full bg-[#00020d] -mt-35 sm:-mt-55 md:-mt-55 pointer-events-none">
        <Image
          src="/images/blue spiral.png"
          alt="Blue spiral decoration"
          width={1920}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* <ProcessSlider /> */}

      <ImportanceSection/>

      <WhyChooseUs/>
      <CardEffect/>
      <FlowDiagramSection/>
      <AIToolsSection />
      <GridSection />
      <Services />
      <MeetTheFounder />
      <Testimonials />
      <TestimonialCarousel/>
      <FaqSection/>
      <CTASection />
      {/* <Footer /> */}
      < NewFooter/>
    </main>
  );
}
