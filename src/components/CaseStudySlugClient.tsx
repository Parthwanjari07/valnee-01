// components/CaseStudySlugClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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

	const [showLoadMore, setShowLoadMore] = useState<boolean>(true);
	const [tableOfContents, setTableOfContents] = useState<Array<{ id: string; text: string; level: number }>>([]);
	const [contentWithIds, setContentWithIds] = useState<string>('');

	// Extract headings from HTML content and add IDs
	useEffect(() => {
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = caseStudy.content;
		
		const headings = tempDiv.querySelectorAll('h1, h2, h3');
		const tocItems = Array.from(headings).map((heading, index) => {
			const id = `heading-${index}`;
			heading.id = id; // Add ID to the heading element
			return {
				id,
				text: heading.textContent || '',
				level: parseInt(heading.tagName.substring(1))
			};
		});
		
		setTableOfContents(tocItems);
		setContentWithIds(tempDiv.innerHTML); // Save modified HTML with IDs
	}, [caseStudy.content])
	const handleShowMoreClick = ()=>{
		setShowLoadMore(false);
	}
	return (
		<>
			{/* Hero Section */}
			<header className="relative h-[60vh] w-full text-white">
				<Image
					src={caseStudy.image}
					alt={caseStudy.title}
					layout="fill"
					objectFit="cover"
					className="brightness-100"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[black] " />
				<div className="relative z-10 flex flex-col items-center pb-2 justify-end h-full text-center px-4">
					<h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
						{caseStudy.title}
					</h1>
				</div>
			</header>

			{/* Main Content Section */}
			<section className={`bg-transparent relative text-gray-300  py-16 sm:py-24 ${showLoadMore ? `h-[40em] overflow-hidden`:`h-fit `}`}>
				<div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12 `}>
					{/* LEFT - Case Study Content */}
					<div
						className={`lg:col-span-2 space-y-12 ${
							showLoadMore ? `overflow-hidden` : `h-full`
						}`}>
						<article className="case-study-content text-sm sm:text-lg text-[#98989A]">
							<div 
								dangerouslySetInnerHTML={{ 
									__html: contentWithIds || caseStudy.content 
								}} 
							/>
						</article>
						{showLoadMore && (
							<div className="text-center w-full  absolute bottom-0 left-1/2 -translate-x-1/2 z-5 pt-12 pb-4"
							style={{
								backdropFilter:`blur(1.5px)`
							}}
							>
								<button
									onClick={handleShowMoreClick}
									className="inline-flex bg-white items-center gap-2 px-6 py-3 border border-gray-600 text-black rounded-lg  transition-colors">
									Read more <ArrowDown color="black" className="w-5 h-5" />
								</button>
							</div>
						)}
					</div>

					{/* RIGHT - Sidebar */}
					<aside className="lg:col-span-1 h-fit">
						<div className="sticky top-24 space-y-8">
							{/* Metadata Card */}
							<div className="rounded-lg p-6">
								<div className="space-y-4 text-sm grid grid-cols-2">
									<div className="flex flex-col gap-2">
										<span className="text-[#98989A]">
											Publication Date
										</span>{" "}
										<span className="text-white font-medium">
											{new Date(caseStudy.created_at).toLocaleDateString('en-US', { 
												year: 'numeric', 
												month: 'long', 
												day: 'numeric' 
											})}
										</span>
									</div>
									<div className="flex flex-col gap-2">
										<span className="text-[#98989A]">Category</span>{" "}
										<span className="text-white font-medium">
											{caseStudy.category}
										</span>
									</div>
									{caseStudy.reading_time && (
										<div className="flex flex-col gap-2 ">
											<span className="text-[#98989A]">Reading Time</span>{" "}
											<span className="text-white font-medium">
												{caseStudy.reading_time}
											</span>
										</div>
									)}
									<div className="flex flex-col gap-2">
										<span className="text-[#98989A]">Author Name</span>{" "}
										<span className="text-white font-medium">
											{caseStudy.author_name}
										</span>
									</div>
								</div>
							</div>

							{/* Table of Contents */}
							{tableOfContents.length > 0 && (
								<>
									<h3 className="text-lg font-semibold text-[#98989A] mb-4">
										Table of Contents
									</h3>
									<div className="bg-[#111A31] border border-gray-700 rounded-lg p-6">
										<ul
											style={{ listStyleType: "circle" }}
											className="list-decimal list-inside space-y-3 text-cyan-400">
											{tableOfContents.map((item, index) => (
												<li 
													key={index}
													style={{ marginLeft: `${(item.level - 1) * 1}rem` }}
												>
													<a
														href={`#${item.id}`}
														className="text-white hover:text-cyan-400 transition-colors">
														{item.text}
													</a>
												</li>
											))}
										</ul>
									</div>
								</>
							)}

							{/* Tags */}
							{caseStudy.tags && caseStudy.tags.length > 0 && (
								<div className="bg-[#111A31] border border-gray-700 rounded-lg p-6">
									<h3 className="text-lg font-semibold text-white mb-4">
										Tags
									</h3>
									<div className="flex flex-wrap gap-2">
										{caseStudy.tags.map((tag, index) => (
											<span 
												key={index} 
												className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-medium"
											>
												#{tag}
											</span>
										))}
									</div>
								</div>
							)}
						</div>
					</aside>
				</div>
			</section>

			{/* More Case Studies Section */}
			<section className="bg-transparent text-gray-300 mt-10 pb-16 sm:pb-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-3xl font-bold text-white">More Case Studies</h2>
						<Link href={"/casestudies"}>
							<button className="px-5 py-2.5 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors text-sm">
								View all
							</button>
						</Link>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{moreCaseStudies.map((cs) => (
							<div
								key={cs.slug}
								className="bg-[#111A31] border border-gray-700 rounded-lg overflow-hidden flex flex-col">
								<Image
									src={cs.image}
									alt={cs.title}
									width={400}
									height={250}
									className="w-full object-cover"
								/>
								<div className="p-6 flex flex-col flex-grow">
									<h3 className="text-xl font-semibold text-white mb-2">
										{cs.title}
									</h3>
									<p className="text-gray-400 text-sm mb-4 flex-grow">
										{cs.description}
									</p>
									<Link
										href={`/casestudies/${cs.slug}`}
										className="self-start">
										<span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-black rounded-md text-sm font-medium hover:bg-white transition-colors">
											Read more <ArrowUpRight className="w-4 h-4" />
										</span>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
