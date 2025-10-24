// components/FaqSection.tsx
"use client";

import { useState } from "react";
import { Info, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface FaqItem {
	question: string;
	answer: string;
}

const faqs: FaqItem[] = [
	{
		question: "Do you code everything or use no-code/low-code tools?",
		answer:
			"We primarily code everything from scratch for performance and scalability — but use AI-assisted tools and low-code platforms when they accelerate delivery without compromising quality.",
	},
	{
		question: "What happens after the MVP is done?",
		answer:
			"After launch, you can either keep us as your dev team to scale your MVP or take full ownership of the clean, documented codebase — built for easy handoff and future growth.",
	},
	{
		question: "What services do you offer?",
		answer:
			"We specialize in building MVPs, custom software, and AI-driven digital products — from idea validation to launch — all delivered in just 21 days*.",
	},
	{
		question: "What is average cost of an app?",
		answer:
			"The cost of building an app depends on its features, complexity, and scope. On average, most MVPs or standard apps range between $1299 - $2999.",
	},
	{
		question: "I have an app idea where do I start from?",
		answer:
			"Begin by outlining how users will interact with your app—just a simple paragraph or 2-3 sentences on the concept.",
	},
	{
		question: "What happens if we miss the launch deadline?",
		answer:
			"We commit to a launch date in our contract. If we miss it due to our own delays, we offer a refund/money back guarantee.",
	},
];

export default function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>();

	const toggleFaq = (index: number) => {
		setOpenIndex(index === openIndex ? null : index);
	};

	return (
		<>
			<section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#000718] px-6 py-16">
				<div className="absolute top-[10%] left-[0%] w-[10em] h-[10em] sm:w-[15em] sm:h-[15em] opacity-100 pointer-events-none z-1">
					<Image
						src="/landingPg/blueRingBg.svg"
						alt="Decorative glow left"
						fill
						className="object-contain scale-200"
					/>
				</div>
				<div className="absolute bottom-[15%] right-[0%] w-[10em] h-[10em] sm:w-[15em] sm:h-[15em] opacity-100 pointer-events-none z-1">
					<Image
						src="/landingPg/blueRingBgRight.svg"
						alt="Decorative glow left"
						fill
						className="object-contain scale-200"
					/>
				</div>
				<div className="relative z-10 max-w-7xl w-full grid md:grid-cols-3 gap-12 text-white">
					{/* Left Info */}
					<div className="md:col-span-1 flex flex-col justify-start">
						<div className="flex flex-row space-x-3 items-center">
							<svg
								width="60"
								height="61"
								viewBox="0 0 60 61"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M55 30.5437C55 44.3508 43.8071 55.5437 30 55.5437C16.1929 55.5437 5 44.3508 5 30.5437C5 16.7366 16.1929 5.5437 30 5.5437C43.8071 5.5437 55 16.7366 55 30.5437ZM30 19.9187C28.4467 19.9187 27.1875 21.1779 27.1875 22.7312C27.1875 23.7667 26.348 24.6062 25.3125 24.6062C24.277 24.6062 23.4375 23.7667 23.4375 22.7312C23.4375 19.1068 26.3756 16.1687 30 16.1687C33.6244 16.1687 36.5625 19.1068 36.5625 22.7312C36.5625 24.5083 35.8537 26.1237 34.7074 27.3036C34.4767 27.541 34.2567 27.7609 34.0468 27.9706C33.5072 28.5097 33.0345 28.982 32.6198 29.5149C32.0722 30.2185 31.875 30.7356 31.875 31.1687V33.0437C31.875 34.0792 31.0355 34.9187 30 34.9187C28.9645 34.9187 28.125 34.0792 28.125 33.0437V31.1687C28.125 29.5307 28.8875 28.2048 29.6604 27.2117C30.2323 26.4769 30.9511 25.7596 31.5344 25.1774C31.7104 25.0017 31.8741 24.8384 32.0176 24.6906C32.5115 24.1823 32.8125 23.4938 32.8125 22.7312C32.8125 21.1779 31.5533 19.9187 30 19.9187ZM30 43.0437C31.3807 43.0437 32.5 41.9244 32.5 40.5437C32.5 39.163 31.3807 38.0437 30 38.0437C28.6193 38.0437 27.5 39.163 27.5 40.5437C27.5 41.9244 28.6193 43.0437 30 43.0437Z"
									fill="white"
								/>
							</svg>

							<h2 className="text-4xl font-semibold mb-4 leading-14">
								Frequently <br /> Asked <br /> Questions
							</h2>
						</div>
						<p className="text-gray-300 text-lg leading-6">
							If the question is not available on our FAQ section, Feel
							free to contact us personally, we will resolve your
							respective doubts.
						</p>
					</div>

					{/* FAQ Accordion */}
					<div className="md:col-span-2 flex flex-col gap-4">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="
                  bg-white/5 
                  rounded-xl 
                  border border-white/10 
                  backdrop-blur-md 
                  shadow-[inset_0.5px_1px_0.5px_rgba(255,255,255,0.2)]
                ">
								<button
									className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
									onClick={() => toggleFaq(index)}>
									<div className="flex items-center gap-2">
										<div className="bg-gray-700 h-7 w-7 rounded-full flex items-center justify-center">
											<Info className="w-4 h-4 text-blue-300" />
										</div>
										<span className="font-semiboldfont-[var(--font-sf-pro)] bg-gradient-to-b from-white via-blue-400 to-blue-700 bg-clip-text text-transparent text-lg font-bold">
											{faq.question}
										</span>
									</div>
									<motion.span
										animate={{ rotate: openIndex === index ? 180 : 0 }}
										transition={{ duration: 0.25, ease: "easeInOut" }}
										className="text-blue-400">
										<ChevronDown className="w-4 h-4" />
									</motion.span>
								</button>
								<AnimatePresence initial={false}>
									{openIndex === index && faq.answer && (
										<motion.div
											key="content"
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.35, ease: "easeInOut" }}
											className="overflow-hidden">
											<div className="px-12 pb-4 text-gray-200 text-lg">
												{faq.answer}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
