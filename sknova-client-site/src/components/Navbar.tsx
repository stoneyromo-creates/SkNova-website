"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/75 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-syne font-bold text-xl text-white tracking-tight hover:opacity-80 transition-opacity">
          SK<span className="text-purple-400">Nova</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.04] active:scale-[0.96] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
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
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200 py-1 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white px-5 py-3 rounded-full text-center transition-all duration-200 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
