"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GradientCTAButtonProps {
  href: string;
  primaryLabel: string;
  secondaryLabel?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function GradientCTAButton({
  href,
  primaryLabel,
  secondaryLabel,
  className,
  size = "md",
  fullWidth = false,
}: GradientCTAButtonProps) {
  const sizeStyles = {
    sm: {
      padding: "px-6 py-2",
      gap: "gap-3",
      text: "text-sm",
      arrow: "ml-4 h-9 w-9",
    },
    md: {
      padding: "px-8 py-2.5 sm:px-10 sm:py-3.5",
      gap: "gap-4",
      text: "text-base",
      arrow: "ml-4 h-10 w-10 sm:ml-5",
    },
    lg: {
      padding: "px-12 py-4",
      gap: "gap-5",
      text: "text-lg",
      arrow: "ml-6 h-11 w-11",
    },
  } as const;

  return (
    <a
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40",
        fullWidth ? "flex w-full" : "inline-flex",
        "items-center justify-center",
        className,
      )}
    >
      <span className="absolute inset-0 z-10 rounded-2xl bg-black/5 transition-colors duration-700 group-hover:bg-black/10" />
      <span className="pointer-events-none absolute inset-0 z-30 translate-x-[-120%] bg-black/10 transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
      <span className="pointer-events-none absolute -inset-5 z-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(15,23,42,0.28),transparent_70%)] opacity-0 blur-[90px] transition-opacity duration-700 group-hover:opacity-80" />
      <span
        className={cn(
          "relative z-20 items-center rounded-2xl bg-white font-semibold text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.25)] transition-all duration-500 group-hover:scale-[1.04] group-hover:shadow-[0_26px_70px_rgba(15,23,42,0.28)]",
          fullWidth ? "flex w-full justify-center" : "inline-flex",
          sizeStyles[size].padding,
          sizeStyles[size].gap,
          sizeStyles[size].text,
        )}
      >
        <span className="pointer-events-none absolute inset-0 rounded-2xl border border-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-75" />
        <span className="pointer-events-none absolute inset-x-4 top-1 h-2/3 rounded-2xl bg-white/70 opacity-60 blur-md mix-blend-screen" />
        <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent_30%,rgba(0,0,0,0.15)_55%,transparent_80%)] opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[130%] group-hover:opacity-100" />
        <span className="relative z-10 flex flex-col overflow-hidden text-left leading-tight">
          <span className="transition-transform duration-300 group-hover:-translate-y-full">
            {primaryLabel}
          </span>
          {secondaryLabel ? (
            <span className="absolute left-0 top-full text-sm font-semibold text-black transition-transform duration-300 group-hover:-translate-y-full group-hover:delay-100">
              {secondaryLabel}
            </span>
          ) : null}
        </span>
        <span
          className={cn(
            "relative z-10 flex items-center justify-center rounded-xl bg-slate-900 text-white transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-0.5 group-hover:bg-black group-hover:shadow-[0_12px_40px_rgba(15,23,42,0.35)]",
            sizeStyles[size].arrow,
          )}
        >
          <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
          <span className="pointer-events-none absolute inset-0 rounded-xl border border-black/10 group-hover:border-transparent" />
        </span>
      </span>
    </a>
  );
}

