import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Auto Insurance in the DMV Area",
  description:
    "Compare auto insurance options with an independent agency serving Washington, DC, Maryland, and Virginia.",
  keywords:
    "auto insurance, car insurance, D.C. auto insurance, Maryland auto insurance, Virginia auto insurance, vehicle insurance, affordable car insurance, comprehensive auto coverage",
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
