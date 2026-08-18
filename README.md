# Om Metal Scrap Traders — Website

A React + Vite website for a scrap metal trading business (copper, brass, aluminium,
iron & steel, stainless steel, e-waste). Design system is inspired by a modern
Framer agency template — clean dark/industrial theme, scroll animations, card grids —
rebuilt from scratch in React with fully original copy for a scrap metal business.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## ⚠️ Before you launch — edit these

All easy-to-edit business details live in **`src/data/siteConfig.js`**:

- `whatsappNumber` — your real WhatsApp number (digits only, country code first, e.g. `919876543210`). This powers the **"Get Quote"** navbar button, the homepage enquiry form, and every "Get Quote" CTA — all open a pre-filled WhatsApp chat.
- `mapEmbedSrc` — your real yard/office location. Go to Google Maps → search your address → **Share → Embed a map** → copy the `src="..."` URL and paste it here.
- `phoneDisplay`, `email`, `address`, `hours`, `social` — update with your real details.

Service content (titles, descriptions, "what's covered" lists) lives in
**`src/data/services.js`** — edit or add/remove services there; the Services page and
every service detail page (`/services/[slug]`) are generated automatically from this file.

## Pages

- `/` — Home (hero, trusted-by strip, about preview, services grid, why-us, stats, testimonials, **Google Map embed + enquiry form**, CTA)
- `/about` — About (story, mission, stats, values, team, CTA)
- `/services` — Services overview (all 6 scrap categories)
- `/services/:slug` — Service detail template (used by all 6 services, e.g. `/services/copper-scrap`)

## Build for Production

```bash
npm run build
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this project to a GitHub repo
2. Go to https://vercel.com/new
3. Import your repo
4. Framework preset: **Vite**
5. Click **Deploy** — done!

(A `vercel.json` is already included with SPA rewrites so all routes work correctly.)

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- React Router v6
- Lucide React icons
