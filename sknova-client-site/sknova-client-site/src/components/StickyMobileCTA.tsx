"use client";

import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden p-3 bg-brand-section border-t border-brand-border shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
      <a
        href="#contact"
        className="btn-gold flex items-center justify-center gap-2 w-full font-black text-base py-4 rounded-xl active:scale-[0.98] transition-transform duration-150"
      >
        Get My Website Built
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
