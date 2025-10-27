// components/BlogSlugClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
type Blog = {
	imageStored: string;
	blogSlugTitle: string;
	blogSlugHeadings?: string[];
	blogSlugContent?: string[];
	blogSlugPublicationDate: string;
	blogSlugCategory: string;
	blogSlugReadingTime: string;
	blogSlugAuthorName: string;
	markdowncontent:string;
	tags:string[];
};

type MoreBlog = {
	imageStored: string;
	blogTitle: string;
	blogDescription: string;
	slug: string;
};

type BlogSlugClientProps = {
	blog: Blog;
	moreBlogs: MoreBlog[];
};

export default function BlogsSlugClient({
	blog,
	moreBlogs,
}: BlogSlugClientProps) {
	const router = useRouter();
	const [showLoadMore, setShowLoadMore] = useState<boolean>(true);
	
	const handleShowMoreClick = () => {
		setShowLoadMore(false);
	};

	const handleBackToHome = () => {
		router.push('/');
	};

	function extractHeadings(markdowncontent: string): string[] {
		const headings: string[] = [];
		// Regex Explanation:
		// ^       - Start of the line (due to 'm' flag)
		// #{1,6}  - Matches 1 to 6 '#' characters
		// \s+     - Matches one or more spaces after the '#'
		// (.*)    - Captures the heading text itself
		// $       - End of the line (due to 'm' flag)
		// gm      - g: global (find all matches), m: multiline (^/$ match lines)
		const headingRegex = /^#{1,6}\s+(.*)$/gm;

		let match;
		while ((match = headingRegex.exec(markdowncontent)) !== null) {
			// match[1] contains the captured group (the text after '# ')
			if (match[1]) {
				headings.push(match[1].trim()); // Add the trimmed heading text
			}
		}

		return headings;
	}

	return (
		<>
			{/* Back to Home Button */}
			<button
				onClick={handleBackToHome}
				className="fixed top-8 left-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 group">
				<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
				<span className="text-sm font-medium">Home</span>
			</button>

			{/* Hero Section */}
			<header className="relative h-[60vh] w-full text-white">
				<Image
					src={blog.imageStored}
					alt={blog.blogSlugTitle}
					layout="fill"
					objectFit="cover"
					className="brightness-100"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[black] " />
				<div className="relative z-10 flex flex-col items-center pb-2 justify-end h-full text-center px-4">
					<h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
						{blog.blogSlugTitle}
					</h1>
				</div>
			</header>

			{/* Main Content Section */}
			<section
				className={`bg-transparent relative py-16 sm:py-24 ${
					showLoadMore ? `h-[40em] overflow-hidden` : `h-fit `
				}`}>
				<div
					className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12 `}>
					{/* LEFT - Blog Content */}
					<div
						className={`lg:col-span-2 space-y-16 blog-content ${
							showLoadMore ? `overflow-hidden` : `h-full`
						}`}>
						{blog?.blogSlugHeadings &&
							blog.blogSlugHeadings.map((heading, index) => (
								<article className="" key={index} id={`section-${index}`}>
									<h2 className="mb-6">{heading}</h2>
									<div className="space-y-6">
										{blog.blogSlugContent && blog.blogSlugContent[index]
											.split("\n\n")
											.map((paragraph, pIndex) => (
												<p key={pIndex}>{paragraph}</p>
											))}
									</div>
								</article>
							))}
						<article className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-invert max-w-none text-gray-300 prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white">
							<ReactMarkdown remarkPlugins={[remarkGfm]}>
								{blog.markdowncontent}
							</ReactMarkdown>
						</article>
						{showLoadMore && (
							<div
								className="text-center w-full  absolute bottom-0 left-1/2 -translate-x-1/2 z-5 pt-12 pb-4"
								style={{
									backdropFilter: `blur(1.5px)`,
								}}>
								<button
									onClick={handleShowMoreClick}
									className="inline-flex bg-white items-center gap-2 px-6 py-3 border border-gray-600 text-black rounded-lg hover:bg-gray-100 transition-colors">
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
											{blog.blogSlugPublicationDate}
										</span>
									</div>
									<div className="flex flex-col gap-2">
										<span className="text-[#98989A]">Category</span>{" "}
										<span className="text-white font-medium">
											{blog.blogSlugCategory}
										</span>
									</div>
									<div className="flex flex-col gap-2 ">
										<span className="text-[#98989A]">Reading Time</span>{" "}
										<span className="text-white font-medium">
											{blog.blogSlugReadingTime}
										</span>
									</div>
									<div className="flex flex-col gap-2">
										<span className="text-[#98989A]">Author Name</span>{" "}
										<span className="text-white font-medium">
											{blog.blogSlugAuthorName}
										</span>
									</div>
								</div>
							</div>

							<h3 className="text-lg font-semibold text-[#98989A] mb-4">
								Table of Contents
							</h3>
							{/* Table of Contents */}
							<div className="bg-[#111A31] border border-gray-700 rounded-lg p-6">
								<ul
									style={{ listStyleType: "circle" }}
									className="list-decimal list-inside space-y-3 text-cyan-400">
									{blog?.blogSlugHeadings &&
										blog.blogSlugHeadings.length !== 0 &&
										blog.blogSlugHeadings.map((heading, index) => (
											<li key={index}>
												<a
													href={`#section-${index}`}
													className="text-white transition-colors">
													{heading}
												</a>
											</li>
										))}
									{blog?.markdowncontent && extractHeadings(blog.markdowncontent).map((heading, index) => (
											<li key={index}>
												<a
													href={`#section-${index}`}
													className="text-white transition-colors">
													{heading}
												</a>
											</li>
									))}
								</ul>
							</div>
						</div>
					</aside>
				</div>
			</section>

			{/* More Blogs Section */}
			<section className="bg-transparent text-gray-300 mt-10 pb-16 sm:pb-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-3xl font-bold text-white">More Blogs</h2>
						<Link href={"/blogs"}>
							<button className="px-5 py-2.5 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors text-sm">
								View all
							</button>
						</Link>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{moreBlogs.length === 0 ? (
							<div className="text-center text-xl ">
								No Other Blogs Yet
							</div>
						) : (
							moreBlogs.map((post) => (
								<div
									key={post.slug}
									className="bg-[#111A31] border border-gray-700 rounded-lg overflow-hidden flex flex-col">
									<Image
										src={post.imageStored}
										alt={post.blogTitle}
										width={400}
										height={250}
										className="w-full object-cover"
									/>
									<div className="p-6 flex flex-col flex-grow">
										<h3 className="text-xl font-semibold text-white mb-2">
											{post.blogTitle}
										</h3>
										<p className="text-gray-400 text-sm mb-4 flex-grow">
											{post.blogDescription}
										</p>
										<Link
											href={`/blogs/${post.slug}`}
											className="self-start">
											<span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-black rounded-md text-sm font-medium hover:bg-white transition-colors">
												Read more <ArrowUpRight className="w-4 h-4" />
											</span>
										</Link>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</section>
		</>
	);
}
