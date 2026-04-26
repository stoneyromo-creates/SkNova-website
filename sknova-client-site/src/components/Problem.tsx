"use client";

import { useInView } from "@/hooks/useInView";

const pains = [
  {
    icon: "💸",
    title: "Spending Money With Nothing to Show",
    body: "You've tried ads, social media, and word-of-mouth — but without a solid website, you're leaving money on the table every single day.",
  },
  {
    icon: "😤",
    title: "Your Website Looks Like It's From 2012",
    body: "An outdated, slow, or ugly site destroys trust before a potential customer even reads a word. First impressions happen in under 0.05 seconds.",
  },
  {
    icon: "📉",
    title: "Visitors Leave Without Converting",
    body: "Getting traffic means nothing if your site doesn't guide visitors to take action. Most DIY websites have zero conversion strategy.",
  },
  {
    icon: "😓",
    title: "You're Too Busy to Deal With This",
    body: "You're running a business. You don't have time to learn code, fight page builders, or babysit a developer who doesn't deliver.",
  },
];

export default function Problem() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-black py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-3">The Reality</p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Sound Familiar?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Most small business owners struggle with the same digital problems — and it&apos;s quietly costing them thousands.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pains.map((p, i) => (
            <div
              key={i}
              className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-purple-500/30 rounded-2xl p-7 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-syne font-semibold text-white text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
