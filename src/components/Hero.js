export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-maroon via-maroon to-maroon-dark text-cream"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-gold-light/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 bg-gold/15 text-gold-light border border-gold/30 rounded-full px-4 py-1.5 text-sm font-semibold">
            ✨ 10+ Saal Ka Vishwas
          </p>

          <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight">
            Laxmi Mobile
            <br />
            <span className="text-gold-light">Aapka Bharosemand Mobile Shop</span>
          </h1>

          <p className="mt-5 text-cream/85 text-base sm:text-lg max-w-xl">
            Naye mobile phones, mobile repairing, accessories, recharge &amp; bill
            payment - sab kuch ek hi jagah, best price aur genuine warranty ke
            saath.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-gold text-maroon-dark font-bold px-6 py-3 shadow-lg hover:brightness-105 transition"
            >
              Products Dekhein
            </a>
            <a
              href="tel:+919999999999"
              className="rounded-full border-2 border-cream/40 px-6 py-3 font-semibold hover:bg-cream/10 transition"
            >
              📞 Call Now
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              ["10+", "Saal Ka Anubhav"],
              ["15,000+", "Khush Grahak"],
              ["500+", "Mobile Models"],
            ].map(([num, label]) => (
              <div key={label}>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gold-light">
                  {num}
                </h3>
                <p className="text-xs sm:text-sm text-cream/75 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:flex justify-center items-center h-[420px]">
          <div className="animate-float absolute w-44 h-80 rounded-[2.2rem] bg-gradient-to-b from-white/20 to-white/5 border border-white/25 shadow-2xl backdrop-blur-sm -translate-x-16 rotate-[-8deg] flex items-start justify-center pt-4">
            <div className="w-16 h-1.5 rounded-full bg-white/40" />
            <div className="absolute inset-3 top-8 rounded-2xl bg-gradient-to-br from-gold/40 to-maroon-light/40" />
          </div>
          <div className="animate-float-delay absolute w-48 h-[22rem] rounded-[2.2rem] bg-gradient-to-b from-white/25 to-white/10 border border-white/25 shadow-2xl backdrop-blur-sm translate-x-16 rotate-[8deg] flex items-start justify-center pt-4">
            <div className="w-16 h-1.5 rounded-full bg-white/40" />
            <div className="absolute inset-3 top-8 rounded-2xl bg-gradient-to-br from-maroon-light/40 to-gold/40" />
          </div>

          <span className="absolute top-6 left-0 bg-cream text-maroon-dark text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
            ✅ Genuine Products
          </span>
          <span className="absolute bottom-16 right-0 bg-cream text-maroon-dark text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
            🛡️ Warranty
          </span>
          <span className="absolute bottom-0 left-8 bg-cream text-maroon-dark text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
            🚚 Home Delivery
          </span>
        </div>
      </div>
    </section>
  );
}
