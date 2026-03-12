export default function Hero() {
  return (
    <section className="hero-bg pt-16 pb-20 px-6 md:px-12" id="hero">
      <div className="max-w-4xl mx-auto text-center">

        {/* Pre-headline badge */}
        <span className="badge-violet inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-light inline-block" />
          Done-For-You Airbnb Business Setup
        </span>

        {/* Headline */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          We Build Your{" "}
          <br className="hidden sm:block" />
          <span className="text-gold-gradient">Airbnb Business.</span>
          <br className="hidden sm:block" />
          You Collect the Checks.
        </h1>

        {/* Subheadline */}
        <p className="text-[#9CA3AF] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Saieva handles everything — LLC formation, lease negotiation, interior
          design, photography, listing setup, and full automation — so you can
          own a cash-flowing short-term rental without doing any of the work.
        </p>

        {/* VSL */}
        <div className="vsl-glow max-w-3xl mx-auto mb-10">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            {/* Replace this placeholder with your iframe embed */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D0D0D]">
              <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-4 cursor-pointer hover:bg-gold/20 transition-colors">
                <svg className="w-8 h-8 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-[#9CA3AF] text-sm font-medium">
                Watch: How We Build Your Airbnb Business in 45 Days
              </p>
              <p className="text-[#4B5563] text-xs mt-1">
                [Swap placeholder with your YouTube/Vimeo embed]
              </p>
            </div>
            {/*
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"
              title="Saieva — How We Build Your Airbnb Business"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            */}
          </div>
        </div>

        {/* Primary CTA */}
        <a
          href="#cta"
          className="btn-gold-shimmer inline-flex items-center gap-3 px-10 py-5 rounded-xl text-lg w-full sm:w-auto justify-center"
        >
          Yes, Build My Airbnb Business
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <p className="text-[#4B5563] text-sm mt-3">
          No long-term contracts &nbsp;·&nbsp; Limited spots available &nbsp;·&nbsp; 30-minute call, no pressure
        </p>
      </div>
    </section>
  );
}
