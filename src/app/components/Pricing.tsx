const stack = [
  { service: "LLC Formation & Business Setup",               value: "$1,500",  badge: "badge-violet" },
  { service: "Market Research (3 Vetted Markets)",           value: "$2,000",  badge: "badge-teal" },
  { service: "Lease Negotiation",                            value: "$3,500",  badge: "badge-orange" },
  { service: "Interior Design & Furnishing Coordination",    value: "$8,000",  badge: "badge-gold" },
  { service: "Real Estate Photography",                      value: "$1,200",  badge: "badge-teal" },
  { service: "Airbnb, VRBO & Booking.com Listing Setup",    value: "$1,500",  badge: "badge-orange" },
  { service: "PMS Integration & Calendar Sync",              value: "$2,500",  badge: "badge-violet" },
  { service: "Automated Guest Messaging System",             value: "$800",    badge: "badge-gold" },
  { service: "Setup Packet + Inventory Guide + SOPs",        value: "$500",    badge: "badge-teal" },
];

export default function Pricing() {
  return (
    <section className="bg-teal-surface py-20 px-6 md:px-12" id="pricing">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-teal inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            The Investment
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Here&apos;s What You&apos;re Actually Getting
          </h2>
          <p className="text-[#9CA3AF] text-lg">
            Price out each piece individually. Then tell us this doesn&apos;t make sense.
          </p>
        </div>

        {/* Value stack */}
        <div className="rounded-xl overflow-hidden border border-border mb-8">
          {/* Table header */}
          <div className="grid grid-cols-2 bg-[#0A0A0A] px-6 py-3 text-xs font-semibold tracking-widest uppercase text-[#4B5563]">
            <span>Service</span>
            <span className="text-right">Standalone Value</span>
          </div>

          {stack.map((row) => (
            <div key={row.service} className="value-row grid grid-cols-2 px-6 py-4 text-sm items-center">
              <div className="flex items-center gap-2">
                <span className={`${row.badge} px-2 py-0.5 rounded text-[10px] font-bold hidden sm:inline-block`}>
                  ✓
                </span>
                <span className="text-[#D1D5DB]">{row.service}</span>
              </div>
              <span className="text-right text-[#9CA3AF] font-mono">{row.value}</span>
            </div>
          ))}

          {/* Total */}
          <div className="grid grid-cols-2 px-6 py-5 items-center"
               style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.04) 100%)", borderTop: "1px solid rgba(212,175,55,0.3)" }}>
            <span className="font-bold text-[#F5F5F5] text-base">Total Standalone Value</span>
            <span
              className="text-right font-bold text-gold text-xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              $21,500
            </span>
          </div>
        </div>

        {/* Investment reveal */}
        <div className="text-center bg-surface-2 border border-border rounded-xl p-10">
          <p className="text-[#9CA3AF] text-sm uppercase tracking-widest mb-3">Your Investment</p>
          <p
            className="text-3xl font-bold text-[#F5F5F5] mb-2"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Discussed on your strategy call.
          </p>
          <p className="text-[#9CA3AF] text-sm mb-6 max-w-sm mx-auto">
            Investment depends on your target market, property size, and scope. We give you a full
            breakdown before you commit to anything — no surprises.
          </p>
          <a
            href="#cta"
            className="btn-gold-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base"
          >
            Book Your Free Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-[#4B5563] text-xs mt-3">
            Financing available through third-party lenders — ask on your call.
          </p>
        </div>

      </div>
    </section>
  );
}
