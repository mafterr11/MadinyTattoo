/** @type {import('next-sitemap').IConfig} */

// Pages Google should weight most heavily, in descending order of commercial value.
const priorities = {
  '/': 1.0,
  '/servicii': 0.9,
  '/servicii/tatuaje': 0.9,
  '/servicii/micropigmentare': 0.8,
  '/servicii/laser': 0.8,
  '/servicii/piercing': 0.8,
  '/proiecte': 0.8,
  '/contact': 0.7,
  '/aftercare': 0.6,
}

module.exports = {
  // Shared with lib/site.js so the sitemap can never list a different origin
  // than the canonical tags declare.
  siteUrl: require('./lib/siteUrl'),
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // app/icon.svg and app/apple-icon.png are route handlers, so next-sitemap
  // sees them as pages. They are assets, not content, and listing them tells
  // Google to crawl two URLs that can never rank.
  exclude: ['/icon.svg', '/apple-icon.png'],
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === '/' || path === '/proiecte' ? 'weekly' : 'monthly',
    priority: priorities[path] ?? config.priority,
    lastmod: new Date().toISOString(),
  }),
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
