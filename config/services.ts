import { Service } from "@/types"
import { Icons } from "@/components/icons"
import { siteConfig } from "./site"

import { homeownersFAQ, HomeownersPolicyDetails } from "./services/homeowners"
import { autoFAQ, AutoPolicyDetails } from "./services/auto"
import { commercialFAQ, CommercialPolicyDetails } from "./services/commercial"
import { lifeFAQ, LifePolicyDetails } from "./services/life"
import { rentersFAQ, RentersPolicyDetails } from "./services/renters"
import { landlordFAQ, LandlordPolicyDetails } from "./services/landlord"
import { umbrellaFAQ, UmbrellaPolicyDetails } from "./services/umbrella"
// import { homeownersFAQ, HomeownersPolicyDetails } from "./services/health"

export const services: Service[] = [
  {
    name: "Homeowners",
    description:
      "Homeowners insurance provides essential protection for your home and personal belongings against potential risks such as fire, theft, and natural disasters. This policy ensures financial security and peace of mind for homeowners.",
    descriptionLong:
      "Homeowners insurance is designed to offer comprehensive coverage for your home, its contents, and other structures on your property. It protects you from financial loss due to damage or destruction caused by various perils, including fire, theft, vandalism, and certain natural disasters. Additionally, homeowners insurance can cover personal liability for injuries to others that occur on your property and provide temporary living expenses if your home becomes uninhabitable due to a covered event. By having homeowners insurance, you ensure that your most significant investment is safeguarded against unforeseen circumstances, allowing you to rebuild and recover with minimal financial strain.",
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
      "Auto insurance provides essential coverage for your vehicle against potential risks such as accidents, theft, and natural disasters. This policy ensures financial protection and peace of mind for drivers.",
    descriptionLong:
      "Auto insurance is designed to offer comprehensive coverage for your vehicle, protecting you from financial loss due to damage or destruction caused by various perils, including accidents, theft, vandalism, and certain natural disasters. Additionally, auto insurance can cover personal liability for injuries or property damage to others caused by your vehicle and provide medical payments for injuries sustained by you and your passengers. With auto insurance, you can drive with confidence, knowing that you are protected against unforeseen circumstances on the road.",
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
      "Commercial insurance provides essential coverage for businesses against potential risks such as property damage, liability, and employee-related issues. This policy ensures financial protection and peace of mind for business owners.",
    descriptionLong:
      "Commercial insurance is designed to offer comprehensive coverage for businesses, protecting against financial loss due to various perils, including property damage, liability claims, and employee-related issues. It includes different types of coverage tailored to meet the specific needs of businesses, such as property insurance, general liability insurance, and workers' compensation. With commercial insurance, business owners can safeguard their assets, employees, and operations, ensuring continuity and stability in the face of unforeseen events.",
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
      "Renters insurance provides essential coverage for tenants, protecting personal belongings against potential risks such as theft, fire, and water damage. This policy ensures financial security and peace of mind for renters.",
    descriptionLong:
      "Renters insurance is designed to offer comprehensive coverage for tenants, safeguarding their personal belongings and providing liability protection. It covers various perils, including theft, fire, vandalism, and certain types of water damage. Additionally, renters insurance offers personal liability coverage for injuries or property damage to others that occur in the rented property and can cover additional living expenses if the rental unit becomes uninhabitable due to a covered event. With renters insurance, tenants can protect their valuables and ensure they are financially secure in the face of unexpected events.",
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
