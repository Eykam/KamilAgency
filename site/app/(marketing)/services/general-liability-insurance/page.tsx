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
      localConsiderations="DC leases, vendor agreements, and government or construction contracts often specify liability limits, additional insured wording, or certificate requirements. The policy still needs to match the work your business actually performs. We review both the contract request and your operations so important exposures are not hidden behind a certificate."
      whatToPrepare={[
        "A clear description of services, products, and typical job sites",
        "Estimated annual revenue, payroll, and subcontractor costs",
        "Copies of leases or contracts that specify insurance requirements",
        "Current coverage, loss history, and certificate requests",
      ]}
      commonQuestions={[
        {
          question: "What does general liability insurance usually cover?",
          answer:
            "It commonly addresses eligible third-party bodily injury, property damage, and personal or advertising injury claims. The policy's limits, exclusions, endorsements, and deductible determine the actual protection.",
        },
        {
          question: "Is general liability required in Washington, DC?",
          answer:
            "It is not universally required for every business, but landlords, clients, licensing authorities, and contracts may require it. The amount and wording should be checked against the agreement and the business's exposure.",
        },
        {
          question: "Can Kamil Agency provide a certificate of insurance?",
          answer:
            "For active clients, our service team can help with eligible certificate requests and additional insured needs after reviewing the contract and policy. A certificate confirms coverage; it does not add protection that the policy does not provide.",
        },
      ]}
      relatedLinks={[
        {
          label: "Commercial insurance",
          href: "/services/commercial-insurance",
        },
        {
          label: "Commercial auto",
          href: "/services/commercial-auto-insurance",
        },
        { label: "Surety bonds", href: "/services/surety-bonds" },
      ]}
      quoteUrl={siteConfig.commercialQuoteURL}
    />
  )
}
