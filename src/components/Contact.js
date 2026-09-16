"use client";

import { useState } from "react";

const INFO = [
  {
    icon: "📍",
    title: "Address",
    body: (
      <>
        Laxmi Mobile, Main Market Road,
        <br />
        Your City, Your State - 000000
      </>
    ),
  },
  {
    icon: "📞",
    title: "Phone",
    body: <a href="tel:+919999999999">+91 99999 99999</a>,
  },
  {
    icon: "💬",
    title: "WhatsApp",
    body: (
      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
        +91 99999 99999
      </a>
    ),
  },
  {
    icon: "🕒",
    title: "Timing",
    body: "Somvar - Ravivar: 9:00 AM - 9:00 PM",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = `Namaste, mera naam ${form.name} hai.%0AMobile: ${form.phone}%0AVishay: ${
      form.subject || "-"
    }%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold font-bold tracking-wide uppercase text-sm">
            Sampark Karein
          </p>
          <h2 className="section-heading-underline mt-2 text-2xl sm:text-4xl font-extrabold text-maroon-dark">
            Humse Judein
          </h2>
          <p className="mt-4 text-[#5a3a44] text-sm sm:text-base">
            Kisi bhi jaankari ke liye call, WhatsApp karein ya seedhe store par
            visit karein.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="grid sm:grid-cols-2 gap-5 content-start">
            {INFO.map((item) => (
              <div
                key={item.title}
                className="bg-cream rounded-2xl p-5 border border-maroon/10 flex items-start gap-4"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-maroon/10 flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-maroon-dark text-sm">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-[#5a3a44]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-cream rounded-2xl p-6 sm:p-8 border border-maroon/10 flex flex-col gap-4"
          >
            <h3 className="text-lg font-bold text-maroon-dark">Message Bhejein</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Aapka Naam"
                required
                className="rounded-xl border border-maroon/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="rounded-xl border border-maroon/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Vishay (Subject)"
              className="rounded-xl border border-maroon/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Apna message likhein..."
              required
              className="rounded-xl border border-maroon/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold resize-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gold text-maroon-dark font-bold py-3 hover:brightness-105 transition"
            >
              WhatsApp Par Message Bhejein
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
