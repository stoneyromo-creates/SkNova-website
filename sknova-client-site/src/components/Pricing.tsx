"use client";

import { useInView } from "@/hooks/useInView";
import { STRIPE } from "@/lib/constants";

const plans = [
  {
    name: "Deposit",
    price: "$20",
    sub: "to get started",
    description: "Lock in your spot and kick off your project with a design strategy session.",
    href: STRIPE.deposit,
    features: [
      "Secure your project slot",
      "Discovery & strategy call",
      "Mood board & direction",
      "Applied to total project cost",
    ],
    highlight: false,
    cta: "Pay Deposit",
  },
  {
    name: "Full Build",
    price: "$280",
    sub: "final payment",
    description: "A fully custom website designed and built to convert your visitors into customers.",
    href: STRIPE.finalPayment,
    features: [
      "Everything in Deposit",
      "Custom multi-page website",
      "Mobile-first responsive design",
      "Contact forms & integrations",
      "SEO-ready structure",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    highlight: true,
    cta: "Start Full Project",
  },
  {
    name: "Maintenance",
    price: "$40",
    sub: "/ month",
    description: "Keep your site fast, secure, and up to date without lifting a finger.",
    href: STRIPE.maintenance,
    features: [
      "Monthly content updates",
      "Security monitoring & patches",
      "Performance optimization",
      "Uptime monitoring",
      "Priority email support",
    ],
    highlight: false,
    cta: "Subscribe Now",
  },
];

export default function Pricing() {
  const { ref, inView } = useInView();

  return (
    <section id="pricing" className="bg-black py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className={`text-purple-500 text-sm font-semibold uppercase tracking-widest mb-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            Investment
          </p>
          <h2
            className={`font-syne font-bold text-4xl md:text-5xl text-white mb-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "80ms" }}
          >
            Transparent Pricing
          </h2>
          <p
            className={`text-gray-400 max-w-xl mx-auto transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "160ms" }}
          >
            No hidden fees. No surprises. Pick the option that fits where you are right now.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(168,85,247,0.1)] ${
                plan.highlight
                  ? "bg-purple-600/[0.10] border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.12)]"
                  : "bg-white/[0.03] border-white/[0.08] hover:border-purple-500/20 hover:bg-white/[0.05]"
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${240 + i * 120}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-semibold px-5 py-1.5 rounded-full shadow-[0_4px_15px_rgba(168,85,247,0.4)]">
                  Most Popular
                </div>
              )}

              <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4">{plan.name}</p>

              <div className="flex items-end gap-1.5 mb-1">
                <span className="font-syne font-bold text-5xl text-white leading-none">{plan.price}</span>
                <span className="text-gray-500 text-sm mb-1">{plan.sub}</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-7 mt-4">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                className={`block text-center font-semibold py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] ${
                  plan.highlight
                    ? "bg-purple-600 hover:bg-purple-500 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                    : "bg-white/[0.07] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p
          className={`text-center text-gray-400 text-sm mt-10 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "600ms" }}
        >
          All payments secured by Stripe. Questions?{" "}
          <a href="#contact" className="text-purple-400 hover:text-purple-300 transition-colors underline-offset-2 hover:underline">
            Contact us first.
          </a>
        </p>
      </div>
    </section>
  );
}
