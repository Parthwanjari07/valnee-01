"use client";

import { useState } from "react";
import clsx from "clsx";
import { submitJobApplication, uploadResumeFile, type JobApplication } from "@/lib/supabase";


type JobApplicationFormProps = {
  jobSlug: string;
  jobTitle: string;
  containerClassName?: string;
};

export default function JobApplicationForm({ jobSlug, jobTitle, containerClassName }: JobApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setError('Please select a valid file type (PDF, DOC, or DOCX)');
        return;
      }
      
      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }
      
      setSelectedFile(file);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const applicantName = formData.get('name') as string;
      
      // Upload resume file if provided
      let resumePath: string | undefined;
      if (selectedFile) {
        resumePath = await uploadResumeFile(selectedFile, applicantName);
      }
      
      const applicationData: Omit<JobApplication, 'id' | 'created_at' | 'updated_at'> = {
        job_slug: jobSlug,
        job_title: jobTitle,
        applicant_name: applicantName,
        applicant_email: formData.get('email') as string,
        phone_number: formData.get('phone') as string,
        resume_path: resumePath,
        portfolio_url: formData.get('portfolio') as string,
        linkedin_profile: formData.get('linkedin') as string,
        cover_letter: formData.get('message') as string,
        years_of_experience: parseInt(formData.get('experience') as string) || 0,
        current_location: formData.get('location') as string,
        expected_salary: formData.get('salary') as string,
        notice_period: formData.get('notice') as string,
        skills: (formData.get('skills') as string)?.split(',').map(s => s.trim()) || [],
      };

      await submitJobApplication(applicationData);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while submitting your application');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 bg-white/5 rounded-xl border border-white/10">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-white mb-2">Application Submitted!</h3>
        <p className="text-gray-300 text-lg">
          Thank you for your interest in {jobTitle}. We&apos;ll review your application and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      className={clsx(
        "mx-auto grid w-full gap-8",
        containerClassName ? containerClassName : "max-w-3xl",
        loading && "pointer-events-none opacity-75"
      )}
      onSubmit={handleSubmit}
    >
      {error && (
        <div className="bg-red-500/15 border border-red-500/30 rounded-md p-4" aria-live="polite">
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Your details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Your details</h3>
          <span className="text-xs uppercase tracking-wider text-gray-400">Section 1</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-200">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-200">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@example.com"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-200">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 9876543210"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="location" className="text-sm font-medium text-gray-200">
              Current Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Mumbai, India"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>
        </div>
      </div>

      <div className="h-px bg-white/10" />

      {/* Resume upload */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Resume</h3>
          <span className="text-xs uppercase tracking-wider text-gray-400">PDF, DOC, DOCX</span>
        </div>
        <div className="relative rounded-xl border border-dashed border-white/15 bg-white/5 p-4 hover:bg-white/10 transition-colors">
          <input
            id="resume"
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-cyan-500/20 file:text-cyan-400 hover:file:bg-cyan-500/30 file:cursor-pointer cursor-pointer rounded-lg border border-white/10 bg-transparent px-4 py-3 focus:border-cyan-400 focus:outline-none"
          />
          {selectedFile && (
            <p className="mt-2 text-xs text-gray-400">
              Selected: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
            </p>
          )}
        </div>
      </div>

      <div className="h-px bg-white/10" />

      {/* Links */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <label htmlFor="portfolio" className="text-sm font-medium text-gray-200">
              Portfolio URL
            </label>
            <input
              id="portfolio"
              name="portfolio"
              type="url"
              placeholder="https://yourportfolio.com"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="linkedin" className="text-sm font-medium text-gray-200">
              LinkedIn Profile
            </label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/..."
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>
        </div>
      </div>

      <div className="h-px bg-white/10" />

      {/* Professional details */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Professional details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="grid gap-2">
            <label htmlFor="experience" className="text-sm font-medium text-gray-200">
              Years of Experience
            </label>
            <input
              id="experience"
              name="experience"
              type="number"
              min="0"
              max="50"
              placeholder="2"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="salary" className="text-sm font-medium text-gray-200">
              Expected Salary
            </label>
            <input
              id="salary"
              name="salary"
              type="text"
              placeholder=""
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="notice" className="text-sm font-medium text-gray-200">
              Notice Period
            </label>
            <input
              id="notice"
              name="notice"
              type="text"
              placeholder="30 days"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>
        </div>
      </div>

      <div className="h-px bg-white/10" />

      {/* Additional information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Additional information</h3>
        <div className="grid gap-2">
          <label htmlFor="skills" className="text-sm font-medium text-gray-200">
            Skills (comma separated)
          </label>
          <input
            id="skills"
            name="skills"
            type="text"
            placeholder="React, Node.js, Python, MongoDB"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          />
          <p className="text-xs text-gray-400">For example: React, TypeScript, Tailwind, Node.js</p>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-200">
            Cover Letter / Why are you a good fit? *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us why you're excited about this role and how your experience makes you a great fit..."
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
