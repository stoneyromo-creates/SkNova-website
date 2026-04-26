"use client";

import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Marcus Thompson",
    role: "Owner, Thompson HVAC",
    body: "SKNova completely transformed our online presence. Within 60 days of launch we had 3x the number of inbound calls. Worth every penny.",

    initials: "MT",
  },
  {
    name: "Priya Sharma",
    role: "Founder, Bloom Beauty Studio",
    body: "I was embarrassed by my old website. Now I literally send people to it. The design is stunning and bookings went up immediately after launch.",

    initials: "PS",
  },
  {
    name: "Derek Okafor",
    role: "CEO, Okafor Law Group",
    body: "Professional, fast, and communicative throughout. They delivered exactly what they promised and more. Our site now ranks on page one for our main keywords.",

    initials: "DO",
  },
  {
    name: "Lisa Chen",
    role: "Owner, The Fitness Vault",
    body: "The whole process was smooth from start to finish. They understood my brand immediately. I've already referred two other business owners to SKNova.",

    initials: "LC",
  },
  {
    name: "James Reyes",
    role: "Contractor, JR Roofing Co.",
    body: "I didn't think a website could make this much difference. We've gone from almost no online leads to getting 5-10 quality leads a week.",

    initials: "JR",
  },
  {
    name: "Aaliyah Brooks",
    role: "Founder, Brooks Event Co.",
    body: "Absolutely obsessed with how it turned out. Premium, clean, and it sells my services better than I ever could on my own. Huge shoutout to the SKNova team.",

    initials: "AB",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-purple-700/8 blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-3">Social Proof</p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">What Clients Say</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real results from real business owners who trusted SKNova with their digital presence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/3 hover:bg-white/6 border border-white/8 hover:border-purple-500/20 rounded-2xl p-7 transition-all duration-300"
            >
              <Stars />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.body}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center text-purple-300 font-syne font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
