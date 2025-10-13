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

const LaunchOnTune = () => {
	return (
		<>
			<div className="relative my-[10em] z-[1] rounded-2xl">
				{/* <img
					// style={{scale:"1.1"}}
					className="bg-cover w-[100%] rounded-2xl h-[50em] absolute z-[-1]"
					src="./images/tile1-bg.png"
					alt="bg-img"
				/> */}
				<div style={{ top: "-30em" }} className="absolute">
					<Image
						width={800}
						height={800}
						src="/landingPg/radialBlueCircleLeft.svg"
						alt="bg-circles-blue"
					/>
				</div>
				<div style={{ top: "-15em", right: "0" }} className="absolute">
					<Image
						width={800}
						height={800}
						src="/landingPg/radialBlueCircleRight.svg"
						alt="bg-circles-blue"
					/>
				</div>
			</div>

			<section className="text-white p-4 py-20">
				<div className="text-center text-gray-300 font-semibold text-2xl sm:text-3xl lg:text-4xl">
					Launch on{" "}
					<span
						style={{ fontFamily: "Lobster" }}
						className="text-cyan-400">
						Tune
					</span>
					&#46; That&apos;s Our Promise 🤝
				</div>
				<div className="mt-[4em] sm:px-[7em]">
					{content.map((val, index) => (
						<>
							<div style={{ fontFamily: "Lora" }} className="relative">
								{/* Left Side */}
								{val.id % 2 !== 0 ? (
									<div className="flex items-center">
										<img className="w-25 h-25 z-1" src={val.icon} alt="" />
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
									<div className="flex flex-row-reverse items-center">
										<img className="w-25 h-25 z-1" src={val.icon} alt="" />
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
						</>
					))}
				</div>
			</section>
		</>
	);
};

export default LaunchOnTune;
