"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much capital do I actually need to get started?",
    a: "Plan for $15,000–$25,000 all-in. This covers our service fee plus first/last month's rent, security deposit, and furnishing costs. The exact number depends on your target market and unit size. We give you a full budget breakdown on your strategy call before you commit to anything — no surprises, ever.",
  },
  {
    q: "Do I need to own property to do this?",
    a: "No. This model is built on leasing, not ownership. You rent the unit from a landlord under a lease that grants you the right to sublease it as a short-term rental — this is called rental arbitrage. It's a legal, well-established model used by thousands of operators nationally. We negotiate the lease on your behalf to ensure the terms are airtight before you sign anything.",
  },
  {
    q: "What if my local area doesn't allow Airbnb?",
    a: "That's exactly what our market research phase addresses. We don't move forward until we've identified a viable market that passes our full approval criteria. If your city isn't viable, we'll tell you upfront — and present alternatives within driving distance or in markets you'd be open to. We've never left a client without at least two strong options.",
  },
  {
    q: "How long does the full setup take?",
    a: "The average timeline from signed agreement to first guest is 45 days. Some setups run faster (30 days) depending on lease availability and furnishing lead times. We give you a projected milestone timeline at the start of your engagement so you always know where things stand.",
  },
  {
    q: "What happens after setup? Do you manage it ongoing?",
    a: "Our core service is full setup — not ongoing management. However, we configure everything so it runs with minimal hands-on work from you. The automated messaging, pricing rules, and calendar sync handle roughly 90% of operations. You can manage it yourself in under an hour a week, or hire a VA using our SOPs. We do offer ongoing management as an add-on — ask about it on your call.",
  },
  {
    q: "Is this guaranteed to make money?",
    a: "No legitimate business comes with a guaranteed return — and anyone who tells you otherwise is selling you something. What we can say: we only work in markets with documented demand, and our clients average $3,800–$6,200/month in gross revenue. The risk is real. The opportunity is real. We'll walk you through the honest numbers on your call so you can make a fully informed decision.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-navy-surface py-20 px-6 md:px-12" id="faq">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-violet inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Questions We Hear
            <br className="hidden sm:block" /> On Every Call
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-surface-2 border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className="font-semibold text-[#F5F5F5] text-base group-hover:text-gold transition-colors">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>

                <div
                  style={{ maxHeight: isOpen ? "500px" : "0", opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <p className="text-[#9CA3AF] text-sm leading-relaxed px-6 pb-5">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
