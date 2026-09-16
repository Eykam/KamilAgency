type RelatedLink = {
  href: string
  label: string
  description: string
}

export type ServiceSeoContent = {
  eyebrow: string
  heading: string
  introduction: string
  bestFor: string[]
  examples: string[]
  localNotes: string[]
  relatedLinks: RelatedLink[]
}

export const serviceSeoContent: Record<string, ServiceSeoContent> = {
  Landlord: {
    eyebrow: "Rental property guidance",
    heading: "Landlord Insurance for DC-Area Rental Properties",
    introduction:
      "A rental property is not insured the same way as an owner-occupied home. We help property owners compare coverage based on the building, tenancy, lease structure, occupancy, and the income the property is expected to produce.",
    bestFor: [
      "Owners of long-term rental homes, townhouses, and condominium units",
      "Property owners converting a former residence into a rental",
      "Investors with one rental or a growing portfolio",
      "Owners who need to review dwelling, liability, and loss-of-rents options",
    ],
    examples: [
      "A covered fire damages the building and interrupts rental income during repairs",
      "A visitor alleges an injury caused by a condition at the property",
      "Landlord-owned appliances or fixtures are damaged by a covered loss",
      "A property becomes vacant between tenants and needs a coverage review",
    ],
    localNotes: [
      "Washington, DC rowhouses and condominium rentals may have different building and association responsibilities.",
      "Maryland and Virginia properties are evaluated under the rules and carrier options available in the property's state.",
      "Short-term rentals, room rentals, renovations, and extended vacancies require additional underwriting review.",
    ],
    relatedLinks: [
      {
        href: "/services/vacant-home-insurance",
        label: "Vacant-home insurance",
        description:
          "Review options for a property between tenants or under renovation.",
      },
      {
        href: "/services/umbrella-insurance",
        label: "Umbrella insurance",
        description:
          "Explore additional liability protection above eligible underlying policies.",
      },
      {
        href: "/services/condo-insurance",
        label: "Condo insurance",
        description:
          "Understand unit-owner coverage and association master-policy responsibilities.",
      },
    ],
  },
  Renters: {
    eyebrow: "Coverage for tenants",
    heading: "Renters Insurance for Washington, DC Residents",
    introduction:
      "A landlord's policy generally protects the building—not a tenant's belongings or personal liability. We help renters choose limits for their possessions, liability exposure, and temporary living costs after an eligible covered loss.",
    bestFor: [
      "Apartment, condominium, townhouse, and single-family-home tenants",
      "Students, young professionals, families, and long-term renters",
      "Tenants whose lease requires proof of renters insurance",
      "Renters who want protection for belongings kept away from home",
    ],
    examples: [
      "Personal belongings are damaged by a covered fire or smoke loss",
      "A theft occurs at home or while covered property is away from the residence",
      "A guest alleges an injury for which the tenant may be responsible",
      "A covered loss makes the rental temporarily uninhabitable",
    ],
    localNotes: [
      "Coverage needs can differ for basement apartments, group houses, and high-rise buildings.",
      "Roommates usually need separate policies unless the insurer has agreed to list them.",
      "High-value jewelry, electronics, art, bicycles, or business equipment may need separate limits or scheduling.",
    ],
    relatedLinks: [
      {
        href: "/services/auto-insurance",
        label: "Auto insurance",
        description:
          "Ask whether coordinating renters and auto coverage makes sense for you.",
      },
      {
        href: "/services/umbrella-insurance",
        label: "Umbrella insurance",
        description:
          "Review additional liability options for eligible households.",
      },
      {
        href: "/services/condo-insurance",
        label: "Condo insurance",
        description:
          "Buying instead of renting? Learn how HO-6 coverage differs.",
      },
    ],
  },
}
