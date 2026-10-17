type RelatedLink = {
  href: string
  label: string
  description: string
}

export type ServiceSeoContent = {
  eyebrow: string
  heroHeading?: string
  heading: string
  introduction: string
  bestFor: string[]
  examples: string[]
  localNotes: string[]
  relatedLinks: RelatedLink[]
}

export const serviceSeoContent: Record<string, ServiceSeoContent> = {
  Homeowners: {
    eyebrow: "Local home insurance guidance",
    heroHeading: "Homeowners Insurance in Washington, DC",
    heading: "Protect Your Washington, DC Home With the Right Coverage",
    introduction:
      "Kamil Agency helps Washington, DC homeowners compare dwelling, personal property, liability, loss-of-use, water-backup, and other available protections. We review the home itself, estimated rebuilding cost, deductible, occupancy, updates, and any special property so the comparison reflects the actual risk rather than a generic price.",
    bestFor: [
      "Owners of rowhouses, detached homes, townhouses, and other owner-occupied residences",
      "Homebuyers arranging coverage before settlement or replacing an existing policy",
      "Households reviewing rebuilding limits, deductibles, liability, or valuable property",
      "Owners who need to discuss older systems, renovations, home-based work, or rental activity",
    ],
    examples: [
      "Repairing eligible damage to the dwelling after a covered fire, wind, or other insured event",
      "Replacing covered belongings after theft or a covered property loss",
      "Paying eligible additional living costs when a covered loss makes the home uninhabitable",
      "Responding to an eligible personal-liability claim involving bodily injury or property damage",
    ],
    localNotes: [
      "Washington rowhouses and older homes can require careful review of rebuilding cost, roofing, wiring, plumbing, and attached structures.",
      "Flood, sewer or drain backup, service-line damage, and water seepage are different exposures and may require separate policies or endorsements.",
      "Condominiums, rental properties, vacant homes, and homes under major renovation generally need different policy forms or underwriting.",
    ],
    relatedLinks: [
      {
        href: "/services/home-insurance-georgetown",
        label: "Georgetown home insurance",
        description:
          "Review local considerations for Georgetown homes and rowhouses.",
      },
      {
        href: "/services/home-insurance-glover-park",
        label: "Glover Park home insurance",
        description:
          "Explore coverage questions for homes in Glover Park and nearby communities.",
      },
      {
        href: "/services/umbrella-insurance",
        label: "Umbrella insurance",
        description:
          "Consider additional liability protection above eligible home and auto policies.",
      },
      {
        href: "/contact-us#info",
        label: "Request a home insurance review",
        description:
          "Share non-sensitive property details with our Washington, DC team.",
      },
    ],
  },
  Auto: {
    eyebrow: "Local auto insurance guidance",
    heroHeading: "Car Insurance in Washington, DC",
    heading: "Compare Car Insurance Options in Washington, DC",
    introduction:
      "Kamil Agency helps Washington, DC drivers compare auto insurance based on their vehicles, driving history, household, coverage limits, and deductibles. We explain liability, collision, comprehensive, medical payments, and uninsured motorist options in plain language. Eligible drivers can also ask about markets that may consider foreign or alternative identification, international licenses, or suspended, expired, or unverified license situations.",
    bestFor: [
      "Washington, DC drivers comparing limits, deductibles, and available discounts",
      "Households adding a vehicle, driver, teen driver, or newly licensed driver",
      "Applicants using a foreign license, international license, passport, or alternative identification",
      "Drivers whose license is suspended, expired, or not currently verified",
    ],
    examples: [
      "Comparing liability limits with collision and comprehensive protection for the vehicle",
      "Reviewing uninsured motorist, medical payments, rental reimbursement, or roadside options",
      "Providing a Matrícula Consular, passport, voter ID, birth certificate, state ID, permanent resident card, or visa",
      "Asking whether a registered or titled vehicle owner can be excluded as a driver when permitted",
    ],
    localNotes: [
      "Required coverage and insurance rules depend on where the vehicle is registered and principally garaged.",
      "Rates vary by driver, vehicle, location, coverage, deductible, discounts, and carrier underwriting; no agency can promise one price for every driver.",
      "Accepted documents and license requirements vary by state and carrier, and submitting identification does not guarantee policy issuance.",
      "An excluded person generally has no coverage while driving the vehicle; any exclusion must be permitted and documented by the carrier.",
    ],
    relatedLinks: [
      {
        href: "/blog/car-insurance-washington-dc-guide",
        label: "Washington, DC car insurance guide",
        description:
          "Learn how to compare coverage, deductibles, driver details, and quotes before choosing a policy.",
      },
      {
        href: "/contact-us#info",
        label: "Discuss your documents",
        description:
          "Contact our team to review your driver, vehicle, and identification situation.",
      },
      {
        href: "/quote/personal",
        label: "Start a personal quote",
        description:
          "Begin a secure request for personal auto insurance assistance.",
      },
      {
        href: "/services/commercial-auto-insurance",
        label: "Commercial auto insurance",
        description:
          "Explore options for eligible business-owned cars, vans, and fleets.",
      },
    ],
  },
  Commercial: {
    eyebrow: "Insurance for local businesses",
    heroHeading: "Business Insurance in Washington, DC",
    heading: "Build Coverage Around How Your Business Actually Operates",
    introduction:
      "Kamil Agency helps Washington, DC businesses compare general liability, commercial property, business owners policies, workers' compensation, commercial auto, professional liability, cyber, and other available coverage. We start with the operation, contracts, property, payroll, vehicles, and claims history so the insurance program fits the business.",
    bestFor: [
      "Contractors, consultants, retailers, restaurants, offices, nonprofits, and professional firms",
      "New businesses arranging coverage for a lease, license, contract, or client requirement",
      "Growing companies adding employees, property, vehicles, locations, or new services",
      "Owners who want one review of liability, property, workers, vehicles, and interruption risks",
    ],
    examples: [
      "A customer alleges bodily injury or property damage arising from business operations",
      "Covered property, equipment, inventory, or tenant improvements are damaged",
      "A covered property loss interrupts operations and creates eligible lost-income expenses",
      "A contract requires a certificate of insurance, additional insured status, or specific limits",
    ],
    localNotes: [
      "Coverage requirements can come from a lease, client contract, lender, licensing authority, or the nature of the operation.",
      "Payroll, sales, subcontractor costs, vehicle use, property values, and business classifications must be reported accurately for useful quotes.",
      "Professional services, cyber risks, employment practices, commercial vehicles, and surety obligations often require separate policies or endorsements.",
    ],
    relatedLinks: [
      {
        href: "/services/business-insurance-by-industry",
        label: "Business insurance by industry",
        description:
          "Find focused guidance for contractors, consultants, retailers, restaurants, and other operations.",
      },
      {
        href: "/services/general-liability-insurance",
        label: "General liability insurance",
        description:
          "Review protection for eligible third-party injury and property-damage claims.",
      },
      {
        href: "/services/commercial-auto-insurance",
        label: "Commercial auto insurance",
        description:
          "Explore coverage for eligible business-owned vehicles, drivers, and fleet exposures.",
      },
      {
        href: "/services/surety-bonds",
        label: "Surety bonds",
        description:
          "Learn about license, permit, contract, and other bond needs.",
      },
    ],
  },
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
    heroHeading: "Renters Insurance in Washington, DC",
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
        href: "/blog/renters-insurance-washington-dc-guide",
        label: "Washington, DC renters guide",
        description:
          "Learn what renters insurance may cover and what to review before choosing a policy.",
      },
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
    ],
  },
}
