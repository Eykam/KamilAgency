import type { Metadata } from "next"

import LocalSeoPage from "@/components/local-seo-page"

const canonicalPath = "/services/home-insurance-cathedral-heights"

export const metadata: Metadata = {
  title: "Home Insurance in Cathedral Heights, Washington, DC",
  description:
    "Compare home and condo insurance in Cathedral Heights with guidance for master policies, older buildings, detached homes, and personal property.",
  keywords:
    "home insurance Cathedral Heights DC, condo insurance Cathedral Heights, homeowners insurance Washington DC, HO-6 insurance DC",
  alternates: { canonical: canonicalPath },
}

const highlights = [
  {
    title: "Condo and co-op questions",
    description:
      "Review the building's master policy and bylaws to identify responsibility for interiors, improvements, personal property, and assessments.",
  },
  {
    title: "Older-building features",
    description:
      "Provide details about wiring, plumbing, heating, roof updates, renovations, and building materials when carriers evaluate an older property.",
  },
  {
    title: "Dwelling and improvement limits",
    description:
      "Separate real-estate market value from the amount needed to repair or rebuild covered structures and interior improvements.",
  },
  {
    title: "Liability and belongings",
    description:
      "Compare personal liability, loss-of-use, and personal-property limits, including scheduled coverage for eligible valuables.",
  },
] as const

export default function CathedralHeightsHomeInsurancePage() {
  return (
    <LocalSeoPage
      canonicalPath={canonicalPath}
      eyebrow="Cathedral Heights and upper Northwest DC"
      title="Home Insurance in Cathedral Heights, Washington, DC"
      description="Compare coverage for a Cathedral Heights condo, co-op, attached home, or detached property with a nearby independent agency."
      introduction="Cathedral Heights residents may need to coordinate an individual policy with a condo or co-op building's coverage, while homeowners need limits based on their property's construction and estimated rebuilding cost. Kamil Agency helps clients collect the right details and compare available options without treating every property the same."
      highlights={highlights}
      idealFor={[
        "Condo and co-op residents reviewing building documents",
        "Owners of attached and detached homes",
        "Buyers who need proof of insurance for closing",
        "Residents reviewing coverage after a renovation",
      ]}
      localConsiderations="Condo and co-op buildings can assign responsibility for interior walls, fixtures, improvements, deductibles, or assessments differently. For houses, older construction and renovated interiors may affect replacement-cost estimates. Reviewing the building documents or property updates before quoting reduces guesswork."
      whatToPrepare={[
        "The property address and details about its construction and updates",
        "The association master policy, bylaws, and deductible information",
        "An estimate of personal property and any eligible high-value items",
        "Information about renovations, safety devices, and current coverage",
      ]}
      commonQuestions={[
        {
          question: "What is an HO-6 policy?",
          answer:
            "HO-6 is a common form of individual condo insurance. It can address belongings, liability, loss of use, and the portions of the unit or improvements that are the owner's responsibility, subject to the policy terms.",
        },
        {
          question: "Why does the association master policy matter?",
          answer:
            "It shows what the building insures and where an owner's responsibility may begin. That information helps identify appropriate unit, improvement, deductible, and loss-assessment coverage options.",
        },
        {
          question:
            "Should I update coverage after renovating my unit or home?",
          answer:
            "Yes. Renovations and upgraded finishes can change the amount needed to repair covered damage, so it is wise to review limits and property details after the work is complete.",
        },
      ]}
      relatedLinks={[
        { label: "Condo insurance", href: "/services/condo-insurance" },
        {
          label: "Homeowners insurance",
          href: "/services/homeowners-insurance",
        },
        { label: "Renters insurance", href: "/services/renters-insurance" },
        {
          label: "Georgetown home insurance",
          href: "/services/home-insurance-georgetown",
        },
        {
          label: "Glover Park home insurance",
          href: "/services/home-insurance-glover-park",
        },
      ]}
    />
  )
}
