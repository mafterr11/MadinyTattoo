/** @type {import('next-sitemap').IConfig} */

module.exports = {
  // Shared with lib/site.js so the sitemap can never list a different origin
  // than the canonical tags declare.
  siteUrl: require("./lib/siteUrl"),
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // app/icon.svg and app/apple-icon.png are route handlers, so next-sitemap
  // sees them as pages. They are assets, not content, and listing them tells
  // Google to crawl two URLs that can never rank.
  exclude: ["/icon.svg", "/apple-icon.png"],
  // A deploy is not necessarily a meaningful edit to every page. Omit
  // lastmod until we can derive an accurate per-page content date.
  autoLastmod: false,
  transform: async (_, path) => ({ loc: path }),
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
