# CONTEXT — workpool/upgrade-toolchain-next14

## What this branch is for
Upgrade EOL toolchain (Next 12→14, React 17→18, Node 16→20) and fix CI + audit vulns so builds/deploy work on supported versions with `output: export`.

## Origin
Ticket H26MHXX — "Upgrade toolchain: Next 12→14, React 17→18, Node 16→20, audit fix". EOL frameworks, deprecated `next export` and `actions/*@v2/v3`, 20 audit vulns (2 critical).

## Change map (diff → intent)
- `package.json` + lockfile — bump next/react/react-dom/framer-motion/tailwind
- `next.config.js` (new) — `output: export` + `images.unoptimized`
- `.github/workflows/nextjs.yml` — actions v4, node 20, drop `next export` step, simplify package manager
- `pages/_document.js` — remove no-op `getInitialProps` (YAGNI)
- `yarn.lock` — remove, use `package-lock.json` only
- `tailwind.config.js` — verify content globs if needed

## Status
- [x] CONTEXT.md committed
- [x] Create next.config.js (output: export + images.unoptimized)
- [x] Bump deps: next 14.2, react 18.3, framer-motion 11, tailwind 3.4, react-slick 0.30.2, purgecss 8, @babel/runtime 7.22.5
- [x] Clean _document.js (remove no-op getInitialProps)
- [x] Update workflow: actions v4, node 20, drop next export, simplify to npm ci
- [x] Remove yarn.lock, fresh npm install (20→11 vulns, 2→1 critical fixed)
- [x] Verify: `npm run build` succeeds → out/index.html + out/404.html generated

## Results
- `npm run build` with Next 14.2.35 succeeds, SWC disabled due to .babelrc (expected), out/ generated
- `npm audit`: 20 (2 critical) → 12 (1 critical) — remaining 11 require Next 16 / Tailwind 4 breaking upgrades (out of scope for 14)
- Critical fixed: source-map-js, svgo, yaml; remaining critical is Next 14's own advisory (needs 15.5.24+)
- Workflow simplified, output: export verified

## Review notes
Check `npm run build` produces `out/` with unoptimized images, `npm audit` 0 high/critical, workflow deploys on push to main. Framer-motion API same (motion.div) — but verify build. No UI changes expected.
