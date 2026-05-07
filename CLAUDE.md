@AGENTS.md

# Merit Systems site — agent guide

Public marketing site at **https://meritsystems.cloud**. Single-page,
statically exported, deployed to Azure Static Web Apps Free tier on every
push to `main`.

## Stack

- Next.js 16 (App Router) with `output: 'export'`
- React 19, Tailwind CSS v4 (CSS-first config in `globals.css`)
- `next-themes` for dark/light (dark default)
- `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`

## Brand constraints — read before writing copy

This is **not** an MSP. Avoid:

- "Managed services," "trusted partner," "your IT department" framings
- Generic IT-support words: "computer support," "desktop repair," "help desk"
- Stock-photo register, glossy 3D imagery, sales-hype verbs ("transform,"
  "unlock potential")

Voice is **founder-led "we"**, technical, terse, decisive. Brandon Quantz
is the named principal (Broadcom Knight, infrastructure / product
architect). Visual register: HashiCorp / Tailscale / Vercel — minimal,
near-monochrome with a single steel-blue accent (`--accent`), line-art
SVG diagrams over photography.

## Layout map

```
src/app/
  layout.tsx            root layout, fonts, ThemeProvider, metadata, Analytics
  page.tsx              composes section components (Hero, Capabilities, ...)
  globals.css           Tailwind import + theme tokens
  icon.svg              favicon (Next icon convention)
  opengraph-image.tsx   build-time 1200x630 social card via next/og
  twitter-image.tsx     re-exports OG card
  robots.ts             generates /robots.txt
  sitemap.ts            generates /sitemap.xml
  blog/page.tsx         hidden /blog stub (noindex, no nav link)
src/components/
  site-header.tsx       sticky header, anchor nav, theme toggle
  site-footer.tsx       LLC line + email
  theme-provider.tsx    next-themes wrapper (client)
  theme-toggle.tsx      sun/moon button (client)
  wordmark.tsx          cloud + circuit-traces brand mark + text
  architecture-diagram.tsx   hero-side decorative SVG
  analytics.tsx         Fathom script, no-op when env var unset
  sections/
    hero.tsx, capabilities.tsx, expertise.tsx, about.tsx, contact.tsx
src/lib/utils.ts        `cn()` helper (clsx + tailwind-merge)
scripts/post-build.mjs  renames extensionless OG/Twitter PNGs after `next build`
staticwebapp.config.json   SWA headers, OG-PNG rewrites, 404 override
.github/workflows/azure-static-web-apps-*.yml   SWA-injected deploy workflow
```

All copy lives in `src/components/sections/*.tsx`. Capability cards and the
expertise table are arrays at the top of their respective files.

## Next 16 + static export — known gotchas

1. **Generated routes need `export const dynamic = "force-static"`.**
   `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, and
   `app/twitter-image.tsx` all set this. Without it, `next build` fails
   during page-data collection with "not configured on route ... with
   output: export".

2. **`opengraph-image.tsx` emits a file with no extension.**
   SWA serves extensionless files as `application/octet-stream`, which
   social crawlers reject. `scripts/post-build.mjs` renames
   `out/opengraph-image` → `out/opengraph-image.png` (and same for
   twitter), and `staticwebapp.config.json` rewrites the request paths
   the meta tags emit. Keep this whenever Next changes OG output.

3. **Tailwind v4** has no `tailwind.config.ts`. Theme tokens, dark variant
   (`@custom-variant dark (&:where(.dark, .dark *))`), and `@theme inline`
   block all live in `globals.css`. Don't recreate a JS config file.

## Deploy flow

`git push origin main` → SWA's GitHub Actions workflow runs `npm run build`
(which includes the post-build rename), uploads `out/`, and deploys.
Typical run: ~80–95 seconds. To watch:

```powershell
gh run list --repo bquantz/meritsystems-site --limit 1
gh run watch --repo bquantz/meritsystems-site
```

Both `meritsystems.cloud` and `www.meritsystems.cloud` are mapped to
the SWA. Apex is canonical; `www` is handled by an inline `<head>` JS
redirect plus `<link rel=canonical>` (free tier has no host-level
redirect).

## Analytics

Fathom integration is gated on `NEXT_PUBLIC_FATHOM_SITE_ID`. The component
returns `null` when unset, so the site builds and deploys cleanly without
the variable. Set it as a **GitHub repository variable** (not secret —
Fathom IDs are public) at Settings → Secrets and variables → Actions →
Variables. The SWA workflow already wires it through.

## Editing the site — common tasks

- **Change copy:** edit the relevant section component in
  `src/components/sections/`.
- **Add / remove a capability card:** edit the `capabilities` array in
  `src/components/sections/capabilities.tsx`.
- **Add / remove an expertise row:** edit the `rows` array in
  `src/components/sections/expertise.tsx`.
- **Replace the brand mark:** edit `src/components/wordmark.tsx`
  (used in header + footer) and mirror the change in `src/app/icon.svg`.
- **Change palette:** edit the CSS custom properties in `globals.css`
  (`:root` for light, `.dark` for dark). Components reference them via
  `var(--accent)`, `var(--foreground)`, etc.
- **Add a new top-level page:** create `src/app/<slug>/page.tsx`. Static
  export will emit `out/<slug>/index.html`. Don't forget to add it to
  `sitemap.ts` and link from `site-header.tsx` if it should be in nav.

## Things to NOT do

- Don't add server-only Next features (Server Actions, dynamic Route
  Handlers, `cookies()`, middleware, ISR) — they'll fail under
  `output: 'export'`. The unsupported-features list is in
  `node_modules/next/dist/docs/01-app/02-guides/static-exports.md`.
- Don't commit `.env.local` or any file with a real Fathom Site ID —
  use the GitHub repository variable instead.
- Don't edit the SWA-injected workflow file unless you understand what
  Microsoft's deploy action expects (env vars, action inputs); it
  regenerates if SWA is re-linked.
- Don't add stock photos. Don't add a "managed services" pillar. Don't
  soften the founder-led, architecture-first framing.
