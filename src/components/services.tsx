import Image from "next/image";
import Link from "next/link";

type ServiceSection = {
  id: string;
  title: string;
  backgroundLabel: string;
  description: string;
  image: string;
  linkLabel: string;
  linkHref: string;
  backgroundImage?: string;
  reverse?: boolean;
  gradients?: string[];
  contentSpacing?: string;
};

const serviceSections: ServiceSection[] = [
  {
    id: "saas-development",
    title: "SaaS Development",
    backgroundLabel: "SaaS",
    description:
      "Build intelligent platforms that anticipate needs and automate growth. We engineer sophisticated, AI-powered Software-as-a-Service solutions that deliver hyper-personalized user experiences and provide deep, predictive insights to drive your business forward.",
    image: "/images/saas.png",
    linkLabel: "Check out Signalmint casestudy",
    linkHref: "#",
    gradients: [
      "pointer-events-none absolute -left-32 top-6 h-56 w-56 rounded-full bg-sky-500/30 blur-[140px]",
      "pointer-events-none absolute right-24 -bottom-16 h-72 w-72 rounded-full bg-blue-700/25 blur-[160px]",
    ],
    contentSpacing: "lg:pr-24",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    backgroundLabel: "AI",
    backgroundImage: "/images/AI.png",
    description:
      "De-risk your vision and launch with a product the market is waiting for. Our strategic MVP development process focuses on validating your core idea quickly and efficiently, ensuring you build a product that achieves market fit, attracts investors, and creates a foundation for scalable growth.",
    image: "/images/Automation.png",
    linkLabel: "Check out Leads generation casestudy",
    linkHref: "#",
    reverse: true,
    gradients: [
      "pointer-events-none absolute -right-32 -top-12 h-60 w-60 rounded-full bg-cyan-400/25 blur-[150px]",
      "pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[150px]",
    ],
    contentSpacing: "lg:pl-24",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    backgroundLabel: "APP",
    backgroundImage: "/images/APP.png",
    description:
      "Deliver intuitive, engaging mobile applications that your users will love. From native iOS and Android to cross-platform solutions, we create mobile experiences that are fast, user-friendly, and designed to become an indispensable part of your customers' daily lives.",
    image: "/images/mobile.png",
    linkLabel: "Check out Mobile casestudy",
    linkHref: "#",
    gradients: [
      "pointer-events-none absolute -left-20 -top-10 h-72 w-72 rounded-full bg-blue-400/25 blur-[160px]",
      "pointer-events-none absolute right-10 bottom-0 h-64 w-64 rounded-full bg-indigo-500/25 blur-[150px]",
    ],
    contentSpacing: "lg:pr-24",
  },
  {
    id: "landing-page-development",
    title: "Landing Page Development",
    backgroundLabel: "LANDING",
    backgroundImage: "/images/LANDING.png",
    description:
      "Create high-performance, secure web experiences that build trust and drive conversion. We develop robust, scalable, and visually compelling websites and web applications that serve as the secure, reliable digital front door for your brand.",
    image: "/images/landingpage.png",
    linkLabel: "Check out Layers casestudy",
    linkHref: "#",
    reverse: true,
    gradients: [
      "pointer-events-none absolute -right-28 top-8 h-60 w-60 rounded-full bg-sky-500/25 blur-[150px]",
      "pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-blue-600/25 blur-[160px]",
    ],
    contentSpacing: "lg:pl-24",
  },
];

export default function Services() {
  return (
    <section className="relative w-full py-32 text-white" style={{ backgroundColor: '#00020d' }}>
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-20 px-6 md:px-10 lg:px-12">
        <header className="flex flex-col items-start gap-6">
          <span className="text-5xl inline-flex bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-400 bg-clip-text font-semibold uppercase tracking-[0.4em] text-transparent">
            Our Services
          </span>
          
        </header>

        {serviceSections.map((service) => {
          const isReversed = service.reverse;

          return (
            <article
              key={service.id}
            className={`relative flex flex-col gap-14 py-6 md:py-10 lg:items-center lg:gap-32 ${
              isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className={`relative z-10 flex-1 ${service.contentSpacing ?? ""}`}>
                <div className="relative mt-8">
                  {service.backgroundImage ? (
                    <div className="pointer-events-none absolute -top-16 -left-10 hidden h-[18rem] w-[18rem] select-none opacity-40 mix-blend-screen md:block">
                      <Image
                        src={service.backgroundImage}
                        alt=""
                        width={320}
                        height={320}
                        className="h-full w-full object-contain"
                        priority
                      />
                    </div>
                  ) : (
                    <span className="pointer-events-none absolute -top-10 text-8xl font-black tracking-tight text-white/3 mix-blend-screen md:-top-16 md:text-[8.5rem] lg:-left-6 lg:text-[10rem]">
                      {service.backgroundLabel}
                    </span>
                  )}
                  <h2 className="relative text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                    {service.title}
                  </h2>
                </div>

                <p className="mt-10 max-w-xl text-lg leading-8 text-white/70">
                  {service.description}
                </p>

                <Link
                  href={service.linkHref}
                  className="mt-10 inline-flex items-center text-base font-semibold text-sky-300 transition hover:text-sky-200"
                >
                  {service.linkLabel}
                  <svg
                    aria-hidden="true"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.5 11.5 11 5M6 4.5h5.5V10"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.4}
                    />
                  </svg>
                </Link>
              </div>

              <div className="flex flex-1 items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={720}
                  height={540}
                  className="h-auto w-full rounded-2xl"
                  priority
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}