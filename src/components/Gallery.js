import SectionHeading from "./SectionHeading";

const ITEMS = [
  { icon: "🏬", gradient: "from-amber-200 to-orange-300" },
  { icon: "📱", gradient: "from-rose-200 to-red-300" },
  { icon: "🔧", gradient: "from-slate-200 to-slate-400" },
  { icon: "🎧", gradient: "from-violet-200 to-purple-300" },
  { icon: "💳", gradient: "from-sky-200 to-blue-300" },
  { icon: "🛍️", gradient: "from-lime-200 to-green-300" },
  { icon: "👨‍💼", gradient: "from-yellow-200 to-amber-300" },
  { icon: "✨", gradient: "from-pink-200 to-rose-300" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Hamari Dukan"
          title="Shop Gallery"
          subtitle="Laxmi Mobile store ki jhalak."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-4xl sm:text-5xl shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all`}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
