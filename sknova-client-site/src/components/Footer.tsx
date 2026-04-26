import { BUSINESS, STRIPE } from "@/lib/constants";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const paymentLinks = [
  { label: "Pay Deposit ($20)", href: STRIPE.deposit },
  { label: "Final Payment ($280)", href: STRIPE.finalPayment },
  { label: "Maintenance Plan ($40/mo)", href: STRIPE.maintenance },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="font-syne font-black text-2xl text-white tracking-tight inline-block mb-4">
              SK<span className="bg-brand-yellow text-brand-black px-1 rounded-sm">Nova</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Dallas-based web design studio building bold, conversion-focused websites for
              small businesses that want more customers.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`tel:${BUSINESS.phone}`} className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {BUSINESS.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-syne font-black text-white text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-500 hover:text-white transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payments */}
          <div>
            <h4 className="font-syne font-black text-white text-sm uppercase tracking-wider mb-4">Payments</h4>
            <ul className="space-y-2.5">
              {paymentLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-brand-yellow transition-colors text-sm flex items-center gap-1.5"
                  >
                    {l.label}
                    <svg className="w-3 h-3 opacity-50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <p>Dallas, TX — Built to convert.</p>
        </div>
      </div>
    </footer>
  );
}
