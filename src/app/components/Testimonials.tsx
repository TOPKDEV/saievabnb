const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const cards = [
  {
    initials: "MT",
    name: "Marcus T.",
    location: "Atlanta, GA",
    result: "First booking: Day 7  ·  Month 1: $4,100",
    badge: "badge-gold",
    topBorder: "border-t-gold",
    quote:
      "I'd been researching Airbnb for two years. Read the books, watched the YouTube channels, never pulled the trigger because I didn't know if I was doing it right. Saieva just took it off my plate. My property went live in 38 days. First booking came the same week. Month one revenue was $4,100. I'm already talking to them about a second unit.",
  },
  {
    initials: "DR",
    name: "Danielle R.",
    location: "Scottsdale, AZ",
    result: "Net monthly: $2,400 after all expenses",
    badge: "badge-teal",
    topBorder: "border-t-teal",
    quote:
      "The lease negotiation alone saved me. I was about to sign something that had no STR clause — I would have been evicted in 60 days. Their team caught it, renegotiated the terms, and got the landlord to agree to a 2-year lease with full short-term rental rights. That's the difference between having a business and having a liability.",
  },
  {
    initials: "JM",
    name: "Jordan M.",
    location: "Nashville, TN",
    result: "Setup: 42 days  ·  Occupancy: 78%",
    badge: "badge-violet",
    topBorder: "border-t-violet",
    quote:
      "I work 60 hours a week in finance. There was zero way I was spending weekends sourcing furniture and learning Airbnb SEO. Saieva's setup is legitimately done for you. I approved the design choices, signed the lease, and they handled everything else. 78% occupancy rate out of the gate. My only complaint is I didn't do this sooner.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-12" id="testimonials">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge-gold inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            Client Results
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Real People. Real Properties.
          </h2>
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.map((c) => (
            <div
              key={c.name}
              className={`testimonial-card bg-surface border-t-2 ${c.topBorder} border border-border rounded-xl p-7 flex flex-col`}
            >
              <Stars />
              <p className="text-[#D1D5DB] text-sm leading-relaxed flex-1 my-5">&ldquo;{c.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm flex-shrink-0">
                  {c.initials}
                </div>
                <div>
                  <p className="text-[#F5F5F5] font-semibold text-sm">{c.name}</p>
                  <p className="text-[#4B5563] text-xs">{c.location}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className={`${c.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
                  {c.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner testimonial */}
        <div className="bg-surface border border-border rounded-xl p-7 flex flex-col md:flex-row items-start gap-6">
          <Stars />
          <div className="flex-1">
            <p className="text-[#D1D5DB] text-sm leading-relaxed mb-4">
              &ldquo;From our first call to our first guest check-in was 51 days. The systems they set up — automated
              messages, calendar sync, dynamic pricing — I do maybe 30 minutes of work a month on this property.
              I&apos;m not managing it, I&apos;m overseeing it. There&apos;s a difference.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm flex-shrink-0">
                AS
              </div>
              <div>
                <p className="text-[#F5F5F5] font-semibold text-sm">
                  Anthony S.{" "}
                  <span className="text-[#4B5563] font-normal">· Charlotte, NC</span>
                </p>
                <span className="badge-teal mt-1 inline-block px-3 py-0.5 rounded-full text-xs font-semibold">
                  51 days start to first guest · ~30 min/month ongoing
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
