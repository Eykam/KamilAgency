import { FAQ, PolicyDetails } from "@/types"
import { Metadata } from "next"

export const autoMetaData: Metadata = {
  title: "",
  description: "",
  keywords: [],
}

export const LifePolicyDetails: PolicyDetails[] = [
  {
    title: "Term Life Insurance",
    descriptionShort:
      "Term life insurance provides coverage for a specified period, offering a death benefit if the insured passes away during the term.",
    details: [
      "Affordable premiums for a fixed period",
      "Death benefit to cover funeral costs and outstanding debts",
      "Flexible terms ranging from 10 to 30 years",
    ],
  },
  {
    title: "Whole Life Insurance",
    descriptionShort:
      "Whole life insurance provides lifelong coverage with a death benefit and a cash value component that grows over time.",
    details: [
      "Lifelong protection with fixed premiums",
      "Cash value accumulation that can be borrowed against",
      "Death benefit to support your beneficiaries",
    ],
  },
  {
    title: "Universal Life Insurance",
    descriptionShort:
      "Universal life insurance offers flexible premiums and death benefits, along with a cash value component that earns interest.",
    details: [
      "Adjustable premiums and death benefits",
      "Cash value accumulation with interest",
      "Option to increase or decrease coverage as needed",
    ],
  },
  {
    title: "Variable Life Insurance",
    descriptionShort:
      "Variable life insurance provides a death benefit and allows you to invest the cash value in various investment options.",
    details: [
      "Investment options for cash value growth",
      "Flexible death benefit and premium options",
      "Potential for higher returns based on investment performance",
    ],
  },
]

export const lifeFAQ: FAQ[] = [
  {
    question: "What types of life insurance are available?",
    answer:
      "Life insurance options include term life insurance, whole life insurance, universal life insurance, and variable life insurance. Each type offers different benefits and features to meet your financial needs.",
  },
  {
    question: "How much does life insurance cost?",
    answer:
      "The cost of life insurance depends on factors such as age, health, coverage amount, and policy type. On average, term life insurance can cost between $20 and $50 per month, while whole life insurance can range from $100 to $300 per month.",
  },
  {
    question: "Why is life insurance important?",
    answer:
      "Life insurance is important because it provides financial protection for your loved ones in the event of your passing. It helps cover expenses such as funeral costs, outstanding debts, and ongoing living expenses, ensuring your family's financial security.",
  },
  {
    question:
      "What is the difference between term life and whole life insurance?",
    answer:
      "Term life insurance provides coverage for a specified period, while whole life insurance offers lifelong coverage with a cash value component. Term life is generally more affordable, whereas whole life builds cash value over time.",
  },
  {
    question: "Can I borrow against my life insurance policy?",
    answer:
      "Yes, you can borrow against the cash value of a whole life or universal life insurance policy. The loan amount, plus interest, will reduce the death benefit if not repaid.",
  },
  {
    question: "What factors affect life insurance premiums?",
    answer:
      "Factors affecting life insurance premiums include age, health, lifestyle, occupation, coverage amount, and policy type. Non-smokers and individuals in good health typically pay lower premiums.",
  },
]
