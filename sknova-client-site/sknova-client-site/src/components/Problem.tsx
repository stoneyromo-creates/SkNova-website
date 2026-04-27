"use client";

import { useInView } from "@/hooks/useInView";

const pains = [
  {
    icon: "📉",
    title: "No leads from your site",
    body: "Traffic that never turns into calls or inquiries is just wasted money on ads and SEO.",
  },
  {
    icon: "😬",
    title: "It looks outdated",
    body: "A dated site kills trust before a visitor reads a single word. Customers judge in under 3 seconds.",
  },
  {
    icon: "📱",
    title: "Broken on mobile",
    body: "Over 60% of web traffic is mobile. If your site is clunky on a phone, you're losing half your customers.",
  },
];

export default function Problem() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-brand-section border-y border-brand-border/40 py-20 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p
            className={`text-brand-gold text-sm font-black uppercase tracking-widest mb-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            The Problem
          </p>
          <h2
            className={`font-syne font-black text-4xl md:text-5xl text-brand-text mb-5 leading-tight transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "80ms" }}
          >
            Most websites don&apos;t bring in customers.
          </h2>
          <p
            className={`text-lg text-brand-muted leading-relaxed transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "160ms" }}
          >
            They look decent, but they don&apos;t convert visitors into calls or sales. That&apos;s why most small businesses struggle online.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {pains.map((p, i) => (
            <div
              key={i}
              className={`bg-brand-card border border-brand-border rounded-2xl p-7 hover:border-brand-gold/25 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${240 + i * 100}ms`, transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-syne font-black text-brand-text text-lg mb-2">{p.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Transition nudge */}
        <div
          className={`text-center mt-12 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "560ms" }}
        >
          <p className="text-brand-muted text-base font-medium">
            Sound familiar?{" "}
            <a href="#contact" className="text-brand-gold font-bold hover:text-brand-gold-light underline underline-offset-4 decoration-brand-gold/40 decoration-1 transition-colors">
              We can fix it — fast.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
