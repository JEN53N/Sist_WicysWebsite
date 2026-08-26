# WiCyS Sathyabama — Production Website    

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (custom cyber theme)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **qrcode.react** (dynamic QR code)

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about, mission, events, CTA |
| `/events` | All events by category |
| `/team` | Team members by role |
| `/upcoming` | Upcoming events with countdown |
| `/obscura` | ✨ Magical OBSCURA CTF page |

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and connect via vercel.com.

## Customization

- **Events & Team Data** → `src/data/index.ts`
- **OBSCURA Date** → `obscuraDate` in `src/data/index.ts`
- **Registration Link** → `REGISTRATION_URL` in `src/app/obscura/ObscuraClient.tsx`
- **Brand Colors** → `tailwind.config.ts`
- **Global Styles** → `src/app/globals.css`

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Home page (server)
│   ├── HeroClient.tsx      # Hero with particles (client)
│   ├── events/page.tsx     # Events grid (server)
│   ├── team/page.tsx       # Team cards (server)
│   ├── upcoming/           # Countdown + events
│   └── obscura/            # Magical CTF page (client)
├── components/
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Reusable cards, countdown, particles
├── data/index.ts           # All events + team data
└── lib/utils.ts            # cn() utility
```
