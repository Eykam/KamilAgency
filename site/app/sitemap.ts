import { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

const routes = [
  "",
  "/about-us",
  "/contact-us",
  "/customers",
  "/docs",
  "/policy/privacy",
  "/policy/terms",
  "/quote",
  "/quote/personal",
  "/services",
  "/services/auto-insurance",
  "/services/commercial-insurance",
  "/services/homeowners-insurance",
  "/services/landlord-insurance",
  "/services/life-insurance",
  "/services/medicare",
  "/services/renters-insurance",
  "/services/umbrella-insurance",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
