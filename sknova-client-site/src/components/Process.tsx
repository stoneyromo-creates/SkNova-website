"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    body: "We start with a 30-minute call to understand your goals, target audience, and vision for the project.",
  },
  {
    num: "02",
    title: "Strategy & Proposal",
    body: "We create a tailored proposal with scope, timeline, and pricing — no surprise fees.",
  },
  {
    num: "03",
    title: "Design & Build",
    body: "We design and develop your site with regular check-ins. You see progress, not silence.",
  },
  {
    num: "04",
    title: "Review & Revisions",
    body: "You review the live preview, request changes, and we refine until it's exactly right.",
  },
  {
    num: "05",
    title: "Launch",
    body: "We go live with a full deployment, domain setup, and launch checklist. Your site is live and ready.",
  },
  {
    num: "06",
    title: "Ongoing Support",
    body: "We offer monthly maintenance plans to keep your site fast, secure, and up to date.",
  },
];

export default function Process() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="relative bg-black py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-indigo-700/8 blur-[120px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">Simple, Transparent Process</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From first call to final launch — here's exactly what working with SKNova looks like.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-purple-500/30 rounded-2xl p-7 transition-all duration-300"
            >
              <div className="font-syne font-bold text-5xl text-white/5 group-hover:text-purple-500/15 absolute top-4 right-6 transition-colors">
                {s.num}
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 font-syne font-bold text-sm mb-5">
                {s.num}
              </div>
              <h3 className="font-syne font-semibold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
