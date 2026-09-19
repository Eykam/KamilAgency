import type { Metadata } from "next"

import LocalSeoPage from "@/components/local-seo-page"

const canonicalPath = "/services/home-insurance-glover-park"

export const metadata: Metadata = {
  title: "Home Insurance in Glover Park, Washington, DC",
  description:
    "Compare homeowners insurance for Glover Park rowhouses, detached homes, condos, and rental properties with a nearby Washington, DC agency.",
  keywords:
    "home insurance Glover Park DC, homeowners insurance Glover Park, rowhouse insurance Washington DC, condo insurance Glover Park",
  alternates: { canonical: canonicalPath },
}

const highlights = [
  {
    title: "Rowhouse and detached-home details",
    description:
      "Document attached walls, additions, finished lower levels, and other features that affect the estimated cost to rebuild your home.",
  },
  {
    title: "Water-backup options",
    description:
      "Ask how available water-backup coverage, deductibles, and limits apply to basements and personal property.",
  },
  {
    title: "Condo and association coverage",
    description:
      "Coordinate an individual condo policy with the building's master policy, including improvements, belongings, liability, and loss assessment options.",
  },
  {
    title: "Rental and occupancy changes",
    description:
      "Tell the agency when a property is owner-occupied, rented, vacant, or being renovated so it can be matched with the appropriate policy type.",
  },
] as const

export default function GloverParkHomeInsurancePage() {
  return (
    <LocalSeoPage
      canonicalPath={canonicalPath}
      eyebrow="Insurance guidance near our Wisconsin Avenue office"
      title="Home Insurance in Glover Park, Washington, DC"
      description="Get nearby help comparing coverage for a Glover Park rowhouse, detached home, condo, or rental property."
      introduction="Glover Park includes attached and detached homes, condominiums, and rental properties with very different insurance needs. Kamil Agency helps clients organize property details, compare available carrier options, and understand how coverage limits and deductibles work before choosing a policy."
      highlights={highlights}
      idealFor={[
        "Owners of rowhouses and detached homes",
        "Condo owners reviewing an association master policy",
        "Homebuyers arranging insurance before closing",
        "Owners converting a residence to a rental property",
      ]}
      localConsiderations="Accurate replacement-cost information matters when a home has older systems, custom finishes, an addition, or a finished basement. Shared walls do not make neighboring homes identical, so the quote should reflect your property's construction, updates, occupancy, and safety features."
      whatToPrepare={[
        "The address, year built, square footage, and construction type",
        "Approximate ages of the roof, heating, wiring, and plumbing",
        "Details about renovations, finished basements, and attached structures",
        "The association master policy and bylaws for a condo",
      ]}
      commonQuestions={[
        {
          question: "What information helps with a Glover Park home quote?",
          answer:
            "Have the property's basic construction details, system and roof updates, occupancy, prior coverage, loss history, and any renovation information ready. Condo owners should also provide the association's master policy.",
        },
        {
          question: "Should I mention a finished basement or home addition?",
          answer:
            "Yes. Finished space, additions, and upgraded materials can change the estimated rebuilding cost and may affect which limits or endorsements are appropriate.",
        },
        {
          question:
            "Can the same policy cover a home after it becomes a rental?",
          answer:
            "A change from owner occupancy to tenant occupancy usually requires a different policy type. Contact the agency before the occupancy changes so coverage can be reviewed without a gap.",
        },
      ]}
      relatedLinks={[
        {
          label: "Homeowners insurance",
          href: "/services/homeowners-insurance",
        },
        { label: "Condo insurance", href: "/services/condo-insurance" },
        { label: "Landlord insurance", href: "/services/landlord-insurance" },
        {
          label: "Georgetown home insurance",
          href: "/services/home-insurance-georgetown",
        },
        {
          label: "Cathedral Heights home insurance",
          href: "/services/home-insurance-cathedral-heights",
        },
      ]}
    />
  )
}
