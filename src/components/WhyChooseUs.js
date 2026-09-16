const POINTS = [
  "100% Genuine Products aur Manufacturer Warranty",
  "Market Ke Best Price - No Hidden Charges",
  "Expert Technicians Dwara Fast Mobile Repairing",
  "Easy EMI aur Exchange Offer Ki Suvidha",
  "10+ Saal Se Grahakon Ki Sewa Mein",
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:flex justify-center">
          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-maroon to-maroon-dark flex items-center justify-center text-8xl shadow-2xl">
            🕉️
          </div>
        </div>

        <div>
          <p className="text-gold font-bold tracking-wide uppercase text-sm">
            Hamein Kyun Chunein
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-maroon-dark">
            Laxmi Mobile - Vishwas Ka Naam
          </h2>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-maroon text-cream flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span className="text-[#5a3a44] text-sm sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-maroon text-cream font-bold px-6 py-3 shadow hover:bg-maroon-dark transition-colors"
          >
            Humse Sampark Karein
          </a>
        </div>
      </div>
    </section>
  );
}
