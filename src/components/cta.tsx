export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#00020D] text-white px-6 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-32 h-72 w-72 rounded-full bg-blue-500/30 blur-[160px]" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-indigo-500/25 blur-[170px]" />
      </div>
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        <span className="uppercase tracking-[0.4em] text-sm text-rose-200">
          Ready to Build Something Exceptional?
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Let&apos;s turn your ideas into an immersive digital experience.
        </h2>
        <p className="text-white/70 max-w-3xl text-lg">
          Whether you&apos;re exploring new opportunities or scaling an existing product, our team is ready to collaborate and deliver high-impact solutions tailored to your goals.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 text-[#1a1033] px-6 py-2.5 rounded-md font-medium text-lg shadow-lg shadow-rose-500/20 transition hover:shadow-rose-500/40"
          >
            Get Connected
          </a>
          <a
            href="/casestudy"
            className="border border-white/60 text-white/90 px-6 py-2.5 rounded-md font-medium text-lg backdrop-blur-sm transition hover:bg-white/10"
          >
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}

