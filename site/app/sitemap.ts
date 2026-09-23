import { MetadataRoute } from "next"
import { allPosts } from "contentlayer/generated"

import { businessIndustries } from "@/config/business-industries"
import { carrierProfiles } from "@/config/carrier-profiles"
import { siteConfig } from "@/config/site"

const routes = [
  "",
  "/about-us",
  "/about-us/business-information",
  "/ar",
  "/ar/auto-insurance",
  "/ar/business-insurance",
  "/ar/home-insurance",
  "/ar/quote",
  "/blog",
  "/carriers",
  "/contact-us",
  "/customers",
  "/docs",
  "/guides",
  "/guides/state-minimum",
  "/about-us/team/mohamed-kamil",

  "/about-us/team/amgad-kamil",
  "/about-us/team/jesa-esquillo",
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
  "/services/home-insurance-cathedral-heights",
  "/services/home-insurance-georgetown",
  "/services/home-insurance-glover-park",
  "/services/homeowners-insurance",
  "/services/landlord-insurance",
  "/services/life-insurance",
  "/services/medicare",
  "/services/renters-insurance",
  "/services/travel-insurance",
  "/services/umbrella-insurance",
  "/services/vacant-home-insurance",
  "/services/business-insurance-by-industry",
  ...businessIndustries.map(
    ({ slug }) => `/services/business-insurance-by-industry/${slug}`
  ),
  ...carrierProfiles.map(({ slug }) => `/carriers/${slug}`),
  ...allPosts.filter((post) => post.published).map((post) => post.slug),
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
