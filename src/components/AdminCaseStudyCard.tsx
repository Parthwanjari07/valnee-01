import React from "react";
import Image from "next/image";
import Link from "next/link";
import { type CaseStudy } from "@/lib/supabase"; // Adjust import

type AdminCaseStudyCardProps = {
	caseStudy: CaseStudy;
};

export default function AdminCaseStudyCard({
	caseStudy,
}: AdminCaseStudyCardProps) {
	return (
		<div className="border border-gray-700 bg-gray-800/50 rounded-lg overflow-hidden flex flex-col h-full shadow-md">
			<div className="relative aspect-video">
				{" "}
				{/* Fixed aspect ratio */}
				<Image
					src={caseStudy.image || "/placeholder.png"} // Use placeholder if no image
					alt={caseStudy.title}
					fill
					className="object-cover"
				/>
			</div>
			<div className="p-4 flex flex-col flex-grow">
				<span className="text-xs text-cyan-400 uppercase tracking-wider mb-1">
					{caseStudy.category ||
						(caseStudy.tags && caseStudy.tags[0]) ||
						"Case Study"}
				</span>
				<h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
					{caseStudy.title}
				</h3>
				<p className="text-sm text-gray-400 mb-4 flex-grow line-clamp-3">
					{caseStudy.description ||
						caseStudy.left_description ||
						"No description available."}
				</p>
				{/* Link to view the actual case study page */}
				<Link
					href={`/casestudies/${caseStudy.slug}`}
					target="_blank" // Open in new tab
					rel="noopener noreferrer"
					className="text-xs text-blue-400 hover:underline mt-auto self-start">
					View Live
				</Link>
			</div>
		</div>
	);
}
