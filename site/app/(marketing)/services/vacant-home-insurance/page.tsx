import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Vacant Home Insurance in Washington, DC",
  description:
    "Compare vacant home insurance for unoccupied, inherited, renovated, or for-sale properties with a local Washington, DC insurance agency.",
  keywords:
    "vacant home insurance Washington DC, unoccupied home insurance, vacant property insurance, renovation insurance, vacant home insurance Maryland, vacant home insurance Virginia",
  alternates: { canonical: "/services/vacant-home-insurance" },
}

export default function VacantHomeInsurance() {
  const service = services.find((service) => service.name === "Vacant Home")
  return service ? <ServicePage {...service} /> : notFound()
}
