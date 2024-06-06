import { PolicyDetails } from "@/types"

export const HomeownersPolicyDetails: PolicyDetails[] = [
  {
    name: "Dwelling Coverage",
    description:
      "Dwelling coverage protects the structure of your home, including the walls, roof, and foundation, against covered perils.",
    details: [
      "Rebuilding costs for damages caused by fire, windstorms, and hail",
      "Repair costs for damages from vandalism or malicious mischief",
      "Restoration costs for damages from certain natural disasters",
    ],
  },
  {
    name: "Personal Property Coverage",
    description:
      "Personal property coverage protects your belongings, such as furniture, electronics, and clothing, against loss or damage.",
    details: [
      "Replacement costs for stolen or damaged items due to theft",
      "Repair or replacement costs for items damaged by fire or smoke",
      "Coverage for belongings damaged by certain natural disasters",
    ],
  },
  {
    name: "Liability Protection",
    description:
      "Liability protection covers you against legal responsibility for injuries or property damage to others while on your property.",
    details: [
      "Medical expenses for injuries sustained by visitors on your property",
      "Legal defense costs if you are sued for damages",
      "Coverage for accidental damage to someone else's property",
    ],
  },
  {
    name: "Additional Living Expenses",
    description:
      "Additional living expenses coverage helps pay for temporary housing and related costs if your home becomes uninhabitable due to a covered event.",
    details: [
      "Cost of hotel stays or temporary rental homes",
      "Meals and other living expenses incurred during displacement",
      "Coverage for the additional cost of living while your home is being repaired",
    ],
  },
]

export const AutoPolicyDetails: PolicyDetails[] = [
  {
    name: "Collision Coverage",
    description:
      "Collision coverage pays for damages to your vehicle resulting from a collision with another car or object, regardless of fault.",
    details: [
      "Repair costs for your vehicle after an accident",
      "Replacement costs if your vehicle is totaled",
      "Coverage for collisions with objects such as trees or fences",
    ],
  },
  {
    name: "Comprehensive Coverage",
    description:
      "Comprehensive coverage protects your vehicle from non-collision-related incidents such as theft, vandalism, and natural disasters.",
    details: [
      "Repair or replacement costs for your vehicle if stolen",
      "Coverage for damages from natural disasters like floods or hail",
      "Protection against vandalism and other non-collision incidents",
    ],
  },
  {
    name: "Liability Coverage",
    description:
      "Liability coverage protects you against legal responsibility for injuries or property damage to others caused by your vehicle.",
    details: [
      "Medical expenses for injuries sustained by other parties in an accident",
      "Legal defense costs if you are sued for damages",
      "Coverage for property damage caused by your vehicle",
    ],
  },
  {
    name: "Medical Payments Coverage",
    description:
      "Medical payments coverage pays for medical expenses for you and your passengers in the event of an accident, regardless of fault.",
    details: [
      "Hospital and doctor bills for injuries sustained in an accident",
      "Coverage for rehabilitation and physical therapy costs",
      "Payment for funeral expenses in case of a fatal accident",
    ],
  },
]

export const CommercialPolicyDetails: PolicyDetails[] = [
  {
    name: "Property Insurance",
    description:
      "Property insurance covers damage to your business property, including buildings, equipment, and inventory, caused by covered perils.",
    details: [
      "Repair or replacement costs for damaged buildings and structures",
      "Coverage for loss or damage to business equipment",
      "Protection for inventory against fire, theft, and other risks",
    ],
  },
  {
    name: "General Liability Insurance",
    description:
      "General liability insurance protects your business against claims of bodily injury, property damage, and personal injury arising from your business operations.",
    details: [
      "Medical expenses for injuries sustained by third parties on your business premises",
      "Legal defense costs if your business is sued for damages",
      "Coverage for property damage caused by your business activities",
    ],
  },
  {
    name: "Workers' Compensation Insurance",
    description:
      "Workers' compensation insurance provides coverage for medical expenses and lost wages for employees who are injured or become ill due to work-related activities.",
    details: [
      "Payment for medical treatment and rehabilitation costs for injured employees",
      "Coverage for lost wages during the recovery period",
      "Benefits for dependents in case of a work-related fatality",
    ],
  },
  {
    name: "Business Interruption Insurance",
    description:
      "Business interruption insurance covers the loss of income and operating expenses if your business operations are disrupted due to a covered event.",
    details: [
      "Compensation for lost income during the period of interruption",
      "Coverage for ongoing expenses such as rent and payroll",
      "Assistance with temporary relocation costs to resume operations",
    ],
  },
]

export const RentersPolicyDetails: PolicyDetails[] = [
  {
    name: "Personal Property Coverage",
    description:
      "Personal property coverage protects your belongings, such as furniture, electronics, and clothing, against loss or damage.",
    details: [
      "Replacement costs for stolen or damaged items due to theft",
      "Repair or replacement costs for items damaged by fire or smoke",
      "Coverage for belongings damaged by certain types of water damage",
    ],
  },
  {
    name: "Liability Coverage",
    description:
      "Liability coverage protects you against legal responsibility for injuries or property damage to others while in your rented property.",
    details: [
      "Medical expenses for injuries sustained by visitors in your rental unit",
      "Legal defense costs if you are sued for damages",
      "Coverage for accidental damage to someone else's property",
    ],
  },
  {
    name: "Additional Living Expenses",
    description:
      "Additional living expenses coverage helps pay for temporary housing and related costs if your rental unit becomes uninhabitable due to a covered event.",
    details: [
      "Cost of hotel stays or temporary rental homes",
      "Meals and other living expenses incurred during displacement",
      "Coverage for the additional cost of living while your rental unit is being repaired",
    ],
  },
]

