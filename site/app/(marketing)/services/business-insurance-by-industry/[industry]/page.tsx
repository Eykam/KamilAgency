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
