"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
  

type TempBlog = {
	imageStored: string;
	blogAboveTitle: string;
	blogTitle: string;
	blogDescription: string;
  slug:string;
};

type BlogsClientProps = {
	// jobs: Job[];
	initialBlogs: TempBlog[];
};

export default function BlogsClient({
	initialBlogs,
}: BlogsClientProps) {
	const [showLoadMore, setShowLoadMore] = useState<boolean>(true);
	const [numberBlogCards, setNumberBlogCards] = useState<number>(4);

	const handleLoadMore = () => {
		setNumberBlogCards((prevNumber) => prevNumber + 4);
	};

	useEffect(() => {
		if (numberBlogCards >= initialBlogs.length) {
			setShowLoadMore(false);
		} else {
			setShowLoadMore(true);
		}
	}, [numberBlogCards, initialBlogs.length]);

	return (
		<div className="relative flex flex-1 flex-col gap-12">
			<div className="pointer-events-none absolute -left-32 top-20 hidden h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[150px] lg:block" />
			<div className="pointer-events-none absolute -right-24 bottom-0 hidden h-[320px] w-[320px] rounded-full  lg:block" />

			{true ? (
				<>
					{/* Blog Card Holder  */}
					<section className="flex flex-row justify-center items-center gap-4 flex-wrap">
						{initialBlogs.slice(0, numberBlogCards).map((blog, index) => (
							<BlogCard
								key={index}
								blogImage={blog.imageStored}
								blogAboveTitle={blog.blogAboveTitle}
								blogTitle={blog.blogTitle}
								blogDescription={blog.blogDescription}
								blogLink={null}
                slug={blog.slug}
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
