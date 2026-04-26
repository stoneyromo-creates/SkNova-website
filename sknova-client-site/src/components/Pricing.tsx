"use client";

import { useInView } from "@/hooks/useInView";
import { STRIPE } from "@/lib/constants";

const plans = [
  {
    name: "Deposit",
    price: "$20",
    label: "Reserve Your Spot",
    description: "Lock in your project slot and kick off your strategy call. Applied to your total.",
    href: STRIPE.deposit,
    features: [
      "Secures your project slot",
      "Kicks off your strategy call",
      "Mood board & direction session",
      "Credited toward full project cost",
    ],
    highlight: false,
    cta: "Reserve My Spot →",
    badge: null,
  },
  {
    name: "Full Website Build",
    price: "$280",
    label: "One-Time Payment",
    description: "A fully custom website built to convert your visitors into paying customers.",
    href: STRIPE.finalPayment,
    features: [
      "Everything in Deposit",
      "Custom multi-page website",
      "Mobile-first responsive design",
      "Contact forms & booking integrations",
      "SEO-ready from day one",
      "2 rounds of revisions included",
      "30-day post-launch support",
    ],
    highlight: true,
    cta: "Get My Website Built →",
    badge: "Most Popular",
  },
  {
    name: "Monthly Support",
    price: "$40",
    label: "/ month",
    description: "Keep your site updated, fast, and running without lifting a finger.",
    href: STRIPE.maintenance,
    features: [
      "Monthly content updates",
      "Security monitoring & patches",
      "Performance check-ups",
      "Uptime monitoring",
      "Priority email support",
    ],
    highlight: false,
    cta: "Add Monthly Support →",
    badge: null,
  },
];

export default function Pricing() {
  const { ref, inView } = useInView();

  return (
    <section id="pricing" className="bg-gray-50 border-y border-gray-200 py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <p
            className={`text-brand-red text-sm font-black uppercase tracking-widest mb-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            Pricing
          </p>
          <h2
            className={`font-syne font-black text-4xl md:text-5xl text-brand-black mb-4 leading-tight transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "80ms" }}
          >
            Transparent Pricing. No Surprises.
          </h2>
          <p
            className={`text-gray-600 text-lg max-w-xl mx-auto transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "160ms" }}
          >
            No hidden fees. No retainers. Just clear, affordable pricing.
          </p>
        </div>

        {/* Comparison badge */}
        <div
          className={`flex justify-center mb-12 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "240ms" }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black font-black text-sm px-5 py-2.5 rounded-full shadow-sm">
            💡 Most agencies charge $1,000+ for this
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.highlight
                  ? "border-2 border-brand-yellow shadow-[0_4px_40px_rgba(255,214,0,0.2)]"
                  : "border border-gray-200 hover:border-gray-300 hover:shadow-md"
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${320 + i * 120}ms`, transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-black text-xs font-black px-5 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">{plan.name}</p>

              <div className="flex items-end gap-1 mb-1">
                <span className="font-syne font-black text-5xl text-brand-black leading-none">{plan.price}</span>
                {plan.label === "/ month" && (
                  <span className="text-gray-500 text-sm font-semibold mb-1">/mo</span>
                )}
              </div>

              {plan.label !== "/ month" && (
                <p className="text-brand-red text-xs font-bold uppercase tracking-wide mb-1">{plan.label}</p>
              )}

              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-black py-4 rounded-xl transition-all duration-150 hover:scale-[1.03] active:scale-[0.97] text-base ${
                  plan.highlight
                    ? "bg-brand-yellow hover:bg-yellow-400 text-brand-black shadow-md shadow-yellow-100"
                    : "bg-brand-black hover:bg-gray-800 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p
          className={`text-center text-gray-500 text-sm mt-10 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "700ms" }}
        >
          All payments are secured by Stripe. Questions first?{" "}
          <a href="#contact" className="text-brand-black font-bold underline underline-offset-2 decoration-brand-yellow decoration-2 hover:text-brand-red transition-colors">
            Contact us — no pressure.
          </a>
        </p>
      </div>
    </section>
  );
}
