import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { getJobBySlug } from "@/lib/supabase";
import JobDetailClient from "@/components/JobDetailClient";
// no Link usage in this layout

interface PageProps {
  params: Promise<{ slug: string }>;
}


export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const responsibilities: string[] = Array.isArray(job.responsibilities) ? job.responsibilities : [];
  const requirements: string[] = Array.isArray(job.requirements) ? job.requirements : [];
  const whoCanApply: string[] = Array.isArray(job.who_can_apply) ? job.who_can_apply : [];
  const perks: string[] = Array.isArray(job.perks) ? job.perks : [];

  return (
    <>
      <main className="relative flex justify-center text-white pt-24 pb-10 bg-[#00091A] min-h-screen">
        <div className="w-[1440px] min-h-[2643px] relative bg-slate-950 overflow-visible">
          <div className="w-[1456.83px] h-56 left-[-8.42px] top-0 absolute bg-gradient-to-b from-blue-400/40 to-blue-600/40 blur-[207.27px]" />
          <div className="w-[628px] h-64 left-[665px] top-[1365px] absolute origin-top-left rotate-180 opacity-40 bg-blue-400 blur-[163.46px]" />
          <div className="w-[628px] h-64 left-[1403px] top-[1691px] absolute origin-top-left rotate-180 opacity-40 bg-blue-400 blur-[163.46px]" />
          <div className="w-[628px] h-64 left-[838px] top-[2114px] absolute origin-top-left rotate-180 opacity-40 bg-blue-400 blur-[163.46px]" />
          <div className="w-[751px] h-80 left-[1325px] top-[988px] absolute origin-top-left rotate-180 opacity-40 bg-blue-400 blur-[163.46px]" />

          {/* Removed large decorative glow box for cleaner layout */}

          {/* Header Title */}
          <div className="w-[1440px] left-0 top-[231px] absolute inline-flex flex-col justify-center items-center gap-14">
            <div className="justify-start text-white text-5xl font-bold [font-family:var(--font-sf-pro)]">
              {job.title}
            </div>

            {/* Two column content */}
            <div className="inline-flex justify-start items-start flex-wrap content-start">
              {/* Left Column */}
              <div className="w-[870px] inline-flex flex-col justify-start items-end">
                {/* Job Description */}
                <div className="self-stretch pl-20 pr-14 pt-14 pb-10 border-b border-white/10 flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch justify-start text-white text-xl leading-loose [font-family:var(--font-sf-pro)]">Job Description</div>
                  <div className="self-stretch justify-start text-neutral-400 text-base leading-normal [font-family:var(--font-sf-pro)]">{job.description}</div>
                </div>

                {/* Responsibilities */}
                {(responsibilities.length > 0) && (
                  <div className="self-stretch pl-20 pr-14 pt-10 pb-14 flex flex-col justify-start items-start gap-6 overflow-hidden">
                    <div className="self-stretch flex flex-col justify-start items-start gap-5">
                      <div className="self-stretch justify-start text-white text-xl leading-loose [font-family:var(--font-sf-pro)]">Responsiblities</div>
                      <div className="self-stretch justify-start text-neutral-400 text-base leading-normal [font-family:var(--font-sf-pro)]">
                        {responsibilities.map((r, i) => (
                          <span key={i}>{r}{i < responsibilities.length - 1 ? <><br/></> : null}</span>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    {(requirements.length > 0) && (
                      <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                        <div className="self-stretch justify-start text-white text-xl leading-loose [font-family:var(--font-sf-pro)]">Requirements</div>
                        <div className="self-stretch justify-start text-neutral-400 text-base leading-normal [font-family:var(--font-sf-pro)]">
                          {requirements.map((req, i) => (
                            <span key={i}>{req}{i < requirements.length - 1 ? <><br/></> : null}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Who can apply */}
                    {(whoCanApply.length > 0) && (
                      <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                        <div className="self-stretch justify-start text-white text-xl leading-loose [font-family:var(--font-sf-pro)]">Who can apply</div>
                        <div className="self-stretch justify-start text-neutral-400 text-base leading-normal [font-family:var(--font-sf-pro)]">
                          {whoCanApply.map((w, i) => (
                            <span key={i}>{w}{i < whoCanApply.length - 1 ? <><br/></> : null}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="w-[570px] h-[895px] border-l border-white/10 inline-flex flex-col justify-center items-center">
                <div className="self-stretch pl-14 pr-20 py-14 flex flex-col justify-start items-start gap-10">
                  {/* Meta chips */}
                  <div className="self-stretch inline-flex justify-start items-start gap-5 flex-wrap content-start">
                    {job.location && (
                      <div className="px-2.5 py-[5px] bg-white/5 rounded-lg flex justify-center items-center gap-1.5">
                        <Image src="/icons/mdi_location.svg" alt="Location" width={25} height={25} />
                        <div className="justify-start text-white/50 text-sm [font-family:var(--font-sf-pro)]">{job.location}</div>
                      </div>
                    )}
                    {job.salary_range && (
                      <div className="px-2.5 py-[5px] bg-white/5 rounded-lg flex justify-center items-center gap-1.5">
                        <Image src="/icons/tdesign_money-filled.svg" alt="Salary" width={25} height={25} />
                        <div className="justify-start text-white/50 text-sm [font-family:var(--font-sf-pro)]">{job.salary_range}{job.salary_range && !job.salary_range.includes('/month') ? '/month' : ''}</div>
                      </div>
                    )}
                    {job.type && (
                      <div className="px-2.5 py-[5px] bg-white/5 rounded-lg flex justify-center items-center gap-1.5">
                        <Image src="/icons/Group.svg" alt="Type" width={21} height={23} />
                        <div className="justify-start text-white/50 text-sm [font-family:var(--font-sf-pro)]">{job.type}{job.duration ? ` (${job.duration})` : ''}</div>
                      </div>
                    )}
                    <div className="px-2.5 py-[5px] bg-white/5 rounded-lg flex justify-center items-center gap-1.5">
                      <Image src="/icons/material-symbols_group.svg" alt="Openings" width={25} height={25} />
                      <div className="justify-start text-white/50 text-sm [font-family:var(--font-sf-pro)]">{job.openings} Opening{job.openings > 1 ? 's' : ''}</div>
                    </div>
                  </div>

                  {/* Skills */}
                  {(job.skills_required && job.skills_required.length > 0) && (
                    <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                      <div className="self-stretch justify-start text-white text-xl leading-loose [font-family:var(--font-sf-pro)]">Skills required</div>
                      <div className="self-stretch inline-flex justify-start items-start gap-2.5 flex-wrap content-start">
                        {job.skills_required.map((s, i) => (
                          <div key={i} className="px-2.5 py-[5px] bg-white/5 rounded-md flex justify-center items-center gap-2.5">
                            <div className="justify-start text-blue-400 text-2xl [font-family:var(--font-sf-pro)]">{s}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Perks and Additional Info */}
                <div className="self-stretch flex-1 pl-14 pr-20 flex flex-col justify-start items-start gap-6">
                  {(perks.length > 0) && (
                    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                      <div className="self-stretch justify-start text-white text-xl leading-loose [font-family:var(--font-sf-pro)]">Perks</div>
                      <div className="self-stretch justify-start text-neutral-400 text-base leading-normal [font-family:var(--font-sf-pro)]">
                        {perks.map((p, i) => (
                          <span key={i}>{p}{i < perks.length - 1 ? <><br/></> : null}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {job.additional_info && (
                    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                      <div className="self-stretch justify-start text-white text-xl leading-loose [font-family:var(--font-sf-pro)]">Additional Information</div>
                      <div className="self-stretch justify-start text-neutral-400 text-base leading-normal [font-family:var(--font-sf-pro)]">{job.additional_info}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Apply CTA */}
            <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
              <a href="#apply" className="px-7 py-4 bg-white rounded-xl inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-black text-sm [font-family:var(--font-sf-pro)]">Apply</div>
                <Image src="/icons/arrow_up_right.svg" alt="Arrow up right" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Top nav preview removed; global Navbar handles navigation */}
        </div>
      </main>

      {/* Application form anchor */}
      <div id="apply" className="max-w-5xl mx-auto w-full px-6 -mt-16">
        <Suspense fallback={<div className="text-center py-8 text-gray-300">Loading application form...</div>}>
          <JobDetailClient jobSlug={job.slug} jobTitle={job.title} autoOpenFromHash noSectionChrome />
        </Suspense>
      </div>

      <Footer />
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
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