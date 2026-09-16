export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon-dark text-cream/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🕉️</span>
            <span className="text-xl font-extrabold text-cream">
              Laxmi <span className="text-gold-light">Mobile</span>
            </span>
          </a>
          <p className="mt-4 text-sm">
            Aapka bharosemand mobile shop - naye mobile, repairing, accessories
            aur bahut kuch, ek hi jagah par.
          </p>
        </div>

        <div>
          <h4 className="text-cream font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#services" className="hover:text-gold-light transition-colors">Services</a>
            <a href="#products" className="hover:text-gold-light transition-colors">Products</a>
            <a href="#gallery" className="hover:text-gold-light transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-gold-light transition-colors">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="text-cream font-bold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span>Mobile Sales</span>
            <span>Mobile Repairing</span>
            <span>Recharge &amp; Bill Pay</span>
            <span>Accessories</span>
          </div>
        </div>

        <div>
          <h4 className="text-cream font-bold mb-4">Sampark</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span>📍 Main Market, Your City</span>
            <span>📞 +91 99999 99999</span>
            <span>✉️ laxmimobile@example.com</span>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/60">
        © {year} Laxmi Mobile. All Rights Reserved.
      </div>
    </footer>
  );
}
