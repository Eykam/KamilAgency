import { FAQ, PolicyDetails } from "@/types"
import { Metadata } from "next"

export const autoMetaData: Metadata = {
  title: "",
  description: "",
  keywords: [],
}

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

export const homeownersFAQ: FAQ[] = [
  {
    question: "What is covered under a standard homeowners insurance policy?",
    answer:
      "A standard homeowners insurance policy covers your home, personal belongings, and additional living expenses in the event of a covered peril such as fire, theft, or certain natural disasters. It also includes liability protection for injuries to others on your property.",
  },
  {
    question: "How is the cost of homeowners insurance determined?",
    answer:
      "The cost of homeowners insurance is determined by factors such as the value of your home, location, coverage limits, deductible, age and condition of your home, claims history, and sometimes your credit score.",
  },
  {
    question: "Is flood damage covered by homeowners insurance?",
    answer:
      "No, standard homeowners insurance policies do not cover flood damage. You will need to purchase a separate flood insurance policy if you live in a flood-prone area.",
  },
  {
    question: "What is liability coverage in homeowners insurance?",
    answer:
      "Liability coverage in homeowners insurance protects you from financial loss if you are found legally responsible for someone else's injury or property damage that occurs on your property.",
  },
  {
    question: "What should I do if my home is damaged by a covered peril?",
    answer:
      "If your home is damaged by a covered peril, contact your insurance provider to file a claim, document the damage with photos, and keep receipts for any expenses related to temporary repairs or additional living costs.",
  },
  {
    question:
      "Can I bundle homeowners insurance with other types of insurance?",
    answer:
      "Yes, many insurance providers offer discounts for bundling homeowners insurance with other policies such as auto or life insurance. Bundling can lead to significant savings on your premiums.",
  },
]
