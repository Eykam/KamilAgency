import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Condo Insurance in Washington, DC",
  description:
    "Compare condo insurance for your unit, belongings, liability, living expenses, and loss assessments with a local Washington, DC agency.",
  keywords:
    "condo insurance Washington DC, HO-6 insurance, condominium insurance, condo insurance Maryland, condo insurance Virginia, loss assessment coverage",
  alternates: { canonical: "/services/condo-insurance" },
}

export default function CondoInsurance() {
  const service = services.find((service) => service.name === "Condo")
  return service ? <ServicePage {...service} /> : notFound()
}
