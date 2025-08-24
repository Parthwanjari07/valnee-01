"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type JobCardProps = {
  title: string;
  location: string;
  type: string;
  slug: string;
  salary: string;
  openings: number;
};

export default function JobCard({ title, location, type, slug, salary, openings }: JobCardProps) {
  return (
    <Link
      href={`/opportunities/${slug}`}
      className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 min-h-[200px]"
    >
      <div>
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          {location} · {type}
        </p>
        <p className="mt-3 text-sm font-medium text-cyan-400">
          {salary}
        </p>
        <p className="mt-2 text-xs text-gray-500">
          {openings} opening{openings > 1 ? 's' : ''} available
        </p>
      </div>
      <ArrowRight className="mt-6 h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
      <Image
        src="/images/tile1-bg.png"
        alt=""
        fill
        className="absolute inset-0 -z-10 rounded-xl object-cover opacity-5 group-hover:opacity-10 transition-opacity"
      />
    </Link>
  );
}
