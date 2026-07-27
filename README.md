# Operon Labs — Landing Site

Next.js (App Router) marketing site. Light theme with gradient accents, single "Book a call" CTA.

## Edit your copy & links
Everything you'll want to change lives in one place: the `CONFIG` object at the top of **`app/page.js`**.
- `bookingUrl` — **replace with your real Calendly/Cal.com link** (currently a placeholder)
- `email` — your contact email
- `hero`, `services`, `steps`, `stats`, `faqs` — all the wording

Colors live at the top of **`app/globals.css`** (the `--brand`, `--brand-2`, `--brand-3` variables).

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy with GitHub + Vercel
1. Create a new GitHub repo and push this folder:
   ```bash
   cd operon-labs
   git init
   git add .
   git commit -m "Operon Labs site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/operon-labs.git
   git push -u origin main
   ```
2. Go to https://vercel.com → **Add New → Project** → import the repo.
3. Vercel auto-detects Next.js. Leave all settings default. Click **Deploy**.
4. You'll get a live URL in ~1 minute. Every future `git push` auto-deploys.

## Custom domain
In Vercel → your project → **Settings → Domains**, add `operonlabs.com` (or whatever you own) and follow the DNS instructions.

## Before you go live — checklist
- [ ] Replace `bookingUrl` with your real booking link
- [ ] Set your real `email`
- [ ] Tweak the services/FAQ wording to match how you actually pitch
- [ ] (Optional) swap the `tools` list for real integrations you support
