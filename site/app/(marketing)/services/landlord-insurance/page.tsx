import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Landlord Insurance in DC, MD & VA",
  description:
    "Compare landlord and rental property insurance for dwellings, liability, and eligible lost rent with a local agency serving DC, Maryland, and Virginia.",
  keywords:
    "landlord insurance, rental property insurance, D.C. landlord insurance, Maryland landlord insurance, Virginia landlord insurance, property protection, rental income protection",
  alternates: { canonical: "/services/landlord-insurance" },
  openGraph: {
    title: "Landlord & Rental Property Insurance | DC, MD & VA",
    description:
      "Local guidance for rental-property dwelling coverage, premises liability, and eligible loss of rents.",
    url: "/services/landlord-insurance",
  },
}
export default function LandlordInsurance() {
  const service = services.find((service) => service.name === "Landlord")
  return service ? <ServicePage {...service} /> : notFound()
}
