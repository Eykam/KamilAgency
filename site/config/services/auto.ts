import { FAQ, PolicyDetails } from "@/types"
import { Metadata } from "next"

export const autoMetaData: Metadata = {
  title: "",
  description: "",
  keywords: [],
}

export const AutoPolicyDetails: PolicyDetails[] = [
  {
    title: "Collision Coverage",
    descriptionShort:
      "Collision coverage pays for damages to your vehicle resulting from a collision with another car or object, regardless of fault.",
    details: [
      "Repair costs for your vehicle after an accident",
      "Replacement costs if your vehicle is totaled",
      "Coverage for collisions with objects such as trees or fences",
    ],
  },
  {
    title: "Comprehensive Coverage",
    descriptionShort:
      "Comprehensive coverage protects your vehicle from non-collision-related incidents such as theft, vandalism, and natural disasters.",
    details: [
      "Repair or replacement costs for your vehicle if stolen",
      "Coverage for damages from natural disasters like floods or hail",
      "Protection against vandalism and other non-collision incidents",
    ],
  },
  {
    title: "Liability Coverage",
    descriptionShort:
      "Liability coverage protects you against legal responsibility for injuries or property damage to others caused by your vehicle.",
    details: [
      "Medical expenses for injuries sustained by other parties in an accident",
      "Legal defense costs if you are sued for damages",
      "Coverage for property damage caused by your vehicle",
    ],
  },
  {
    title: "Medical Payments Coverage",
    descriptionShort:
      "Medical payments coverage pays for medical expenses for you and your passengers in the event of an accident, regardless of fault.",
    details: [
      "Hospital and doctor bills for injuries sustained in an accident",
      "Coverage for rehabilitation and physical therapy costs",
      "Payment for funeral expenses in case of a fatal accident",
    ],
  },
]

export const autoFAQ: FAQ[] = [
  {
    question: "How much does car insurance cost in Washington, DC?",
    answer:
      "The price varies by driver, vehicle, garaging address, driving history, coverage limits, deductibles, discounts, and insurance company. A complete quote is the reliable way to compare your available prices; published averages cannot predict an individual premium.",
  },
  {
    question: "How can I compare affordable car insurance in Washington, DC?",
    answer:
      "Compare equivalent coverage limits and deductibles, ask about eligible discounts, provide accurate driver and vehicle information, and review more than the premium. A lower-priced policy may provide different limits, exclusions, or optional coverage than another quote.",
  },
  {
    question: "What information is needed for a car insurance quote?",
    answer:
      "Be prepared to provide the names and license or identification details for drivers, vehicle identification numbers, garaging address, current coverage when available, driving history, desired effective date, and information about how each vehicle is used.",
  },
  {
    question:
      "Can I get auto insurance with a foreign license, passport, or alternative ID?",
    answer:
      "Coverage may be available for eligible applicants using a foreign or international driver's license, passport, Matrícula Consular, Mexican voter ID or birth certificate, state ID, permanent resident card, visa, or U.S. passport. Accepted documents and eligibility vary by state, carrier, and underwriting requirements.",
  },
  {
    question:
      "Can someone with a suspended, expired, or unverified license get auto insurance?",
    answer:
      "Some carriers may consider applicants with a suspended, expired, or currently unverified license, including applicants who do not yet have a license. Available policy options depend on the applicant's circumstances, driving status, state rules, and carrier underwriting.",
  },
  {
    question: "Can a registered or titled vehicle owner be excluded?",
    answer:
      "A registered or titled owner may be eligible to be excluded as a driver when state law and the insurance carrier allow it. An excluded person generally does not have coverage while driving the vehicle, so the exclusion terms must be reviewed carefully before the policy is issued.",
  },
  {
    question: "What types of auto insurance coverage are available?",
    answer:
      "Auto insurance coverage includes liability coverage, collision coverage, comprehensive coverage, personal injury protection, and uninsured/underinsured motorist coverage.",
  },
  {
    question: "How can I lower my auto insurance premiums?",
    answer:
      "You can lower your auto insurance premiums by maintaining a clean driving record, bundling your auto insurance with other policies, increasing your deductible, and taking advantage of available discounts.",
  },
  {
    question:
      "What is the difference between collision and comprehensive coverage?",
    answer:
      "Collision coverage pays for damages to your vehicle resulting from a collision with another car or object, while comprehensive coverage protects your vehicle from non-collision-related incidents such as theft, vandalism, and natural disasters.",
  },
  {
    question: "Do I need uninsured motorist coverage?",
    answer:
      "Uninsured and underinsured motorist requirements and options vary by jurisdiction and policy. Review the available limits and covered losses carefully so you understand how the coverage may respond if an at-fault driver has no insurance or insufficient limits.",
  },
  {
    question: "What factors affect my auto insurance premiums?",
    answer:
      "Factors that affect auto insurance premiums include your driving record, age, type of vehicle, coverage limits, deductible, location, and sometimes your credit history.",
  },
  {
    question: "How do I file an auto insurance claim?",
    answer:
      "To file an auto insurance claim, contact your insurance provider as soon as possible, document the damage with photos, gather relevant information such as the police report and other driver's details, and follow your insurer's claims process.",
  },
]
