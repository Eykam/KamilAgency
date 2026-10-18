import { Metadata } from "next"
import { FAQ, PolicyDetails } from "@/types"

export const autoMetaData: Metadata = {
  title: "",
  description: "",
  keywords: [],
}

export const RentersPolicyDetails: PolicyDetails[] = [
  {
    title: "Personal Property Coverage",
    descriptionShort:
      "Personal property coverage protects your belongings, such as furniture, electronics, and clothing, against loss or damage.",
    details: [
      "Replacement costs for stolen or damaged items due to theft",
      "Repair or replacement costs for items damaged by fire or smoke",
      "Coverage for belongings damaged by certain types of water damage",
    ],
  },
  {
    title: "Liability Coverage",
    descriptionShort:
      "Liability coverage protects you against legal responsibility for injuries or property damage to others while in your rented property.",
    details: [
      "Medical expenses for injuries sustained by visitors in your rental unit",
      "Legal defense costs if you are sued for damages",
      "Coverage for accidental damage to someone else's property",
    ],
  },
  {
    title: "Additional Living Expenses",
    descriptionShort:
      "Additional living expenses coverage helps pay for temporary housing and related costs if your rental unit becomes uninhabitable due to a covered event.",
    details: [
      "Cost of hotel stays or temporary rental homes",
      "Meals and other living expenses incurred during displacement",
      "Coverage for the additional cost of living while your rental unit is being repaired",
    ],
  },
]

export const rentersFAQ: FAQ[] = [
  {
    question: "What does renters insurance cover?",
    answer:
      "Renters insurance covers your personal belongings against risks such as theft, fire, and water damage. It also provides liability protection and additional living expenses if your rental unit becomes uninhabitable due to a covered event.",
  },
  {
    question: "How much does renters insurance cost?",
    answer:
      "Pricing depends on the address, building, coverage limits, deductible, prior claims, and optional coverage. An agent can compare available options after reviewing your needs; no single monthly price applies to every renter.",
  },
  {
    question: "Is renters insurance mandatory?",
    answer:
      "While renters insurance is not legally required, many landlords require tenants to have a policy as part of the lease agreement to protect against potential damages and liabilities.",
  },
  {
    question: "Can renters insurance cover roommates?",
    answer:
      "Renters insurance policies generally cover only the titled insured and their family members. Roommates should each have their own renters insurance policy to ensure adequate coverage for their belongings.",
  },
  {
    question: "What are the benefits of renters insurance?",
    answer:
      "Renters insurance provides financial protection for your belongings, liability coverage for accidents in your rental unit, and additional living expenses if you need to temporarily relocate due to a covered event.",
  },
  {
    question: "How do I file a renters insurance claim?",
    answer:
      "To file a renters insurance claim, contact your insurance provider as soon as possible, document the damage or loss, provide necessary receipts or evidence, and follow your insurer's claims process.",
  },
  {
    question: "Does my landlord's insurance cover my belongings?",
    answer:
      "A landlord's policy generally protects the building and the landlord's liability exposure. It usually does not insure a tenant's furniture, clothing, electronics, or personal liability, which is why renters coverage is important.",
  },
  {
    question: "Does renters insurance cover belongings away from home?",
    answer:
      "Many policies provide some personal-property coverage away from the residence, subject to policy limits, deductibles, and exclusions. Ask about special limits for jewelry, bicycles, electronics, and business property.",
  },
  {
    question: "Is renters insurance required in Washington, DC?",
    answer:
      "Washington, DC law does not generally require every tenant to buy renters insurance, but a landlord may require coverage as a condition of the lease. Review your lease for any required liability limit, proof of insurance, or interested-party instructions.",
  },
  {
    question: "How do I show proof of renters insurance to my landlord?",
    answer:
      "After an eligible policy is issued, the insurer or agent can usually provide a declarations page or other proof of coverage. If the lease requires the landlord or property manager to be listed as an interested party, provide the exact name and address shown in the lease.",
  },
  {
    question: "Does renters insurance cover flooding in Washington, DC?",
    answer:
      "Standard renters policies generally do not cover flood damage caused by rising surface water. Separate flood coverage may be available. Water damage from other causes is handled according to the policy wording, exclusions, deductible, and endorsements.",
  },
  {
    question: "What information is needed for a renters insurance quote?",
    answer:
      "Be ready to provide the rental address, move-in date, estimated value of your belongings, desired liability limit and deductible, prior claims, household members, pets, and details about any jewelry, bicycles, electronics, or home-based business property that may need special review.",
  },
]
