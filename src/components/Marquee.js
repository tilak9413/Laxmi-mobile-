const ITEMS = [
  "📱 Naye Mobile",
  "🔧 Mobile Repairing",
  "🎧 Accessories",
  "💳 Recharge & Bill Pay",
  "🔄 Old Mobile Exchange",
  "💰 EMI Available",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-gold text-maroon-dark overflow-hidden py-3 border-y border-gold-light/50">
      <div className="flex w-max gap-10 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-semibold text-sm sm:text-base">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
