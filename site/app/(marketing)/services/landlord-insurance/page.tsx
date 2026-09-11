import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Landlord Insurance in Washington, DC",
  description:
    "Get the best landlord insurance coverage in D.C., Maryland, and Virginia. Protect your rental property with affordable and comprehensive policies.",
  keywords:
    "landlord insurance, rental property insurance, D.C. landlord insurance, Maryland landlord insurance, Virginia landlord insurance, property protection, rental income protection",
  alternates: { canonical: "/services/landlord-insurance" },
}
export default function LandlordInsurance() {
  const service = services.find((service) => service.name === "Landlord")
  return service ? <ServicePage {...service} /> : notFound()
}
