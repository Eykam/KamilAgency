import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Auto Insurance",
  description:
    "Find the best auto insurance policies in D.C., Maryland, and Virginia. Get affordable quotes and comprehensive coverage for your vehicle.",
  keywords:
    "auto insurance, car insurance, D.C. auto insurance, Maryland auto insurance, Virginia auto insurance, vehicle insurance, affordable car insurance, comprehensive auto coverage",
  alternates: { canonical: "/services/auto-insurance" },
}

export default function AutoInsurance() {
  const service = services.find((service) => service.name === "Auto")
  return service ? <ServicePage {...service} /> : notFound()
}
