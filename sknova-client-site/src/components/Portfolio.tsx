"use client";

import { useInView } from "@/hooks/useInView";

const projects = [
  {
    label: "Home Services",
    title: "Thompson HVAC",
    description: "Lead-gen site with instant quote form. Ranked page 1 in 90 days.",
    tags: ["Local SEO", "Lead Gen", "Next.js"],
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    accent: "bg-orange-500/80",
    bars: ["w-3/4", "w-1/2", "w-5/6"],
  },
  {
    label: "Beauty & Wellness",
    title: "Bloom Beauty Studio",
    description: "Booking-focused design with online scheduling. Bookings up 40% in 30 days.",
    tags: ["Bookings", "E-commerce", "Webflow"],
    gradient: "from-pink-500/20 via-purple-500/10 to-transparent",
    accent: "bg-pink-500/80",
    bars: ["w-2/3", "w-5/6", "w-1/2"],
  },
  {
    label: "Professional Services",
    title: "Okafor Law Group",
    description: "Authority-building firm site with consultation funnel. Page-1 rankings for 3 keywords.",
    tags: ["Authority", "SEO", "WordPress"],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accent: "bg-blue-500/80",
    bars: ["w-5/6", "w-2/3", "w-3/4"],
  },
];

function BrowserMockup({
  gradient,
  accent,
  bars,
  title,
}: {
  gradient: string;
  accent: string;
  bars: string[];
  title: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0d]">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/8">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="ml-3 flex-1 bg-white/5 rounded px-3 py-1 text-gray-600 text-[10px] font-mono">
          {title.toLowerCase().replace(/\s/g, "")}.com
        </div>
      </div>
      {/* Screen content */}
      <div className={`relative h-44 bg-gradient-to-br ${gradient} p-5 overflow-hidden`}>
        <div className="w-16 h-2 rounded bg-white/20 mb-3" />
        <div className="w-28 h-1.5 rounded bg-white/10 mb-5" />
        {bars.map((w, i) => (
          <div key={i} className={`h-1.5 rounded mb-2 bg-white/8 ${w}`} />
        ))}
        <div className={`absolute bottom-5 left-5 ${accent} text-white text-[10px] font-semibold px-3 py-1.5 rounded-full`}>
          Get a Free Quote
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-black py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Built to Perform
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A sample of the sites we&apos;ve built — each one designed around one goal: growing the client&apos;s business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white/3 hover:bg-white/5 border border-white/8 hover:border-purple-500/25 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-5 pb-0">
                <BrowserMockup
                  gradient={p.gradient}
                  accent={p.accent}
                  bars={p.bars}
                  title={p.title}
                />
              </div>
              <div className="p-6">
                <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-1">{p.label}</p>
                <h3 className="font-syne font-semibold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-white/5 border border-white/8 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm"
          >
            Want results like these? Let&apos;s talk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
