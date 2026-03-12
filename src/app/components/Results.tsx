const outcomes = [
  {
    borderColor: "border-l-gold",
    iconColor: "text-gold",
    badge: "badge-gold",
    badgeLabel: "Income",
    title: "Passive Income That Competes With a Second Job",
    body: "The average Saieva property generates $3,800–$6,200/month in gross revenue. After rent, utilities, and supplies, most clients net $1,200–$2,800/month — on a business they spent zero time building.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    borderColor: "border-l-teal",
    iconColor: "text-teal-light",
    badge: "badge-teal",
    badgeLabel: "Asset",
    title: "A Real Asset, Not a Side Hustle",
    body: "Your Airbnb is an LLC-backed business with documented revenue. That makes it financeable, scalable, and sellable. Most clients return to add a second property within 90 days of their first going live.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  },
  {
    borderColor: "border-l-violet-light",
    iconColor: "text-violet-light",
    badge: "badge-violet",
    badgeLabel: "Freedom",
    title: "Your Time Stays Yours",
    body: "Zero cold calls to landlords. Zero trips to IKEA. Zero hours learning Airbnb SEO. You handed off the work. You show up for the wire transfer. Ongoing management runs under 30 minutes a week.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

export default function Results() {
  return (
    <section className="bg-violet-surface py-20 px-6 md:px-12" id="results">
      <div className="max-w-4xl mx-auto">

        {/* Pull quote */}
        <div className="text-center mb-14">
          <span className="badge-violet inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5">
            What Clients Actually Experience
          </span>
          <blockquote
            className="text-3xl md:text-4xl font-bold text-gold leading-snug"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            &ldquo;Most clients see their first booking
            <br className="hidden md:block" /> within 7 days of going live.&rdquo;
          </blockquote>
        </div>

        {/* Outcome cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className={`outcome-card bg-surface-2 rounded-xl p-7 border-l-4 ${o.borderColor} border border-border`}
            >
              <div className="flex items-center gap-2 mb-3">
                <svg className={`w-6 h-6 ${o.iconColor}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {o.icon}
                </svg>
                <span className={`${o.badge} px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase`}>
                  {o.badgeLabel}
                </span>
              </div>
              <h3 className="font-bold text-[#F5F5F5] text-base mb-2">{o.title}</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
