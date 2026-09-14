import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Homeowners Insurance in Washington, DC",
  description:
    "Compare homeowners insurance options with a local Washington, DC agency serving Georgetown, Glover Park, and nearby communities.",
  keywords:
    "homeowners insurance, home insurance, D.C. homeowners insurance, Maryland homeowners insurance, Virginia homeowners insurance, home protection, property insurance, affordable home insurance",
  alternates: { canonical: "/services/homeowners-insurance" },
}
export default function HomeownersInsurance() {
  const service = services.find((service) => service.name === "Homeowners")
  return service ? <ServicePage {...service} /> : notFound()
}
