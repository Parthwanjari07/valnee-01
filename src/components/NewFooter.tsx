// app/components/NewFooter.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Interface for Social Card props for type safety
interface SocialCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  iconClassName?: string;
}
const socialCards: SocialCardProps[] = [
  {
    icon: FaGithub,
    title: "Github",
    description:
      "To report bugs, request features and contribute to the project.",
    href: "https://github.com/valnee-Solutions",
    iconClassName: "text-white/60 group-hover:text-white",
  },
  {
    icon: FaLinkedin,
    title: "Linked In",
    description:
      "To get involved in the community, ask questions and share tips.",
    href: "https://www.linkedin.com/company/valnee-solutions",
    iconClassName: "text-white/60 group-hover:text-white",
  },
  {
    icon: FaXTwitter,
    title: "X",
    description: "For announcements, tips and general information.",
    href: "https://x.com/Valneesolutions",
    iconClassName: "text-white/40 group-hover:text-white",
  },
];

const SocialCard: React.FC<SocialCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  iconClassName,
}) => (
  <Link href={href} className="group w-full">
    <div
      className="relative w-full h-[320px] sm:h-[360px] text-center p-10 
      bg-gradient-to-b from-[#0a0f1c]/40 to-[#070c15]/30 
      border border-white/10 rounded-2xl backdrop-blur-xl
      transition-all duration-300 
      hover:bg-gradient-to-b hover:from-[#0e1628]/60 hover:to-[#0a0f1c]/40 hover:translate-y-[2px]"
    >
      {/* soft inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-30 pointer-events-none" />

      <div className="flex justify-center mb-8">
        <Icon
          className={`text-[110px] sm:text-[120px] opacity-20 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 ${iconClassName}`}
        />
      </div>
      <h3 className="text-[22px] sm:text-2xl font-light text-white mb-3 tracking-wide">
        {title}
      </h3>
      <p className="text-gray-400 text-[15px] sm:text-[17px] font-extralight leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  </Link>
);

const NewFooter = () => {
  return (
		<footer className="relative  bg-[#000718] text-white">
			<div
				style={{
					borderTop: "2px solid #FFFFFF1A",
					borderRadius: "2em",
				}}
				className="bg-transparent">
				{/* Section 1: Social Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 bg-transparent gap-8 container mx-auto px-6 lg:px-8 pt-24">
					{socialCards.map((card) => (
						<SocialCard key={card.title} {...card} />
					))}
				</div>

				<div className="mx-auto relative text-white px-6 lg:px-48 lg:pl-56 pt-24">
					{/* Section 2: NewFooter Links */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 mb-40">
						{/* Column 1: Brand Info */}
						<div className="md:col-span-2 lg:col-span-1">
							<div className="flex items-center mb-4">
								<Link href="/" className="flex items-center">
									<Image
										src="/valneeLogo.svg"
										alt="Valnee"
										width={50}
										height={50}
									/>
									<span className="ml-2 text-xl font-bold">
										Valnee solutions
									</span>
								</Link>
							</div>
							<p className="text-gray-400 text-sm max-w-xs leading-relaxed">
								Valnee Solutions turns bold ideas into powerful digital
								products, blending AI, design, and scalable tech to bring
								your vision to life.
							</p>
						</div>

						{/* Column 2: Quick Links */}
						<div>
							<h4 className="font-semibold text-white text-lg mb-5">
								Quick Links
							</h4>
							<ul className="space-y-3">
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors text-sm">
										How it works
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors text-sm">
										Who we serve
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors text-sm">
										FAQs
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="text-gray-400 hover:text-white transition-colors text-sm">
										Contact Us
									</Link>
								</li>
							</ul>
						</div>

						{/* Column 3: Legal */}
						<div>
							<h4 className="font-semibold text-white text-lg mb-5">
								Legal
							</h4>
							<ul className="space-y-3">
								<li>
									<Link
										href="/terms-of-service"
										className="text-gray-400 hover:text-white transition-colors text-sm">
										Terms of Services
									</Link>
								</li>
								{/* <li>
									<Link
										href="/cookies-policy"
										className="text-gray-400 hover:text-white transition-colors text-sm">
										Cookies Policy
									</Link>
								</li>
								<li>
									<Link
										href="/affiliate-policy"
										className="text-gray-400 hover:text-white transition-colors text-sm">
										Affiliate Policy
									</Link>
								</li> */}
								<li>
									<Link
										href="/privacy-policy"
										className="text-gray-400 hover:text-white transition-colors text-sm">
										Privacy Policy
									</Link>
								</li>
							</ul>
						</div>

						{/* Column 4: Social Media */}
						<div>
							<h4 className="font-semibold text-white text-lg mb-5">
								Social Media
							</h4>
							<ul className="space-y-3">
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors text-sm">
										LinkedIn
									</Link>
								</li>
								<li>
									<button
                                        onClick={() => window.open("https://www.instagram.com/valneesolutions", "_blank", "noopener,noreferrer")}
										className="text-gray-400 hover:text-white transition-colors text-sm">
										
									</button>
								</li>
								<li>
									<button
                                        onClick={() => window.open("https://www.instagram.com/valneesolutions", "_blank", "noopener,noreferrer")}
										className="text-gray-400 hover:text-white transition-colors text-sm">
										Instagram
									</button>
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom Bar: Copyright & Links */}
					<div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left py-6 border-t border-white/10">
						<p className="text-xs text-gray-500 mb-4 sm:mb-0">
							Copyright @ Valnee. All rights reserved.
						</p>
						<div className="flex space-x-6">
							<Link
								href="/privacy-policy"
								className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
								Privacy Policy
							</Link>
							<Link
								href="/terms-of-service"
								className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
								Terms of Services
							</Link>
						</div>
					</div>
				</div>
				<div
					className="absolute bottom-0 w-[100vw] h-[20em] z-[0] pointer-events-none"
					style={{
						background:
							"radial-gradient(circle at center, #4C6FDC 0%, #030E2E 71.64%)",
						opacity: "0.6",
						filter: "blur(130px)",
					}}
				/>
			</div>
		</footer>
	);
};

export default NewFooter;
