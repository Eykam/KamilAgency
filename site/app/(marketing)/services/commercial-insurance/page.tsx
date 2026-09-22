import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Commercial Insurance in the DMV Area",
  description:
    "Compare business insurance options with an independent agency serving Washington, DC, Maryland, and Virginia.",
  keywords:
    "commercial insurance, business insurance, D.C. commercial insurance, Maryland commercial insurance, Virginia commercial insurance, business protection, property insurance, liability insurance",
  alternates: {
    canonical: "/services/commercial-insurance",
    languages: {
      "en-US": "/services/commercial-insurance",
      "es-US": "/es/seguro-para-negocios",
      "ar-US": "/ar/business-insurance",
    },
  },
}
export default function CommercialInsurance() {
  const service = services.find((service) => service.name === "Commercial")
  return service ? <ServicePage {...service} /> : notFound()
}
