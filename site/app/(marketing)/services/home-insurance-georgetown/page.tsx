import type { Metadata } from "next"

import LocalSeoPage from "@/components/local-seo-page"

const canonicalPath = "/services/home-insurance-georgetown"

export const metadata: Metadata = {
  title: "Home Insurance in Georgetown, Washington, DC",
  description:
    "Compare homeowners insurance for Georgetown rowhouses, condos, historic homes, and other properties with a local Washington, DC insurance agency.",
  keywords:
    "home insurance Georgetown DC, homeowners insurance Georgetown Washington DC, rowhouse insurance DC, historic home insurance Georgetown, home insurance near Glover Park",
  alternates: { canonical: canonicalPath },
}

const highlights = [
  {
    title: "Dwelling and property details",
    description:
      "Review rebuilding costs, older-home features, renovations, and the details carriers may use when evaluating a Georgetown property.",
  },
  {
    title: "Personal liability",
    description:
      "Compare protection for covered injuries or property damage for which a homeowner may be legally responsible.",
  },
  {
    title: "Belongings and valuables",
    description:
      "Choose personal-property limits and ask about scheduled coverage for eligible high-value items.",
  },
  {
    title: "Water and weather risks",
    description:
      "Discuss available options for water backup, storms, deductibles, and other location-specific concerns.",
  },
] as const

export default function GeorgetownHomeInsurancePage() {
  return (
    <LocalSeoPage
      canonicalPath={canonicalPath}
      eyebrow="Georgetown and nearby DC neighborhoods"
      title="Home Insurance in Georgetown, Washington, DC"
      description="Get local help comparing coverage for a Georgetown home, rowhouse, condo, or investment property from an independent agency on Wisconsin Avenue."
      introduction="Georgetown properties can vary widely in age, construction, ownership structure, and rebuilding cost. Kamil Agency helps local homeowners organize those details, compare available carrier options, and understand the tradeoffs among coverage, deductibles, and price."
      highlights={highlights}
      idealFor={[
        "Owners of rowhouses, detached homes, and historic properties",
        "New homebuyers comparing insurance before closing",
        "Homeowners reviewing coverage before renewal",
        "Residents in Georgetown, Glover Park, Cathedral Heights, and nearby neighborhoods",
      ]}
      localConsiderations="Georgetown properties may combine older construction, attached walls, renovations, and premium finishes. An accurate review should separate market value from rebuilding cost and identify updates to the roof, wiring, plumbing, and heating systems. Condo owners should also compare their unit coverage with the association's master policy."
      whatToPrepare={[
        "The property address, year built, and approximate square footage",
        "Dates and details for roof, electrical, plumbing, and HVAC updates",
        "Information about renovations, fireplaces, alarms, and finished basements",
        "The condo or homeowners association master policy, when applicable",
      ]}
      commonQuestions={[
        {
          question:
            "Is rebuilding cost the same as a Georgetown home's market value?",
          answer:
            "No. Market value includes factors such as land and location, while dwelling coverage is based on the estimated cost to rebuild the structure with comparable materials and labor.",
        },
        {
          question: "What details matter for an older rowhouse?",
          answer:
            "Carriers commonly ask about construction, roof age, heating, wiring, plumbing, renovations, occupancy, and shared walls. Complete details help the agency compare eligible options accurately.",
        },
        {
          question:
            "Does a condo association policy cover my unit and belongings?",
          answer:
            "Usually not completely. The master policy and bylaws help determine what the association covers and what should be addressed by your individual condo policy, including belongings, improvements, liability, and possible loss assessment coverage.",
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
          label: "Glover Park home insurance",
          href: "/services/home-insurance-glover-park",
        },
        {
          label: "Cathedral Heights home insurance",
          href: "/services/home-insurance-cathedral-heights",
        },
      ]}
    />
  )
}
