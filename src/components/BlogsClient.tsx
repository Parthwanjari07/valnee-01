"use client";

import { useEffect, useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import { Cross, CrossIcon, X } from "lucide-react";

type TempBlog = {
	imageStored: string;
	blogAboveTitle: string;
	blogTitle: string;
	blogDescription: string;
	slug: string;
	tags: string[];
	blogSlugPublicationDate: string;
	blogSlugReadingTime: string;
	blogSlugAuthorName: string;
	markdowncontent: string;
};

type BlogsClientProps = {
	// jobs: Job[];
	initialBlogs: TempBlog[];
};

export default function BlogsClient({ initialBlogs }: BlogsClientProps) {
	const getInitialWidth = () => {
		if (typeof window !== "undefined") {
			return window.innerWidth;
		}
		return 0; // Default for server
	};
	const [showLoadMore, setShowLoadMore] = useState<boolean>(true);
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [allTags, setAllTags] = useState<string[]>([]);
	const [numberBlogCards, setNumberBlogCards] = useState(() => {
		const width = getInitialWidth();
		return width >= 568 ? 6 : 3;
	});

	const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

	const handleLoadMore = () => {
		setNumberBlogCards((prevNumber) => prevNumber + 4);
	};

	let filteredBlogs: TempBlog[] = []; // Default to empty array
	if (Array.isArray(initialBlogs)) {
		// Check if prop is valid
		if (selectedTags.length === 0) {
			filteredBlogs = initialBlogs;
		} else {
			filteredBlogs = initialBlogs.filter(
				(blog) =>
					Array.isArray(blog.tags) &&
					blog.tags.some((tag) => selectedTags.includes(tag))
			);
		}
	}

	// 4. Update 'showLoadMore' to use the filtered list
	useEffect(() => {
		if (numberBlogCards >= filteredBlogs.length) {
			setShowLoadMore(false);
		} else {
			setShowLoadMore(true);
		}
	}, [numberBlogCards, filteredBlogs.length]);

	useEffect(() => {
		if (filterModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [filterModalOpen]);

	// 5. Populate allTags when component mounts
	useEffect(() => {
		const allTagsFromBlogs = initialBlogs.flatMap((blog) => blog.tags);
		const validTags = allTagsFromBlogs.filter((tag) => tag); // Remove any null/undefined tags
		const uniqueTags = Array.from(new Set(validTags));
		setAllTags(uniqueTags);
	}, [initialBlogs]);

	const handleFilterModalOpen = () => {
		setFilterModalOpen(true);
	};
	const handleFilterModalClose = () => {
		setFilterModalOpen(false);
	};

	const handleTagClick = (tag: string) => {
		setSelectedTags((prevTags) => {
			if (prevTags.includes(tag)) {
				// Remove the tag
				return prevTags.filter((t) => t !== tag);
			} else {
				// Add the tag
				return [...prevTags, tag];
			}
		});
	};

	return (
		<div className="relative flex flex-1 flex-col gap-12">
			<div
				onClick={handleFilterModalOpen}
				className="fixed transition-all duration-300 hover:scale-[1.1] hover:cursor-pointer ease-in-out  text-white left-[5vw] border border-gray-600 p-2 rounded-xl top-[20vh] z-5">
				<Image
					src={"/blogs/filter.svg"}
					alt={"filter"}
					height={40}
					width={40}
				/>
			</div>
			{/* Filter Modal */}

			<div
				className={`fixed z-[99] transition-all ease-in-out duration-300 h-[90vh] md:h-[80vh] md:top-[12vh] w-[90vw] bg-transparent backdrop-blur-2xl top-[8vh] left-[5vw] rounded-[5em] border-gray-800 border-[3px] overflow-y-auto ${
					filterModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}>
				<div className="relative p-8">
					<div
						onClick={handleFilterModalClose}
						className="absolute transition-all duration-300 hover:scale-[1.1] hover:cursor-pointer ease-in-out  text-white left-[5vw] border border-red-600 p-2 rounded-full top-[4vh] z-[99]">
						<X className="text-red-600" />
					</div>
					<div className="py-[8em] px-5 flex flex-col gap-[4em] text-white">
						<div className=" text-5xl text-center font-[lora]">
							Filters
						</div>
						<div className="text-center text-xl text-gray-300">
							Choose Your Preferences
						</div>
						{/* 8. Render the filter buttons */}
						<div className="flex flex-wrap gap-4 justify-center">
							{allTags.map((tag) => (
								<button
									key={tag}
									onClick={() => handleTagClick(tag)}
									className={`px-6 py-3 rounded-full border text-lg transition-all
                      ${
												selectedTags.includes(tag)
													? "bg-white text-black border-white"
													: "bg-transparent text-white border-gray-600 hover:border-white hover:bg-white/10"
											}
                    `}>
									{tag}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="pointer-events-none absolute -left-32 top-20 hidden h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[150px] lg:block" />
			<div className="pointer-events-none absolute -right-24 bottom-0 hidden h-[320px] w-[320px] rounded-full  lg:block" />

			{Array.isArray(filteredBlogs) && filteredBlogs.length > 0 ? (
				<>
					{/* Blog Card Holder  */}
					<section className="flex flex-row justify-center items-center gap-12 flex-wrap">
						{(Array.isArray(filteredBlogs) ? filteredBlogs : [])
							.slice(0, numberBlogCards)
							.map((blog, index) => (
								<BlogCard
									key={index}
									blogImage={blog.imageStored}
									blogAboveTitle={blog.blogAboveTitle}
									blogTitle={blog.blogTitle}
									blogDescription={blog.blogDescription}
									blogLink={null}
									slug={blog.slug}
									tags={blog.tags}
									blogSlugPublicationDate={blog.blogSlugPublicationDate}
									blogSlugReadingTime={blog.blogSlugReadingTime}
									blogSlugAuthorName={blog.blogSlugAuthorName}
								/>
							))}
					</section>
					{showLoadMore && (
						<div className="text-center mt-12">
							<button
								onClick={handleLoadMore}
								className="bg-white text-black font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300">
								Load more
								<svg
									className="ml-2 w-4 h-4"
									fill="none"
									stroke="black"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 9l-7 7-7-7"></path>
								</svg>
							</button>
						</div>
					)}
				</>
			) : (
				<div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-transparent p-12 text-center">
					<div className="pointer-events-none absolute -right-24 top-0 h-[340px] w-[340px] rounded-full bg-blue-500/10 blur-[150px]" />
					<h3 className="text-2xl font-semibold">
						No Blogs at the moment
					</h3>
				</div>
			)}
		</div>
	);
}