export const LandlordPolicyDetails: PolicyDetails[] = [
  {
    name: "Property Damage Coverage",
    description:
      "Property damage coverage protects your rental property against damage caused by covered perils such as fire, theft, and vandalism.",
    details: [
      "Repair or replacement costs for damaged structures",
      "Coverage for loss or damage to appliances and fixtures",
      "Protection against damage caused by certain natural disasters",
    ],
  },
  {
    name: "Liability Coverage",
    description:
      "Liability coverage protects you against legal responsibility for injuries or property damage to others that occur on your rental property.",
    details: [
      "Medical expenses for injuries sustained by tenants or visitors",
      "Legal defense costs if you are sued for damages",
      "Coverage for accidental damage to tenant's property",
    ],
  },
  {
    name: "Loss of Rental Income Coverage",
    description:
      "Loss of rental income coverage helps compensate for lost rental income if your property becomes uninhabitable due to a covered event.",
    details: [
      "Compensation for lost rent during the repair period",
      "Coverage for ongoing expenses such as mortgage payments",
      "Assistance with temporary relocation costs for tenants",
    ],
  },
  {
    name: "Landlord Contents Coverage",
    description:
      "Landlord contents coverage protects items you own within the rental property, such as furniture and appliances, against loss or damage.",
    details: [
      "Replacement costs for damaged or stolen furniture",
      "Coverage for appliances provided to tenants",
      "Protection against damage to landlord-owned items in the property",
    ],
  },
]

export const LifePolicyDetails: PolicyDetails[] = [
  {
    name: "Term Life Insurance",
    description:
      "Term life insurance provides coverage for a specified period, offering a death benefit if the insured passes away during the term.",
    details: [
      "Affordable premiums for a fixed period",
      "Death benefit to cover funeral costs and outstanding debts",
      "Flexible terms ranging from 10 to 30 years",
    ],
  },
  {
    name: "Whole Life Insurance",
    description:
      "Whole life insurance provides lifelong coverage with a death benefit and a cash value component that grows over time.",
    details: [
      "Lifelong protection with fixed premiums",
      "Cash value accumulation that can be borrowed against",
      "Death benefit to support your beneficiaries",
    ],
  },
  {
    name: "Universal Life Insurance",
    description:
      "Universal life insurance offers flexible premiums and death benefits, along with a cash value component that earns interest.",
    details: [
      "Adjustable premiums and death benefits",
      "Cash value accumulation with interest",
      "Option to increase or decrease coverage as needed",
    ],
  },
  {
    name: "Variable Life Insurance",
    description:
      "Variable life insurance provides a death benefit and allows you to invest the cash value in various investment options.",
    details: [
      "Investment options for cash value growth",
      "Flexible death benefit and premium options",
      "Potential for higher returns based on investment performance",
    ],
  },
]

export const GeneralLiabilityPolicyDetails: PolicyDetails[] = [
  {
    name: "Bodily Injury Coverage",
    description:
      "Bodily injury coverage protects your business against claims of physical injury to third parties that occur on your business premises or as a result of your business operations.",
    details: [
      "Medical expenses for injuries sustained by customers or visitors",
      "Legal defense costs if your business is sued for bodily injury",
      "Compensation for lost wages and other damages claimed by injured parties",
    ],
  },
  {
    name: "Property Damage Coverage",
    description:
      "Property damage coverage protects your business against claims of damage to third-party property caused by your business operations.",
    details: [
      "Repair or replacement costs for damaged property",
      "Legal defense costs if your business is sued for property damage",
      "Compensation for loss of use of damaged property",
    ],
  },
  {
    name: "Personal and Advertising Injury Coverage",
    description:
      "Personal and advertising injury coverage protects your business against claims of personal injury, such as libel, slander, or copyright infringement, arising from your business operations.",
    details: [
      "Legal defense costs for personal and advertising injury claims",
      "Compensation for damages awarded in personal injury cases",
      "Coverage for settlements related to advertising injury claims",
    ],
  },
  {
    name: "Products and Completed Operations Coverage",
    description:
      "Products and completed operations coverage protects your business against claims of injury or damage caused by your products or completed work.",
    details: [
      "Coverage for bodily injury or property damage caused by your products",
      "Legal defense costs for claims related to completed work",
      "Compensation for damages awarded in products liability cases",
    ],
  },
]

export const UmbrellaPolicyDetails: PolicyDetails[] = [
  {
    name: "Excess Liability Coverage",
    description:
      "Excess liability coverage provides additional coverage beyond the limits of your underlying policies, protecting your assets from significant claims.",
    details: [
      "Additional coverage for bodily injury claims exceeding your primary policy limits",
      "Extra protection for property damage claims that surpass your existing coverage",
      "Financial safeguard for personal liability claims beyond standard policy limits",
    ],
  },
  {
    name: "Broader Coverage",
    description:
      "Broader coverage extends the protection to include risks and scenarios that may not be covered by your primary insurance policies.",
    details: [
      "Coverage for incidents not included in homeowners, auto, or renters policies",
      "Protection against certain lawsuits, such as libel or slander",
      "Expanded coverage for various liability risks",
    ],
  },
  {
    name: "Legal Defense Costs",
    description:
      "Legal defense costs coverage helps pay for the legal expenses incurred in defending against liability claims that exceed your primary policy limits.",
    details: [
      "Payment for attorney fees and court costs",
      "Coverage for legal expenses in prolonged or complex cases",
      "Financial support for settlements and judgments",
    ],
  },
  {
    name: "Worldwide Coverage",
    description:
      "Worldwide coverage ensures that you are protected against liability claims no matter where they occur, providing global peace of mind.",
    details: [
      "Protection for incidents that happen outside your home country",
      "Coverage for international travel-related liability claims",
      "Extended protection for personal and business activities abroad",
    ],
  },
]
