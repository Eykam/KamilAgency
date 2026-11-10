import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import LocalSeoPage from "@/components/local-seo-page"

const canonicalPath = "/services/commercial-auto-insurance"

export const metadata: Metadata = {
  title: "Commercial Auto Insurance in Washington, DC",
  description:
    "Compare commercial auto insurance for company cars, service vehicles, vans, and fleets with a local Washington, DC independent agency.",
  keywords:
    "commercial auto insurance Washington DC, business vehicle insurance DC, fleet insurance Washington DC, company car insurance, contractor vehicle insurance DC",
  alternates: { canonical: canonicalPath },
}

const highlights = [
  {
    title: "Liability protection",
    description:
      "Compare bodily injury and property damage liability limits for covered business vehicles and drivers.",
  },
  {
    title: "Physical damage options",
    description:
      "Review collision and comprehensive coverage for eligible owned or financed business vehicles.",
  },
  {
    title: "Hired and non-owned auto",
    description:
      "Ask about protection when employees use rented vehicles or personal vehicles for eligible business purposes.",
  },
  {
    title: "Driver and vehicle review",
    description:
      "Organize vehicle, garaging, driver, radius, and usage details so carriers can evaluate the risk accurately.",
  },
] as const

export default function CommercialAutoInsurancePage() {
  return (
    <LocalSeoPage
      canonicalPath={canonicalPath}
      eyebrow="Business vehicle coverage"
      title="Commercial Auto Insurance in Washington, DC"
      description="Protect company-owned and business-use vehicles with coverage shaped around your drivers, operations, and travel patterns."
      introduction="A personal auto policy may not cover vehicles used primarily for business. Kamil Agency helps Washington, DC organizations review how vehicles are owned and used, identify coverage gaps, and compare commercial auto options available for their operations."
      highlights={highlights}
      idealFor={[
        "Contractors and service businesses",
        "Professional firms with company-owned cars",
        "Delivery, sales, and field-service operations",
        "Businesses reviewing hired or non-owned auto exposure",
      ]}
      localConsiderations="Washington, DC businesses may operate across the District, Maryland, and Virginia, so the quote should reflect where each vehicle is garaged, the territory it travels, and how it is used. Contractors, delivery operations, and firms that cross state lines may need different limits or filings. We help organize those details before approaching carriers."
      whatToPrepare={[
        "Vehicle identification numbers, ownership, and garaging addresses",
        "Driver names, license details, and driving histories",
        "How each vehicle is used, including radius and annual mileage",
        "Current policy information and any contract-required limits",
      ]}
      commonQuestions={[
        {
          question: "When does a business need commercial auto insurance?",
          answer:
            "A commercial policy is commonly considered when a business owns a vehicle, employees regularly drive for work, or a vehicle's primary use goes beyond ordinary commuting. The correct policy depends on ownership, usage, drivers, and carrier rules.",
        },
        {
          question:
            "Can employees' personal vehicles be covered for business use?",
          answer:
            "Hired and non-owned auto coverage may address certain liability exposures when employees use personal or rented vehicles for business. It does not replace the vehicle owner's personal policy, and coverage terms vary.",
        },
        {
          question: "Can one policy cover several business vehicles?",
          answer:
            "Often, yes. Eligible cars, vans, trucks, and trailers can usually be scheduled on one commercial auto policy, subject to the carrier's underwriting rules and the business's operations.",
        },
      ]}
      relatedLinks={[
        {
          label: "Commercial insurance",
          href: "/services/commercial-insurance",
        },
        {
          label: "General liability",
          href: "/services/general-liability-insurance",
        },
        { label: "Personal auto insurance", href: "/services/auto-insurance" },
      ]}
      quoteUrl={siteConfig.commercialQuoteURL}
    />
  )
}
