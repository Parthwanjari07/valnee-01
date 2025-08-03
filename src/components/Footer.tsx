"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width={18} height={18} fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M21 12a9 9 0 1 0-10.5 8.9v-6.3h-2v-2.6h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.7h2.3l-.4 2.6h-1.9v6.3A9 9 0 0 0 21 12Z"/>
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width={18} height={18} fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M21.5 7.2c.01.14.01.29.01.43 0 4.4-3.3 9.5-9.5 9.5-1.9 0-3.7-.6-5.2-1.6.3 0 .6.1.9.1 1.6 0 3.1-.6 4.3-1.6-1.5 0-2.7-1-3.1-2.3.2 0 .4.1.7.1.3 0 .6 0 .9-.1-1.6-.3-2.7-1.7-2.7-3.3v-.1c.5.3 1.1.5 1.7.5-.9-.6-1.5-1.7-1.5-2.8 0-.6.2-1.2.5-1.7 1.8 2.2 4.5 3.6 7.5 3.7-.1-.2-.1-.5-.1-.7 0-1.8 1.5-3.3 3.3-3.3.9 0 1.7.4 2.3 1 .7-.1 1.3-.4 1.9-.7-.2.7-.7 1.3-1.4 1.7.6-.1 1.2-.2 1.7-.5-.4.6-.9 1.1-1.5 1.5Z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width={18} height={18} fill="none" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17" cy="7" r="1" fill="currentColor"/>
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width={18} height={18} fill="none" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path fill="currentColor" d="M8.1 10.7h2v6.2h-2v-6.2Zm1-2.1a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Zm3.1 2.1h2v.8c.3-.5 1-1 2-1 .9 0 2 .6 2 2.2v4.2h-2v-3.7c0-.9-.3-1.3-1-1.3-.6 0-1 .4-1 1.3v3.7h-2v-6.2Z"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#000108] pt-16 pb-8 overflow-hidden font-[var(--font-sf-pro)]">
      {/* Background blur element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-40 rounded-full bg-blue-700/10 blur-[100px] opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Logo and company info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src="/valneeLogo.svg" alt="Valnee" width={140} height={48} />
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Empowering businesses through innovative software solutions and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#00102A]/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-blue-600/30 transition-all hover:scale-110">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#00102A]/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-blue-600/30 transition-all hover:scale-110">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#00102A]/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-blue-600/30 transition-all hover:scale-110">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#00102A]/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-blue-600/30 transition-all hover:scale-110">
                <LinkedinIcon />
              </a>
            </div>
          </div>
          
          {/* Links - first column */}
          <div className="md:col-span-1">
            <h4 className="text-white text-lg font-light mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center group font-[var(--font-sf-pro)]">
                  About Us
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center group font-[var(--font-sf-pro)]">
                  Services
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center group font-[var(--font-sf-pro)]">
                  Careers
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center group font-[var(--font-sf-pro)]">
                  Contact
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links - second column */}
          <div className="md:col-span-1">
            <h4 className="text-white text-lg font-light mb-5">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center group font-[var(--font-sf-pro)]">
                  Web Development
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-gray-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center group font-[var(--font-sf-pro)]">
                  Mobile Apps
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/ai-solutions" className="text-gray-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center group font-[var(--font-sf-pro)]">
                  AI Solutions
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-services" className="text-gray-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center group font-[var(--font-sf-pro)]">
                  Cloud Services
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-white text-lg font-light mb-5">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for tech insights and updates.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 bg-[#00102A]/50 text-white border border-white/10 rounded-l-xl py-2 px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-[var(--font-sf-pro)]"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-r-xl px-4 text-sm hover:from-blue-700 hover:to-blue-500 transition-all font-[var(--font-sf-pro)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0 font-[var(--font-sf-pro)]">
            &copy; {currentYear} Valnee Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-blue-300 transition-colors text-xs font-[var(--font-sf-pro)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-blue-300 transition-colors text-xs font-[var(--font-sf-pro)]">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-blue-300 transition-colors text-xs font-[var(--font-sf-pro)]">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}