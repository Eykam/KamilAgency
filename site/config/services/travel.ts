import { FAQ, PolicyDetails } from "@/types"

export const TravelPolicyDetails: PolicyDetails[] = [
  {
    title: "Trip Protection",
    descriptionShort:
      "Protection for eligible prepaid trip costs when a covered event disrupts your plans.",
    details: [
      "Trip cancellation and interruption benefits for covered reasons",
      "Travel delay and missed-connection benefits on eligible plans",
      "Coverage limits and exclusions vary by plan",
    ],
  },
  {
    title: "Emergency Medical",
    descriptionShort:
      "Medical benefits for eligible illnesses or injuries that occur while traveling.",
    details: [
      "Emergency medical and dental benefits on eligible plans",
      "Support locating appropriate care while away from home",
      "Plan deductibles, limits, and pre-existing-condition rules may apply",
    ],
  },
  {
    title: "Medical Evacuation",
    descriptionShort:
      "Transportation assistance when appropriate medical care is not available nearby.",
    details: [
      "Emergency transportation to an appropriate medical facility",
      "Repatriation benefits on eligible plans",
      "Travel-assistance services may be available around the clock",
    ],
  },
]

export const travelFAQ: FAQ[] = [
  {
    question: "What can travel insurance cover?",
    answer:
      "Depending on the plan, travel insurance may include benefits for covered trip cancellations or interruptions, travel delays, emergency medical treatment, and medical evacuation. Always review the selected plan's terms, exclusions, and limits before purchasing.",
  },
  {
    question: "When should I buy travel insurance?",
    answer:
      "It is generally best to review coverage soon after making your first trip payment. Some benefits or waivers may only be available when coverage is purchased within a specified time after the initial deposit.",
  },
  {
    question:
      "Does my health insurance cover medical care outside the United States?",
    answer:
      "Coverage varies by health plan and destination. Check with your health insurer before traveling, then review whether a travel medical plan could help address gaps, deductibles, or evacuation costs.",
  },
  {
    question: "Where do I compare plans and enroll?",
    answer:
      "Select Get a Quote to continue to our travel insurance partner's secure website. There you can enter trip details, compare available plans, review policy documents, and enroll online.",
  },
]
