const forYou = [
  "You have $15,000–$25,000 in capital ready to deploy into a real business",
  "You want real estate cash flow without buying property or flipping houses",
  "You're running a W-2 or another business and don't have time to DIY this",
  "You've looked into Airbnb before but got overwhelmed by the setup process",
  "You want a systemized asset, not another thing to manage yourself",
  "You understand this is an investment and you're ready to move in the next 30 days",
];

const notForYou = [
  "You're looking for a \"quick flip\" with no upfront capital commitment",
  "You want to learn how to do this yourself (we offer a course for that)",
  "You're not prepared to follow a proven system and trust the process",
  "You expect guaranteed returns with zero risk (no legitimate business offers that)",
];

export default function WhoIsItFor() {
  return (
    <section className="py-20 px-6 md:px-12" id="who">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge-teal inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            Qualification
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            This Is Built For
            <br className="hidden sm:block" /> a Specific Type of Person.
          </h2>
          <p className="text-[#9CA3AF] text-lg">
            Read both lists honestly. One of them describes you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

          {/* For you */}
          <div className="bg-surface border border-border rounded-xl p-8 border-t-2 border-t-teal">
            <h3 className="font-bold text-[#F5F5F5] text-lg mb-5 flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              This is for you if&hellip;
            </h3>
            <ul className="space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#D1D5DB] text-sm">
                  <span className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="bg-surface border border-border rounded-xl p-8 border-t-2 border-t-red-500/50">
            <h3 className="font-bold text-[#F5F5F5] text-lg mb-5 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              This is NOT for you if&hellip;
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#9CA3AF] text-sm">
                  <span className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Callout */}
        <div className="border border-gold/30 bg-gold/5 rounded-xl p-7 text-center">
          <p className="text-[#D1D5DB] leading-relaxed mb-5">
            If you&apos;re in the first list, we should talk. If you&apos;re in the second, this offer isn&apos;t right for
            you right now — and we&apos;d rather tell you that now than waste both of our time on a call.
          </p>
          <a
            href="#cta"
            className="btn-gold-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-base"
          >
            I&apos;m In The First List — Let&apos;s Talk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
