import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Renters Insurance in Washington, DC",
  description:
    "Secure your belongings with comprehensive renters insurance in D.C., Maryland, and Virginia. Get affordable and reliable coverage for your rental property.",
  keywords:
    "renters insurance, rental insurance, D.C. renters insurance, Maryland renters insurance, Virginia renters insurance, tenant insurance, belongings protection",
  alternates: { canonical: "/services/renters-insurance" },
}
export default function RentersInsurance() {
  const service = services.find((service) => service.name === "Renters")
  return service ? <ServicePage {...service} /> : notFound()
}
