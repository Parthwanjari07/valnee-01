"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllCaseStudies, CaseStudy as CaseStudyType } from "@/lib/supabase";

function CaseStudy() {
  const [caseStudies, setCaseStudies] = useState<CaseStudyType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const data = await getAllCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  if (loading) {
    return (
      <main className="relative bg-[url('/images/contact_bg.png')] bg-cover bg-center bg-no-repeat min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
		<main className="relative bg-[url('/images/contact_bg.png')] bg-cover bg-center bg-no-repeat p-8 md:p-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
				{/* Header Section */}
				<div className="text-center mb-20 space-y-6">
					<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight mb-4">
						Case study
					</h1>
					<p className="text-white max-w-7xl mx-auto text-base md:text-xl font-semibold">
						Dive deep into the AI universe with our collection of
						insightful case studies. Explore the latest trends,
						breakthroughs, and real-world applications of artificial
						intelligence.
					</p>
				</div>

				{/* Case Studies Grid */}
				<div className="flex flex-col space-y-40">
					{caseStudies.map((caseStudy) => (
						<div
							key={caseStudy.id}
							className="flex flex-col md:flex-row gap-16">
							{/* Left Sidebar */}
							<div className="md:w-1/3">
								<div className="space-y-4">
									<div className="flex items-center gap-2">
										<svg
											width="16"
											height="16"
											viewBox="0 0 18 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M8.75348 18.2011C7.72056 14.5765 3.94416 10.8143 0.305928 9.78524C-0.101976 9.65415 -0.101976 9.36576 0.305928 9.22812C3.95074 8.19252 7.72056 4.43686 8.76005 0.805723C8.8719 0.405905 9.14164 0.405905 9.25349 0.805723C10.2864 4.43686 14.0628 8.19252 17.6945 9.22812C18.1024 9.35921 18.1024 9.65415 17.6945 9.78524C14.0562 10.8143 10.2798 14.5765 9.24691 18.2011C9.13506 18.6075 8.86532 18.6075 8.75348 18.2011Z"
												fill="#0094FF"
											/>
										</svg>
										<span className="font-thin text-xl text-blue-500">
											{caseStudy.category ||
												(caseStudy.tags && caseStudy.tags[0]) ||
												"Case Study"}
										</span>
									</div>

									<h2 className="text-2xl font-semibold text-white">
										{caseStudy.title}
									</h2>

									<p className="text-slate-200 font-thin leading-5 text-lg mb-7">
										{caseStudy.left_description}
									</p>

									<Link
										href={`/casestudies/${caseStudy.slug}`}
										className="inline-flex items-center gap-2 text-white transition-colors hover:text-white">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M25.6 12H14.4C13.0745 12 12 13.0745 12 14.4V25.6C12 26.9255 13.0745 28 14.4 28H25.6C26.9255 28 28 26.9255 28 25.6V14.4C28 13.0745 26.9255 12 25.6 12Z"
												fill="url(#paint0_linear_2292_116741)"
												fillOpacity="0.24"
												stroke="white"
											/>
											<path
												opacity="0.2"
												d="M10.4 24C9.76348 24 9.15303 23.7471 8.70294 23.2971C8.25286 22.847 8 22.2365 8 21.6V10.4C8 9.76348 8.25286 9.15303 8.70294 8.70294C9.15303 8.25286 9.76348 8 10.4 8H21.6C22.2365 8 22.847 8.25286 23.2971 8.70294C23.7471 9.15303 24 9.76348 24 10.4"
												stroke="white"
											/>
											<path
												opacity="0.2"
												d="M6.4 20C5.76348 20 5.15303 19.7471 4.70294 19.2971C4.25286 18.847 4 18.2365 4 17.6V6.4C4 5.76348 4.25286 5.15303 4.70294 4.70294C5.15303 4.25286 5.76348 4 6.4 4H17.6C18.2365 4 18.847 4.25286 19.2971 4.70294C19.7471 5.15303 20 5.76348 20 6.4"
												stroke="white"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_2292_116741"
													x1="20"
													y1="12"
													x2="20"
													y2="28"
													gradientUnits="userSpaceOnUse">
													<stop stopColor="white" stopOpacity="0" />
													<stop offset="1" stopColor="white" />
												</linearGradient>
											</defs>
										</svg>
										<span className="text-md">Read full case study</span>
									</Link>
								</div>
							</div>

							{/* Right Content */}
							<article className="md:w-2/3 px-2">
								{caseStudy.image && (
									<div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
										<Image
											// /casestudies/signalmint/homepage.png
											src={caseStudy.image}
											alt={caseStudy.title}
											fill
											className="object-cover"
										/>
									</div>
								)}

								<div className="space-y-6 text-gray-400 leading-6 text-xl">
									<p>{caseStudy.description}</p>

									{caseStudy.author_name && (
										<div className="flex items-center gap-3 pt-4 border-t border-white/10">
											{caseStudy.author_image && (
												<div className="w-14 h-11  relative overflow-hidden">
													<Image
														src={caseStudy.author_image}
														alt={caseStudy.author_name}
														fill
														className="object-cover"
													/>
												</div>
											)}
											<span className="text-lg text-gray-300">
												{caseStudy.author_name}
											</span>
										</div>
									)}
								</div>
							</article>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}

export default CaseStudy;