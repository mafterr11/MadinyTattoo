# Madiny — checkpoint

Updated: 2026-10-30.

## Current work

- Local, uncommitted implementation of five zone pages: Aviației, Floreasca, Băneasa, Dorobanți and Tei.
- `/zone/[slug]` prerenders only the five configured zones; unknown slugs return 404 with noindex. Aviației keeps its existing URL.
- Shared layout in `components/pages/ZonePage.jsx`; copy in `lib/zones.js`, suggested Maps starting points in `lib/zoneOrigins.js`, SEO metadata/JSON-LD in `lib/zoneSeo.js`.
- All areas refer to the single real studio at Șos. Pipera 61. No new branches, fixed journey times or parking promises.
- Five dedicated PNG Open Graph/Twitter cards, 1200×630, under `public/og/zone/`. Regenerate via `npm run og:zones`; generator uses the real studio photograph.
- `/zone` lists all five pages with crawlable links and CollectionPage/ItemList schema. Pages link to related areas and existing services/portfolio/contact.
- Previously authorized changes retained: canonical origin `https://www.madinytattoo.ro`; footer Zone link; tattoo/piercing FAQ sections; mobile carousel, equal buttons, compact layout and animated zone FAQs.

## Verification

- Final `next build --webpack` passed. Default Turbopack previously encountered a local worker-process error; no bundler configuration was changed.
- Focused ESLint passed for zone routes, shared page, and zone data/SEO modules.
- `npm run sitemap` regenerated 18 URLs, all on www, including the five zones.
- Local HTTP checks passed on all five pages: 200 status, unique title/description, one H1, self-canonical, matching OG/Twitter URLs, accessible PNGs with correct dimensions, Service areaServed matching the zone, actual business address, four visible FAQ questions matching JSON-LD, and internal links.
- Hub links/ItemList verified; unknown-zone response 404/noindex verified.
- Browser: hub images loaded, desktop layout checked; Floreasca mobile checked for overflow and functional FAQ. No browser console errors observed.
- Latest preview: `http://127.0.0.1:3127/zone`. Earlier production previews remain on ports 3123–3126; there is also a pre-existing development server on port 3000. Do not stop user processes without checking ownership.

## Publication

Changes have not been committed, pushed or deployed. Search Console indexation/canonical selection should be checked after publication. No ranking or traffic improvement has been measured or promised.
