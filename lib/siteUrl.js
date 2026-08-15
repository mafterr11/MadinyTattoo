/**
 * The canonical origin, in one place.
 *
 * CommonJS because next-sitemap.config.js has to `require` it: the value was
 * previously typed out separately there and in lib/site.js, so the canonical
 * tags and the sitemap could drift apart — and Search Console treats
 * madinytattoo.ro and www.madinytattoo.ro as two different sites, which makes
 * that drift expensive.
 *
 * Change this one string to switch between www and apex; canonicals, Open
 * Graph URLs, JSON-LD ids and the sitemap all follow.
 *
 * The apex is the live host: www.madinytattoo.ro answers, but redirects here.
 * Declaring the www form as canonical pointed every one of those tags at a URL
 * that only bounces, and split the site across two Search Console properties.
 */
module.exports = "https://madinytattoo.ro";
