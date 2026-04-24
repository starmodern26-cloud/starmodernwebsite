# Star Modern Diagnostic Laboratory

A modern Next.js website for Star Modern Diagnostic Laboratory.

Visually polished with a vibrant emerald design system, Plus Jakarta Sans + Space Grotesk typography, soft elevation, and a working contact form that emails submissions straight to your inbox — no backend required.

---

## Tech stack

- Next.js 16 (App Router) — built as a fully static site
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (Radix UI under the hood)
- lucide-react icons
- Web3Forms (free, static-friendly form delivery)

---

## Getting started (local development)

You need Node.js 20+ and npm 10+.

```bash
# 1. Install dependencies
npm install

# 2. (optional) Set up the contact form — see "Contact form" below.
cp .env.example .env.local
# then edit .env.local and paste your Web3Forms key

# 3. Start the dev server
npm run dev
```

Open http://localhost:3000.

---

## Contact form (Web3Forms)

The contact form delivers submissions straight to your email — no server, no database, no API keys to manage.

**Setup (30 seconds):**

1. Go to https://web3forms.com and enter your email.
2. Click **Create Access Key**. You'll get a key like `abc123-def456-...`.
3. Open `.env.local` and set:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
   ```
4. Run `npm run build` — the key is baked into the static files.
5. Done. Every form submission emails you instantly.

**If you skip this step**, the form still works — it falls back to opening
the visitor's email client with a pre-filled message. So the site is
never broken.

---

## Production build

This project is configured for **static export** (`next.config.mjs` →
`output: 'export'`), which makes it ideal for static hosts like
**Hostinger**, Netlify, Cloudflare Pages, or any plain web server.

```bash
# Build the static site (output goes to ./out)
npm run build
```

After the build finishes, the entire site is in `out/`. Upload the
contents of `out/` to your hosting provider's `public_html/` (Hostinger)
or equivalent web root.

### Hostinger deployment

1. Run `npm run build` locally.
2. Open Hostinger File Manager → `public_html`.
3. Upload everything from inside the `out/` folder (not the folder itself).
4. Done — the site is live.

The included `.htaccess` (added inside `out/` automatically when you use
the pre-built ZIP) enables clean URLs, friendly 404s, gzip compression,
and long-term caching for static assets.

Because `trailingSlash: true` is enabled, every page is served as
`index.html` inside its own directory (e.g. `/about/index.html`), which
works on every static host with no additional rewrites required.

---

## Project structure

```
.
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── contact/          # Includes Web3Forms contact form
│   ├── services/
│   │   └── [slug]/
│   ├── globals.css       # Theme tokens + typography
│   └── layout.tsx        # Root layout with fonts
├── components/           # Reusable React components
│   └── ui/               # shadcn/ui primitives
├── lib/                  # Utilities & data
├── public/               # Images, icons, static assets
├── .env.example          # Env var template (copy to .env.local)
├── components.json       # shadcn/ui config
├── next.config.mjs       # Next.js config (static export enabled)
├── postcss.config.mjs    # Tailwind v4 PostCSS plugin
├── tsconfig.json
└── package.json
```

---

## Design system reference

| Token          | Light mode value     | Notes                                  |
| -------------- | -------------------- | -------------------------------------- |
| `--primary`    | `hsl(158 84% 28%)`   | Vibrant jewel-tone emerald             |
| `--background` | `hsl(160 30% 99%)`   | Soft minty white                       |
| `--foreground` | `hsl(162 55% 9%)`    | Deep forest green text                 |
| `--secondary`  | `hsl(158 40% 94%)`   | Tinted minty surface                   |
| `--accent`     | `hsl(158 55% 90%)`   | Brand chip background                  |
| `--border`     | `hsl(158 25% 86%)`   | Crisp, intentional dividers            |
| `--radius`     | `0.75rem`            | Generous rounded corners               |
| Sans font      | Plus Jakarta Sans    | Body copy                              |
| Heading font   | Space Grotesk        | All `h1`–`h6`                          |

A full dark-mode palette is also provided. Toggle it by adding
`class="dark"` to the `<html>` element.
