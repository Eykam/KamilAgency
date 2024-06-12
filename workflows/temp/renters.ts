import { FAQ, PolicyDetails } from "../site/types"
import { Metadata } from "next"

export const autoMetaData: Metadata = {
  title: "",
  description: "",
  keywords: [],
}

export const RentersPolicyDetails: PolicyDetails[] = [
  {
    name: "Personal Property Coverage",
    descriptionShort:
      "Personal property coverage protects your belongings, such as furniture, electronics, and clothing, against loss or damage.",
    details: [
      "Replacement costs for stolen or damaged items due to theft",
      "Repair or replacement costs for items damaged by fire or smoke",
      "Coverage for belongings damaged by certain types of water damage",
    ],
  },
  {
    name: "Liability Coverage",
    descriptionShort:
      "Liability coverage protects you against legal responsibility for injuries or property damage to others while in your rented property.",
    details: [
      "Medical expenses for injuries sustained by visitors in your rental unit",
      "Legal defense costs if you are sued for damages",
      "Coverage for accidental damage to someone else's property",
    ],
  },
  {
    name: "Additional Living Expenses",
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
      "The cost of renters insurance typically ranges from $10 to $30 per month, depending on the coverage limits, deductible, and location of the rental property.",
  },
  {
    question: "Is renters insurance mandatory?",
    answer:
      "While renters insurance is not legally required, many landlords require tenants to have a policy as part of the lease agreement to protect against potential damages and liabilities.",
  },
  {
    question: "Can renters insurance cover roommates?",
    answer:
      "Renters insurance policies generally cover only the named insured and their family members. Roommates should each have their own renters insurance policy to ensure adequate coverage for their belongings.",
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
]
