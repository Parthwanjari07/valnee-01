// src/app/page.tsx
import Contact from "@/components/Contact";
import FlowDiagramSection from "@/components/FlowDiagramSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <FlowDiagramSection/>
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
