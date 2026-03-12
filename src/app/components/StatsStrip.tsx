const stats = [
  { value: "$4,200", label: "Avg Monthly Revenue", color: "text-gold-gradient" },
  { value: "45",     label: "Days Avg Setup",       color: "text-teal-gradient" },
  { value: "3",      label: "Platforms Listed On",  color: "text-step-gradient" },
  { value: "12+",    label: "Properties Managed",   color: "text-gold-gradient" },
];

export default function StatsStrip() {
  return (
    <section className="bg-surface py-14 px-6 md:px-12" id="proof">
      <div className="max-w-5xl mx-auto">

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className={`text-4xl font-bold mb-1 ${s.color}`}
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {s.value}
              </p>
              <p className="text-[#9CA3AF] text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Platform logos */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { name: "Airbnb",       badge: "badge-orange" },
            { name: "VRBO",         badge: "badge-teal" },
            { name: "Booking.com",  badge: "badge-violet" },
            { name: "Hostaway",     badge: "badge-gold" },
          ].map((p) => (
            <span
              key={p.name}
              className={`${p.badge} px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide`}
            >
              {p.name}
            </span>
          ))}
        </div>
        <p className="text-center text-[#4B5563] text-xs mt-4">
          Listed and integrated across all major short-term rental platforms
        </p>
      </div>
    </section>
  );
}
