"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Step {
	title: string;
	heading: string;
	text: string;
	bgWaterMarkImgLeft: string;
	bgWaterMarkImgRight: string;
  width:string;
  height:string;
}

const steps: Step[] = [
	{
		title: "Blueprint & Strategy",
		heading: "Blueprint & Strategy",
		text: "We align on your vision and map out the core features for a successful MVP.",
		bgWaterMarkImgLeft: "/landingPg/bgIconMap.svg",
		bgWaterMarkImgRight: "/landingPg/bgIconMap.svg",
		width: "w-[6em] sm:w-[10em]",
		height: "h-[6em] sm:h-[10em]",
	},
	{
		title: "Focused Sprints & Build",
		heading: "Focused Sprints & Build",
		text: "We build your application with clean code, providing you with real-time progress updates.",
		bgWaterMarkImgLeft: "/landingPg/bgIconCodeLeft.svg",
		bgWaterMarkImgRight: "/landingPg/bgIconCodeRight.svg",
		width: "w-[7em] sm:w-[12em]",
		height: "h-[6em] sm:h-[10em]",
	},
	{
		title: "Launch & Validate",
		heading: "Launch & Validate",
		text: "We deploy your product so you can get it in front of real users and validate your idea quickly.",
		bgWaterMarkImgLeft: "/landingPg/bgIconRocketLeft.svg",
		bgWaterMarkImgRight: "/landingPg/bgIconRocketRight.svg",
		width: "w-[5em] sm:w-[12em]",
		height: "h-[7em] sm:h-[15em]",
	},
	{
		title: "Support & Iterate",
		heading: "Support & Iterate",
		text: "We provide post-launch support to fix bugs and plan the next steps based on user feedback.",
		bgWaterMarkImgLeft: "/landingPg/bgIconMsgLeft.svg",
		bgWaterMarkImgRight: "/landingPg/bgIconMsgRight.svg",
		width: "w-[6em] sm:w-[12em]",
		height: "h-[5em] sm:h-[10em]",
	},
];

export default function StackScroll() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const cardsRef = useRef<HTMLDivElement[]>([]);
	const headingRef = useRef<HTMLDivElement | null>(null);
	const placeholderRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const cards = cardsRef.current;
			const GAP = 25;

			gsap.set(cards, { yPercent: 150, opacity: 1 });
			gsap.set(placeholderRef.current, { opacity: 1 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "+=4000",
					scrub: true,
					pin: true,
					pinSpacing: true,
				},
			});

			cards.forEach((card, i) => {
				tl.to(
					card,
					{
						yPercent: (i * GAP) / 2,
						opacity: 1,
						duration: 0.8,
						ease: "power2.out",
						onStart: () => {
							card.style.zIndex = `${100 + i}`;
						},
					},
					i * 0.8
				);
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section 
    	 className="relative w-full bg-[#000718] text-white overflow-hidden pb-20">
			<div
				ref={containerRef}
				className="min-h-screen flex flex-col justify-center items-center">
				<div
					ref={headingRef}
					className="absolute top-24 text-center z-[999]">
					<h2 className="text-3xl px-5 md:text-4xl font-semibold">
						Streamlining Every Step of Your{" "}
						<span className=" text-cyan-200 font-[lobster]">Founder Journey</span>
					</h2>
				</div>
				<div className="relative mt-20 md:mt-24 flex justify-center w-full">
					<div
						ref={placeholderRef}
						className="relative bg-gradient-to-b from-[#006AFF] to-[#000718] w-full max-w-5xl h-[500px] rounded-3xl flex justify-center items-center mb-5">
						{steps.map((step, index) => (
							<div
								key={index}
								ref={(el) => {
									cardsRef.current[index] = el!;
								}}
								className="absolute max-w-5xl inset-3 flex flex-col justify-center items-center rounded-3xl overflow-hidden shadow-xl border border-[#3a3838] py-10 md:p-10 px-5 md:px-20">
								<div
									style={{
										background:
											"radial-gradient(106.69% 90.23% at 51.32% 75.16%, #4C6FDC 0%, #030E2E 68.27%)",
										backdropFilter: "blur(15px)",
									}}
									className="absolute inset-0 bg-[#000d1f] bg-opacity-95 rounded-3xl"></div>
								<div
									className="absolute w-full h-full opacity-[6%]"
									style={{
										backgroundImage: "url(/landingPg/dotsForCard.png)",
										backgroundSize: "cover",
									}}></div>
								<div className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none bg-cover bg-center" />

								<div className="relative flex flex-col items-center text-center space-y-4 md:space-y-8">
									<div
										style={{ top: "-12.5em", border: "1px solid #006AFF" }}
										className="rounded-full absolute border border-white/20 px-4 py-1 bg-[#030E2E] my-6 md:my-10 text-sm sm:text-base">
										{step.title}
									</div>
									<div
										style={{ fontFamily: "SF Pro", fontWeight: "700" }}
										className="text-3xl md:text-5xl font-bold text-cyan-200">
										{step.heading}
									</div>
									<div className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white">
										{step.text}
									</div>
								</div>
								<div className="absolute left-0 bottom-0">
									<div
										style={{
											backgroundImage: `url(${step.bgWaterMarkImgLeft})`,
											backgroundSize: "cover",
											zIndex: "0",
											bottom: "",
											left: "",
											opacity: "30%",
										}}
										className={`relative ${step.width} ${step.height}`}></div>
								</div>
								<div className="absolute right-0 bottom-0">
									<div
										style={{
											backgroundImage: `url(${step.bgWaterMarkImgRight})`,
											backgroundSize: "cover",
											zIndex: "0",
											bottom: "",
											left: "",
											opacity: "30%",
										}}
										className={`relative ${step.width} ${step.height}`}></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
