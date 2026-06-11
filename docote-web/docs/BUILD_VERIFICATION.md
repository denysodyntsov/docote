# Build Verification

## Current status
Local build verification is blocked until dependencies are installed.

Observed command result:

```bash
npm run build
# -> sh: 1: next: not found
```

This indicates `node_modules` has not been installed yet in `docote-web`.

## Verification steps

From `docote-web/`:

```bash
npm install
npm run build
npm run dev
```

## What to verify

- Next.js build completes successfully
- home page loads
- interactive demo form submits successfully
- result cards render without runtime errors
- export/share button copies payload successfully

## Why this matters
This turns the MVP from repo-ready into actually runnable and demo-ready.
