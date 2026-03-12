// Replace this with your real Calendly or booking URL before launch
const BOOKING_LINK = "YOUR_CALENDLY_LINK_HERE";

export default function FinalCTA() {
  return (
    <section className="hero-bg py-24 px-6 md:px-12" id="cta">
      <div className="max-w-2xl mx-auto text-center">

        <span className="badge-gold inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
          Ready?
        </span>

        <h2
          className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Ready to Own an Airbnb Business
          <br className="hidden sm:block" /> You Didn&apos;t Have to Build?
        </h2>

        <p className="text-sm font-semibold mb-8">
          <span className="text-red-400">We onboard a maximum of 3 clients per month.</span>
          <span className="text-[#9CA3AF] font-normal ml-2">
            Spots fill fast — especially after content drops.
          </span>
        </p>

        <a
          href={BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-shimmer inline-flex items-center justify-center gap-3 px-12 py-5 rounded-xl text-xl w-full sm:w-auto mb-6"
        >
          Book Your Free Strategy Call
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          {[
            {
              label: "No obligation",
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
            },
            {
              label: "30-minute call",
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
            },
            {
              label: "Vetted for fit",
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            },
          ].map((t) => (
            <span key={t.label} className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {t.icon}
              </svg>
              {t.label}
            </span>
          ))}
        </div>

        <p className="text-[#4B5563] text-sm max-w-md mx-auto">
          This is a real conversation, not a sales pitch disguised as a call. We&apos;ll review your
          market, your capital, and your goals. If it&apos;s a fit, we&apos;ll walk you through next steps.
          If it&apos;s not, we&apos;ll tell you that too.
        </p>

      </div>
    </section>
  );
}
