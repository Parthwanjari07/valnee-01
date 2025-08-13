// src/app/page.tsx
import AIToolsSection from "@/components/AIToolsSection";
import Contact from "@/components/Contact";
import FlowDiagramSection from "@/components/FlowDiagramSection";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import Hero from "@/components/Hero";
import ProcessSlider from "@/components/ProcessSlider";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <ProcessSlider />
      <FlowDiagramSection/>
      <AIToolsSection />
      <GridSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
