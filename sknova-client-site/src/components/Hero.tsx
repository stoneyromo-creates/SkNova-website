"use client";

import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-white pt-36 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-gray-700 text-sm font-semibold px-5 py-2 rounded-full mb-8 animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-brand-yellow border border-yellow-400" />
          Taking New Clients — Dallas, TX
        </div>

        {/* Headline */}
        <h1
          className="font-syne font-black text-5xl sm:text-6xl md:text-7xl text-brand-black leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Your Website Should Be
          <br />
          <mark className="bg-brand-yellow text-brand-black not-italic rounded-sm px-2">
            Making You Money.
          </mark>
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "220ms" }}
        >
          If it&apos;s not bringing in calls, leads, or sales — it&apos;s not doing its job.{" "}
          <strong className="text-brand-black font-bold">We fix that.</strong>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in-up"
          style={{ animationDelay: "340ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-brand-black font-black text-lg px-10 py-4 rounded-xl shadow-lg shadow-yellow-200 transition-all duration-150 hover:scale-[1.03] active:scale-[0.97]"
          >
            Get My Website Built
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-brand-black hover:bg-gray-800 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-150 hover:scale-[1.03] active:scale-[0.97]"
          >
            See Pricing
          </a>
        </div>

        {/* Trust bar */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm animate-fade-in-up"
          style={{ animationDelay: "460ms" }}
        >
          {[
            "No templates — built for you",
            "2-week turnaround",
            "Mobile-first & fast",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2 text-gray-600 font-medium">
              <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
          ))}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 font-bold text-brand-black hover:text-brand-red transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
