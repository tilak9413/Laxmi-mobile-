"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-maroon-dark text-cream/90 text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 flex flex-wrap items-center justify-center sm:justify-between gap-2">
          <span className="hidden sm:inline">📍 Main Market, Your City</span>
          <span>🕒 Mon - Sun: 9:00 AM - 9:00 PM</span>
          <a href="tel:+919999999999" className="hover:text-gold-light transition-colors">
            📞 +91 99999 99999
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-shadow bg-cream/95 backdrop-blur ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl sm:text-3xl">🕉️</span>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-maroon">
              Laxmi <span className="text-gold">Mobile</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-maroon-dark/80 hover:text-maroon transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2 text-sm font-semibold shadow hover:brightness-105 transition"
            >
              💬 WhatsApp
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 rounded-lg border border-maroon/20"
            >
              <span
                className={`block h-0.5 w-5 mx-auto bg-maroon transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 mx-auto bg-maroon transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 mx-auto bg-maroon transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-maroon/10 bg-cream px-4 pb-4 pt-2 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 px-2 rounded-lg text-maroon-dark font-medium hover:bg-maroon/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-sm font-semibold"
            >
              💬 WhatsApp par baat karein
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
