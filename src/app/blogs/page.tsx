import NewFooter from "@/components/NewFooter";
import { getAllBlogs, type Blog } from "@/lib/supabase";
import BlogsClient from "@/components/BlogsClient"; // Import the new client component
import Image from "next/image";

export default async function BlogsPage() {
	let allBlogs: Blog[] = [];

	// Data fetching now happens on the server
	try {
		const fetchedBlogs = await getAllBlogs();
		allBlogs = fetchedBlogs || []
console.log(`[BUILD LOG /blogs] Fetched ${allBlogs.length} blogs.`); 
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    allBlogs = []; // Ensure it's an array on catch
     // Add this log
    console.log(`[BUILD LOG /blogs] Error fetching blogs, using empty array.`);
	}

	return (
		<>
			<section className="relative min-h-screen  overflow-hidden">
				<Image
					className="absolute inset-0 h-full w-full z-[-100] bg-cover"
					src="/images/main-background.png"
					alt="background img"
					fill
				/>
				{/* Static Background Elements */}
				<div
					className="absolute inset-0 z-0"
					style={{
						background:
							"radial-gradient(circle at center, rgba(0, 29, 76, 0.2) 0%, transparent 60%)",
					}}
				/>
				<div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] overflow-hidden">
					<div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[220px]" />
					<div className="absolute left-[15%] top-0 h-[320px] w-[320px] rounded-full  " />
					<div className="absolute right-[8%] top-32 h-[380px] w-[380px] rounded-full  " />
				</div>
				<section className="relative z-10 mx-auto flex min-h-screen max-w-[100em] flex-col gap-20 px-6 pb-32 pt-32 md:px-10 lg:gap-24">
					{/* Static Header */}
					<header className="flex flex-col items-center gap-8 text-center">
						<div className="relative">
							<h1 className="relative text-4xl blogs-heading font-semibold tracking-tight md:text-6xl">
								Blogs
							</h1>
						</div>
						<p className="max-w-3xl font-[lora] text-center text-xs sm:text-sm sm:mx-12 leading-8 text-white">
							Dive deep into the AI universe with our collection of
							insightful podcasts. Explore the latest trends,
							breakthroughs, and discussions on artificial intelligence.
							Whether you&apos;re an enthusiast or a professional, our AI
							podcasts offer a gateway to knowledge and innovation.
						</p>
					</header>

					{/* Client Component for Interactive UI */}
					{allBlogs.length === 0 ? (
						<>
							<section className="text-center text-4xl blogs-heading font-semibold tracking-tight md:text-6xl ">
								No Blogs Found
							</section>
						</>
					) : (
						<BlogsClient initialBlogs={allBlogs} />
					)}
				</section>
			</section>
			<NewFooter />
		</>
	);
}
