"use client";

import { useState, useRef } from "react";
import JobApplicationForm from "@/components/JobApplicationForm";

interface JobDetailClientProps {
  jobSlug: string;
  jobTitle: string;
}

export default function JobDetailClient({ jobSlug, jobTitle }: JobDetailClientProps) {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = () => {
    setShowForm(true);
    // Scroll to form after a short delay to ensure it's rendered
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="mt-12 pt-8 border-t border-white/10 text-center">
      {!showForm ? (
        <button
          onClick={handleApplyClick}
          className="bg-cyan-500 hover:bg-cyan-400 text-white font-medium px-8 py-3 rounded-lg transition-colors"
        >
          Apply now
        </button>
      ) : (
        <div ref={formRef} className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-8">Application Form</h2>
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <JobApplicationForm jobSlug={jobSlug} jobTitle={jobTitle} />
          </div>
        </div>
      )}
    </section>
  );
}
