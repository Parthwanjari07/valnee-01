"use client";

import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
	blogImage: string;
	blogAboveTitle: string;
	blogTitle: string;
	blogDescription: string;
	blogLink: string | null;
	slug: string;
	tags: string[];
	blogSlugPublicationDate: string;
	blogSlugReadingTime: string;
	blogSlugAuthorName: string;
};

export default function BlogCard({
	blogImage,
	blogAboveTitle,
	blogTitle,
	blogDescription,
	slug,
	tags,
	blogSlugPublicationDate,
	blogSlugReadingTime,
	blogSlugAuthorName,
}: BlogCardProps) {
	return (
		<section
			className="group border hover:scale-[1.05] sm:hover:scale-[1.1] hover:border-gray-600 ease-in-out transition-all duration-500 border-gray-700 bg-transparent overflow-hidden shrink-0 flex flex-col justify-between rounded-lg pt-0 w-[20em] scale-[0.95] sm:scale-[1] sm:w-[28em] z-2 h-[28em] sm:h-[32em]"
			style={{
				boxShadow:
					"0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)",
			}}>
			{/* Card Header  */}
			<div className="relative overflow-hidden duration-500 rounded-lg aspect-video">
				<Image
					src={`${blogImage}`}
					alt="blog image"
					fill
					className="rounded-lg z-[-2] group-hover:opacity-50 group-hover:scale-[1.1] ease-in-out transition-all duration-400 object-cover"
				/>
			</div>
			{/* Card Body  */}
			<div className="flex p-5 flex-col mt-1 gap-2">
				<div className=" flex flex-col gap-2 text-xs">
					<div className="w-[20em] overflow-hidden sm:w-[28em] text-ellipsis  font-light whitespace-nowrap flex font-extrathin font-[lora] text-cyan-400 gap-1">
						{tags && tags.slice(0, 2).map((tag, index) => (
							<>
								<span className="bg-[#303333] p-1 px-2 rounded-xl">
									{tag}{" "}
								</span>
							</>
						))}
					</div>
					<div className="flex w-full font-[lora] font-semibold text-xs sm:text-sm justify-between text-white gap-1">
						<div className="flex gap-1"> <Image alt="icon" width={18} height={10}  src={"/blogs/calendar.svg"} /> {blogSlugPublicationDate}</div>
						<div className="flex gap-1"> <Image alt="icon" width={18} height={10} src={"/blogs/time.svg"} /> {blogSlugReadingTime}</div>
						<div className="flex gap-1"> <Image alt="icon" width={18} height={10} src={"/blogs/user.svg"} /> {blogSlugAuthorName}</div>
					</div>
				</div>
				<div className="text-[#FFFFFF] font-[lora] font-semibold text-md sm:text-xl">
					{blogTitle}
				</div>
				<div className="text-sm w-[20em] overflow-hidden sm:w-[28em] text-ellipsis  font-light whitespace-nowrap text-gray-400 opacity-50">
					{blogDescription}
				</div>
			</div>
			{/* Card NewFooter  */}
			<Link className="block" href={`/blogs/${slug}`}>
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
