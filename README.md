# Cheaper Tours & Travel Bohol

Cinematic one-page website for a family-run tour operator on Bohol island, Philippines.

**Live site:** https://goodrojh.github.io/cheaper-tours-bohol/

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- Custom i18n (9 languages: EN, 中文, 日本語, FR, DE, IT, ES, हिन्दी, العربية with RTL)
- AI-generated hero video (Higgsfield / Kling 3.0 Turbo)
- Real tour photos from the operator

## Develop

```bash
npm install
npm run dev
```

## Deploy

The site is served by GitHub Pages from the `gh-pages` branch. To publish an update:

```bash
npm run build
npx gh-pages -d dist
```

## Content

- Tour data and prices: `src/data/tours.ts`
- Translations: `src/i18n/translations/*.ts`
- Contact numbers / WhatsApp: `src/lib/site.ts`
- Marketing strategy behind the copy: `MARKETING.md`
