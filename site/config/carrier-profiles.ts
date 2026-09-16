import {
  commercialCarriers,
  marketAccessPartners,
  personalLineCarriers,
  type InsuranceMarket,
} from "@/config/carrier-markets"

export type CarrierProfile = InsuranceMarket & {
  slug: string
  categories: string[]
  overview: string
}

export function carrierSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const categoryMap = new Map<string, Set<string>>()
const marketMap = new Map<string, InsuranceMarket>()

function addMarkets(markets: readonly InsuranceMarket[], category: string) {
  markets.forEach((market) => {
    marketMap.set(market.name, market)
    const categories = categoryMap.get(market.name) ?? new Set<string>()
    categories.add(category)
    categoryMap.set(market.name, categories)
  })
}

addMarkets(personalLineCarriers, "Personal insurance")
addMarkets(commercialCarriers, "Commercial insurance")
addMarkets(marketAccessPartners, "Market-access platform")

export const carrierProfiles: CarrierProfile[] = Array.from(
  marketMap.values()
).map((market) => {
  const categories = Array.from(categoryMap.get(market.name) ?? [])
  const categoryText = categories.join(" and ").toLowerCase()

  return {
    ...market,
    slug: carrierSlug(market.name),
    categories,
    overview: `${market.name} is included in Kamil Agency's market directory for ${categoryText}. Product availability, agency access, eligibility, and underwriting vary by state and individual risk, so our team confirms current options before presenting any quote.`,
  }
})

export function getCarrierProfile(slug: string) {
  return carrierProfiles.find((profile) => profile.slug === slug)
}
