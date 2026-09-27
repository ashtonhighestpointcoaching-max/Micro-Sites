# Repo state — read this first

This repo was seeded from the live `inverness-roofing` Vercel project via the
Vercel API's deployment file browser, because that project was deployed by CLI
with no git repo behind it (`source: "cli"`, no linked repository). The API has
a response-size limit that cut off some files mid-content, so **this is a
partial scaffold, not a full working copy of the site yet.**

## What's here and verified complete
- `package.json`, `tsconfig.json`, `vite.config.ts`, `vercel.json`
- `client/src/entry-server.tsx`, `client/src/main.tsx`
- `ideas.md`, `todo.md`

## What's missing or cut off — needed before this builds or runs
The Vercel file browser either truncated these mid-file or couldn't list them
at all (its directory listing hits a depth limit before reaching them):

- `client/src/App.tsx` — cut off near the end (~224 chars missing)
- `client/src/index.css` — cut off early; ~16KB of the design-system CSS missing
- `client/src/routes.ts` — cut off; most of the 72-route metadata list missing
- `client/src/data/*.ts` (site.ts, services.ts, towns.ts, faqs.ts, and 3 more) —
  **not retrievable at all through the API.** This is where all the page copy
  actually lives, so it's the highest-priority thing to get in here.
- `client/src/pages/*.tsx` (9 files: Home, ServicePage, TownPage,
  ServiceTownPage, ServiceAreas, FreeEstimate, Legal, NotFound, +1 more)
- `client/src/components/*.tsx` (3 files: Chrome.tsx and 2 more)
- `client/src/lib/*.ts` (2 files: schema.ts and 1 more)
- `client/public/img/*` (6 images) — hero + work photos
- `client/index.html`, `README.md`, `scripts/audit.mjs`, `scripts/prerender.mjs`,
  `keywords-proranktracker.txt` — partially retrieved, held back rather than
  committed truncated (would look complete but fail to build/lint)
- `package-lock.json` — not attempted; regenerate with `npm install` once
  `package.json` and real dependency versions are confirmed

## Fastest way to finish this
Push the real local project folder (wherever it was actually built and run
`vercel` from) to this same repo/branch:
```
cd /path/to/the/real/project
git init   # if not already a repo
git remote add origin https://github.com/ashtonhighestpointcoaching-max/micro-sites
git fetch origin claude/upbeat-keller-iqod5o
git merge --allow-unrelated-histories origin/claude/upbeat-keller-iqod5o
git push origin HEAD:claude/upbeat-keller-iqod5o
```
That gives full, exact content in one shot — no lossy API round-trip — and from
then on this repo is the real source of truth (and a real backup, which didn't
exist before).
