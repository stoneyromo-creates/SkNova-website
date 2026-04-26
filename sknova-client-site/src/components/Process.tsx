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
    <section id="process" className="relative bg-black py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-indigo-700/[0.07] blur-[120px]" />
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p
            className={`text-purple-500 text-sm font-semibold uppercase tracking-widest mb-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            How It Works
          </p>
          <h2
            className={`font-syne font-bold text-4xl md:text-5xl text-white mb-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "80ms" }}
          >
            Simple, Transparent Process
          </h2>
          <p
            className={`text-gray-400 max-w-xl mx-auto transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "160ms" }}
          >
            From first call to final launch — here&apos;s exactly what working with SKNova looks like.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-purple-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(168,85,247,0.08)] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${240 + i * 80}ms`, transition: "opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease" }}
            >
              <div className="font-syne font-bold text-5xl text-white/[0.04] group-hover:text-purple-500/10 absolute top-4 right-6 transition-colors duration-300 select-none">
                {s.num}
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-600/20 group-hover:bg-purple-600/30 flex items-center justify-center text-purple-400 font-syne font-bold text-sm mb-5 transition-colors duration-300">
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
