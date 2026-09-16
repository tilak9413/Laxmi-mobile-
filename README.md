# Laxmi Mobile

Laxmi Mobile ki official website - ek local mobile shop jo naye mobile phones,
mobile repairing, accessories, recharge/bill payment aur exchange offer
provide karti hai.

Built with [Next.js](https://nextjs.org) (App Router) and
[Tailwind CSS](https://tailwindcss.com).

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.
Edit sections in `src/components/` - page auto-updates on save.

## Project Structure

- `src/app/page.js` - home page, assembles all sections
- `src/app/layout.js` - root layout, fonts, metadata
- `src/components/` - Header, Hero, Services, Products, Gallery,
  Testimonials, Contact, Footer, etc.

Update shop details (address, phone number, WhatsApp number) inside
`src/components/Header.js`, `Hero.js`, `Contact.js`, and `Footer.js`.

## Deploy on Vercel (Free)

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
3. Import this repository - Vercel auto-detects Next.js, no config needed.
4. Click **Deploy**. You'll get a free `*.vercel.app` URL in a couple of
   minutes, with automatic redeploys on every push to the main branch.
