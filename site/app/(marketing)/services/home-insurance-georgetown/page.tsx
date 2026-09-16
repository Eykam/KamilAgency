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
      relatedLinks={[
        { label: "Homeowners insurance", href: "/services/homeowners-insurance" },
        { label: "Condo insurance", href: "/services/condo-insurance" },
        { label: "Landlord insurance", href: "/services/landlord-insurance" },
        { label: "Vacant-home insurance", href: "/services/vacant-home-insurance" },
      ]}
    />
  )
}
