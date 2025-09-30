// /blogs/[slug]/page.tsx

import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import BlogSlugClient from "@/components/BlogSlugClient";
import {getAllBlogs, getBlogBySlug} from "@/lib/supabase"
import Image from "next/image";




export default async function BlogDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const blogData = await getBlogBySlug(slug);
	const allBlogs = await getAllBlogs();
	const moreBlogs = allBlogs
		.filter((blog) => blog.slug !== slug)
		.slice(0, 4);
	
	// Mock SLUG DATA TODO: Take From Supabase Database
	// const moreBlogs = [
	// 	{
	// 		imageStored: "/images/blog-img.png",
	// 		blogTitle: "Lorem ipsum dolor sit amet",
	// 		blogDescription:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// 		slug: "ai-2",
	// 	},
	// 	{
	// 		imageStored: "/images/blog-img.png",
	// 		blogTitle: "Consectetur adipiscing elit",
	// 		blogDescription:
	// 			"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	// 		slug: "ai-3",
	// 	},
	// 	{
	// 		imageStored: "/images/blog-img.png",
	// 		blogTitle: "Sed do eiusmod tempor",
	// 		blogDescription:
	// 			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	// 		slug: "ai-4",
	// 	},
	// ];
	// const allSlugContent = [
	// 	{
	// 		imageStored: "/images/blog-img.png", // Hero image
	// 		blogAboveTitle: "Lorem ipsum dolor",
	// 		blogTitle: "Lorem ipsum dolor sit amet",
	// 		blogDescription: "this is blog description",
	// 		slug: "ai-1",
	// 		blogSlugTitle: "The Rise of Artificial Intelligence in Healthcare",
	// 		blogSlugHeadings: [
	// 			"Introduction",
	// 			"Artificial Intelligence (AI)",
	// 			"Predictive Analytics and Disease Prevention",
	// 		],
	// 		blogSlugContent: [
	// 			"Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic processes to enhancing patient outcomes.",
	// 			"Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes. This article delves into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and addresses the ethical considerations surrounding this revolutionary technology.\n\nArtificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes.",
	// 			"One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans, often identifying subtle patterns and anomalies that may be imperceptible to the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in pinpointing cancerous tumors on mammograms with greater accuracy and speed, leading to earlier intervention and improved patient survival rates.",
	// 		],
	// 		blogSlugPublicationDate: "October 15, 2023",
	// 		blogSlugCategory: "Healthcare",
	// 		blogSlugReadingTime: "10 Min",
	// 		blogSlugAuthorName: "Dr. Emily Walker",
	// 	},
	// 	{
	// 		imageStored: "/images/blog-img.png",
	// 		blogAboveTitle: "Lorem ipsum dolor",
	// 		blogTitle: "Lorem ipsum dolor sit amet",
	// 		blogDescription: "this is blog description",
	// 		slug: "ai-2",
	// 		blogSlugTitle: "The Rise of Artificial Intelligence in Healthcare",
	// 		blogSlugHeadings: [
	// 			"Introduction",
	// 			"Artificial Intelligence (AI)",
	// 			"Predictive Analytics and Disease Prevention",
	// 		],
	// 		blogSlugContent: [
	// 			"Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic processes to enhancing patient outcomes.",
	// 			"Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes. This article delves into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and addresses the ethical considerations surrounding this revolutionary technology.\n\nArtificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes.",
	// 			"One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans, often identifying subtle patterns and anomalies that may be imperceptible to the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in pinpointing cancerous tumors on mammograms with greater accuracy and speed, leading to earlier intervention and improved patient survival rates.",
	// 		],
	// 		blogSlugPublicationDate: "October 15, 2023",
	// 		blogSlugCategory: "Healthcare",
	// 		blogSlugReadingTime: "10 Min",
	// 		blogSlugAuthorName: "Dr. Emily Walker",
	// 	},
	// 	{
	// 		imageStored: "/images/blog-img.png",
	// 		blogAboveTitle: "Lorem ipsum dolor",
	// 		blogTitle: "Lorem ipsum dolor sit amet",
	// 		blogDescription: "this is blog description",
	// 		slug: "ai-3",
	// 		blogSlugTitle: "The Rise of Artificial Intelligence in Healthcare",
	// 		blogSlugHeadings: [
	// 			"Introduction",
	// 			"Artificial Intelligence (AI)",
	// 			"Predictive Analytics and Disease Prevention",
	// 		],
	// 		blogSlugContent: [
	// 			"Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic processes to enhancing patient outcomes.",
	// 			"Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes. This article delves into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and addresses the ethical considerations surrounding this revolutionary technology.\n\nArtificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes.",
	// 			"One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans, often identifying subtle patterns and anomalies that may be imperceptible to the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in pinpointing cancerous tumors on mammograms with greater accuracy and speed, leading to earlier intervention and improved patient survival rates.",
	// 		],
	// 		blogSlugPublicationDate: "October 15, 2023",
	// 		blogSlugCategory: "Healthcare",
	// 		blogSlugReadingTime: "10 Min",
	// 		blogSlugAuthorName: "Dr. Emily Walker",
	// 	},
	// 	{
	// 		imageStored: "/images/blog-img.png",
	// 		blogAboveTitle: "Lorem ipsum dolor",
	// 		blogTitle: "Lorem ipsum dolor sit amet",
	// 		blogDescription: "this is blog description",
	// 		slug: "ai-4",
	// 		blogSlugTitle: "The Rise of Artificial Intelligence in Healthcare",
	// 		blogSlugHeadings: [
	// 			"Introduction",
	// 			"Artificial Intelligence (AI)",
	// 			"Predictive Analytics and Disease Prevention",
	// 		],
	// 		blogSlugContent: [
	// 			"Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic processes to enhancing patient outcomes.",
	// 			"Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes. This article delves into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and addresses the ethical considerations surrounding this revolutionary technology.\n\nArtificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes.",
	// 			"One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans, often identifying subtle patterns and anomalies that may be imperceptible to the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in pinpointing cancerous tumors on mammograms with greater accuracy and speed, leading to earlier intervention and improved patient survival rates.",
	// 		],
	// 		blogSlugPublicationDate: "October 15, 2023",
	// 		blogSlugCategory: "Healthcare",
	// 		blogSlugReadingTime: "10 Min",
	// 		blogSlugAuthorName: "Dr. Emily Walker",
	// 	},
	// 	{
	// 		imageStored: "/images/blog-img.png",
	// 		blogAboveTitle: "Lorem ipsum dolor",
	// 		blogTitle: "Lorem ipsum dolor sit amet",
	// 		blogDescription: "this is blog description",
	// 		slug: "ai-5",
	// 		blogSlugTitle: "The Rise of Artificial Intelligence in Healthcare",
	// 		blogSlugHeadings: [
	// 			"Introduction",
	// 			"Artificial Intelligence (AI)",
	// 			"Predictive Analytics and Disease Prevention",
	// 		],
	// 		blogSlugContent: [
	// 			"Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic processes to enhancing patient outcomes.",
	// 			"Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes. This article delves into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and addresses the ethical considerations surrounding this revolutionary technology.\n\nArtificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes.",
	// 			"One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans, often identifying subtle patterns and anomalies that may be imperceptible to the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in pinpointing cancerous tumors on mammograms with greater accuracy and speed, leading to earlier intervention and improved patient survival rates.",
	// 		],
	// 		blogSlugPublicationDate: "October 15, 2023",
	// 		blogSlugCategory: "Healthcare",
	// 		blogSlugReadingTime: "10 Min",
	// 		blogSlugAuthorName: "Dr. Emily Walker",
	// 	},
	// 	{
	// 		imageStored: "/images/blog-img.png",
	// 		blogAboveTitle: "Lorem ipsum dolor",
	// 		blogTitle: "Lorem ipsum dolor sit amet",
	// 		blogDescription: "this is blog description",
	// 		slug: "ai-2",
	// 		blogSlugTitle: "The Rise of Artificial Intelligence in Healthcare",
	// 		blogSlugHeadings: [
	// 			"Introduction",
	// 			"Artificial Intelligence (AI)",
	// 			"Predictive Analytics and Disease Prevention",
	// 		],
	// 		blogSlugContent: [
	// 			"Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic processes to enhancing patient outcomes.",
	// 			"Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes. This article delves into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and addresses the ethical considerations surrounding this revolutionary technology.\n\nArtificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes.",
	// 			"One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans, often identifying subtle patterns and anomalies that may be imperceptible to the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in pinpointing cancerous tumors on mammograms with greater accuracy and speed, leading to earlier intervention and improved patient survival rates.",
	// 		],
	// 		blogSlugPublicationDate: "October 15, 2023",
	// 		blogSlugCategory: "Healthcare",
	// 		blogSlugReadingTime: "10 Min",
	// 		blogSlugAuthorName: "Dr. Emily Walker",
	// 	},

	// ];
	// const blogData = allSlugContent.find((blog) => blog.slug === slug);

	if (!blogData) {
		notFound();
	}

	return (
		<div className="relative min-h-screen">
				<Image className="absolute inset-0 h-full w-full z-[-100] bg-cover" src="/images/main-background.png" alt="background" />
			<main>
				<BlogSlugClient blog={blogData} moreBlogs={moreBlogs} />
			</main>
			<Footer />
		</div>
	);
}
