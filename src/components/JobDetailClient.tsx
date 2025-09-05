"use client";

import { useState, useRef, useEffect } from "react";
import JobApplicationForm from "@/components/JobApplicationForm";

interface JobDetailClientProps {
  jobSlug: string;
  jobTitle: string;
  autoOpenFromHash?: boolean;
  noSectionChrome?: boolean;
}

export default function JobDetailClient({ jobSlug, jobTitle, autoOpenFromHash = true, noSectionChrome = false }: JobDetailClientProps) {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  // Auto open when URL hash is #apply
  useEffect(() => {
    if (!autoOpenFromHash) return;
    const checkHash = () => {
      if (typeof window !== 'undefined' && window.location.hash === '#apply') {
        setShowForm(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [autoOpenFromHash]);

  // Lock background scroll when modal is open and handle ESC to close
  useEffect(() => {
    if (showForm) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setShowForm(false);
          if (window.location.hash === '#apply') {
            history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }
      };
      window.addEventListener('keydown', onKey);
      return () => {
        window.removeEventListener('keydown', onKey);
        document.body.style.overflow = original;
      };
    }
  }, [showForm]);

  return (
    <>
      {!noSectionChrome && (
        <section className="mt-12 pt-8 border-t border-white/10 text-center">
          {!showForm && (
            <button
              onClick={handleApplyClick}
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Apply now
            </button>
          )}
        </section>
      )}

      {showForm && (
        <div ref={formRef} className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => {
              setShowForm(false);
              if (window.location.hash === '#apply') {
                history.replaceState(null, '', window.location.pathname + window.location.search);
              }
            }}
          />
          <div role="dialog" aria-modal="true" className="relative w-full max-w-[1120px] max-h-[90vh] overflow-y-auto rounded-[24px] shadow-2xl">
            <button
              aria-label="Close"
              onClick={() => {
                setShowForm(false);
                if (window.location.hash === '#apply') {
                  history.replaceState(null, '', window.location.pathname + window.location.search);
                }
              }}
              className="absolute right-6 top-6 z-10 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1"
            >
              ✕
            </button>
            <div className="px-8 sm:px-12 md:px-20 lg:px-28 xl:px-36 py-10 md:py-14 bg-white/5 rounded-3xl backdrop-blur-[60px] inline-flex flex-col justify-start items-center gap-7 border border-white/10">
              <div className="justify-start text-white text-3xl md:text-4xl lg:text-5xl [font-family:var(--font-sf-pro)]">Application Form</div>
              <div className="w-full md:w-[984px]">
                <JobApplicationForm jobSlug={jobSlug} jobTitle={jobTitle} containerClassName="max-w-none" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
