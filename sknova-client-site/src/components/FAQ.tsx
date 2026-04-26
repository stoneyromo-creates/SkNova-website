"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects take 2–4 weeks from discovery to launch, depending on scope. Landing pages can be done in as little as 7 days. We'll give you a clear timeline in your proposal.",
  },
  {
    q: "Do I need to provide content (copy, images)?",
    a: "We can work with content you provide or help you source and structure it. If you need copywriting, we offer that as an add-on. We'll guide you through exactly what we need.",
  },
  {
    q: "What platforms do you build on?",
    a: "We primarily build on Next.js for maximum performance, or WordPress/Webflow depending on your needs. We recommend what's best for your specific situation, not just what's easiest for us.",
  },
  {
    q: "What's included in the monthly support plan?",
    a: "Monthly content updates, security patches, plugin/dependency updates, performance monitoring, uptime monitoring, and priority email support. Everything to keep your site healthy and current.",
  },
  {
    q: "Do you offer refunds?",
    a: "The deposit is non-refundable as it covers the strategy session and project slot. If we've started design work, a partial refund may be available based on work completed. We stand behind our work and will always make it right.",
  },
  {
    q: "Will my website be mobile friendly?",
    a: "Absolutely. Every website we build is designed mobile-first and tested across all major devices and browsers before launch.",
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Yes. We build sites with easy-to-edit components or integrate a CMS if you want full control. We also provide a walkthrough so you're never stuck.",
  },
  {
    q: "Do you offer hosting?",
    a: "We can recommend and set up hosting for you (Vercel, Netlify, or a managed host) or deploy to your existing hosting. Hosting costs are separate from our design fees.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-colors duration-200 ${open ? "border-brand-yellow bg-yellow-50" : "border-gray-200 bg-white hover:border-gray-300"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-syne font-bold text-brand-black text-sm md:text-base">{q}</span>
        <span className={`shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <svg className="w-5 h-5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-gray-600 text-sm leading-relaxed px-6 pb-5">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, inView } = useInView();

  return (
    <section id="faq" className="bg-white py-24 px-6">
      <div
        ref={ref}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <p
            className={`text-brand-red text-sm font-black uppercase tracking-widest mb-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            FAQs
          </p>
          <h2
            className={`font-syne font-black text-4xl md:text-5xl text-brand-black mb-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "80ms" }}
          >
            Got Questions?
          </h2>
          <p
            className={`text-gray-600 max-w-xl mx-auto transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "160ms" }}
          >
            Everything you need to know before getting started.
          </p>
        </div>

        <div
          className={`space-y-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "240ms" }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        <p
          className={`text-center text-gray-500 text-sm mt-10 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "360ms" }}
        >
          Still have questions?{" "}
          <a href="#contact" className="text-brand-black font-bold underline underline-offset-2 decoration-brand-yellow decoration-2 hover:text-brand-red transition-colors">
            Send us a message
          </a>{" "}
          and we&apos;ll get back to you fast.
        </p>
      </div>
    </section>
  );
}
