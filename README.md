# Attack Life

Marketing site for Attack Life — a founder-led personal development brand
(guided retreats, life coaching, and research peptides). Every page routes to
a direct conversation with Ryan; there is no self-serve booking or checkout.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS + [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://motion.dev) for page-load/scroll reveals and hover
  micro-interactions (respects `prefers-reduced-motion`)
- [Supabase](https://supabase.com) for contact form submissions and lead
  routing (wired up when `/contact` is built)
- Deployed on Netlify

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and fill in your Supabase project URL
and anon key once the contact form is wired up.

## Build status

- [x] Homepage — design direction (fonts, colors, spacing) pending approval
- [ ] `/retreats`
- [ ] `/coaching`
- [ ] `/peptides`
- [ ] `/about`
- [ ] `/contact` (Supabase-backed lead routing)

## Project structure

- `src/app` — routes, layout, metadata, SEO file conventions
  (`robots.ts`, `sitemap.ts`, `opengraph-image.tsx`)
- `src/components` — `site-header`, `site-footer`, shared `reveal` /
  `hover-lift` motion wrappers, `home/*` page sections
- `src/components/ui` — shadcn/ui primitives
- `src/lib/site-config.ts` — nav links and brand copy constants shared
  across pages
