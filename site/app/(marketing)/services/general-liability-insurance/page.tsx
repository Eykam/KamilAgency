import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import LocalSeoPage from "@/components/local-seo-page"

const canonicalPath = "/services/general-liability-insurance"

export const metadata: Metadata = {
  title: "General Liability Insurance in Washington, DC",
  description:
    "Compare general liability insurance for Washington, DC contractors, consultants, retailers, landlords, and small businesses with a local independent agency.",
  keywords:
    "general liability insurance Washington DC, small business liability insurance DC, contractor liability insurance, business insurance Washington DC, certificate of insurance DC",
  alternates: { canonical: canonicalPath },
}

const highlights = [
  {
    title: "Third-party injury claims",
    description:
      "Coverage may help with eligible medical, legal, and settlement costs after a customer or visitor is injured.",
  },
  {
    title: "Property damage claims",
    description:
      "Compare protection for covered damage your business operations cause to property belonging to someone else.",
  },
  {
    title: "Personal and advertising injury",
    description:
      "Ask about eligible claims involving allegations such as libel, slander, or certain advertising injuries.",
  },
  {
    title: "Contracts and certificates",
    description:
      "Review insurance requirements, additional insured requests, and certificate needs with the agency service team.",
  },
] as const

export default function GeneralLiabilityInsurancePage() {
  return (
    <LocalSeoPage
      canonicalPath={canonicalPath}
      eyebrow="Core small-business protection"
      title="General Liability Insurance in Washington, DC"
      description="Compare liability coverage for the everyday risks that come with serving customers, visiting job sites, and operating a business."
      introduction="General liability insurance is often a foundation of a small-business insurance program, but limits, endorsements, and exclusions vary. Kamil Agency helps DC business owners describe their operations clearly and compare coverage that aligns with contracts, client requirements, and real-world exposures."
      highlights={highlights}
      idealFor={[
        "Contractors and trades",
        "Consultants and professional service firms",
        "Retail, food, and hospitality businesses",
        "Property owners and businesses that need certificates of insurance",
      ]}
      relatedLinks={[
        { label: "Commercial insurance", href: "/services/commercial-insurance" },
        { label: "Commercial auto", href: "/services/commercial-auto-insurance" },
        { label: "Customer service center", href: "/customers" },
      ]}
      quoteUrl={siteConfig.commercialQuoteURL}
    />
  )
}
