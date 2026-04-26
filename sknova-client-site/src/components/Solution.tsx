"use client";

import { useInView } from "@/hooks/useInView";

const benefits = [
  { title: "Strategy-First Design", body: "Every page is built around one goal: turning visitors into paying customers." },
  { title: "Premium Visual Identity", body: "Stunning dark-mode aesthetics that make your brand look like a million bucks." },
  { title: "Blazing Fast Performance", body: "Optimized for Core Web Vitals and Google's ranking signals from day one." },
  { title: "Fully Mobile Responsive", body: "Pixel-perfect on every device — phone, tablet, or desktop." },
  { title: "SEO Ready", body: "Clean code, semantic markup, and meta structure that search engines love." },
  { title: "Done-For-You", body: "You focus on running your business. We handle every pixel, line of code, and detail." },
];

export default function Solution() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-purple-700/8 blur-[120px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-3">The SKNova Difference</p>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              A Website That Actually{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Works For You
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              SKNova isn't a template shop. We build custom, conversion-optimized websites
              that reflect your brand, speak to your audience, and drive real business results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            >
              Let's Build Together
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white/3 border border-white/8 hover:border-purple-500/30 rounded-xl p-5 transition-all duration-300 hover:bg-white/6"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-syne font-semibold text-white text-sm mb-1">{b.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
