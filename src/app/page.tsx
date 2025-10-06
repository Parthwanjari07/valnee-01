// src/app/page.tsx
import AIToolsSection from "@/components/AIToolsSection";
import Services from "@/components/services";
import FlowDiagramSection from "@/components/FlowDiagramSection";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import Hero from "@/components/Hero";
import ProcessSlider from "@/components/ProcessSlider";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FAQ";
import CTASection from "@/components/cta";
import WhyChooseUs from "@/components/WhyChooseUs";
import CardEffect from "@/components/CardEffect";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <ProcessSlider />
      <WhyChooseUs/>
      <CardEffect/>
      <FlowDiagramSection/>
      <AIToolsSection />
      <GridSection />
      <Services />
      <Testimonials />
      <FaqSection/>
      <CTASection />
      <Footer />
    </main>
  );
}
