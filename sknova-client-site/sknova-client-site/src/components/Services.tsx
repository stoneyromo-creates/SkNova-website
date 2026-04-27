"use client";

import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Websites That Generate Leads",
    body: "A custom site built around your sales process — every page designed to turn visitors into inquiries.",
    outcome: "More calls & contact form fills",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Landing Pages That Convert Traffic",
    body: "Send paid traffic or social media visitors to pages built specifically to capture leads and close sales.",
    outcome: "Higher ROI on ad spend",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Redesigns That Fix Low Performance",
    body: "Already have a site that isn't working? We rebuild it for conversions without losing your SEO or existing traffic.",
    outcome: "Turn an old site into a sales tool",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Funnels for Booking & Contact",
    body: "We build and connect booking systems, contact forms, and call-to-action flows that automatically fill your calendar.",
    outcome: "Booked appointments on autopilot",
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="bg-brand-bg py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p
            className={`text-brand-gold text-sm font-black uppercase tracking-widest mb-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            What We Build
          </p>
          <h2
            className={`font-syne font-black text-4xl md:text-5xl text-brand-text mb-4 leading-tight transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "80ms" }}
          >
            Every Service Has One Goal:
            <br />
            <span className="text-gold-gradient">Get You Customers</span>
          </h2>
          <p
            className={`text-lg text-brand-muted max-w-xl mx-auto transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "160ms" }}
          >
            We don&apos;t build pretty websites for vanity. We build sites that work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group bg-brand-card border border-brand-border rounded-2xl p-8 hover:border-brand-gold/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${240 + i * 90}ms`, transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease" }}
            >
              <div className="w-14 h-14 rounded-xl bg-brand-section border border-brand-border group-hover:border-brand-gold/30 group-hover:text-brand-gold text-brand-muted flex items-center justify-center mb-5 transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="font-syne font-black text-brand-text text-xl mb-3">{s.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-5">{s.body}</p>
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold px-4 py-2 rounded-full">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {s.outcome}
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div
          className={`mt-14 text-center transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "620ms" }}
        >
          <p className="text-brand-muted text-lg font-medium mb-5">Ready to get more customers?</p>
          <a
            href="#contact"
            className="btn-gold-outline inline-flex items-center gap-2 font-black px-8 py-4 rounded-xl text-lg hover:scale-[1.03] active:scale-[0.97] transition-transform duration-150"
          >
            Start My Website
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
