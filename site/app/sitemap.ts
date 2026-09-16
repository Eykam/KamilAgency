import { MetadataRoute } from "next"

import { businessIndustries } from "@/config/business-industries"
import { siteConfig } from "@/config/site"

const routes = [
  "",
  "/about-us",
  "/ar",
  "/ar/auto-insurance",
  "/ar/business-insurance",
  "/ar/home-insurance",
  "/ar/quote",
  "/carriers",
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
  "/quote/commercial",
  "/quote/personal",
  "/refer-a-friend",
  "/reviews",
  "/es",
  "/es/seguro-de-auto",
  "/es/seguro-de-casa",
  "/es/seguro-para-negocios",
  "/services",
  "/services/auto-insurance",
  "/services/commercial-auto-insurance",
  "/services/commercial-insurance",
  "/services/condo-insurance",
  "/services/general-liability-insurance",
  "/services/home-insurance-georgetown",
  "/services/homeowners-insurance",
  "/services/landlord-insurance",
  "/services/life-insurance",
  "/services/medicare",
  "/services/renters-insurance",
  "/services/umbrella-insurance",
  "/services/vacant-home-insurance",
  "/services/business-insurance-by-industry",
  ...businessIndustries.map(
    ({ slug }) => `/services/business-insurance-by-industry/${slug}`
  ),
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
