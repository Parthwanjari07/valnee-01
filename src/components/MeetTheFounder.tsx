"use client";

import React from 'react';
import Image from 'next/image';

const MeetTheFounder = () => {

  const handleTalkToFounder = () => {
    window.open("https://calendly.com/parthwanjari07/30min", "_blank", "noopener,noreferrer");
  };

  return (
		<>
			<div className="relative rounded-2xl">
				{/* <img
					// style={{scale:"1.1"}}
					className="bg-cover w-[100%] rounded-2xl h-[50em] absolute z-[-1]"
					src="./images/tile1-bg.png"
					alt="bg-img"
				/> */}
				<div style={{ top: "-10em" }} className="absolute z-[2]">
					<Image
						width={800}
						height={800}
						src="/landingPg/radialBlueCircleLeft.svg"
						alt="bg-circles-blue"
					/>
				</div>
				<div
					style={{ top: "-5em", right: "0" }}
					className="absolute z-[2]">
					<Image
						width={1000}
						height={800}
						src="/landingPg/radialBlueCircleRight.svg"
						alt="bg-circles-blue"
					/>
				</div>
			</div>
			<section className="relative w-full bg-[#000718] flex justify-center items-start py-30 sm:py-50 overflow-hidden">
				{/* Container */}
				<div className="relative w-full max-w-[1446px] z-[2] flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-20 gap-8 md:gap-12 lg:gap-[83px] isolate">
					{/* Photo Card */}
					<div
						className="relative w-full sm:w-[90%] md:w-[440px] h-[400px] sm:h-[440px] md:h-[460px] rounded-2xl overflow-hidden flex-none z-[3]"
						style={{
							border: "2px solid #FFFFFF",
							filter: "drop-shadow(0px 0px 20px #4C96FF)",
						}}>
						{/* Photo with gradient overlay */}
						<div className="relative w-full h-full">
							<Image
								src="/images/founderpic.jpg"
								alt="Parth Wanjari - CEO & Founder"
								fill
								className="object-cover"
								priority
							/>
							<div
								className="absolute inset-0 pointer-events-none"
								style={{
									background:
										"linear-gradient(180deg, rgba(0, 0, 0, 0) 58.75%, #000000 100%)",
								}}
							/>

							{/* Name overlay */}
							<div className="absolute left-6 md:left-10 bottom-5 md:bottom-[20.41px] flex flex-col items-start gap-2 md:gap-[10px]">
								<h3
									className="text-white text-3xl md:text-[34.38px] leading-[38px] md:leading-[43px]"
									style={{
										fontFamily: "black-signature, cursive",
									}}>
									Parth Wanjari
								</h3>
								<p className="text-white text-base md:text-[17.19px] leading-5 md:leading-[21px] [font-family:var(--font-sf-pro)]">
									CEO - Founder
								</p>
							</div>
						</div>
					</div>

					{/* Content */}
					<div className="flex flex-col items-start gap-6 md:gap-6 lg:gap-8 w-full md:w-auto md:flex-1 md:max-w-[763px] flex-none z-[4]">
						{/* Title */}
						<h2 className="text-white text-center flex justify-center sm:justify-start w-full text-xl whitespace-nowrap sm:text-2xl md:text-3xl lg:text-[52px] leading-tight md:leading-[60px] lg:leading-[70px] font-bold [font-family:var(--font-sf-pro)]">
							Meet the Founder
						</h2>

						{/* Text Content */}
						<div className="flex flex-col items-start gap-2 md:gap-6 lg:gap-[20px] w-full">
							<p
								className="text-white w-full text-xs sm:text-lg leading-relaxed md:leading-[38px] font-lora"
								style={{
									fontFamily: "lora, serif",
								}}>
						I started out as a freelancer working with <span className="[font-family:var(--font-cal-sans)] font-semibold" style={{ color: "#3FA9E0" }}>non-technical founders</span> who had great ideas but lacked the tech team to bring them to life. I witnessed too many projects delayed, freelancers vanishing, and agencies over-promising. That led me to create <span className="[font-family:var(--font-cal-sans)] font-semibold" style={{ color: "#3FA9E0" }}>Valnee Solutions</span> — your <span className="[font-family:var(--font-cal-sans)] font-semibold" style={{ color: "#3FA9E0" }}>reliable technical partner</span>.
						<br />
						We help non-tech founders turn their ideas into <span className="font-semibold text-white">working products</span> through <span className="[font-family:var(--font-cal-sans)] font-semibold" style={{ color: "#3FA9E0" }}>smart, scalable digital solutions</span>.
						<br />
						<span className="[font-family:var(--font-cal-sans)] font-semibold" style={{ color: "#3FA9E0" }}>Our promise:</span> <span className="[font-family:var(--font-cal-sans)] font-semibold" style={{ color: "#3FA9E0" }}>clear vision</span> + <span className="[font-family:var(--font-cal-sans)] font-semibold" style={{ color: "#3FA9E0" }}>fast execution</span> + <span className="[font-family:var(--font-cal-sans)] font-semibold" style={{ color: "#3FA9E0" }}>quality code</span>. Let&apos;s build something great together.
							</p>
						</div>

						{/* CTA Button */}
						<button
							onClick={handleTalkToFounder}
							className="flex flex-row justify-center items-center gap-2 bg-white rounded-xl flex-none px-4 py-2.5 md:px-4 md:py-2.5 w-full sm:w-auto min-w-[218px] h-auto md:h-[56px] hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ease-out cursor-pointer group">
							<span className="text-black text-center text-lg md:text-lg leading-[150%] [font-family:var(--font-sf-pro)] group-hover:text-gray-800 transition-colors duration-300">
								Talk to Founder
							</span>
							<div className="flex items-center justify-center bg-black rounded-lg p-2.5 w-9 h-9 group-hover:bg-gray-800 group-hover:rotate-12 transition-all duration-300 ease-out">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="transform rotate-[-30deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out">
									<path
										d="M2 8L14 8M14 8L8 2M14 8L8 14"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default MeetTheFounder;
