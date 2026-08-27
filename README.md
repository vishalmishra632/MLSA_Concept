# MLSA rebrand concept

A directional brand and website concept for Montana Legal Services Association.
Next.js App Router, static export, no client JavaScript in the shipped page.

## Deploy to Vercel

```bash
npm i -g vercel     # once
vercel login        # once
cd mlsa-concept
vercel --prod
```

Accept the defaults. Vercel detects Next.js and runs `npm run build`, which now
also runs `postbuild.mjs`.

Then point a subdomain at it (Vercel dashboard → Settings → Domains), for example
`mlsa.yourdomain.com`, so the link in the proposal is on your own domain rather
than a `*.vercel.app` address.

## What postbuild.mjs does, and why

The page has no interactivity, so React's 105KB runtime is dead weight on exactly
the connections the page argues about. `postbuild.mjs` inlines the stylesheet,
removes every script tag, deletes the unreferenced `_next` payload, and then
stamps the measured file size back into the page. The figure the document quotes
about itself is the figure it actually weighs. If you edit the page, rebuild and
that number updates itself.

## Verification

These two scripts need Playwright, which is deliberately NOT in package.json so
Vercel's build stays fast. Install it only when you want to run them:

```bash
npm i -D playwright && npx playwright install chromium

node audit.mjs   # walks every rendered text node, computes real WCAG contrast
node shot.mjs    # desktop slices + mobile screenshots into shots/
```

`audit.mjs` must print PASS before this goes to a client. It is what caught the
Badlands colour failing on dark grounds.
