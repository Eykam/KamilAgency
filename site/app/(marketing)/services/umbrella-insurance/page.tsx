import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Umbrella Insurance",
  description:
    "Get additional liability protection with umbrella insurance in D.C., Maryland, and Virginia. Secure your assets with comprehensive coverage.",
  keywords:
    "umbrella insurance, extra liability insurance, D.C. umbrella insurance, Maryland umbrella insurance, Virginia umbrella insurance, additional coverage, asset protection",
  alternates: { canonical: "/services/umbrella-insurance" },
}
export default function UmbrellaInsurance() {
  const service = services.find((service) => service.name === "Umbrella")
  return service ? <ServicePage {...service} /> : notFound()
}
