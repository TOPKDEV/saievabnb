export default function AnnouncementBar() {
  return (
    <div className="bg-gold text-[#0A0A0A] text-sm font-semibold text-center py-3 px-4 relative z-50">
      <span className="pulse-dot" />
      SPOTS ARE LIMITED — We only onboard 3 new clients per month to ensure quality.
      <a href="#cta" className="underline ml-2 hover:opacity-80 transition-opacity">
        Schedule Your Call &rarr;
      </a>
    </div>
  );
}
