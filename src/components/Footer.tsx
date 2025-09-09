"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#00020D] pt-16 pb-8 overflow-hidden font-[var(--font-sf-pro)]">
      {/* Background video (same as hero) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/herobg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Blend Overlay */}
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        <Image
          src="/images/heroBlend.png"
          alt="blend overlay"
          fill
          className="object-cover mix-blend-soft-light opacity-60"
          priority
        />
      </div>

      {/* Sparkles */}
      <div className="absolute w-full inset-0 h-1/3 z-0 pointer-events-none">
        <Image
          src="/images/sparkles.png"
          alt="sparkles"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 text-center md:text-start md:grid-cols-4 gap-10 mb-16">
          {/* Company info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/valneeLogo.svg"
                alt="Valnee"
                width={140}
                height={48}
              />
            </Link>
            <p className="text-gray-300 text-sm max-w-xs mx-auto md:mx-0">
              Empowering businesses through innovative software solutions and
              digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-light mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm inline-flex items-center group"
                >
                  About Us
                  <ArrowUpRight
                    size={14}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm inline-flex items-center group"
                >
                  Services
                  <ArrowUpRight
                    size={14}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/opportunities"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm inline-flex items-center group"
                >
                  Opportunities
                  <ArrowUpRight
                    size={14}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm inline-flex items-center group"
                >
                  Contact
                  <ArrowUpRight
                    size={14}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-lg font-light mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media text links */}
          <div>
            <h4 className="text-white text-lg font-light mb-5">Social Media</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/105150302"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
            </ul>  
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            &copy; {currentYear} Valnee Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
