import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Homeowners Insurance in Washington, DC",
  description:
    "Compare homeowners insurance and home insurance quotes in Washington, DC for your dwelling, belongings, liability, loss of use, and water risks.",
  keywords:
    "homeowners insurance Washington DC, home insurance Washington DC, home insurance quotes Washington DC, homeowners insurance in Washington DC, DC home insurance, Maryland homeowners insurance, Virginia homeowners insurance",
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
