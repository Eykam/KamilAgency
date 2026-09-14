import { Metadata } from "next"
import { Service } from "@/types"

import { Icons } from "@/components/icons"

import { AutoPolicyDetails, autoFAQ } from "./services/auto"
import { CommercialPolicyDetails, commercialFAQ } from "./services/commercial"
import { HomeownersPolicyDetails, homeownersFAQ } from "./services/homeowners"
import { LandlordPolicyDetails, landlordFAQ } from "./services/landlord"
import { LifePolicyDetails, lifeFAQ } from "./services/life"
import { MedicarePolicyDetails, medicareFAQ } from "./services/medicare"
import { RentersPolicyDetails, rentersFAQ } from "./services/renters"
import { UmbrellaPolicyDetails, umbrellaFAQ } from "./services/umbrella"
import { siteConfig } from "./site"

// import { homeownersFAQ, HomeownersPolicyDetails } from "./services/health"

export const servicesMetaData: Metadata = {
  title: "Insurance Services in Washington, DC",
  description:
    "Explore personalized home, auto, commercial, renters, landlord, Medicare, umbrella, and life insurance solutions from Kamil Agency.",
  alternates: { canonical: "/services" },
  keywords: [
    "Kamil Agency",
    "Kamil Insurance",
    "Insurance Services",
    "Homeowners Insurance",
    "Auto Insurance",
    "Commercial Insurance",
    "Renters Insurance",
    "Landlord Insurance",
    "Medicare Insurance",
    "Umbrella Insurance",
    "Life Insurance",
    "Insurance in Washington D.C",
    "Insurance in Maryland",
    "Insurance in Virginia",
    "Insurance in Pennsylvania",
    "Insurance in Delaware",
    "Insurance in Ohio",
    "Insurance in Indiana",
    "Insurance in West Virginia",
    "Insurance in North Carolina",
    "Personalized Insurance Service",
    "Mohamed",
    "Mohamed Kamil",
  ],
}
export const services: Service[] = [
  {
    name: "Homeowners",
    description:
      "Kamil Agency helps Washington, DC homeowners compare coverage for their home, belongings, liability, and temporary living expenses, with local guidance for Georgetown, Glover Park, and nearby communities.",
    descriptionLong:
      "Homeowners insurance can help protect your dwelling, personal property, and finances after a covered loss. Coverage may also include personal liability and additional living expenses when a covered event makes your home temporarily uninhabitable. Our Washington, DC team helps you compare limits, deductibles, and available options based on your property and priorities.",
    details: HomeownersPolicyDetails,
    descriptionShort: "Comprehensive coverage for your home and belongings.",
    icon: Icons.home({}),
    quoteURL: siteConfig.quoteURL,
    docsURL: "/docs",
    pageURL: "/services/homeowners-insurance",
    imageURL: "/images/services/home.webp",
    faq: homeownersFAQ,
  },
  {
    name: "Auto",
    descriptionShort: "Reliable protection for you and your vehicle.",
    description:
      "Kamil Agency helps Washington, DC drivers compare auto insurance for liability, collision, comprehensive, medical payments, and uninsured motorist protection based on their needs.",
    descriptionLong:
      "Auto insurance can help cover injuries, property damage, vehicle repairs, theft, and other losses, depending on the policy you choose. Our Washington, DC team explains liability, collision, comprehensive, medical payments, and uninsured motorist options in plain language. We help drivers compare limits and deductibles for the way they use their vehicles.",
    icon: Icons.car({}),
    quoteURL: siteConfig.quoteURL,
    docsURL: "/docs",
    pageURL: "/services/auto-insurance",
    imageURL: "/images/services/auto.webp",
    details: AutoPolicyDetails,
    faq: autoFAQ,
  },

  {
    name: "Commercial",
    descriptionShort: "Customized solutions to safeguard your business.",
    description:
      "Kamil Agency helps Washington, DC business owners compare commercial coverage for property, liability, employees, vehicles, and interruptions based on their operations and risks.",
    descriptionLong:
      "Business insurance can combine several coverages to address the risks a company faces, including property damage, liability claims, employee injuries, and interruptions. Our Washington, DC team helps owners review general liability, commercial property, workers' compensation, commercial auto, and related options. Recommendations are shaped around the business rather than a one-size-fits-all package.",
    icon: Icons.commercial({}),
    quoteURL: siteConfig.commercialQuoteURL,
    docsURL: "/docs",
    pageURL: "/services/commercial-insurance",
    imageURL: "/images/services/commercial.webp",
    details: CommercialPolicyDetails,
    faq: commercialFAQ,
  },
  {
    name: "Renters",
    descriptionShort: "Affordable coverage for your belongings.",
    description:
      "Kamil Agency helps Washington, DC renters compare coverage for belongings, personal liability, and additional living expenses in Georgetown, Glover Park, and nearby communities.",
    descriptionLong:
      "Renters insurance can help replace belongings after a covered loss and provide personal liability protection. It may also help with additional living expenses if a covered event makes your rental temporarily uninhabitable. Our Washington, DC team helps tenants compare coverage limits, deductibles, and options for their apartment, condo, or rental home.",
    icon: Icons.renter({}),
    quoteURL: siteConfig.quoteURL,
    docsURL: "/docs",
    pageURL: "/services/renters-insurance",
    imageURL: "/images/services/renters.webp",
    details: RentersPolicyDetails,
    faq: rentersFAQ,
  },
  {
    name: "Landlord",
    descriptionShort: "Protect your rental properties with ease.",
    description:
      "Landlord insurance provides essential coverage for property owners renting out their properties, protecting against potential risks such as property damage, liability, and loss of rental income. This policy ensures financial security and peace of mind for landlords.",
    descriptionLong:
      "Landlord insurance is designed to offer comprehensive coverage for property owners who rent out their residential or commercial properties. It covers various perils, including property damage caused by fire, theft, vandalism, and certain natural disasters. Additionally, landlord insurance offers liability protection for injuries or property damage to others that occur on the rental property and can cover loss of rental income if the property becomes uninhabitable due to a covered event. With landlord insurance, property owners can protect their investment and ensure continuous rental income even in the face of unexpected events.",
    icon: Icons.landlord({}),
    quoteURL: siteConfig.quoteURL,
    docsURL: "/docs",
    pageURL: "/services/landlord-insurance",
    imageURL: "/images/services/landlord.webp",
    details: LandlordPolicyDetails,
    faq: landlordFAQ,
  },
  {
    name: "Medicare",
    descriptionShort: "Comprehensive coverage for seniors' medical expenses.",
    description:
      "Medicare insurance provides essential health coverage for seniors, helping to cover medical expenses and offering peace of mind.",
    descriptionLong:
      "Medicare insurance is designed to offer comprehensive health coverage for seniors, covering a range of medical services and expenses. It includes various parts such as Part A (Hospital Insurance), Part B (Medical Insurance), Part C (Medicare Advantage Plans), and Part D (Prescription Drug Coverage). Additionally, Medigap policies help cover out-of-pocket costs not covered by Original Medicare. With Medicare insurance, seniors can access necessary medical care without worrying about high costs, ensuring they receive the healthcare they need as they age.",
    details: MedicarePolicyDetails,
    icon: Icons.heart({ className: "fill-current" }),
    quoteURL: siteConfig.medicareQuoteURL,
    docsURL: "/docs",
    pageURL: "/services/medicare",
    imageURL: "/images/services/medicare.webp",
    faq: medicareFAQ,
  },
  {
    name: "Umbrella",
    descriptionShort:
      "Extra liability protection for major claims and lawsuits.",
    description:
      "Umbrella insurance provides additional liability coverage beyond the limits of your existing policies, such as homeowners, auto, or renters insurance. This policy ensures extra financial protection and peace of mind in the event of significant claims.",
    descriptionLong:
      "Umbrella insurance is designed to offer comprehensive additional liability coverage, providing an extra layer of protection that goes beyond the limits of your primary insurance policies. It covers a wide range of risks, including bodily injury, property damage, and personal liability claims. Umbrella insurance can be especially beneficial in situations where the costs of a claim exceed the coverage limits of your underlying policies. By having umbrella insurance, you ensure that your assets and financial future are safeguarded against substantial claims and lawsuits, allowing you to maintain your peace of mind.",

    icon: Icons.umbrella({}),
    quoteURL: siteConfig.quoteURL,
    docsURL: "/docs",
    pageURL: "/services/umbrella-insurance",
    imageURL: "/images/services/home.webp",
    details: UmbrellaPolicyDetails,
    faq: umbrellaFAQ,
  },
  {
    name: "Life",
    descriptionShort:
      "Financial security and peace of mind for your loved ones.",
    description:
      "Life insurance provides essential financial protection for your loved ones in the event of your passing. This policy ensures that your beneficiaries receive financial support to cover expenses and maintain their standard of living.",
    descriptionLong:
      "Life insurance is designed to offer comprehensive financial protection to your beneficiaries in the event of your death. It provides a death benefit that can be used to cover funeral expenses, outstanding debts, and ongoing living expenses. Additionally, some life insurance policies offer living benefits, such as cash value accumulation, that can be accessed during your lifetime. With life insurance, you can ensure that your loved ones are financially secure and able to maintain their standard of living even after you are gone.",
    icon: Icons.life({}),
    quoteURL: siteConfig.quoteURL,
    docsURL: "/docs",
    pageURL: "/services/life-insurance",
    imageURL: "/images/services/life.webp",
    details: LifePolicyDetails,
    faq: lifeFAQ,
  },
]
