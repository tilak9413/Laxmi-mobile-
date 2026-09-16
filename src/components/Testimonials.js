import SectionHeading from "./SectionHeading";

const REVIEWS = [
  {
    text: "Bahut hi genuine mobile shop hai. Yahan se maine apna naya phone liya, price bhi best mila aur service bhi zabardast thi.",
    name: "Rahul Sharma",
    initial: "R",
  },
  {
    text: "Mobile repair ke liye best jagah. Screen break ho gaya tha, ek hi din mein sahi ho gaya wo bhi reasonable price mein.",
    name: "Sunita Devi",
    initial: "S",
  },
  {
    text: "Exchange offer ka fayda uthaya, purana phone dekar naya iPhone liya. Staff bhi bahut helpful hai.",
    name: "Amit Kumar",
    initial: "A",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Grahak Kya Kehte Hain" title="Customer Reviews" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 border border-maroon/10 shadow-sm flex flex-col gap-5"
            >
              <p className="text-sm text-[#5a3a44] italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-maroon text-cream flex items-center justify-center font-bold">
                  {r.initial}
                </div>
                <div>
                  <h5 className="font-bold text-maroon-dark text-sm">
                    {r.name}
                  </h5>
                  <span className="text-gold text-sm">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
