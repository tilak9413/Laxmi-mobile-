import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    icon: "📱",
    title: "Naye Mobile Sales",
    desc: "Samsung, Redmi, Vivo, Oppo, Realme, iPhone - sabhi top brands ke latest models best price par.",
  },
  {
    icon: "🔧",
    title: "Mobile Repairing",
    desc: "Screen, battery, charging port, software issue - har problem ka fast aur reliable solution.",
  },
  {
    icon: "🎧",
    title: "Accessories",
    desc: "Cover, tempered glass, earphones, chargers, power bank aur bahut kuch - genuine quality ke saath.",
  },
  {
    icon: "💳",
    title: "Recharge & Bill Payment",
    desc: "Sabhi network ka mobile recharge, DTH recharge aur electricity bill payment ek hi jagah par.",
  },
  {
    icon: "🔄",
    title: "Old Mobile Exchange",
    desc: "Apna purana mobile exchange karke naya mobile lein best exchange value ke saath.",
  },
  {
    icon: "💰",
    title: "EMI Facility",
    desc: "Bina extra jhanjhat ke easy EMI options ke saath apna pasandida mobile ghar le jayein.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Hamari Services"
          title="Hum Kya Kya Provide Karte Hain"
          subtitle="Laxmi Mobile par aapko mobile se juda har zaroorat ka samadhan milta hai."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-6 border border-maroon/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-maroon/10 flex items-center justify-center text-2xl group-hover:bg-gold/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-maroon-dark">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-[#5a3a44]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
