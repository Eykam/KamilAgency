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
  sections?: {
    heading: string
    paragraphs: string[]
    bullets?: string[]
  }[]
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
    sections: [
      {
        heading: "How to Compare Homeowners Insurance in Washington, DC",
        paragraphs: [
          "A useful home insurance comparison looks beyond the premium. Compare the dwelling limit, how the policy values covered property, the deductible, personal liability limits, additional living expense coverage, and the exclusions or endorsements that apply to the home.",
          "The dwelling limit is intended to reflect an estimated rebuilding cost, not the home's sale price or land value. Construction features, square footage, attached structures, interior finishes, and local labor and material costs can all affect that estimate.",
        ],
        bullets: [
          "Compare the same coverage limits and deductibles across quotes.",
          "Ask whether roof or personal-property losses are settled at replacement cost or actual cash value.",
          "Review special limits for jewelry, art, collectibles, electronics, and business property.",
          "Discuss available water-backup, service-line, equipment-breakdown, and ordinance-or-law options.",
          "Confirm which discounts or account credits were included and what is required to keep them.",
        ],
      },
      {
        heading: "Information to Gather for a DC Home Insurance Quote",
        paragraphs: [
          "Accurate property details help an agent compare available home insurance quotes without relying on assumptions. For a purchase, start before the lender's deadline so there is time to review the inspection, requested coverage, and any underwriting questions.",
        ],
        bullets: [
          "Property address, occupancy, closing date, and mortgagee information",
          "Year built, square footage, construction type, roof age, and heating system",
          "Approximate dates of electrical, plumbing, HVAC, roof, and major renovation updates",
          "Prior insurance and loss history requested by the carrier",
          "Details about pets, pools, fireplaces, home-based work, rental activity, or planned renovations",
        ],
      },
      {
        heading: "Rowhouses, Older Homes, and Rebuilding Costs",
        paragraphs: [
          "Washington, DC includes attached rowhouses, historic properties, detached homes, and residences with older building systems. Shared walls, narrow access, custom finishes, code requirements, and the age of the roof, wiring, plumbing, or heating system may affect eligibility and the estimated cost to rebuild after a covered loss.",
          "Tell the agent about finished basements, additions, accessory structures, solar panels, recent renovations, and any planned construction. A home under major renovation or one that is vacant may need a different policy form than an occupied primary residence.",
        ],
      },
      {
        heading: "Flood, Water Backup, and Other Water Damage",
        paragraphs: [
          "Homeowners insurance does not treat every type of water damage the same way. Flooding from rising surface water is generally handled through separate flood coverage. Sewer or drain backup may require an endorsement, while sudden plumbing damage is evaluated under the policy's terms, exclusions, and deductible.",
          "Ask what water-related protection is included, what can be added, and which maintenance or seepage conditions are excluded. Coverage is determined by the issued policy and endorsements, not by a general description on a website.",
        ],
      },
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
    sections: [
      {
        heading: "What Renters Insurance Covers in Washington, DC",
        paragraphs: [
          "A renters insurance policy can combine personal property, personal liability, medical payments, and additional living expense coverage. Personal property coverage may help repair or replace belongings after an eligible covered event. Liability coverage may respond when a renter is legally responsible for another person's injury or property damage, subject to the policy's terms and limits.",
          "Additional living expense coverage may help with eligible extra costs when a covered loss makes the rental temporarily uninhabitable. Every policy has exclusions, deductibles, and limits, so the useful comparison is not just the premium—it is what the policy covers, how losses are valued, and how much the renter would pay out of pocket.",
        ],
      },
      {
        heading: "How to Compare Renters Insurance in DC",
        paragraphs: [
          "Start with an inventory of furniture, clothing, electronics, kitchenware, bicycles, and other belongings. Estimate what it would cost to replace those items today, then compare that amount with the personal property limit and deductible offered by each policy.",
        ],
        bullets: [
          "Ask whether covered belongings are settled at replacement cost or actual cash value.",
          "Choose a personal liability limit that reflects your household and lease requirements.",
          "Review special limits for jewelry, art, musical instruments, bicycles, and electronics.",
          "Discuss pets, roommates, home-based work, and property stored away from the apartment.",
          "Confirm whether the landlord or property manager needs proof of coverage or a specific interested-party listing.",
        ],
      },
      {
        heading: "DC Apartments, Rowhouses, Condos, and Group Homes",
        paragraphs: [
          "Washington, DC renters live in many types of housing, from high-rise apartments and condominium units to basement apartments, rowhouses, and shared group homes. The building type does not replace the need to insure the tenant's own property and liability exposure. Tell the agent how the residence is occupied so the policy can be reviewed accurately.",
          "Roommates are not automatically insured under every policy. Unrelated roommates commonly need separate policies unless the carrier agrees to include them. A condo association or landlord may insure parts of the building, but that coverage generally does not replace a tenant's renters policy.",
        ],
      },
      {
        heading: "What a Landlord's Policy Usually Does Not Cover",
        paragraphs: [
          "A landlord's policy generally protects the building and the landlord's financial interest. It normally does not insure a tenant's furniture, clothing, electronics, or personal liability. If a covered loss forces the tenant to leave temporarily, the landlord's policy also may not pay the tenant's hotel, meals, or other additional living costs.",
          "Renters insurance is not a maintenance plan and does not cover every cause of loss. Flood, earthquake, pests, wear and tear, and some water-related damage may be excluded or handled separately. The issued policy and endorsements determine coverage.",
        ],
      },
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
      {
        href: "/contact-us#info",
        label: "Compare renters insurance",
        description:
          "Ask our Washington, DC team to review your address, belongings, liability limit, and lease requirements.",
      },
    ],
  },
}
