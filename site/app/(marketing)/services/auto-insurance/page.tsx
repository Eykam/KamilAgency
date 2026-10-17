import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Auto Insurance With Foreign or Alternative ID",
  description:
    "Ask Kamil Agency about auto insurance options for foreign licenses, passports, alternative IDs, suspended or expired licenses, and excluded owners.",
  keywords:
    "auto insurance foreign drivers license, auto insurance international license, auto insurance with passport, auto insurance without license, suspended license insurance, expired license insurance, Matricula Consular auto insurance, excluded vehicle owner",
  alternates: {
    canonical: "/services/auto-insurance",
    languages: {
      "en-US": "/services/auto-insurance",
      "es-US": "/es/seguro-de-auto",
      "ar-US": "/ar/auto-insurance",
    },
  },
}

export default function AutoInsurance() {
  const service = services.find((service) => service.name === "Auto")
  return service ? <ServicePage {...service} /> : notFound()
}
