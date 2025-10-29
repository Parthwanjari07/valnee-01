"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type Blog } from "@/lib/supabase"; // Adjust import
import { type CaseStudy } from "@/lib/supabase"; // Adjust import
import BlogCard from "@/components/BlogCard"; // Assuming BlogCard is reusable
import AdminCaseStudyCard from "@/components/AdminCaseStudyCard"; // We'll create this
import { PlusCircle, Edit } from "lucide-react";

type AdminClientProps = {
	initialBlogs: Blog[];
	initialCaseStudies: CaseStudy[];
	fetchError: boolean;
};

export default function AdminClient({
	initialBlogs,
	initialCaseStudies,
	fetchError,
}: AdminClientProps) {
	const router = useRouter();

	const handleEditBlog = (slug: string) => {
		router.push(`/admin/edit-blog/${slug}`); // Navigate to blog edit page
	};

	return (
		<div className="relative min-h-screen bg-gray-900 text-white pt-32 pb-16 px-4 md:px-8 lg:px-16">
			<h1 className="text-4xl font-bold mb-10 text-center font-[lora]">
				Admin Dashboard
			</h1>

			{fetchError && (
				<div className="max-w-4xl mx-auto p-4 mb-6 bg-red-900/50 border border-red-700 rounded-md text-red-300 text-center">
					Error fetching data from Supabase. Please check the console or
					try again later.
				</div>
			)}

			{/* Section for Blogs */}
			<section className="mb-16">
				<div className="max-w-7xl mx-auto flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
					<h2 className="text-3xl font-semibold text-gray-200">Blogs</h2>
					<Link
						href="/admin/new-blog"
						className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition duration-200">
						<PlusCircle size={18} /> Create New Blog
					</Link>
				</div>

				{initialBlogs.length === 0 && !fetchError ? (
					<p className="text-center text-gray-400">No blogs found.</p>
				) : (
					<div className="flex mt-16 flex-wrap justify-center gap-12">
						{initialBlogs.map((blog) => (
							<div key={blog.slug} className="relative group">
								<BlogCard
									// Pass all necessary props to BlogCard
									blogImage={blog.imageStored}
									blogAboveTitle={blog.blogAboveTitle}
									blogTitle={blog.blogTitle}
									blogDescription={blog.blogDescription}
									slug={blog.slug}
									tags={blog.tags || []}
									blogSlugPublicationDate={blog.blogSlugPublicationDate}
									blogSlugReadingTime={blog.blogSlugReadingTime}
									blogSlugAuthorName={blog.blogSlugAuthorName}
									blogLink={null} // Or remove if not needed by BlogCard
								/>
								{/* Edit Button Overlay */}
								<button
									onClick={() => handleEditBlog(blog.slug)}
									className="absolute top-4 right-4 z-30 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg opacity-100 transition-opacity group-hover:cursor-pointer duration-300"
									aria-label={`Edit blog ${blog.blogTitle}`}
									title="Edit Blog">
									<Edit size={18} />
								</button>
							</div>
						))}
					</div>
				)}
			</section>

			{/* Section for Case Studies */}
			<section>
				<div className="max-w-7xl mx-auto flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
					<h2 className="text-3xl font-semibold text-gray-200">
						Case Studies
					</h2>
				</div>

				{initialCaseStudies.length === 0 && !fetchError ? (
					<p className="text-center text-gray-400">
						No case studies found.
					</p>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{initialCaseStudies.map((cs) => (
							<div key={cs.id} className="relative group">
								<AdminCaseStudyCard caseStudy={cs} />{" "}
							</div>
						))}
					</div>
				)}
			</section>
		</div>
	);
}
