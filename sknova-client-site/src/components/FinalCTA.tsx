"use client";

import { useInView } from "@/hooks/useInView";

export default function FinalCTA() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-700/10 blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-3xl mx-auto text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          Limited spots available
        </div>

        <h2 className="font-syne font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
          Ready to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Level Up
          </span>{" "}
          Your Online Presence?
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Every day without a great website is a day you're losing customers to the competition.
          Let's change that — starting today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] text-lg"
          >
            Start Your Project Today
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 text-lg"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
