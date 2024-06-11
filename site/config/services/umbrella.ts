import { FAQ, PolicyDetails } from "@/types"
import { Metadata } from "next"

export const autoMetaData: Metadata = {
  title: "",
  description: "",
  keywords: [],
}

export const UmbrellaPolicyDetails: PolicyDetails[] = [
  {
    title: "Excess Liability Coverage",
    descriptionShort:
      "Excess liability coverage provides additional coverage beyond the limits of your underlying policies, protecting your assets from significant claims.",
    details: [
      "Additional coverage for bodily injury claims exceeding your primary policy limits",
      "Extra protection for property damage claims that surpass your existing coverage",
      "Financial safeguard for personal liability claims beyond standard policy limits",
    ],
  },
  {
    title: "Broader Coverage",
    descriptionShort:
      "Broader coverage extends the protection to include risks and scenarios that may not be covered by your primary insurance policies.",
    details: [
      "Coverage for incidents not included in homeowners, auto, or renters policies",
      "Protection against certain lawsuits, such as libel or slander",
      "Expanded coverage for various liability risks",
    ],
  },
  {
    title: "Legal Defense Costs",
    descriptionShort:
      "Legal defense costs coverage helps pay for the legal expenses incurred in defending against liability claims that exceed your primary policy limits.",
    details: [
      "Payment for attorney fees and court costs",
      "Coverage for legal expenses in prolonged or complex cases",
      "Financial support for settlements and judgments",
    ],
  },
  {
    title: "Worldwide Coverage",
    descriptionShort:
      "Worldwide coverage ensures that you are protected against liability claims no matter where they occur, providing global peace of mind.",
    details: [
      "Protection for incidents that happen outside your home country",
      "Coverage for international travel-related liability claims",
      "Extended protection for personal and business activities abroad",
    ],
  },
]

export const umbrellaFAQ: FAQ[] = [
  {
    question: "What does umbrella insurance cover?",
    answer:
      "Umbrella insurance provides additional liability coverage beyond the limits of your existing policies, such as homeowners, auto, or renters insurance. It covers a wide range of risks, including bodily injury, property damage, and personal liability claims.",
  },
  {
    question: "How much does umbrella insurance cost?",
    answer:
      "The cost of umbrella insurance varies based on factors such as coverage limits and existing policies. On average, umbrella insurance can cost between $150 and $300 per year for $1 million in additional coverage.",
  },
  {
    question: "Why do I need umbrella insurance?",
    answer:
      "Umbrella insurance provides an extra layer of protection against significant claims and lawsuits. It helps safeguard your assets and financial future, ensuring you are covered beyond the limits of your primary insurance policies.",
  },
  {
    question:
      "What is the difference between umbrella insurance and excess liability insurance?",
    answer:
      "Umbrella insurance provides broader coverage, including risks not covered by underlying policies, while excess liability insurance only increases the coverage limits of existing liability policies without adding new types of coverage.",
  },
  {
    question: "Can umbrella insurance cover legal defense costs?",
    answer:
      "Yes, umbrella insurance can cover legal defense costs associated with liability claims that exceed the limits of your primary insurance policies. This includes attorney fees, court costs, and settlement expenses.",
  },
  {
    question:
      "Do I need umbrella insurance if I already have high liability limits on my primary policies?",
    answer:
      "Even if you have high liability limits on your primary policies, umbrella insurance provides additional coverage and peace of mind. It can protect you from large claims that exceed your primary policy limits and offer broader coverage for various liability risks.",
  },
]
