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
  const infoItems = [
    { icon: MapPin, label: location },
    { icon: DollarSign, label: salary },
    { icon: Clock, label: type },
    {
      icon: Users,
      label: `${openings} opening${openings > 1 ? "s" : ""}`,
    },
  ];

  return (
    <li>
      <Link
        href={`/opportunities/${slug}`}
        className="group relative block overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-[#0b1530]/90 via-[#071022] to-[#030916] p-5 shadow-[0_22px_80px_rgba(4,12,30,0.4)] transition-all hover:border-cyan-300/35 hover:shadow-[0_32px_110px_rgba(6,18,40,0.55)] md:p-6"
      >
        <div className="pointer-events-none absolute -left-32 top-[-120px] h-[260px] w-[260px] rounded-full bg-blue-500/12 blur-[140px]" />
        <div className="pointer-events-none absolute -right-24 bottom-[-110px] h-[320px] w-[320px] rounded-full bg-cyan-400/12 blur-[150px]" />

        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-5 lg:max-w-[600px]">
              <h2 className="text-xl font-semibold text-white transition-colors group-hover:text-cyan-200 md:text-[1.6rem]">
                {title}
              </h2>

              <div className="flex flex-wrap gap-2.5 text-xs font-medium text-white/80 sm:text-sm">
                {infoItems.map(({ icon: Icon, label }, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 text-cyan-200" />
                    <span>{label}</span>
                  </span>
                ))}
              </div>

              <p className="text-sm leading-6 text-white/80 md:text-base md:leading-7">
                {shortDescription}
              </p>
            </div>

            <div className="flex shrink-0 items-start justify-end lg:pt-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#020c21] shadow-[0_14px_40px_rgba(6,16,41,0.35)] transition-transform group-hover:translate-x-1 md:px-5 md:py-2.5 md:text-sm">
                View details
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                Skills required
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 6).map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-medium text-white/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
