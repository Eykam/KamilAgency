import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Homeowners Insurance in the DMV Area",
  description:
    "Compare homeowners insurance options with an independent agency serving Washington, DC, Maryland, and Virginia.",
  keywords:
    "homeowners insurance, home insurance, D.C. homeowners insurance, Maryland homeowners insurance, Virginia homeowners insurance, home protection, property insurance, affordable home insurance",
  alternates: {
    canonical: "/services/homeowners-insurance",
    languages: {
      "en-US": "/services/homeowners-insurance",
      "es-US": "/es/seguro-de-casa",
      "ar-US": "/ar/home-insurance",
    },
  },
}
export default function HomeownersInsurance() {
  const service = services.find((service) => service.name === "Homeowners")
  return service ? <ServicePage {...service} /> : notFound()
}
