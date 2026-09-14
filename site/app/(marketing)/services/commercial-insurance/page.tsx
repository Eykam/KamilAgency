import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Commercial Insurance in Washington, DC",
  description:
    "Compare business insurance options with a local Washington, DC agency for liability, property, workers' compensation, and commercial auto coverage.",
  keywords:
    "commercial insurance, business insurance, D.C. commercial insurance, Maryland commercial insurance, Virginia commercial insurance, business protection, property insurance, liability insurance",
  alternates: { canonical: "/services/commercial-insurance" },
}
export default function CommercialInsurance() {
  const service = services.find((service) => service.name === "Commercial")
  return service ? <ServicePage {...service} /> : notFound()
}
