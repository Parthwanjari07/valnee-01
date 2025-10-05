// components/CaseStudySlugClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

type CaseStudy = {
	id: string;
	title: string;
	description: string;
	image: string;
	content: string;
	slug: string;
	category: string;
	author_name: string;
	author_image: string;
	tags: string[];
	reading_time?: string;
	created_at: string;
	is_active: boolean;
	updated_at: string;
};

type MoreCaseStudy = {
	id: string;
	title: string;
	description: string;
	image: string;
	slug: string;
	category: string;
};

type CaseStudySlugClientProps = {
	caseStudy: CaseStudy;
	moreCaseStudies: MoreCaseStudy[];
};

export default function CaseStudySlugClient({
	caseStudy,
	moreCaseStudies,
}: CaseStudySlugClientProps) {

	const [tableOfContents, setTableOfContents] = useState<Array<{ id: string; text: string; level: number }>>([]);
	const [contentWithIds, setContentWithIds] = useState<string>('');

	// Extract headings from HTML content and add IDs
	useEffect(() => {
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = caseStudy.content;
		
		const headings = tempDiv.querySelectorAll('h1, h2, h3');
		const tocItems = Array.from(headings).map((heading, index) => {
			const id = `heading-${index}`;
			heading.id = id;
			return {
				id,
				text: heading.textContent || '',
				level: parseInt(heading.tagName.substring(1))
			};
		});
		
		setTableOfContents(tocItems);
		setContentWithIds(tempDiv.innerHTML);
	}, [caseStudy.content])

	return (
		<div className="relative min-h-screen bg-[#000718] overflow-hidden">
			{/* Background Gradients */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Top gradient */}
				<div 
					className="absolute w-full h-[228px] top-0 left-0"
					style={{
						background: 'linear-gradient(183.31deg, rgba(76, 150, 255, 0.4) 2.91%, rgba(0, 106, 255, 0.4) 89.65%)',
						mixBlendMode: 'plus-lighter',
						filter: 'blur(207.273px)',
					}}
				/>
				
				{/* Blue glows */}
				<div 
					className="absolute w-[660px] h-[757px] left-[66px] top-[663px]"
					style={{
						background: 'radial-gradient(100.48% 125.67% at 16.65% 14.14%, #4C6FDC 0%, #030E2E 71.64%)',
						opacity: 0.6,
						filter: 'blur(175px)',
						transform: 'matrix(-0.95, -0.3, -0.22, 0.98, 0, 0)',
					}}
				/>
				
				<div 
					className="absolute w-[660px] h-[1213px] left-[493px] top-[1704px]"
					style={{
						background: 'radial-gradient(100.48% 125.67% at 16.65% 14.14%, #4C6FDC 0%, #030E2E 71.64%)',
						opacity: 0.6,
						filter: 'blur(175px)',
						transform: 'matrix(0, 1, 1, -0.08, 0, 0)',
					}}
				/>
			</div>

			{/* Hero Section with Intro */}
			<header 
				className="relative min-h-[718px] w-full flex flex-col justify-end items-start px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 gap-2.5"
				style={{
					background: `linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, rgba(0, 0, 0, 0.880208) 62.7%, #000000 100%), url(${caseStudy.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 w-full max-w-[1100px]">
					{/* Heading */}
					<h1 
						className="text-3xl md:text-4xl lg:text-[54px] font-[590] leading-[150%] tracking-[-0.03em] text-white"
						style={{ fontFamily: 'SF Pro, sans-serif' }}
					>
						{caseStudy.title}
					</h1>

					{/* Divider */}
					<div className="w-full h-px border border-white/20" />

					{/* Metadata */}
					<div className="flex flex-col gap-4">
						{/* Tags */}
						<div className="flex gap-3 md:gap-5 flex-wrap">
							<div className="flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 bg-[rgba(171,206,255,0.05)] rounded-lg">
								<span className="text-xs font-[590] text-white" style={{ fontFamily: 'SF Pro, sans-serif' }}>
									{caseStudy.category}
								</span>
							</div>
							{caseStudy.tags[0] && (
								<div className="flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 bg-[rgba(171,206,255,0.05)] rounded-lg">
									<span className="text-xs font-[590] text-white" style={{ fontFamily: 'SF Pro, sans-serif' }}>
										{caseStudy.tags[0]}
									</span>
								</div>
							)}
						</div>

						{/* Author & Date */}
						<div className="flex flex-col gap-2.5">
							<h3 className="text-xl md:text-2xl font-[590] text-white" style={{ fontFamily: 'SF Pro, sans-serif' }}>
								{caseStudy.author_name}
							</h3>
							<p className="text-sm md:text-base text-[#707070]" style={{ fontFamily: 'SF Pro, sans-serif' }}>
								{new Date(caseStudy.created_at).toLocaleDateString('en-US', { 
									weekday: 'long',
									day: 'numeric', 
									month: 'short', 
									year: 'numeric' 
								})}
							</p>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content Section */}
			<section className="relative py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20">
				<div className="max-w-[1280px] mx-auto flex flex-col items-center gap-16 md:gap-20 lg:gap-[120px]">
					{/* Content blocks will be rendered here */}
					<article 
						className="w-full flex flex-col items-center gap-8 md:gap-12 lg:gap-[60px] text-white case-study-content"
						style={{ fontFamily: 'SF Pro, sans-serif' }}
					>
						<div 
							dangerouslySetInnerHTML={{ 
								__html: contentWithIds || caseStudy.content 
							}} 
							className="w-full"
						/>
					</article>
				</div>
			</section>

			{/* More Case Studies Section */}
			<section 
				className="relative py-12 md:py-16 lg:py-[60px] px-6 md:px-12 lg:px-20 border-t border-white/10"
				style={{ fontFamily: 'SF Pro, sans-serif' }}
			>
				<div className="max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
					{/* Header */}
					<div className="flex items-center justify-between gap-6 md:gap-12 lg:gap-20">
						<h2 className="text-xl md:text-2xl font-[590] leading-[29px] tracking-[-0.03em] text-white flex-1">
							More Case Studies for you
						</h2>
						<Link href="/casestudies">
							<button className="flex items-center gap-2 md:gap-2.5 px-4 md:px-6 lg:px-[30px] py-2.5 md:py-3 lg:py-4 bg-white rounded-lg md:rounded-xl hover:bg-gray-100 transition-colors">
								<span className="text-xs md:text-sm font-[590] leading-[17px] tracking-[-0.03em] text-black">
									View all
								</span>
								<ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
							</button>
						</Link>
					</div>

					{/* Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[30px]">
						{moreCaseStudies.slice(0, 3).map((cs) => (
							<div
								key={cs.slug}
								className="flex flex-col gap-4 w-full border border-white/10 rounded-2xl overflow-hidden"
							>
								{/* Image */}
								<div className="w-full h-[200px] md:h-[250px] relative">
									<Image
										src={cs.image}
										alt={cs.title}
										fill
										className="object-cover"
									/>
								</div>

								{/* Content */}
								<div className="flex flex-col gap-4 p-4 md:p-2.5">
									{/* Text Container */}
									<div className="flex flex-col gap-[5px] md:pl-2.5">
										<h3 className="text-sm md:text-base font-[590] leading-[19px] tracking-[-0.03em] text-white">
											{cs.title}
										</h3>
										<p className="text-sm md:text-base font-normal leading-[19px] tracking-[-0.03em] text-[#98989A] line-clamp-2">
											{cs.description}
										</p>
									</div>

									{/* Button */}
									<div className="flex justify-end">
										<Link href={`/casestudies/${cs.slug}`}>
											<button className="flex items-center gap-2 md:gap-2.5 px-4 md:px-6 lg:px-[30px] py-2.5 md:py-3 lg:py-4 bg-white rounded-lg md:rounded-xl hover:bg-gray-100 transition-colors">
												<span className="text-xs md:text-sm font-[590] leading-[17px] tracking-[-0.03em] text-black">
													Read more
												</span>
												<ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
											</button>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
