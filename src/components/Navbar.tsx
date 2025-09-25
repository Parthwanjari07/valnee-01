"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookCall = () => {
    window.open("https://calendly.com/parthwanjari07/30min", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-700 ${
        scrolled ? "bg-[#00020D] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16 md:h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/valneeLogo.svg" alt="Valnee" width={50} height={50} />
        </Link>

        {/* Desktop Nav */}
        <div className="items-center gap-8 relative h-full">
          <Image
            src="/images/navEllipse.svg"
            alt="ellipse"
            width={800}
            height={200}
            className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-700 ${
              scrolled ? "opacity-0 scale-100" : "opacity-100 scale-[20]"
            }`}
          />
          <div className="hidden md:flex items-center h-full">
            <Link href="/" className="flex items-center h-full px-2 text-white font-medium hover:text-blue-300 hover:scale-105 transition-all duration-200">
              Home
            </Link>
            <Link
              href="/services"
              className="flex items-center h-full px-2 text-white font-medium hover:text-blue-300 hover:scale-105 transition-all duration-200"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="flex items-center h-full px-2 text-white font-medium hover:text-blue-300 hover:scale-105 transition-all duration-200"
            >
              About us
            </Link>
            <Link
              href="/opportunities"
              className="flex items-center h-full px-2 text-white font-medium hover:text-blue-300 hover:scale-105 transition-all duration-200"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="flex items-center h-full px-2 text-white font-medium hover:text-blue-300 hover:scale-105 transition-all duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
        <button onClick={handleBookCall} className="ml-4 bg-white hidden md:flex text-black rounded-md px-6 py-2 font-semibold hover:bg-blue-300 hover:text-white hover:scale-105 transition-all duration-200 shadow-md">
            Book a call
        </button>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-4 pb-4 space-y-4">
          <Link href="/" className="block text-white py-2 hover:text-blue-300 transition-all duration-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="block text-white py-2 hover:text-blue-300 transition-all duration-200" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className="block text-white py-2 hover:text-blue-300 transition-all duration-200" onClick={() => setIsOpen(false)}>About us</Link>
          <Link href="/opportunities" className="block text-white py-2 hover:text-blue-300 transition-all duration-200" onClick={() => setIsOpen(false)}>Careers</Link>
          <Link href="/#contact" className="block text-white py-2 hover:text-blue-300 transition-all duration-200" onClick={() => setIsOpen(false)}>Contact</Link>
          <button onClick={() => {
            setIsOpen(false);
            handleBookCall();
          }} className="w-full bg-white text-black rounded-md px-6 py-3 font-semibold hover:bg-blue-300 hover:text-white transition-all duration-200 mt-2">
            Book a call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
