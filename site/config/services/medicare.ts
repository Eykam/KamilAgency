import { Metadata } from "next"
import { PolicyDetails, FAQ } from "@/types"

export const medicareMetaData: Metadata = {
  title:
    "Medicare Insurance in Washington DC - Comprehensive Coverage for Seniors",
  description:
    "Explore comprehensive Medicare insurance options in the Washington DC metro area. Get the coverage you need for medical expenses and peace of mind.",
  keywords: [
    "Medicare insurance",
    "Washington DC",
    "comprehensive coverage",
    "medical expenses",
    "senior insurance",
    "health coverage",
    "Medicare plans",
    "DC metro area",
    "Medicare benefits",
    "affordable Medicare",
  ],
}

export const MedicarePolicyDetails: PolicyDetails[] = [
  {
    title: "Medicare Part A: Hospital Insurance",
    descriptionShort:
      "Covers inpatient hospital stays, skilled nursing care, hospice care, and some home health care.",
    details: [
      "Inpatient hospital care: Semi-private rooms, meals, and general nursing.",
      "Skilled nursing care: Limited coverage for rehabilitation services.",
      "Hospice care: Coverage for terminally ill patients including doctor services and supplies.",
    ],
  },
  {
    title: "Medicare Part B: Medical Insurance",
    descriptionShort:
      "Covers doctors' services, outpatient care, medical supplies, and preventive services.",
    details: [
      "Doctor's services: Medically necessary services from healthcare providers.",
      "Outpatient care: Lab tests, surgeries, and doctor visits.",
      "Medical supplies: Durable medical equipment like wheelchairs and walkers.",
    ],
  },
  {
    title: "Medicare Part C: Medicare Advantage Plans",
    descriptionShort:
      "Alternative to Original Medicare, provided by private insurance companies.",
    details: [
      "All-in-one coverage: Combines Medicare Part A and Part B in one plan.",
      "Additional benefits: Vision, hearing, dental, and wellness programs.",
      "Provider networks: Use specific healthcare providers and facilities.",
    ],
  },
  {
    title: "Medicare Part D: Prescription Drug Coverage",
    descriptionShort:
      "Helps cover the cost of prescription drugs and vaccines.",
    details: [
      "Prescription drug coverage: Covers cost of medications.",
      "Formulary: List of covered drugs.",
      "Network pharmacies: Use network pharmacies for lowest costs.",
    ],
  },
]

export const medicareFAQ: FAQ[] = [
  {
    question: "What is Medicare and who is eligible?",
    answer:
      "Medicare is a federal health insurance program for people aged 65 or older, certain younger people with disabilities, and individuals with End-Stage Renal Disease. To be eligible, you must be a U.S. citizen or a legal resident for at least five years.",
  },
  {
    question: "What does Medicare Part A cover?",
    answer:
      "Medicare Part A covers inpatient hospital stays, care in a skilled nursing facility, hospice care, and some home health care services. Most people do not pay a premium for Part A.",
  },
  {
    question: "What does Medicare Part B cover?",
    answer:
      "Medicare Part B covers certain doctors' services, outpatient care, medical supplies, and preventive services. Beneficiaries pay a monthly premium for Part B coverage.",
  },
  {
    question: "What are Medicare Advantage Plans (Part C)?",
    answer:
      "Medicare Advantage Plans, or Part C, are offered by private companies approved by Medicare. These plans include all benefits and services covered under Part A and Part B, and usually include Medicare prescription drug coverage (Part D).",
  },
  {
    question: "What is Medicare Part D?",
    answer:
      "Medicare Part D provides prescription drug coverage to help cover the cost of medications. This coverage can help lower prescription drug costs and protect against higher costs in the future.",
  },
  {
    question: "What is Medigap?",
    answer:
      "Medigap, or Medicare Supplement Insurance, helps pay some of the health care costs that Original Medicare doesn't cover, such as copayments, coinsurance, and deductibles. Medigap policies are offered by private companies.",
  },
  {
    question: "How do I enroll in Medicare in the Washington DC metro area?",
    answer:
      "You can enroll in Medicare through the Social Security Administration website or by visiting a local Social Security office. Enrollment periods include the Initial Enrollment Period, General Enrollment Period, and Special Enrollment Periods based on qualifying events.",
  },
  {
    question: "What are the costs associated with Medicare?",
    answer:
      "Costs for Medicare include premiums, deductibles, copayments, and coinsurance. Part A is usually premium-free, but Part B has a monthly premium. Costs for Part C and Part D vary by plan and provider.",
  },
  {
    question: "Can I get financial assistance for Medicare in Washington DC?",
    answer:
      "Yes, programs such as Medicaid, Medicare Savings Programs, and Extra Help can provide financial assistance for Medicare beneficiaries who meet certain income and resource limits.",
  },
  {
    question:
      "Where can I find more information about Medicare plans in the DC metro area?",
    answer:
      "For more information about Medicare plans available in the Washington DC metro area, you can visit the Medicare.gov website or contact local Medicare representatives who can assist you in understanding your options.",
  },
]
