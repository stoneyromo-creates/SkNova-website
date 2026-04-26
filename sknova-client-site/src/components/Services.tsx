"use client";

import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Custom Website Design",
    body: "Tailored, pixel-perfect websites built from scratch to match your brand and convert your ideal customers.",
    tags: ["Design", "Development"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Landing Page Design",
    body: "High-converting single-page experiences built to capture leads, sell products, or promote your service.",
    tags: ["Landing Pages", "CRO"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Website Redesign",
    body: "Transform your outdated or underperforming site into a modern, fast, and conversion-ready experience.",
    tags: ["Redesign", "Performance"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "SEO & Content Strategy",
    body: "On-page SEO foundation, keyword architecture, and content strategy to drive organic traffic.",
    tags: ["SEO", "Content"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Optimization",
    body: "Ensure your site looks and performs flawlessly on every screen size, from phones to large monitors.",
    tags: ["Mobile", "Responsive"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Monthly Maintenance",
    body: "We keep your site updated, secure, and running smoothly so you never have to think about it.",
    tags: ["Maintenance", "Support"],
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="bg-black py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">Services Built to Scale</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From concept to launch and beyond — everything you need to dominate online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-purple-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-600/15 text-purple-400 flex items-center justify-center mb-5 group-hover:bg-purple-600/25 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-syne font-semibold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.body}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
