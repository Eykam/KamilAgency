import { ServiceCategory } from "@/types"
import { Icons } from "@/components/icons"
import { siteConfig } from "./site"
export const ServiceCategories: ServiceCategory[] = [
  {
    name: "Personal Lines",
    descriptionShort:
      "Get a quote for Personal Lines insurance to protect your home, auto, and personal assets.",
    url: "/quote/personal",
    logo: Icons.life({}),
  },
  {
    name: "Commercial",
    descriptionShort:
      "Get a quote for Commercial insurance to safeguard your business assets and operations. Find the right coverage tailored to your business needs.",
    url: siteConfig.commercialQuoteURL,
    logo: Icons.commercial({}),
  },
  {
    name: "Medicare & Medicaid",
    descriptionShort:
      "Get a quote for Medicare insurance to ensure you have the right health coverage. Select the plan that meets your healthcare needs.",
    url: siteConfig.quoteURL,
    logo: Icons.heart({ className: "size-12 fill-primary" }),
  },
]
