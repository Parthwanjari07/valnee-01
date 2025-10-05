"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialMediaData = [
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "/icons/linkedin.svg",
      url: "https://www.linkedin.com/company/105150302",
      description: "To get involved in the community, ask questions and share tips."
    },
    {
      id: "github",
      name: "GitHub", 
      icon: "/icons/Github.svg",
      url: "#",
      description: "To report bugs, request features and contribute to the project."
    },
    {
      id: "x",
      name: "X",
      icon: "/icons/x.svg", 
      url: "#",
      description: "For announcements, tips and general information."
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0IDEyQzI0IDUuMzcyNTggMTguNjI3NCAwIDEyIDBTMCA1LjM3MjU4IDAgMTJDMCAxNy45OTAzIDQuMzg3NDMgMjIuOTU0IDEwLjEyNSAyMy44NTQyVjE1LjQ2ODhINy4wNzgxMlYxMkgxMC4xMjVWOS4zNTYyNUMxMC4xMjUgNi4zNDg3NSAxMS45MTY2IDQuNjg3NSAxNC42NTc2IDQuNjg3NUMxNS45NzA1IDQuNjg3NSAxNy4zNDM4IDQuOTIxODggMTcuMzQzOCA0LjkyMTg4VjcuODc1SDE1LjgzNDRDMTQuMzA5NiA3Ljg3NSAxMy44NzUgOC44MDAzOCAxMy44NzUgOS43NVYxMkgxNy4yMDMxTDE2LjY3MTEgMTUuNDY4OEgxMy44NzVWMjMuODU0MkMxOS42MTI2IDIyLjk1NCAyNCAyMS4zMjggMjQgMTJaIiBmaWxsPSIjMTg3N0YyIi8+Cjwvc3ZnPgo=",
      url: "#",
      description: "Connect with us and stay updated with our latest news."
    },
    {
      id: "instagram", 
      name: "Instagram",
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDOC4yMiAyIDcuNzYzIDIuMDA5IDYuNjI4IDIuMDc0QzUuNDg1IDIuMTQgNC43MzMgMi4yNyA0LjEzOCAyLjUyMkMzLjUwMyAyLjc5MyAyLjk0NCAzLjE4NCAyLjQyMiAzLjY3OEMxLjkzMiA0LjE4NyAxLjU0MiA0LjczMiAxLjI3MSA1LjM2N0MxLjAxOSA1Ljk1MiAwLjg4NiA2LjY5NSAwLjgyNCA3Ljg0NEMwLjc1NSA4LjkxNCAwLjc0NSA5LjM1OSAwLjc0NSAxMkMwLjc0NSAxNC42NDEgMC43NTUgMTUuMDg2IDAuODI0IDE2LjE1NkMwLjg4NiAxNy4zMDUgMS4wMTkgMTguMDQ4IDEuMjcxIDE4LjYzM0MxLjU0MiAxOS4yNjggMS45MzIgMTkuODEzIDIuNDIyIDIwLjMyMkMyLjkzMSAyMC44MTIgMy40NzYgMjEuMjAyIDQuMTExIDIxLjQ3M0M0LjY5NSAyMS43MjUgNS40MzggMjEuODU4IDYuNTg3IDIxLjkyQzcuNjU4IDIxLjk4OSA4LjEwMyAyMiAxMC43NDQgMjJIMTMuMjU2QzE1Ljg5NyAyMiAxNi4zNDIgMjEuOTg5IDE3LjQxMyAyMS45MkMxOC41NjIgMjEuODU4IDE5LjMwNSAyMS43MjUgMTkuODg5IDIxLjQ3M0MyMC41MjQgMjEuMjAyIDIxLjA2OSAyMC44MTIgMjEuNTc4IDIwLjMyMkMyMi4wNjggMTkuODEzIDIyLjQ1OCAxOS4yNjggMjIuNzI5IDE4LjYzM0MyMi45ODEgMTguMDQ4IDIzLjExNCAxNy4zMDUgMjMuMTc2IDE2LjE1NkMyMy4yNDUgMTUuMDg2IDIzLjI1NSAxNC42NDEgMjMuMjU1IDEyQzIzLjI1NSA5LjM1OSAyMy4yNDUgOC45MTQgMjMuMTc2IDcuODQ0QzIzLjExNCA2LjY5NSAyMi45ODEgNS45NTIgMjIuNzI5IDUuMzY3QzIyLjQ1OCA0LjczMiAyMi4wNjggNC4xODcgMjEuNTc4IDMuNjc4QzIxLjA2OSAzLjE4OCAyMC41MjQgMi43OTggMTkuODg5IDIuNTI3QzE5LjMwNSAyLjI3NSAxOC41NjIgMi4xNDIgMTcuNDEzIDIuMDhDMTYuMzQyIDIuMDExIDE1Ljg5NyAyIDEzLjI1NiAySDE0LjU4OEMxMy40MzQgMiAxMi40ODEgMiAxMiAyWiIgZmlsbD0iI0U0NDA1RiIvPgo8cGF0aCBkPSJNMTIgNS44MzhBNi4xNjIgNi4xNjIgMCAwIDAgNS44MzggMTJBNi4xNjIgNi4xNjIgMCAwIDAgMTIgMTguMTYyQTYuMTYyIDYuMTYyIDAgMCAwIDE4LjE2MiAxMkE2LjE2MiA2LjE2MiAwIDAgMCAxMiA1LjgzOFptMCA0LjMzMmEyLjUgMi41IDAgMCAwIDAgNWMtMi43NyAwLTIuNSAtMi4yMyAtMi41IC0yLjVBMi41IDIuNSAwIDAgMCAxMiAxMC4xN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC4yMSA1LjYzMUE0LjUzIDQuNTMgMCAwIDAgMTQuOTkzIDcuMzEyQzE0LjE5IDcuMzEyIDEzLjUxIDYuNjMyIDEzLjUxIDUuODI5QzEzLjUxIDUuMDI2IDE0LjE5IDQuMzQ2IDE0Ljk5MyA0LjM0NmMwLjgwMyAwIDEuNDgzIDAuNjggMS40ODMgMS40ODMgMCAwLjc5NSAtMC42OCAxLjQ3NSAtMS40NzUgMS40NzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
      url: "#",
      description: "Follow our visual journey and behind-the-scenes content."
    }
  ];

  return (
    <footer className="relative w-full bg-transparent pt-16 pb-0 overflow-hidden font-[var(--font-sf-pro)] rounded-t-none border-t-2 border-l border-r border-white/30 border-b-0 shadow-[0_-4px_20px_rgba(59,130,246,0.15)]" style={{ backgroundColor: '#00020d' }}>
      {/* Background video (same as hero) */}
      

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

      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00020D]/95 via-[#00020D]/98 to-[#00020D] z-0"></div>

      {/* Luminous waves at the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-5 pointer-events-none">
        <Image
          src="/images/testimonialsBg.svg"
          alt="footer waves"
          width={1920}
          height={420}
          className="w-full h-auto opacity-90"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 text-center md:text-start md:grid-cols-4 gap-12 mb-20 pt-10">
          {/* Company info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/valneeLogo.svg"
                alt="Valnee"
                width={80}
                height={60}
              />
            </Link>
            <h4 className="text-white text-lg font-light mb-3">Valnee solutions</h4>
            <p className="text-gray-300 text-sm max-w-xs mx-auto md:mx-0">
              Valnee Solutions turns bold ideas into powerful digital products,
              blending AI, design, and scalable tech to bring your vision to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-light mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors text-sm inline-flex items-center group">
                  How it works
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors text-sm inline-flex items-center group">
                  Who we serve
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors text-sm inline-flex items-center group">
                  FAQs
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-300 transition-colors text-sm inline-flex items-center group">
                  Contact Us
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-lg font-light mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-300 transition-colors text-sm">Terms of Services</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors text-sm">Cookies Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors text-sm">Affiliate Policy</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-blue-300 transition-colors text-sm">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Media with hover cards */}
          <div className="relative">
            <h4 className="text-white text-lg font-light mb-5">Social Media</h4>
            <ul className="space-y-3">
              {socialMediaData.map((social) => (
                <li key={social.id} className="relative">
                  <a 
                    href={social.url}
                    className="text-gray-300 hover:text-blue-300 transition-colors text-sm block"
                    onMouseEnter={() => setHoveredSocial(social.id)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    {social.name}
                  </a>
                  
                  {/* Hover Card */}
                  {hoveredSocial === social.id && (
                    <div className="absolute right-full top-0 mr-4 z-50 pointer-events-none">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[280px] shadow-xl transform animate-fadeInLeft">
                        {/* Card pointer */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                          <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white/10"></div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="relative w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center ">
                            <Image
                              src={social.icon}
                              alt={social.name}
                              width={32}
                              height={32}
                              className="opacity-80"
                            />
                          </div>
                          <div>
                            <h5 className="text-white font-medium text-sm mb-2">{social.name}</h5>
                            <p className="text-gray-300 text-xs leading-relaxed">{social.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>  
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">&copy; {currentYear} Valnee. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-400 text-xs pb-10">
            <Link href="/privacy" className="hover:text-blue-300">Privacy Policy</Link>
            <span className="opacity-50">|</span>
            <Link href="/terms" className="hover:text-blue-300">Terms of Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
