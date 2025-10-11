"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookCall = () => {
    window.open("https://calendly.com/parthwanjari07/30min", "_blank");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      {/* Glassmorphism container (desktop only) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-6">
        <div className="flex justify-between items-center h-14 md:h-16 lg:rounded-[18px] lg:border lg:border-white/10 lg:bg-black/10 lg:backdrop-blur-md">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 relative z-10">
          <Image 
            src="/valneeLogo.svg" 
            alt="Valnee" 
            width={40} 
            height={40}
            className="sm:w-[50px] sm:h-[50px]"
          />
          <span className="text-white font-semibold text-base sm:text-lg hidden sm:block">
            Valnee Solutions LLP
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 relative h-full">
          <Link href="/" className="flex items-center h-full px-3 xl:px-4 text-white font-medium text-sm xl:text-base hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link href="/services" className="flex items-center h-full px-3 xl:px-4 text-white font-medium text-sm xl:text-base hover:text-cyan-400 transition-colors">
            Services
          </Link>
          <Link href="/about" className="flex items-center h-full px-3 xl:px-4 text-white font-medium text-sm xl:text-base hover:text-cyan-400 transition-colors">
            About us
          </Link>
          <Link href="/casestudies" className="flex items-center h-full px-3 xl:px-4 text-white font-medium text-sm xl:text-base hover:text-cyan-400 transition-colors">
            Case Studies
          </Link>
          <Link href="/opportunities" className="flex items-center h-full px-3 xl:px-4 text-white font-medium text-sm xl:text-base hover:text-cyan-400 transition-colors">
            Careers
          </Link>
          <Link href="/blogs" className="flex items-center h-full px-3 xl:px-4 text-white font-medium text-sm xl:text-base hover:text-cyan-400 transition-colors">
            Blogs
          </Link>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleBookCall} 
          className="hidden lg:flex items-center ml-4 bg-white/90 hover:bg-white text-black rounded-lg px-4 xl:px-6 py-2 font-semibold text-sm xl:text-base transition-colors"
        >
          Book a call
        </button>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/20 backdrop-blur-xl border-t border-white/10 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-1">
            <Link 
              href="/" 
              className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 hover:text-cyan-300 transition-colors border-l-2 border-transparent hover:border-cyan-300" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 hover:text-cyan-300 transition-colors border-l-2 border-transparent hover:border-cyan-300" 
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 hover:text-cyan-300 transition-colors border-l-2 border-transparent hover:border-cyan-300" 
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link 
              href="/casestudies" 
              className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 hover:text-cyan-300 transition-colors border-l-2 border-transparent hover:border-cyan-300" 
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              href="/opportunities" 
              className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 hover:text-cyan-300 transition-colors border-l-2 border-transparent hover:border-cyan-300" 
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link 
              href="/blogs" 
              className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 hover:text-cyan-300 transition-colors border-l-2 border-transparent hover:border-cyan-300" 
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="pt-4 px-4">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  handleBookCall();
                }} 
                className="w-full bg-white/90 hover:bg-white text-black rounded-lg px-6 py-3 font-semibold transition-colors"
              >
                Book a call
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
