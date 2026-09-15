import { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

const routes = [
  "",
  "/about-us",
  "/contact-us",
  "/customers",
  "/docs",
  "/guides",
  "/guides/state-minimum",
  "/about-us/team/mohamed-kamil",

  "/about-us/team/amgad-kamil",
  "/policy/privacy",
  "/policy/terms",
  "/quote",
  "/quote/personal",
  "/services",
  "/services/auto-insurance",
  "/services/commercial-insurance",
  "/services/condo-insurance",
  "/services/homeowners-insurance",
  "/services/landlord-insurance",
  "/services/life-insurance",
  "/services/medicare",
  "/services/renters-insurance",
  "/services/umbrella-insurance",
  "/services/vacant-home-insurance",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
