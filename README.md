# Impact Cube — React Website

React + TypeScript + Vite site for Impact Cube.
Deployed automatically to **GitHub Pages** on every push to `main`.

**Live site:** https://aseempsri.github.io/impact-cube/

## Preview locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173/impact-cube/).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the app and
publishes `dist/` to GitHub Pages.

In the repo **Settings → Pages**, set Source to **GitHub Actions** (required once).

## Structure

```
src/
  components/     Header, Footer, Layout, CubeModule, FaceCard, Placeholder, Icons
  data/faces.ts   Six faces + case studies + problem rows
  pages/          Home, TheCube, HowWeWork, OurWork, About, Contact, FacePage
  styles.css      Design tokens + shared styles
legacy/           Original static HTML/CSS/JS reference
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/the-cube` | The Cube |
| `/how-we-work` | How We Work |
| `/our-work` | Our Work |
| `/about` | About |
| `/contact` | Contact |
| `/face/:slug` | Face detail |
