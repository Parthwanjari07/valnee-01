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

	if (!blogData) {
		notFound();
	}

	return (
		<div className="relative min-h-screen">
				<Image className="absolute inset-0 h-full w-full z-[-100] bg-cover" src="/images/main-background.png" alt="background" width={1920} height={1080} />
			<main>
				<BlogSlugClient blog={blogData} moreBlogs={moreBlogs} />
			</main>
			<Footer />
		</div>
	);
}
