"use client";

import { useInView } from "@/hooks/useInView";

export default function FinalCTA() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-brand-section py-28 px-6 overflow-hidden">
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,74,0.08) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="relative max-w-3xl mx-auto text-center">
        <p
          className={`text-brand-gold text-sm font-black uppercase tracking-widest mb-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "0ms" }}
        >
          Don&apos;t Wait
        </p>

        <h2
          className={`font-syne font-black text-4xl md:text-6xl text-brand-text leading-tight mb-6 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "80ms" }}
        >
          Every Day Without a Good Website{" "}
          <span className="text-gold-gradient">Costs You.</span>
        </h2>

        <p
          className={`text-brand-muted text-lg leading-relaxed mb-10 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "160ms" }}
        >
          Your competitors are online and converting. Let&apos;s get you a site that works — fast.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "240ms" }}
        >
          <a
            href="#contact"
            className="btn-gold inline-flex items-center justify-center gap-2 font-black px-10 py-4 rounded-xl text-lg hover:scale-[1.03] active:scale-[0.97] transition-transform duration-150"
          >
            Start My Website
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-brand-border text-brand-muted hover:border-brand-gold/30 hover:text-brand-text font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
