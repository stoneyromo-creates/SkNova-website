"use client";

import { useInView } from "@/hooks/useInView";

export default function FinalCTA() {
  const { ref, inView } = useInView();

  return (
    <section
      className="py-24 px-6"
      style={{ background: "linear-gradient(135deg, #FACC15 0%, #EAB308 55%, #D97706 100%)" }}
    >
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <p
          className={`text-brand-black/50 text-sm font-black uppercase tracking-widest mb-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "0ms" }}
        >
          Don&apos;t Wait
        </p>

        <h2
          className={`font-syne font-black text-4xl md:text-6xl text-brand-black leading-tight mb-6 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "80ms" }}
        >
          Every Day Without a
          <br />
          Good Website Costs You.
        </h2>

        <p
          className={`text-brand-black/65 text-lg leading-relaxed mb-10 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
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
            className="inline-flex items-center justify-center gap-2 bg-brand-black hover:bg-gray-800 text-white font-black px-10 py-4 rounded-xl text-lg transition-all duration-150 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-black/20"
          >
            Start My Website
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-white/40 hover:bg-white/65 border border-brand-black/15 text-brand-black font-black px-10 py-4 rounded-xl text-lg transition-all duration-150 hover:scale-[1.03] active:scale-[0.97]"
          >
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
