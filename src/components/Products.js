import SectionHeading from "./SectionHeading";

const PRODUCTS = [
  {
    tag: "New",
    name: "Redmi Note Series",
    price: "₹ 12,999 se shuru",
    gradient: "from-red-400 to-orange-300",
  },
  {
    tag: "Hot",
    name: "Samsung Galaxy Series",
    price: "₹ 10,499 se shuru",
    gradient: "from-sky-400 to-indigo-300",
  },
  {
    tag: null,
    name: "Vivo & Oppo Series",
    price: "₹ 11,999 se shuru",
    gradient: "from-emerald-400 to-teal-300",
  },
  {
    tag: "Premium",
    name: "Apple iPhone Series",
    price: "₹ 39,999 se shuru",
    gradient: "from-slate-500 to-slate-300",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Products"
          title="Latest Mobile Collection"
          subtitle="Sabhi brands ke naye models available hain - store par visit karke live dekhein."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="relative bg-cream rounded-2xl border border-maroon/10 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
            >
              {p.tag && (
                <span className="absolute top-3 left-3 z-10 bg-gold text-maroon-dark text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {p.tag}
                </span>
              )}
              <div
                className={`h-32 sm:h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-5xl`}
              >
                📱
              </div>
              <div className="p-4 flex flex-col gap-2 grow">
                <h4 className="font-bold text-maroon-dark text-sm sm:text-base">
                  {p.name}
                </h4>
                <p className="text-gold font-extrabold text-sm">{p.price}</p>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex justify-center rounded-full bg-maroon text-cream text-xs sm:text-sm font-semibold py-2 hover:bg-maroon-dark transition-colors"
                >
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-maroon/5 rounded-2xl p-8">
          <p className="text-[#5a3a44] mb-4">
            Yeh sirf kuch models hain - poori range ke liye store visit karein
            ya humein call karein.
          </p>
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-maroon-dark font-bold px-6 py-3 shadow hover:brightness-105 transition"
          >
            📞 Puri List Ke Liye Call Karein
          </a>
        </div>
      </div>
    </section>
  );
}
