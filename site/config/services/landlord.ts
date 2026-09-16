import { Metadata } from "next"
import { FAQ, PolicyDetails } from "@/types"

export const autoMetaData: Metadata = {
  title: "",
  description: "",
  keywords: [],
}

export const LandlordPolicyDetails: PolicyDetails[] = [
  {
    title: "Property Damage Coverage",
    descriptionShort:
      "Property damage coverage protects your rental property against damage caused by covered perils such as fire, theft, and vandalism.",
    details: [
      "Repair or replacement costs for damaged structures",
      "Coverage for loss or damage to appliances and fixtures",
      "Protection against damage caused by certain natural disasters",
    ],
  },
  {
    title: "Liability Coverage",
    descriptionShort:
      "Liability coverage protects you against legal responsibility for injuries or property damage to others that occur on your rental property.",
    details: [
      "Medical expenses for injuries sustained by tenants or visitors",
      "Legal defense costs if you are sued for damages",
      "Coverage for accidental damage to tenant's property",
    ],
  },
  {
    title: "Loss of Rental Income Coverage",
    descriptionShort:
      "Loss of rental income coverage helps compensate for lost rental income if your property becomes uninhabitable due to a covered event.",
    details: [
      "Compensation for lost rent during the repair period",
      "Coverage for ongoing expenses such as mortgage payments",
      "Assistance with temporary relocation costs for tenants",
    ],
  },
  {
    title: "Landlord Contents Coverage",
    descriptionShort:
      "Landlord contents coverage protects items you own within the rental property, such as furniture and appliances, against loss or damage.",
    details: [
      "Replacement costs for damaged or stolen furniture",
      "Coverage for appliances provided to tenants",
      "Protection against damage to landlord-owned items in the property",
    ],
  },
]

export const landlordFAQ: FAQ[] = [
  {
    question: "What does landlord insurance cover?",
    answer:
      "Landlord insurance covers property damage, liability claims, and loss of rental income for property owners renting out their properties. It also provides coverage for landlord-owned items within the rental property, such as appliances and furniture.",
  },
  {
    question: "How much does landlord insurance cost?",
    answer:
      "Pricing depends on the property's location, construction, replacement cost, occupancy, number of units, prior claims, coverage limits, and deductible. A tailored review is more reliable than a broad average.",
  },
  {
    question: "Do I need landlord insurance if I rent out my property?",
    answer:
      "Yes, landlord insurance is recommended for property owners who rent out their properties. It provides essential coverage for property damage, liability claims, and loss of rental income, ensuring your investment is protected.",
  },
  {
    question:
      "What is the difference between landlord insurance and homeowners insurance?",
    answer:
      "Landlord insurance covers rental properties and provides additional protections for rental income and landlord liabilities, while homeowners insurance covers owner-occupied properties. Landlord insurance is necessary if you rent out your property.",
  },
  {
    question: "Can landlord insurance cover tenant damage?",
    answer:
      "Yes, landlord insurance can cover damage caused by tenants, depending on the policy. It typically covers accidental damage, but intentional damage by tenants may not be covered.",
  },
  {
    question: "What is loss of rental income coverage?",
    answer:
      "Loss of rental income coverage helps compensate for lost rental income if your property becomes uninhabitable due to a covered event. It ensures that you continue to receive rental income while repairs are being made.",
  },
  {
    question:
      "Can I use homeowners insurance after moving out and renting the home?",
    answer:
      "Owner-occupied homeowners coverage may not fit a property that is rented to others. Tell the insurer before occupancy changes so the property can be reviewed for an appropriate landlord or dwelling policy.",
  },
  {
    question:
      "What happens to coverage when a rental is vacant between tenants?",
    answer:
      "Policies can limit coverage after a property has been vacant for a specified period. Vacancy length, renovations, utilities, security, and the next occupancy date should be discussed promptly with an agent.",
  },
]
