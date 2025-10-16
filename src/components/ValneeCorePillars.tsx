"use client";

import Image from "next/image";
import React from "react";


export default function ValneesCorePillars() {
  return (
		<section className="relative w-full  bg-[#000718] text-white px-4 sm:px-8 md:px-12 lg:px-20 py-24 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="absolute -right-[40%] -top-[40%] w-full h-full opacity-100">
					<Image
						src="/images/whyusleftbg.png"
						alt="Decorative overlay"
						fill
						className="object-contain scale-150 sm:scale-110"
					/>
				</div>
				<div className="absolute -right-[40%] top-[0%] w-full h-full opacity-100 ">
					<Image
						src="/images/whyusleftbg.png"
						alt="Decorative overlay"
						fill
						className="object-contain scale-150 sm:scale-110"
					/>
				</div>
				<div className="absolute -right-[40%] top-[35%] w-full h-full opacity-100 ">
					<Image
						src="/images/whyusleftbg.png"
						alt="Decorative overlay"
						fill
						className="object-contain scale-150 sm:scale-110"
					/>
				</div>
				<div className="absolute -left-[40%] top-[0%] w-full h-full opacity-100">
					<Image
						src="/images/whyusleftbg.png"
						alt="Decorative overlay"
						fill
						className="object-contain scale-150 sm:scale-110"
					/>
				</div>
				<div className="absolute -left-[40%] top-[10%] w-full h-full opacity-100">
					<Image
						src="/images/whyusleftbg.png"
						alt="Decorative overlay"
						fill
						className="object-contain scale-150 sm:scale-110"
					/>
				</div>
				<h2 className="text-center text-3xl md:text-5xl font-semibold mb-16">
					Valnee’s Core Pillars
				</h2>

				<div className="flex flex-col gap-16">
					<div
						key={1}
						className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 rounded-2xl backdrop-blur-md border border-white/10 p-6 md:p-10 transition-transform duration-300 hover:scale-[1.01] ${"md:flex-row-reverse"}`}>
						<div className="absolute inset-0 bg-[#000718]/30 rounded-2xl -z-10"></div>

						<div className="relative w-full md:w-1/2 h-56 md:h-72 lg:h-100 rounded-xl overflow-hidden">
							<Image
								src="/landingPg/pillar1.svg"
								alt="pillar1"
								fill
								className="object-contain rounded-xl"
							/>
						</div>

						<div className="flex flex-col w-full md:w-1/2 space-y-8">
							<h3 className="text-xl md:text-2xl font-semibold text-white">
								1. Technical Translation
							</h3>
							<p className="text-base md:text-xl  font-[Lora] text-[#79FFFF]">
								We own the complexity, you own the vision.
							</p>
							<p className="text-gray-300 md:text-lg font-[Lora] leading-relaxed">
								Our first job is to convert your high-level business goals
								and product logic into a crystal-clear, risk-mitigated
								technical blueprint. This eliminates the confusion that
								plagues non-technical founders.
							</p>
						</div>
					</div>
					<div
						key={2}
						className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 rounded-2xl backdrop-blur-md border border-white/10 p-6 md:p-10 transition-transform duration-300 hover:scale-[1.01] ${""}`}>
						<div className="absolute inset-0 bg-[#000718]/30 rounded-2xl -z-10"></div>

						<div className="relative w-full md:w-1/2 h-56 md:h-72 lg:h-100 rounded-xl overflow-hidden">
							<Image
								src="/landingPg/pillar2.svg"
								alt="pillar2"
								fill
								className="object-contain rounded-xl"
							/>
						</div>

						<div className="flex flex-col w-full md:w-1/2 space-y-8">
							<h3 className="text-xl md:text-2xl font-semibold text-white">
								2. Radical Transparency
							</h3>
							<p className="text-base font-[Lora] text-gray-300 md:text-xl ">
								Every project runs in a shared{" "}
								<span className="font-[Lora] font-bold">
									{" "}
									Trello workspace{" "}
								</span>
								with
								<span className=" text-[#79FFFF]">
									{" "}
									real-time updates, timelines, and team visibility.{" "}
								</span>
							</p>
							<p className="text-gray-300 md:text-lg font-[lora] leading-relaxed">
								What you see is what you get. You receive real-time updates
								and direct access to progress, ensuring you are never kept
								&quot;hostage&quot; by the development process
							</p>
						</div>
					</div>
					<div
						key={3}
						className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 rounded-2xl backdrop-blur-md border border-white/10 p-6 md:p-10 transition-transform duration-300 hover:scale-[1.01] ${"md:flex-row-reverse"}`}>
						<div className="absolute inset-0 bg-[#000718]/30 rounded-2xl -z-10"></div>

						<div className="relative w-full md:w-1/2 h-56 md:h-72 lg:h-100 rounded-xl overflow-hidden">
							<Image
								src="/landingPg/pillar3.svg"
								alt="pillar3"
								fill
								className="object-contain rounded-xl"
							/>
						</div>

						<div className="flex flex-col w-full md:w-1/2 space-y-8">
							<h3 className="text-xl md:text-2xl font-semibold text-white">
								3. Execution Velocity
							</h3>
							<p className="text-base md:text-xl text-gray-300 font-[Lora] ">
								At Valnee, I&apos;ve (Parth Wanjari) personally handpicked
								every team member for their{" "}
								<span className="text-[#79FFFF]">
									skills, values, and drive.
								</span>{" "}
							</p>
							<p className=" text-gray-300 md:text-lg font-[Lora] leading-relaxed">
								Focus over features. Our process is optimized for speed,
								prioritizing the minimum viable functionality needed to
								validate your idea and attract investment.
							</p>
						</div>
					</div>
					<div
						key={4}
						className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 rounded-2xl backdrop-blur-md border border-white/10 p-6 md:p-10 transition-transform duration-300 hover:scale-[1.01] ${""}`}>
						<div className="absolute inset-0 bg-[#000718]/30 rounded-2xl -z-10"></div>

						<div className="relative w-full md:w-1/2 h-56 md:h-72 lg:h-100 rounded-xl overflow-hidden">
							<Image
								src="/landingPg/pillar4.svg"
								alt="pillar4"
								fill
								className="object-contain rounded-xl"
							/>
						</div>
						<div className="flex flex-col w-full md:w-1/2 space-y-8">
							<h3 className="text-xl md:text-2xl font-semibold text-white">
								4. Foundational Quality
							</h3>
							<p className="text-base md:text-xl  font-[Lora] text-[#79FFFF]">
								Built to scale, designed for iteration.
							</p>
							<p className="text-gray-300 md:text-lg font-[lora] leading-relaxed">
								While we build fast, we never cut corners on quality. We
								deliver clean, well-documented code that is an asset, ready
								to handle growth and be easily taken over by a future
								technical co-founder or in-house team
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
