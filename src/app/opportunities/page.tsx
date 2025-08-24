import Image from "next/image";
import JobListItem from "@/components/JobListItem";
import Footer from "@/components/Footer";
import { getAllJobs, type Job } from "@/lib/supabase";

export default async function OpportunitiesPage() {
  let jobs: Job[] = [];
  
  try {
    jobs = await getAllJobs();
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
  }

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

      <section className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold md:text-6xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
            We&apos;re on a mission to build Software solutions that make a difference. Check out our open positions and help us shape the future.
          </p>
        </div>

        {/* Job Listings */}
        {jobs.length > 0 ? (
          <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {jobs.map((job) => (
              <JobListItem 
                key={job.slug}
                title={job.title}
                location={job.location}
                type={job.type}
                slug={job.slug}
                salary={job.salary_range || "Competitive"}
                openings={job.openings}
                shortDescription={job.short_description || job.description}
                tags={job.tags || []}
              />
            ))}
          </ul>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                No open positions at the moment
              </h3>
              <p className="text-gray-300">
                We&apos;re always looking for talented individuals. Check back soon or contact us directly.
              </p>
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don&apos;t see the right fit?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals to join our mission. Send us your resume and tell us how you&apos;d like to contribute.
            </p>
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}