const steps = [
  {
    num: "01",
    badge: "badge-violet",
    badgeLabel: "Legal",
    title: "LLC Formation & Business Structure",
    body: "We form your LLC specifically structured for short-term rental operations. This protects your personal assets, establishes the right operating agreement, and positions you to write off furniture, utilities, and management costs as business expenses. You walk away with a real business — not a hobby.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
    border: "hover:border-violet/40",
  },
  {
    num: "02",
    badge: "badge-teal",
    badgeLabel: "Research",
    title: "Market Research & County Approval",
    body: "Not every city plays nice with Airbnb. We research zoning laws, STR permits, HOA restrictions, and occupancy demand in your target area. We present 2–3 vetted options with strong occupancy rates, solid ADR, and zero legal landmines. You pick the market. We get to work.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
    border: "hover:border-teal/40",
  },
  {
    num: "03",
    badge: "badge-orange",
    badgeLabel: "Negotiation",
    title: "Lease Negotiation",
    body: "Getting a landlord to agree to a short-term rental lease takes strategy. We negotiate the terms — STR permission clauses, subletting rights, furnishing allowances, and flexible exit provisions — so you don't overpay or get locked into something that destroys your margins. This step alone is worth the investment.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    border: "hover:border-orange/40",
  },
  {
    num: "04",
    badge: "badge-gold",
    badgeLabel: "Design",
    title: "Interior Design & Furnishing",
    body: "Guests book on visuals. We design and furnish your unit to hit the sweet spot: high-quality materials that photograph beautifully, hold up to guest wear, and command above-average nightly rates. Every room is intentional. Nothing generic. The result: 4.8+ star reviews and higher search placement on every platform.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
    border: "hover:border-gold/40",
  },
  {
    num: "05",
    badge: "badge-teal",
    badgeLabel: "Photography",
    title: "Real Estate Photography",
    body: "Professional STR photography is non-negotiable. We coordinate and cover the shoot — wide angles, natural light, lifestyle staging. These are the images that top Airbnb search results and outperform every amateur listing in your market. You don't touch a camera. We deliver the assets.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
    border: "hover:border-teal/40",
  },
  {
    num: "06",
    badge: "badge-violet",
    badgeLabel: "Automation",
    title: "Full Platform Setup & Automation",
    body: "We list on Airbnb, VRBO, and Booking.com with fully optimized titles, descriptions, and pricing rules. We then integrate all three through a property management system (Hostaway or Booking Mood) to sync calendars, eliminate double-bookings, and automate guest messaging from inquiry to checkout. Pre-written sequences. Automated review requests. Plus a complete setup packet, inventory guide, and SOPs so you — or a VA — can run this from anywhere.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
    border: "hover:border-violet/40",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 md:px-12" id="what-you-get">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-orange inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            The Full Service
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Everything Done.{" "}
            <br className="hidden sm:block" />
            Nothing Left For You To Figure Out.
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            Here&apos;s exactly what Saieva delivers, start to finish. Every step. Every detail. Every headache — handled.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className={`step-card bg-surface border border-border rounded-xl p-8 ${s.border}`}
            >
              <div className="flex items-start gap-5">
                {/* Number */}
                <span
                  className="text-5xl font-bold text-step-gradient leading-none flex-shrink-0"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {s.num}
                </span>

                <div className="flex-1">
                  {/* Badge + icon row */}
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      {s.icon}
                    </svg>
                    <span className={`${s.badge} px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase`}>
                      {s.badgeLabel}
                    </span>
                  </div>
                  <h3 className="text-[#F5F5F5] font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
