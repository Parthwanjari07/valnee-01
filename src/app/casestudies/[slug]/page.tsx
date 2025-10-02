import { notFound } from "next/navigation";
import CaseStudySlugClient from "@/components/CaseStudySlugClient";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/supabase";
import Image from "next/image";

export default async function CaseStudyDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const caseStudyData = await getCaseStudyBySlug(slug);
	const allCaseStudies = await getAllCaseStudies();
	const moreCaseStudies = allCaseStudies
		.filter((cs) => cs.slug !== slug)
		.slice(0, 4);

	if (!caseStudyData) {
		notFound();
	}

	return (
		<div className="relative min-h-screen">
			<Image 
				className="absolute inset-0 h-full w-full z-[-100] bg-cover" 
				src="/images/main-background.png" 
				alt="background" 
				width={1920} 
				height={1080} 
			/>
			<main>
				<CaseStudySlugClient caseStudy={caseStudyData} moreCaseStudies={moreCaseStudies} />
			</main>
		</div>
	);
}