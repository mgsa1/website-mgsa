# Deploying gdsa.eu

Source of truth: this repo. Hosting: GitHub Pages, custom domain gdsa.eu
(DNS stays at Infomaniak; only the A/CNAME records point at GitHub).

## How to deploy
Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) builds the site
with Astro and publishes `dist/` to GitHub Pages. Live about a minute later.
Follow progress in the repo's Actions tab; "Run workflow" redeploys without a change.

## One-time setup (2026-10-30)
- Repo Settings > Pages: source "GitHub Actions", custom domain gdsa.eu, enforce HTTPS.
- `public/CNAME` contains `gdsa.eu` so the domain survives every deploy.
- `astro.config.mjs` sets `site: 'https://gdsa.eu'`.
- Infomaniak DNS: A gdsa.eu -> 185.199.108.153 / .109.153 / .110.153 / .111.153,
  CNAME www.gdsa.eu -> mgsa1.github.io. MX records untouched (mail stays at Infomaniak).
- Repo must stay public (Pages on a free account requires it).
