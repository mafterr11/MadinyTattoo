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
  siteUrl: 'https://www.madinytattoo.ro',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
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
