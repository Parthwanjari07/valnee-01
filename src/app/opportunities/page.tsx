import JobListItem from "@/components/JobListItem";
import NewFooter from "@/components/NewFooter";
import { getAllJobs, type Job } from "@/lib/supabase";
import Link from "next/link";

export default async function OpportunitiesPage() {
  let jobs: Job[] = [];
    
  try {
    jobs = await getAllJobs();
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
  }

  return (
    <>
    <main className="relative overflow-hidden bg-[#010819] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(31,98,255,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.12),_transparent_45%),radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_40%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] overflow-hidden">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[220px]" />
        <div className="absolute left-[15%] top-0 h-[320px] w-[320px] rounded-full bg-blue-600/20 blur-[180px]" />
        <div className="absolute right-[8%] top-32 h-[380px] w-[380px] rounded-full bg-indigo-500/25 blur-[200px]" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen max-w-[1180px] flex-col gap-20 px-6 pb-32 pt-32 md:px-10 lg:gap-24">
        <header className="flex flex-col items-center gap-8 text-center">
          
          <div className="relative">
            
            <h1 className="relative text-4xl font-semibold tracking-tight md:text-6xl">
              Join our team
            </h1>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-white/70">
            Dive into the AI universe with our collection of ambitious product teams. Whether you&apos;re an enthusiast or a seasoned pro, we offer a gateway to build, learn, and ship products that make an impact.
          </p>
        </header>

        <div className="relative flex flex-1 flex-col gap-12">
          <div className="pointer-events-none absolute -left-32 top-20 hidden h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[150px] lg:block" />
          <div className="pointer-events-none absolute -right-24 bottom-0 hidden h-[320px] w-[320px] rounded-full bg-sky-400/15 blur-[170px] lg:block" />

          {jobs.length > 0 ? (
            <ul className="flex flex-col gap-10">
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
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-12 text-center">
              <div className="pointer-events-none absolute -right-24 top-0 h-[340px] w-[340px] rounded-full bg-blue-500/10 blur-[150px]" />
              <h3 className="text-2xl font-semibold">No open positions at the moment</h3>
              <p className="mt-4 text-white/70">
                We&apos;re always looking for talented individuals. Check back soon or contact us directly.
              </p>
            </div>
          )}
        </div>

        <div className="relative flex justify-center">
          <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-br from-blue-500/20 via-blue-900/20 to-indigo-950/40 p-8 text-center shadow-[0_30px_110px_rgba(6,18,44,0.55)] backdrop-blur-lg">
            <div className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-400/30 blur-[140px]" />
            <div className="relative z-10 flex flex-col items-center gap-5">
              <h3 className="text-2xl font-semibold">Don&apos;t see the right fit?</h3>
              <p className="max-w-2xl text-sm leading-7 text-white/70">
                We&apos;re always looking for talented individuals to join our mission. Send us your resume and tell us how you&apos;d like to contribute.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-cyan-400/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-400/20 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <NewFooter />
    </>
  );
}