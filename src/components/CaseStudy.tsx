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
    <main className="relative bg-[url('/images/contact_bg.png')] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75348 18.2011C7.72056 14.5765 3.94416 10.8143 0.305928 9.78524C-0.101976 9.65415 -0.101976 9.36576 0.305928 9.22812C3.95074 8.19252 7.72056 4.43686 8.76005 0.805723C8.8719 0.405905 9.14164 0.405905 9.25349 0.805723C10.2864 4.43686 14.0628 8.19252 17.6945 9.22812C18.1024 9.35921 18.1024 9.65415 17.6945 9.78524C14.0562 10.8143 10.2798 14.5765 9.24691 18.2011C9.13506 18.6075 8.86532 18.6075 8.75348 18.2011Z"
                fill="#0094FF"
              />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
            Case Studies
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Dive deep into the AI universe with our collection of insightful case studies. 
            Explore the latest trends, breakthroughs, and real-world applications of artificial intelligence.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <Link
              key={caseStudy.id}
              href={`/casestudies/${caseStudy.slug}`}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              {/* Image */}
              {caseStudy.image && (
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Tag */}
                {caseStudy.tags && caseStudy.tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.75348 18.2011C7.72056 14.5765 3.94416 10.8143 0.305928 9.78524C-0.101976 9.65415 -0.101976 9.36576 0.305928 9.22812C3.95074 8.19252 7.72056 4.43686 8.76005 0.805723C8.8719 0.405905 9.14164 0.405905 9.25349 0.805723C10.2864 4.43686 14.0628 8.19252 17.6945 9.22812C18.1024 9.35921 18.1024 9.65415 17.6945 9.78524C14.0562 10.8143 10.2798 14.5765 9.24691 18.2011C9.13506 18.6075 8.86532 18.6075 8.75348 18.2011Z"
                        fill="#0094FF"
                      />
                    </svg>
                    <span className="text-blue-400 text-sm font-medium uppercase tracking-wide">
                      {caseStudy.category || caseStudy.tags[0]}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                  {caseStudy.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 line-clamp-3 leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    {caseStudy.author_image && (
                      <div className="w-8 h-8 rounded-full relative overflow-hidden">
                        <Image
                          src={caseStudy.author_image}
                          alt={caseStudy.author_name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <span className="text-sm text-gray-400">{caseStudy.author_name}</span>
                  </div>
                  <span className="text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CaseStudy;