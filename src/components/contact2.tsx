"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Contact2() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setResultMessage(null);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      formData.append("access_key", "f7a528e9-d257-4d81-8583-af838851cacc");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data?.success) {
        setResultMessage("Thanks! Your message has been sent.");
        form.reset();
      } else {
        setResultMessage("Something went wrong. Please try again.");
      }
    } catch {
      setResultMessage("Could not send right now. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section className="relative bg-[url('/images/contact_bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-[var(--font-sf-pro)] bg-gradient-to-b from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight mb-4">
            Let&apos;s Talk. Let&apos;s Build.
          </h1>
          <p className="text-gray-300/90 max-w-2xl mx-auto text-base md:text-lg">
            Big ideas deserve bold execution — we&apos;re here to make it happen.
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-5 gap-8 md:gap-12">
          {/* Left: intro + form */}
          <div className="md:col-span-3">
            {/* Intro copy */}
            <div className="p-8 md:p-10 text-left text-gray-200">
              <p className="leading-relaxed text-lg md:text-xl text-gray-300">
                Whether you&apos;re exploring an idea, need a product built from scratch, or want
                to scale what you already have, Valnee is ready to help. Our team blends
                strategy, design, AI, and development to bring your vision to life.
              </p>
            </div>
            {/* Divider below intro */}
            <div className="px-8 md:px-10">
              <div className="h-px w-full bg-gradient-to-r from-white/15 to-transparent" />
            </div>

            {/* Form */}
            <div className="mt-8 md:mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-3">Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-5 py-4 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-3">Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-5 py-4 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-3">Phone number*</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-5 py-4 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-3">Write a message...</label>
                  <textarea
                    rows={6}
                    name="message"
                    placeholder="Write a message..."
                    className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-5 py-4 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 resize-none"
                    required
                  />
                </div>
                {/* result */}
                {resultMessage && (
                  <p className="text-sm text-gray-300/90">{resultMessage}</p>
                )}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 rounded-xl bg-white text-gray-900 px-6 py-3 text-sm font-medium shadow-lg transition-all hover:bg-gray-100 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                    <Image src="/images/fa_send.svg" alt="send" width={16} height={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: contact info */}
          <div className="md:col-span-2 md:pl-10 md:border-l border-white/10">
            <div className="backdrop-blur-sm p-8 md:p-10 text-left">
              <h3 className="text-gray-100 font-semibold text-lg mb-12">Contact Information</h3>
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Image src="/images/ic_round-email.svg" alt="email" width={20} height={20} />
                  </span>
                  <div>
                    <p className="text-gray-300 font-medium">contact@valnee.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Image src="/images/Dialog.svg" alt="availability" width={20} height={20} />
                  </span>
                  <div>
                    <p className="text-gray-300 font-medium">Available Mon-Fri, 9AM–5PM</p>
                  </div>
                </div>
              </div>

              {/* inner divider */}
              <div className="my-12 h-px w-full bg-white/10" />

              <div className="space-y-8">
                <div>
                  <h4 className="text-gray-300 font-medium mb-3">Customer Support</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Our support team is available around the clock to address any concerns or
                    queries you may have.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium mb-3">Feedback and Suggestions</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We value your feedback and are continuously working to improve Valnee. Your
                    input is crucial in shaping the future of Valnee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community cards */}
        {/* <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <Image src="/icons/Github.svg" alt="GitHub" width={32} height={32} />
            </div>
            <h5 className="text-gray-200 font-medium">Github</h5>
            <p className="mt-2 text-sm text-gray-400 max-w-xs mx-auto">
              To report bugs, request features and contribute to the project.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </div>
            <h5 className="text-gray-200 font-medium">Linked In</h5>
            <p className="mt-2 text-sm text-gray-400 max-w-xs mx-auto">
              To get involved in the community, ask questions and share tips.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <Image src="/icons/x.svg" alt="X" width={32} height={32} />
            </div>
            <h5 className="text-gray-200 font-medium">X</h5>
            <p className="mt-2 text-sm text-gray-400 max-w-xs mx-auto">
              For announcements, tips and general information.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}