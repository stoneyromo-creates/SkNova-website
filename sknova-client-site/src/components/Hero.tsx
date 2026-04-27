"use client";

import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-brand-bg pt-36 pb-28 px-6 overflow-hidden">
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 50% 18%, rgba(201,162,74,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-brand-card border border-brand-gold/20 text-brand-muted text-xs font-semibold px-5 py-2.5 rounded-full mb-10 animate-fade-in tracking-[0.12em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
          Taking New Clients — Dallas, TX
        </div>

        {/* Headline */}
        <h1
          className="font-syne font-black text-5xl sm:text-6xl md:text-7xl text-brand-text leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Your Website Should Be
          <br />
          <span className="text-gold-gradient">Making You Money.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl text-brand-muted max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "220ms" }}
        >
          If it&apos;s not bringing in calls, leads, or sales — it&apos;s not doing its job.{" "}
          <strong className="text-brand-text font-semibold">We fix that.</strong>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: "340ms" }}
        >
          <a
            href="#contact"
            className="btn-gold-outline inline-flex items-center justify-center gap-2 font-black text-lg px-10 py-4 rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-transform duration-150"
          >
            Get My Website Built
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-brand-border text-brand-muted hover:border-brand-gold/30 hover:text-brand-text font-bold text-lg px-10 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
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
            <span key={item} className="flex items-center gap-2 text-brand-muted font-medium">
              <svg className="w-3.5 h-3.5 text-brand-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
          ))}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 font-bold text-brand-gold hover:text-brand-gold-light transition-colors"
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
