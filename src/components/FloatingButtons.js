"use client";

import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp par sampark karein"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white text-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
      >
        💬
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Upar jayein"
          className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-maroon text-cream flex items-center justify-center shadow-xl hover:bg-maroon-dark transition-colors"
        >
          ⬆️
        </button>
      )}
    </>
  );
}
