import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Renters Insurance in Washington, DC",
  description:
    "Compare renters insurance options with a local Washington, DC agency serving Georgetown, Glover Park, and nearby communities.",
  keywords:
    "renters insurance, rental insurance, D.C. renters insurance, Maryland renters insurance, Virginia renters insurance, tenant insurance, belongings protection",
  alternates: { canonical: "/services/renters-insurance" },
}
export default function RentersInsurance() {
  const service = services.find((service) => service.name === "Renters")
  return service ? <ServicePage {...service} /> : notFound()
}
