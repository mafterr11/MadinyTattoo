/**
 * The canonical origin shared by metadata, JSON-LD and the sitemap.
 *
 * CommonJS because next-sitemap.config.js has to `require` it: the value was
 * previously typed out separately there and in lib/site.js, so the canonical
 * tags and the sitemap could drift apart.
 *
 * Change this one string to switch between www and apex; canonicals, Open
 * Graph URLs, JSON-LD ids and the sitemap all follow.
 *
 * Production redirects madinytattoo.ro to www.madinytattoo.ro. Keep this value
 * aligned with that destination so canonical tags and sitemap URLs resolve
 * directly to the pages that serve the content.
 */
module.exports = "https://www.madinytattoo.ro";
