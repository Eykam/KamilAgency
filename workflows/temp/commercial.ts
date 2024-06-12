import { FAQ, PolicyDetails } from "../site/types"
import { Metadata } from "next"

export const autoMetaData: Metadata = {
  title: "",
  description: "",
  keywords: [],
}

export const CommercialPolicyDetails: PolicyDetails[] = [
  {
    name: "Property Insurance",
    descriptionShort:
      "Property insurance covers damage to your business property, including buildings, equipment, and inventory, caused by covered perils.",
    details: [
      "Repair or replacement costs for damaged buildings and structures",
      "Coverage for loss or damage to business equipment",
      "Protection for inventory against fire, theft, and other risks",
    ],
  },
  {
    name: "General Liability Insurance",
    descriptionShort:
      "General liability insurance protects your business against claims of bodily injury, property damage, and personal injury arising from your business operations.",
    details: [
      "Medical expenses for injuries sustained by third parties on your business premises",
      "Legal defense costs if your business is sued for damages",
      "Coverage for property damage caused by your business activities",
    ],
  },
  {
    name: "Workers' Compensation Insurance",
    descriptionShort:
      "Workers' compensation insurance provides coverage for medical expenses and lost wages for employees who are injured or become ill due to work-related activities.",
    details: [
      "Payment for medical treatment and rehabilitation costs for injured employees",
      "Coverage for lost wages during the recovery period",
      "Benefits for dependents in case of a work-related fatality",
    ],
  },
  {
    name: "Business Interruption Insurance",
    descriptionShort:
      "Business interruption insurance covers the loss of income and operating expenses if your business operations are disrupted due to a covered event.",
    details: [
      "Compensation for lost income during the period of interruption",
      "Coverage for ongoing expenses such as rent and payroll",
      "Assistance with temporary relocation costs to resume operations",
    ],
  },
]

export const commercialFAQ: FAQ[] = [
  {
    question: "What does commercial insurance cover?",
    answer:
      "Commercial insurance covers risks for businesses, including property damage, liability claims, employee injuries, and business interruption. Policies can be customized to meet the specific needs of your business.",
  },
  {
    question: "How much does commercial insurance cost?",
    answer:
      "The cost of commercial insurance varies based on factors such as industry, location, coverage limits, and number of employees. It can range from a few hundred to several thousand dollars annually.",
  },
  {
    question: "Why is business interruption insurance important?",
    answer:
      "Business interruption insurance provides coverage for lost income and operating expenses if your business operations are disrupted due to a covered event, ensuring financial stability during unexpected closures.",
  },
  {
    question: "What is general liability insurance for businesses?",
    answer:
      "General liability insurance protects businesses against claims of bodily injury, property damage, and personal injury arising from business operations. It covers legal costs and damages awarded in lawsuits.",
  },
  {
    question: "Can I customize my commercial insurance policy?",
    answer:
      "Yes, commercial insurance policies can be customized to meet the specific needs of your business, including property coverage, liability coverage, workers' compensation, and business interruption insurance.",
  },
  {
    question:
      "What is the difference between commercial property insurance and general liability insurance?",
    answer:
      "Commercial property insurance covers damage to your business property, while general liability insurance protects against claims of bodily injury and property damage to third parties resulting from your business operations.",
  },
]
