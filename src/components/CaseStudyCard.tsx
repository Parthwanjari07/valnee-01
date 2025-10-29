"use client";

import Link from "next/link";
import Image from "next/image";

type CaseStudyCardProps = {
	caseStudyImage: string;
	caseStudyCategory: string;
	caseStudyTitle: string;
	caseStudyDescription: string;
	slug: string;
};

export default function CaseStudyCard({
	caseStudyImage,
	caseStudyCategory,
	caseStudyTitle,
	caseStudyDescription,
	slug
}: CaseStudyCardProps) {
	console.log("Case Study Description:", caseStudyDescription);
	return (
		<section
			className="border bg-transparent shrink-0 flex flex-col justify-between rounded-lg p-5 w-fit sm:w-[25em] h-[25em]"
			style={{
				boxShadow:
					"0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03);",
			}}>
			{/* Card Header  */}
			<div>
				<Image 
					src={`${caseStudyImage}`} 
					alt="case study image" 
					width={500} 
					height={300}
					className="rounded-lg object-cover"
				/>
			</div>
			{/* Card Body  */}
			<div className="flex flex-col gap-2">
				<div className="text-[#4C96FF] text-xs">{caseStudyCategory}</div>
				<div className="text-[#FFFFFF] font-semibold text-xl">
					{caseStudyTitle}
				</div>
				{/* <div className="text-sm font-light opacity-50">
					{caseStudyDescription}
				</div> */}
			</div>
			{/* Card NewFooter  */}
			<Link className="block" href={`/casestudies/${slug}`}>
				<div className="bg-white flex p-2 rounded-lg justify-center gap-2 items-center">
					<div className="text-[#000000] text-xs font-semibold">
						Read More
					</div>
					<div>
						<Image
							className="w-3 h-3"
							src="./images/arrow-up-right.svg"
							alt="arrow"
							width={12}
							height={12}
						/>
					</div>
				</div>
			</Link>
		</section>
	);
}
