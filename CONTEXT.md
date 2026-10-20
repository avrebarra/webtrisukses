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
- [ ] CONTEXT.md committed
- [ ] Create next.config.js
- [ ] Bump deps (next 14, react 18, framer-motion 11, tailwind 3.4)
- [ ] Clean _document.js
- [ ] Update GitHub workflow
- [ ] Remove yarn.lock, npm install, audit fix
- [ ] Verify build + audit

## Review notes
Check `npm run build` produces `out/` with unoptimized images, `npm audit` 0 high/critical, workflow deploys on push to main. Framer-motion API same (motion.div) — but verify build. No UI changes expected.
