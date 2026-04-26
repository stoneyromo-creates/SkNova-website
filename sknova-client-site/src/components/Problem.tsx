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
    <section className="bg-gray-50 border-y border-gray-200 py-20 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p
            className={`text-brand-red text-sm font-black uppercase tracking-widest mb-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            The Problem
          </p>
          <h2
            className={`font-syne font-black text-4xl md:text-5xl text-brand-black mb-5 leading-tight transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "80ms" }}
          >
            Most websites don&apos;t bring in customers.
          </h2>
          <p
            className={`text-lg text-gray-600 leading-relaxed transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "160ms" }}
          >
            They look decent, but they don&apos;t convert visitors into calls or sales. That&apos;s why most small businesses struggle online.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <div
              key={i}
              className={`bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${240 + i * 100}ms`, transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-syne font-black text-brand-black text-lg mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Transition nudge */}
        <div
          className={`text-center mt-12 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "560ms" }}
        >
          <p className="text-gray-600 text-base font-medium">
            Sound familiar?{" "}
            <a href="#contact" className="text-brand-black font-black underline underline-offset-2 decoration-brand-yellow decoration-2 hover:text-brand-red transition-colors">
              We can fix it — fast.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
