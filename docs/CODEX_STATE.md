# Madiny — checkpoint

Updated: 2026-10-30.

## Current work

- Six zone pages: Aviației, Floreasca, Băneasa, Dorobanți, Tei and Voluntari. The original five were committed before this task; Voluntari and its links/SEO are local, uncommitted changes.
- `/zone/[slug]` prerenders only the six configured zones; unknown slugs return 404 with noindex. Aviației keeps its existing URL.
- Shared layout in `components/pages/ZonePage.jsx`; copy in `lib/zones.js`, suggested Maps starting points in `lib/zoneOrigins.js`, SEO metadata/JSON-LD in `lib/zoneSeo.js`.
- All areas refer to the single real studio at Șos. Pipera 61. No new branches, fixed journey times or parking promises.
- Six dedicated PNG Open Graph/Twitter cards, 1200×630, under `public/og/zone/`. Regenerate via `npm run og:zones`; generator uses the real studio photograph.
- `/zone` lists all six pages with crawlable links and CollectionPage/ItemList schema. Its labels now cover București and Ilfov. Voluntari has City/Ilfov areaServed; the existing București pages keep their previous schema. Aviației and Tei link to Voluntari.
- Previously authorized changes retained: canonical origin `https://www.madinytattoo.ro`; footer Zone link; tattoo/piercing FAQ sections; mobile carousel, equal buttons, compact layout and animated zone FAQs.

## Verification

- Final `next build --webpack` passed. Default Turbopack previously encountered a local worker-process error; no bundler configuration was changed.
- Focused ESLint passed for zone routes, shared page, and zone data/SEO modules.
- `npm run sitemap` regenerated 19 URLs, all on www, including the six zones.
- Local HTTP checks passed on all five pages: 200 status, unique title/description, one H1, self-canonical, matching OG/Twitter URLs, accessible PNGs with correct dimensions, Service areaServed matching the zone, actual business address, four visible FAQ questions matching JSON-LD, and internal links.
- Hub links/ItemList verified; unknown-zone response 404/noindex verified.
- Browser: hub images loaded, desktop layout checked; Floreasca mobile checked for overflow and functional FAQ. No browser console errors observed.
- Voluntari: compiled static route is marked complete in `.next/prerender-manifest.json`; focused ESLint passed. Local HTTP checks verified 200, one H1, title, self-canonical, matching OG/Twitter image URLs, image 1200×630, City/Ilfov schema, four FAQ entries, hub/related links and sitemap inclusion. Existing Aviației areaServed and unknown-slug 404 were rechecked.
- Voluntari mobile: screenshot checked at 390×844, no horizontal overflow. Screenshot: `C:/Users/mafte/.codex/visualizations/2026/10/30/01a18bcd-2730-74b2-bfb9-f7aaa72a69fa/voluntari-mobile.jpg`.
- Latest preview: `http://127.0.0.1:3128/zone/voluntari` (exec session 47475). Earlier production previews remain on ports 3123–3127; there is also a pre-existing development server on port 3000. Do not stop user processes without checking ownership.

## Publication

The Voluntari changes have not been committed, pushed or deployed. Search Console indexation/canonical selection should be checked after publication. No ranking or traffic improvement has been measured or promised.
