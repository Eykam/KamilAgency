import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { businessIndustries } from "@/config/business-industries"
import LocalSeoPage from "@/components/local-seo-page"

type IndustryPageProps = {
  params: { industry: string }
}

export function generateStaticParams() {
  return businessIndustries.map(({ slug }) => ({ industry: slug }))
}

export function generateMetadata({ params }: IndustryPageProps): Metadata {
  const industry = businessIndustries.find(
    ({ slug }) => slug === params.industry
  )

  if (!industry) return {}

  return {
    title: industry.title,
    description: industry.description,
    alternates: {
      canonical: `/services/business-insurance-by-industry/${industry.slug}`,
    },
  }
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = businessIndustries.find(
    ({ slug }) => slug === params.industry
  )

  if (!industry) notFound()

  return (
    <LocalSeoPage
      title={industry.title}
      eyebrow="Business insurance by industry"
      description={industry.description}
      introduction={industry.introduction}
      highlights={industry.highlights}
      idealFor={industry.idealFor}
      quoteUrl="/quote/commercial"
      canonicalPath={`/services/business-insurance-by-industry/${industry.slug}`}
      localConsiderations={`Washington, DC businesses may need to coordinate insurance with lease terms, client contracts, licensing rules, vehicle use, and work performed across DC, Maryland, or Virginia. Requirements differ by operation, so we review the details of your ${industry.shortName.toLowerCase()} business before discussing available markets.`}
      whatToPrepare={[
        "A clear description of your operations and the services or products you provide",
        "Business address, service area, ownership details, and years in operation",
        "Estimated annual revenue, payroll, employee count, and vehicle information",
        "Current policy documents, loss history, leases, or contracts with insurance requirements",
      ]}
      commonQuestions={[
        {
          question: `What insurance does a ${industry.shortName.toLowerCase()} business usually consider?`,
          answer: `The answer depends on operations, contracts, property, employees, and vehicle use. Common starting points can include general liability, property, business income, workers’ compensation, commercial auto, cyber, or professional liability. We help identify which categories may apply before approaching available markets.`,
        },
        {
          question:
            "Can Kamil Agency help with certificates or contract requirements?",
          answer:
            "We can review common insurance wording, limits, and certificate requirements and help you understand what information an insurer may need. Coverage changes are effective only after confirmation from the agency or carrier.",
        },
        {
          question: "Does requesting a quote guarantee coverage?",
          answer:
            "No. Availability, terms, pricing, and eligibility depend on the insurer’s underwriting and the details of the risk. A request starts the review process but does not bind coverage.",
        },
      ]}
      relatedLinks={[
        {
          label: "All industries",
          href: "/services/business-insurance-by-industry",
        },
        {
          label: "Commercial auto",
          href: "/services/commercial-auto-insurance",
        },
        {
          label: "General liability",
          href: "/services/general-liability-insurance",
        },
        { label: "Insurance markets", href: "/carriers" },
      ]}
    />
  )
}
