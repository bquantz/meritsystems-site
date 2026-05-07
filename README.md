# Merit Systems — meritsystems.cloud

Public website for Merit Systems. Static site, Next.js App Router, deployed to Azure Static Web Apps.

## Stack

- Next.js 16 (App Router) with `output: 'export'`
- React 19
- Tailwind CSS v4
- `next-themes` for dark/light toggle (dark default)
- `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`

## Local development

```powershell
npm install
npm run dev      # http://localhost:3000
```

## Build

```powershell
npm run build    # static export → ./out
```

The `out/` directory is the deployable artifact.

## Project layout

```
src/
  app/
    layout.tsx          # root layout, fonts, ThemeProvider, metadata
    page.tsx            # home page (composes section components)
    globals.css         # Tailwind import + theme tokens
    icon.svg            # favicon (Next.js icon convention)
    robots.ts           # generates /robots.txt
    sitemap.ts          # generates /sitemap.xml
    blog/
      page.tsx          # /blog stub (noindex, no nav link)
  components/
    site-header.tsx
    site-footer.tsx
    theme-provider.tsx
    theme-toggle.tsx
    wordmark.tsx
    architecture-diagram.tsx
    sections/
      hero.tsx
      capabilities.tsx
      expertise.tsx
      about.tsx
      contact.tsx
  lib/
    utils.ts            # `cn()` helper
public/                 # static assets (currently empty)
staticwebapp.config.json
next.config.ts
```

## Editing content

All copy lives inside `src/components/sections/*.tsx`. Capability cards are an
array at the top of `capabilities.tsx`; the expertise table is an array at the
top of `expertise.tsx`. Founder bio is in `about.tsx`.

## Deploying to Azure Static Web Apps

1. Push the repo to GitHub.
2. Create the SWA via CLI (free tier) — adjust `<owner>/<repo>`:
   ```powershell
   az staticwebapp create `
     --name meritsystems-web `
     --resource-group rg-meritsystems-web `
     --source https://github.com/<owner>/<repo> `
     --location eastus2 `
     --branch main `
     --app-location "/" `
     --output-location "out" `
     --login-with-github
   ```
3. SWA injects a GitHub Actions workflow on first link. The workflow runs
   `npm run build` and uploads `./out`.
4. In the SWA portal, add the custom domain `meritsystems.cloud`. Add the
   DNS records SWA prompts for (CNAME for `www`, ALIAS/ANAME or Cloudflare
   flattening for the apex).
5. SWA auto-issues a managed TLS certificate once DNS validates.

## Analytics

The site is wired for [Fathom Analytics](https://usefathom.com) via the
`NEXT_PUBLIC_FATHOM_SITE_ID` env var. The script only loads when the var
is set; with it unset, no analytics traffic leaves the site.

To enable in production:

1. Sign up at https://usefathom.com and add `meritsystems.cloud` as a site.
2. Copy the **Site ID** (an 8-character code like `ABCDEFGH`).
3. In GitHub: **Settings → Secrets and variables → Actions → Variables tab**.
   Add a new repository variable named `NEXT_PUBLIC_FATHOM_SITE_ID` with the
   Site ID as the value. (Variable, not secret — Fathom IDs are public.)
4. Trigger a deploy (push any change, or re-run the latest workflow).

Locally, copy `.env.example` to `.env.local` and set the same variable to
test analytics during `npm run dev`.

## Before launch

- Capture Lighthouse scores on first deploy

The `/blog` route is intentionally hidden from navigation and `noindex`'d. It
is reserved for AI infrastructure / VCF / platform writing once that content
exists.
