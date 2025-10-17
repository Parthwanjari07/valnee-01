"use client";
import Image from "next/image";
import React from "react";

interface Content {
	id: number;
	icon: string;
	quote: string;
}

const content: Content[] = [
	{
		id: 1,
		icon: "/landingPg/clipboard.png",
		quote: "We believe in accountability.",
	},
	{
		id: 2,
		icon: "/landingPg/todo.png",
		quote: "We agree on a launch date in our contract.",
	},
	{
		id: 3,
		icon: "/landingPg/money.png",
		quote: "If we miss it due to our own delays, we'll offer a refund.",
	},
];

const LaunchOnTime = () => {
	return (
		<>
			<div className="relative bg-transparent pt-0">
				<div style={{ top: "0em" }} className="absolute">
					<Image
						width={600}
						height={600}
						src="/landingPg/radialBlueCircleLeft.svg"
						alt="bg-circles-blue"
					/>
				</div>
				<div style={{ top: "-20em", right: "0" }} className="absolute">
					<Image
						width={800}
						height={800}
						src="/landingPg/radialBlueCircleRight.svg"
						alt="bg-circles-blue"
					/>
				</div>
			</div>

			<section className="text-white py-[5em] pb-[15em]  bg-[#000718] px-[2em] md:px-[8em] lg:px-[12em] xl:px-[20em] min-h-fit  ">
				<div className=" bg-transparent launch-time-outer-box py-20">
					<div className="text-center z-[2] text-white font-semibold opacity-100 text-2xl sm:text-3xl lg:text-4xl">
						Launch on{" "}
						<span
							style={{ fontFamily: "Lobster" }}
							className="text-cyan-400">
							Time
						</span>
						&#46; That&apos;s Our Promise 🤝
					</div>
					<div className="mt-[4em] px-[1em] sm:px-[4em]">
						{content.map((val, key) => (

								<div key={val.id} style={{ fontFamily: "Lora" }} className="relative">
									{/* Left Side */}
									{val.id % 2 !== 0 ? (
										<div className="flex mt-[4em] sm:mt-0 items-center">
											<img
												className="w-25 h-25 z-1"
												src={val.icon}
												alt=""
											/>
											<div
												style={{
													background: "rgba(0, 170, 255, 0.10)",
													backdropFilter: "blur(25px)",
													left: "4.5em",
													top: "3em",
												}}
												className="z-2 px-8 py-4 absolute rounded-2xl">
												{val.quote}
											</div>
										</div>
									) : (
										<div className="flex flex-row-reverse  mt-[4em] sm:mt-0 items-center">
											<img
												className="w-25 h-25 z-1"
												src={val.icon}
												alt=""
											/>
											<div
												style={{
													background: "rgba(0, 170, 255, 0.10)",
													backdropFilter: "blur(25px)",
													right: "4em",
													top: "3em",
												}}
												className="z-2 px-8 py-4 absolute rounded-2xl">
												{val.quote}
											</div>
										</div>
									)}
								</div>

						))}
					</div>
					<div className="mt-[12em] sm:mt-[5em] px-[5em] sm:px-0 flex items-center justify-center">
						<button
							onClick={() => (window.location.href = "/contact")}
							className="flex flex-row justify-center items-center gap-2 bg-white rounded-xl flex-none px-4 py-2.5 md:px-4 md:py-2.5 w-full sm:w-auto min-w-[218px] h-auto md:h-[56px] hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ease-out cursor-pointer group">
							<span className="text-black text-center text-lg md:text-xl leading-[150%] [font-family:var(--font-sf-pro)] group-hover:text-gray-800 transition-colors duration-300">
								Schedule a free call
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

export default LaunchOnTime;
