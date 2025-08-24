"use client";

import Link from "next/link";
import { MapPin, Clock, Users, DollarSign, ArrowRight } from "lucide-react";

type JobListItemProps = {
  title: string;
  location: string;
  type: string;
  slug: string;
  salary: string;
  openings: number;
  shortDescription: string;
  tags?: string[];
};

export default function JobListItem({
  title,
  location,
  type,
  slug,
  salary,
  openings,
  shortDescription,
  tags = [],
}: JobListItemProps) {
  return (
    <li>
      <Link
        href={`/opportunities/${slug}`}
        className="group block px-4 py-6 transition-colors hover:bg-white/5 rounded-xl"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="lg:w-[380px] flex-shrink-0">
            <h2 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">{title}</h2>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>{location}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{type}</span></div>
              <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" /><span>{salary}/month</span></div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>{openings} opening{openings > 1 ? "s" : ""}</span></div>
            </div>
            {tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-white/5 text-gray-300 border border-white/10 rounded text-xs">{tag}</span>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1">
            <p className="text-gray-300 leading-relaxed">{shortDescription}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-cyan-400 font-medium">
              <span>View details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
