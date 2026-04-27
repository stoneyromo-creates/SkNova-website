"use client";

import { useState, useEffect } from "react";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Announcement bar */}
      <div className="bg-brand-bg border-b border-brand-gold/10 text-center py-2 px-4">
        <p className="text-brand-muted text-xs tracking-[0.18em] uppercase">
          <span className="text-brand-gold mr-3">✦</span>
          Dallas-Based &nbsp;·&nbsp; Fast Turnaround &nbsp;·&nbsp; Limited Spots Available
          <span className="text-brand-gold ml-3">✦</span>
        </p>
      </div>

      {/* Main nav */}
      <div className={`bg-brand-bg/95 backdrop-blur-md transition-all duration-300 ${scrolled ? "border-b border-brand-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "border-b border-brand-border/40"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-syne font-black text-2xl text-brand-text tracking-tight">
            SK<span className="text-gold-gradient">Nova</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors duration-150 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="text-sm font-medium text-brand-muted hover:text-brand-gold transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <a
              href="#contact"
              className="btn-gold-outline font-bold text-sm px-5 py-2.5 rounded-lg hover:scale-[1.03] active:scale-[0.97] transition-transform duration-150"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-brand-muted hover:text-brand-text p-1 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-brand-border bg-brand-section px-6 py-5 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-brand-muted hover:text-brand-text py-1 transition-colors tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold text-center font-black py-3.5 rounded-xl text-base mt-1 hover:scale-[1.01] active:scale-[0.98] transition-transform duration-150"
            >
              Book a Call
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="text-center text-sm font-medium text-brand-muted"
            >
              {BUSINESS.phone}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
