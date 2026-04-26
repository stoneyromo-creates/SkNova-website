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
      <div className="bg-brand-yellow text-brand-black text-center text-sm font-bold py-2.5 px-4 tracking-wide">
        ⭐ Dallas-Based &nbsp;·&nbsp; Fast Turnaround &nbsp;·&nbsp; Limited Spots Available
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-all duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-syne font-black text-2xl text-brand-black tracking-tight">
            SK<span className="bg-brand-yellow px-1 rounded-sm">Nova</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-gray-600 hover:text-brand-black transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="text-sm font-semibold text-gray-600 hover:text-brand-black transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <a
              href="#contact"
              className="bg-brand-black text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-150 hover:scale-[1.03] active:scale-[0.97]"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-brand-black p-1"
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
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-5 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-brand-black py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-brand-yellow text-brand-black font-black text-center py-3.5 rounded-xl text-base mt-1"
            >
              Book a Call
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="text-center text-sm font-semibold text-gray-500"
            >
              Call us: {BUSINESS.phone}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
