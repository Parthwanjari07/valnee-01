import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import { MapPin, Users, Calendar, DollarSign, Timer, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { getJobBySlug } from "@/lib/supabase";
import JobDetailClient from "@/components/JobDetailClient";
import Link from "next/link";

interface JobDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const formatApplyBy = (dateString: string | null | undefined) => {
    if (!dateString) return null;
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <>
    <main className="relative min-h-screen bg-[#00091A] pb-20 pt-32 text-white">
      {/* Decorative Background */}
      <Image
        src="/images/gridbg.png"
        alt="background grid"
        fill
        className="pointer-events-none select-none object-cover opacity-10"
        priority
      />

      {/* Sparkles effect */}
      <div className="absolute inset-0 h-1/3 w-full pointer-events-none">
        <Image
          src="/images/sparkles.png"
          alt="sparkles"
          fill
          className="object-cover object-top opacity-20"
          priority
        />
      </div>

      {/* Back Button */}
      <div className="absolute top-8 left-6 z-20">
        <Link
          href="/opportunities"
          aria-label="Back to opportunities"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-cyan-400 border border-cyan-500/30 font-medium transition-colors shadow"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <article className="space-y-12">
          {/* Job Header */}
          <header className="text-center space-y-8 pb-8 border-b border-white/10">
            <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
              {job.title}
            </h1>
            
            {/* Job Meta */}
            <div className="flex flex-wrap justify-center gap-8 text-base text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">{job.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">{job.type}</span>
              </div>
              {job.salary_range && (
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">{job.salary_range}</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">{job.openings} opening{job.openings > 1 ? 's' : ''}</span>
              </div>
              {job.apply_by && (
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Apply by {formatApplyBy(job.apply_by)}</span>
                </div>
              )}
            </div>
          </header>

          {/* Job Description */}
          <section className="space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white">About this role</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {job.description}
            </p>
          </section>

          {/* Job Details (Horizontal Alignment) */}
          {(job.start_date || job.duration || job.salary_range) && (
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex flex-wrap gap-12 justify-center">
                {job.start_date && (
                  <div className="flex flex-col items-center min-w-[160px]">
                    <h3 className="text-xl font-semibold text-white mb-3">Start date</h3>
                    <p className="text-lg text-gray-300 font-medium">{job.start_date}</p>
                  </div>
                )}
                {job.duration && (
                  <div className="flex flex-col items-center min-w-[160px]">
                    <h3 className="text-xl font-semibold text-white mb-3">Duration</h3>
                    <p className="text-lg text-gray-300 font-medium">
                      {job.duration}
                      {job.duration && !/month|year|week|day/i.test(job.duration) && (
                        <span className="ml-1 text-gray-400">months</span>
                      )}
                    </p>
                  </div>
                )}
                {job.salary_range && (
                  <div className="flex flex-col items-center min-w-[160px]">
                    <h3 className="text-xl font-semibold text-white mb-3">Salary</h3>
                    <p className="text-lg text-gray-300 font-medium">
                      {job.salary_range}
                      <span className="ml-1 text-gray-400">/month</span>
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-10">
              {/* Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Responsibilities</h3>
                  <ul className="space-y-4">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-4 text-gray-300">
                        <span className="text-cyan-400 mt-2 text-lg">•</span>
                        <span className="text-lg leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Requirements */}
              {job.requirements && job.requirements.length > 0 && (
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Requirements</h3>
                  <ul className="space-y-4">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-4 text-gray-300">
                        <span className="text-cyan-400 mt-2 text-lg">•</span>
                        <span className="text-lg leading-relaxed">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Who Can Apply */}
              {job.who_can_apply && job.who_can_apply.length > 0 && (
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Who can apply</h3>
                  <ul className="space-y-4">
                    {job.who_can_apply.map((criteria, index) => (
                      <li key={index} className="flex items-start gap-4 text-gray-300">
                        <span className="text-cyan-400 mt-2 text-lg">•</span>
                        <span className="text-lg leading-relaxed">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {/* Skills Required */}
              {job.skills_required && job.skills_required.length > 0 && (
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Skills & tools required</h3>
                  <div className="flex flex-wrap gap-3">
                    {job.skills_required.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/10 text-cyan-400 border border-cyan-500/30 rounded-full text-base font-medium hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Perks */}
              {job.perks && job.perks.length > 0 && (
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Perks</h3>
                  <ul className="space-y-4">
                    {job.perks.map((perk, index) => (
                      <li key={index} className="flex items-start gap-4 text-gray-300">
                        <span className="text-cyan-400 mt-2 text-lg">•</span>
                        <span className="text-lg leading-relaxed">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Additional Info */}
              {job.additional_info && (
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Additional Information</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{job.additional_info}</p>
                </section>
              )}
            </div>
          </div>

          {/* Client-side Application Form */}
          <Suspense fallback={<div className="text-center py-8 text-gray-300">Loading application form...</div>}>
            <JobDetailClient jobSlug={job.slug} jobTitle={job.title} />
          </Suspense>
        </article>
      </div>
    </main>
    <Footer />
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  
  if (!job) {
    return {
      title: 'Job Not Found',
    };
  }

  return {
    title: `${job.title} - Valnee Solutions`,
    description: job.short_description || job.description,
  };
}