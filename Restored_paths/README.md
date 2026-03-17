# Restoring Paths

React + Vite website for Restoring Paths.

## Local development

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production files: `npm run build`

## GitHub Pages deployment

This repository is configured to deploy automatically to GitHub Pages from the `main` branch using GitHub Actions.

Relevant files:
- [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
- [scripts/prepare-github-pages.mjs](scripts/prepare-github-pages.mjs)
- [package.json](package.json)

### One-time GitHub setup

1. Open the repository on GitHub.
2. Go to `Settings -> Pages`.
3. Under Source, choose `GitHub Actions`.
4. Set the custom domain to `restoringpaths.com`.
5. Enable HTTPS after DNS finishes propagating.

## GoDaddy DNS records for restoringpaths.com

In GoDaddy DNS, remove the old parked A records for `@` and use these GitHub Pages records instead.

### A records for root domain

Host: `@`

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### CNAME for www

- Host: `www`
- Value: `anthonyc4848.github.io`

### Remove old records

Delete old `@` A records if they still exist:

- `13.248.243.5`
- `76.223.105.230`

## Notes

- The project uses client-side routing, so the Pages build creates `404.html` for SPA fallback support.
- The custom domain file `CNAME` is generated automatically during the Pages build.
