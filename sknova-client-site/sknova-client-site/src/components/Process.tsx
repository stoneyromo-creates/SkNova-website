"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  {
    num: "01",
    title: "We Find What's Not Working",
    body: "We look at your current site, your competitors, and your goals. If you don't have a site yet — we start from scratch with a clear plan.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "We Plan for Conversions",
    body: "Every page, every button, every headline is mapped to one purpose: getting you calls, leads, or sales.",
    icon: "📐",
  },
  {
    num: "03",
    title: "We Build It Fast",
    body: "Most projects are live in under 2 weeks. You get updates throughout — no silence, no surprises.",
    icon: "⚡",
  },
  {
    num: "04",
    title: "You Get Customers",
    body: "A site that works around the clock. While you focus on running your business, your website is out there closing deals.",
    icon: "💰",
  },
];

export default function Process() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="bg-brand-section border-y border-brand-border/40 py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p
            className={`text-brand-gold text-sm font-black uppercase tracking-widest mb-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            How It Works
          </p>
          <h2
            className={`font-syne font-black text-4xl md:text-5xl text-brand-text mb-4 leading-tight transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "80ms" }}
          >
            Simple. Fast. Done.
          </h2>
          <p
            className={`text-brand-muted text-lg max-w-xl mx-auto transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "160ms" }}
          >
            No 6-month timelines. No disappearing agencies. Here&apos;s exactly what happens after you reach out.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`group flex gap-5 bg-brand-card border border-brand-border hover:border-brand-gold/25 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${240 + i * 100}ms`, transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease" }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/25 text-brand-gold flex items-center justify-center font-syne font-black text-sm tracking-wide">
                {s.num}
              </div>
              <div>
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-syne font-black text-brand-text text-lg mb-2">{s.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 text-center transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "640ms" }}
        >
          <a
            href="#contact"
            className="btn-gold inline-flex items-center gap-2 font-black px-9 py-4 rounded-xl text-lg hover:scale-[1.03] active:scale-[0.97] transition-transform duration-150"
          >
            Let&apos;s Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
