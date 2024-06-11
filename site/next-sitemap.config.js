/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://kamilagency.com",
  changefreq: "daily",
  priority: 1,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [],
}
