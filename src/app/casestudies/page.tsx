import { getAllCaseStudies, type CaseStudy } from "@/lib/supabase";
import CaseStudiesClient from "@/components/CaseStudiesClient";
import Image from "next/image";

export default async function CaseStudiesPage() {
	let allCaseStudies: CaseStudy[] = [];

	// Data fetching now happens on the server
	try {
		allCaseStudies = await getAllCaseStudies();
	} catch (error) {
		console.error("Failed to fetch case studies:", error);
	}

	return (
		<>
			<section className="relative min-h-screen overflow-hidden">
				<Image
					className="absolute inset-0 h-full w-full z-[-100] bg-cover"
					src="/images/main-background.png"
					alt="background img"
					fill
				/>
				{/* Static Background Elements */}
				<div
					className="absolute inset-0 z-0"
					style={{
						background:
							"radial-gradient(circle at center, rgba(0, 29, 76, 0.2) 0%, transparent 60%)",
					}}
				/>
				<div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] overflow-hidden">
					<div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[220px]" />
					<div className="absolute left-[15%] top-0 h-[320px] w-[320px] rounded-full  " />
					<div className="absolute right-[8%] top-32 h-[380px] w-[380px] rounded-full  " />
				</div>

				<section className="relative z-10 mx-auto flex min-h-screen max-w-[1180px] flex-col gap-20 px-6 pb-32 pt-32 md:px-10 lg:gap-24">
					{/* Static Header */}
					<header className="flex flex-col items-center gap-8 text-center">
						<div className="relative">
							<h1 className="relative text-4xl blogs-heading font-semibold tracking-tight md:text-6xl">
								Case Studies
							</h1>
						</div>
						<p className="max-w-3xl text-sm sm:text-lg sm:mx-12 leading-8 text-white">
							Dive deep into our collection of insightful case studies. 
							Explore real-world projects, success stories, and detailed 
							breakdowns of how we transformed ideas into scalable solutions.
						</p>
					</header>

					{/* Client Component for Interactive UI */}
					{allCaseStudies.length === 0 ? (
						<>
							<section className="text-center text-4xl blogs-heading font-semibold tracking-tight md:text-6xl ">
								No Case Studies Found
							</section>
						</>
					) : (
						<CaseStudiesClient initialCaseStudies={allCaseStudies} />
					)}
				</section>
			</section>
		</>
	);
} 