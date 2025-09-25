"use client";

import { useState } from "react";
import { Mail, Send, MessageSquare, User } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "f7a528e9-d257-4d81-8583-af838851cacc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.currentTarget.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section
        id="contact"
        className="relative w-full py-24 bg-[url('/images/contact_bg.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay"
    >

        {/* <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#00020D] via-[#00020D]/80 to-transparent pointer-events-none"></div> */}

        <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-[var(--font-sf-pro)] bg-gradient-to-b from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight mb-6">
            Let&apos;s Talk  Let&apos;s Build
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to transform your ideas into reality? Contact us for innovative
            software solutions tailored to your business needs.
            </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
            {/* Left side - Contact details */}
            <div className="md:col-span-2 bg-[#00102A]/30 backdrop-blur-sm border border-white/10 p-10 rounded-3xl shadow-lg">
            <h3 className="text-xl text-white font-light mb-10">
                Contact Information
            </h3>

            <div className="space-y-10">
                <div className="flex items-start group">
                <div className="bg-blue-600/20 group-hover:bg-blue-600/30 p-4 rounded-xl mr-5 transition-all">
                    <Mail className="text-blue-300 w-5 h-5" />
                </div>
                <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white text-lg font-medium">
                    contact@valnee.com
                    </p>
                </div>
                </div>

                <div className="flex items-start group">
                <div className="bg-blue-600/20 group-hover:bg-blue-600/30 p-4 rounded-xl mr-5 transition-all">
                    <MessageSquare className="text-blue-300 w-5 h-5" />
                </div>
                <div>
                    <p className="text-gray-400 text-sm mb-1">Live Chat</p>
                    <p className="text-white text-lg font-medium">
                    Available Mon-Fri, 9AM-5PM
                    </p>
                </div>
                </div>
            </div>

            <div className="mt-12">
                <h4 className="text-white text-md mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "youtube"].map((_, i) => (
                    <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-full bg-[#00102A]/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-blue-600/40 transition-all hover:scale-105"
                    >
                    {/* keep your existing icons here */}
                    </a>
                ))}
                </div>
            </div>
            </div>

            {/* Right side - Contact form */}
            <div className="md:col-span-3 bg-[#00102A]/30 backdrop-blur-sm border border-white/10 p-10 rounded-3xl shadow-lg">
            <h3 className="text-xl text-white font-light mb-10">
                Send us a Message
            </h3>

            <form onSubmit={onSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-[#00102A]/50 text-white border border-white/10 rounded-xl py-4 pl-12 pr-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                </div>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full bg-[#00102A]/50 text-white border border-white/10 rounded-xl py-4 pl-12 pr-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                </div>
                </div>

                <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none">
                    <MessageSquare className="text-gray-400 w-5 h-5" />
                </div>
                <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Your Message"
                    className="w-full bg-[#00102A]/50 text-white border border-white/10 rounded-xl py-4 pl-12 pr-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
                </div>

                <div>
                <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl px-8 py-4 font-medium hover:from-blue-700 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:scale-[1.02]"
                >
                    <Send className="w-5 h-5" />
                    Send Message
                </button>
                {result && (
                    <p
                    className={`mt-4 text-sm ${
                        result.includes("success")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                    >
                    {result}
                    </p>
                )}
                </div>
            </form>
            </div>
        </div>
        </div>
    </section>
    );

}
