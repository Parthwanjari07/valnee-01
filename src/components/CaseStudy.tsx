"use client";
import { ArrowDown } from "lucide-react";
import React, { useState } from "react";

function CaseStudy() {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContentVisibility = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <main className="relative bg-[url('/images/contact_bg.png')] bg-cover bg-center bg-no-repeat p-8 md:p-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
        {/* Header Section */}

        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-6xl font-[var(--font-sf-pro)] bg-gradient-to-b from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight mb-4 text-shadow-2xs">
            Case study
          </h1>
          <p className="text-white max-w-7xl mx-auto text-base md:text-xl font-semibold">
            Dive deep into the AI universe with our collection of insightful
            podcasts. Explore the latest trends, breakthroughs, and discussions
            on artificial intelligence. Whether you’re an enthusiast or a
            professional, our AI podcasts offer a gateway to knowledge and
            innovation.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col space-y-40">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Sidebar */}
            <div className="md:w-1/3">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75348 18.2011C7.72056 14.5765 3.94416 10.8143 0.305928 9.78524C-0.101976 9.65415 -0.101976 9.36576 0.305928 9.22812C3.95074 8.19252 7.72056 4.43686 8.76005 0.805723C8.8719 0.405905 9.14164 0.405905 9.25349 0.805723C10.2864 4.43686 14.0628 8.19252 17.6945 9.22812C18.1024 9.35921 18.1024 9.65415 17.6945 9.78524C14.0562 10.8143 10.2798 14.5765 9.24691 18.2011C9.13506 18.6075 8.86532 18.6075 8.75348 18.2011Z"
                      fill="#0094FF"
                    />
                  </svg>

                  <span className="font-thin text-xl text-blue-500">
                    Lorem ipsum
                  </span>
                </div>

                {/* 2. Main Heading */}
                <h2 className="text-2xl font-semibold text-white">
                  Lorem ipsum dolor sit amet, consectetur
                </h2>

                {/* 3. Paragraph Description */}
                <p className="text-slate-200 font-thin leading-5 text-lg mb-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* 4. Link with Copy Icon */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white transition-colors hover:text-white"
                >
                  {/* <Layers size={16} /> */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.6 12H14.4C13.0745 12 12 13.0745 12 14.4V25.6C12 26.9255 13.0745 28 14.4 28H25.6C26.9255 28 28 26.9255 28 25.6V14.4C28 13.0745 26.9255 12 25.6 12Z"
                      fill="url(#paint0_linear_2292_116741)"
                      fillOpacity="0.24"
                      stroke="white"
                    />
                    <path
                      opacity="0.2"
                      d="M10.4 24C9.76348 24 9.15303 23.7471 8.70294 23.2971C8.25286 22.847 8 22.2365 8 21.6V10.4C8 9.76348 8.25286 9.15303 8.70294 8.70294C9.15303 8.25286 9.76348 8 10.4 8H21.6C22.2365 8 22.847 8.25286 23.2971 8.70294C23.7471 9.15303 24 9.76348 24 10.4"
                      stroke="white"
                    />
                    <path
                      opacity="0.2"
                      d="M6.4 20C5.76348 20 5.15303 19.7471 4.70294 19.2971C4.25286 18.847 4 18.2365 4 17.6V6.4C4 5.76348 4.25286 5.15303 4.70294 4.70294C5.15303 4.25286 5.76348 4 6.4 4H17.6C18.2365 4 18.847 4.25286 19.2971 4.70294C19.7471 5.15303 20 5.76348 20 6.4"
                      stroke="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2292_116741"
                        x1="20"
                        y1="12"
                        x2="20"
                        y2="28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0" />
                        <stop offset="1" stop-color="white" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="text-md">Lorem ipsum dolor</span>
                </a>
              </div>
            </div>

            {/* Right Content */}
            <article className="md:w-2/3 px-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Lorem ipsum dolor sit amet, consectetur
              </h2>
              <div className="relative">
                <div
                  className={`space-y-6 text-gray-400 leading-6 prose prose-invert prose-p:text-gray-400 text-xl max-w-none transition-all duration-700 ease-in-out
                            ${
                              showFullContent
                                ? "max-h-full opacity-100"
                                : "max-h-96 overflow-hidden"
                            }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  {showFullContent && (
                    <>
                      <p>
                        This is the additional content that appears when you
                        click &quot;Read more&quot;. It simulates the extended
                        part of the article. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                      <p>
                        More extended content: Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <p>
                        Final section of extended content. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </p>
                    </>
                  )}
                </div>
                {!showFullContent && (
                  <div>
                    <div
                      className="text-center w-full  absolute bottom-0 left-1/2 -translate-x-1/2 z-5 pt-7 pb-4"
                      style={{
                        backdropFilter: `blur(1.5px)`,
                      }}
                    />
                  </div>
                )}
              </div>
              {!showFullContent && (
                <button
                  onClick={toggleContentVisibility}
                  className="-mt-4 relative left-[40%] z-5 bg-white hover:bg-white/95 border border-white/10 text-black font-semibold py-3 px-6 rounded-lg flex items-center gap-3 transition-all duration-300"
                >
                  Read more
                  <ArrowDown className="w-3 h-3" />
                </button>
              )}
            </article>
          </div>
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Sidebar */}
            <div className="md:w-1/3">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75348 18.2011C7.72056 14.5765 3.94416 10.8143 0.305928 9.78524C-0.101976 9.65415 -0.101976 9.36576 0.305928 9.22812C3.95074 8.19252 7.72056 4.43686 8.76005 0.805723C8.8719 0.405905 9.14164 0.405905 9.25349 0.805723C10.2864 4.43686 14.0628 8.19252 17.6945 9.22812C18.1024 9.35921 18.1024 9.65415 17.6945 9.78524C14.0562 10.8143 10.2798 14.5765 9.24691 18.2011C9.13506 18.6075 8.86532 18.6075 8.75348 18.2011Z"
                      fill="#0094FF"
                    />
                  </svg>

                  <span className="font-thin text-xl text-blue-500">
                    Lorem ipsum
                  </span>
                </div>

                {/* 2. Main Heading */}
                <h2 className="text-2xl font-semibold text-white">
                  Lorem ipsum dolor sit amet, consectetur
                </h2>

                {/* 3. Paragraph Description */}
                <p className="text-slate-200 font-thin leading-5 text-lg mb-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* 4. Link with Copy Icon */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white transition-colors hover:text-white"
                >
                  {/* <Layers size={16} /> */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.6 12H14.4C13.0745 12 12 13.0745 12 14.4V25.6C12 26.9255 13.0745 28 14.4 28H25.6C26.9255 28 28 26.9255 28 25.6V14.4C28 13.0745 26.9255 12 25.6 12Z"
                      fill="url(#paint0_linear_2292_116741)"
                      fill-opacity="0.24"
                      stroke="white"
                    />
                    <path
                      opacity="0.2"
                      d="M10.4 24C9.76348 24 9.15303 23.7471 8.70294 23.2971C8.25286 22.847 8 22.2365 8 21.6V10.4C8 9.76348 8.25286 9.15303 8.70294 8.70294C9.15303 8.25286 9.76348 8 10.4 8H21.6C22.2365 8 22.847 8.25286 23.2971 8.70294C23.7471 9.15303 24 9.76348 24 10.4"
                      stroke="white"
                    />
                    <path
                      opacity="0.2"
                      d="M6.4 20C5.76348 20 5.15303 19.7471 4.70294 19.2971C4.25286 18.847 4 18.2365 4 17.6V6.4C4 5.76348 4.25286 5.15303 4.70294 4.70294C5.15303 4.25286 5.76348 4 6.4 4H17.6C18.2365 4 18.847 4.25286 19.2971 4.70294C19.7471 5.15303 20 5.76348 20 6.4"
                      stroke="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2292_116741"
                        x1="20"
                        y1="12"
                        x2="20"
                        y2="28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0" />
                        <stop offset="1" stop-color="white" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="text-md">Lorem ipsum dolor</span>
                </a>
              </div>
            </div>

            {/* Right Content */}
            <article className="md:w-2/3 px-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Lorem ipsum dolor sit amet, consectetur
              </h2>
              <div className="relative">
                <div
                  className={`space-y-6 text-gray-400 leading-6 prose prose-invert prose-p:text-gray-400 text-xl max-w-none transition-all duration-700 ease-in-out
                            ${
                              showFullContent
                                ? "max-h-full opacity-100"
                                : "max-h-96 overflow-hidden"
                            }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  {showFullContent && (
                    <>
                      <p>
                        This is the additional content that appears when you
                        click &quot;Read more&quot;. It simulates the extended
                        part of the article. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                      <p>
                        More extended content: Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <p>
                        Final section of extended content. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </p>
                    </>
                  )}
                </div>
                {!showFullContent && (
                  <div>
                    <div
                      className="text-center w-full  absolute bottom-0 left-1/2 -translate-x-1/2 z-5 pt-7 pb-4"
                      style={{
                        backdropFilter: `blur(1.5px)`,
                      }}
                    />
                  </div>
                )}
              </div>
              {!showFullContent && (
                <button
                  onClick={toggleContentVisibility}
                  className="-mt-4 relative left-[40%] z-5 bg-white hover:bg-white/95 border border-white/10 text-black font-semibold py-3 px-6 rounded-lg flex items-center gap-3 transition-all duration-300"
                >
                  Read more
                  <ArrowDown className="w-3 h-3" />
                </button>
              )}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CaseStudy;
