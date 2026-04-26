"use client";

import { useInView } from "@/hooks/useInView";
import { STRIPE } from "@/lib/constants";

const plans = [
  {
    name: "Deposit",
    price: "$250",
    label: "Project Deposit",
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
    price: "Custom",
    label: "Complete Website",
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
    price: "$99",
    label: "/ month",
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
    <section id="pricing" className="bg-black py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-3">Investment</p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No hidden fees. No surprises. Pick the option that fits where you are right now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "bg-purple-600/10 border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
                  : "bg-white/3 border-white/8 hover:border-purple-500/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">{plan.name}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-syne font-bold text-4xl text-white">{plan.price}</span>
                {plan.label !== "Project Deposit" && plan.label !== "Complete Website" && (
                  <span className="text-gray-400 text-sm">{plan.label}</span>
                )}
              </div>
              {(plan.label === "Project Deposit" || plan.label === "Complete Website") && (
                <p className="text-gray-500 text-xs mb-4">{plan.label}</p>
              )}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{plan.description}</p>

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
                className={`block text-center font-semibold py-3.5 rounded-full transition-all duration-200 ${
                  plan.highlight
                    ? "bg-purple-600 hover:bg-purple-500 text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                    : "bg-white/8 hover:bg-white/15 text-white border border-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          All payments secured by Stripe. Questions?{" "}
          <a href="#contact" className="text-purple-400 hover:text-purple-300 transition-colors">
            Contact us first.
          </a>
        </p>
      </div>
    </section>
  );
}
