import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
