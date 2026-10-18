import { Metadata } from "next"
import { FAQ, PolicyDetails } from "@/types"

export const autoMetaData: Metadata = {
  title: "",
  description: "",
  keywords: [],
}

export const HomeownersPolicyDetails: PolicyDetails[] = [
  {
    title: "Dwelling Coverage",
    descriptionShort:
      "Dwelling coverage protects the structure of your home, including the walls, roof, and foundation, against covered perils.",
    details: [
      "Rebuilding costs for damages caused by fire, windstorms, and hail",
      "Repair costs for damages from vandalism or malicious mischief",
      "Restoration costs for damages from certain natural disasters",
    ],
  },
  {
    title: "Personal Property Coverage",
    descriptionShort:
      "Personal property coverage protects your belongings, such as furniture, electronics, and clothing, against loss or damage.",
    details: [
      "Replacement costs for stolen or damaged items due to theft",
      "Repair or replacement costs for items damaged by fire or smoke",
      "Coverage for belongings damaged by certain natural disasters",
    ],
  },
  {
    title: "Liability Protection",
    descriptionShort:
      "Liability protection covers you against legal responsibility for injuries or property damage to others while on your property.",
    details: [
      "Medical expenses for injuries sustained by visitors on your property",
      "Legal defense costs if you are sued for damages",
      "Coverage for accidental damage to someone else's property",
    ],
  },
  {
    title: "Additional Living Expenses",
    descriptionShort:
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
      "A homeowners policy may include coverage for the dwelling, other structures, personal property, additional living expenses, personal liability, and medical payments. Coverage applies only to eligible losses under the issued policy, subject to its exclusions, conditions, limits, and deductible.",
  },
  {
    question: "How is the cost of homeowners insurance determined?",
    answer:
      "The cost of homeowners insurance is determined by factors such as the value of your home, location, coverage limits, deductible, age and condition of your home, claims history, and sometimes your credit score.",
  },
  {
    question:
      "Is flood damage covered by homeowners insurance in Washington, DC?",
    answer:
      "Standard homeowners policies generally exclude flooding caused by rising surface water. Separate flood coverage may be available. Sewer or drain backup and sudden plumbing damage are different exposures and are evaluated according to the policy and any applicable endorsements.",
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
      "Some insurers offer an account discount when eligible home and auto policies are placed together. Eligibility and pricing vary, so compare the combined coverage and total cost rather than assuming a bundle will always be less expensive.",
  },
  {
    question: "How much does homeowners insurance cost in Washington, DC?",
    answer:
      "There is no single price for every Washington, DC home. Premiums can vary based on the home's location, rebuilding estimate, age and updates, roof and building systems, coverage limits, deductible, prior losses, discounts, and carrier underwriting. A quote using accurate property details is more useful than a citywide average.",
  },
  {
    question: "What information is needed for a homeowners insurance quote?",
    answer:
      "Be ready to provide the property address, occupancy and closing date, year built, square footage, construction details, roof age, heating system, major electrical or plumbing updates, prior insurance and loss history, and information about renovations, pets, pools, fireplaces, rental activity, or home-based work.",
  },
  {
    question: "Is rebuilding cost the same as the home's market value?",
    answer:
      "No. Market value can include the land and local real-estate demand, while an insurance rebuilding estimate focuses on the expected cost to reconstruct covered portions of the home using current materials and labor. The two amounts can be different.",
  },
  {
    question: "When should a homebuyer request insurance before closing?",
    answer:
      "Start as soon as the property and expected closing date are known. Beginning early gives the agent time to review property details, inspections, lender requirements, and any underwriting questions before proof of coverage is due.",
  },
]
