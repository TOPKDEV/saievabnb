"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-40 py-4 px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/50"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <svg
            className="w-6 h-6 text-gold"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
          <span
            className="text-2xl font-bold tracking-widest text-gold"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            SAIEVA
          </span>
        </a>

        {/* Nav CTA */}
        <a
          href="#cta"
          className="btn-gold-shimmer hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm"
        >
          Book Your Strategy Call
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </header>
  );
}
