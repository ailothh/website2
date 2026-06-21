# awinkler.dev

Personal portfolio for Alexander Winkler — Security Researcher & Software Engineer.

Live at [awinkler.dev](https://awinkler.dev)

## Stack

- **Framework** — Next.js 15 (App Router, static export)
- **Animations** — Framer Motion (scroll-reveal, hero entrance)
- **Particles** — tsparticles (interactive network canvas)
- **Styling** — CSS with design tokens (no CSS framework)
- **Font** — Red Hat Display (Google Fonts)
- **Deployment** — GitHub Pages via `gh-pages` branch

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Hero.js          # Hero + projects section
│   │   ├── ScrollProgress.js # Fixed top progress bar
│   │   └── particles.js     # Background particle canvas
│   ├── globals.css          # Design tokens + all styles
│   ├── layout.js            # Root layout, fonts, loading screen
│   └── page.js              # Home page
├── public/
│   └── assets/
│       ├── documents/       # Resume + research papers
│       ├── icons/           # Social icons (SVG)
│       └── images/          # Project logos
├── next.config.js
└── package.json
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build & Deploy

```bash
npm run build     # Exports static site to /out
```

The `/out` directory is the deployable artifact. To publish to GitHub Pages, push the contents of `/out` to the `gh-pages` branch:

```bash
npm run build
npx gh-pages -d out
```

> `CNAME` and `.nojekyll` live in `public/` and are automatically included in the export.
