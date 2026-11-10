import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Auto Insurance in Washington, DC",
  description:
    "Compare auto insurance options in Washington, DC with Kamil Agency. Get personalized local guidance and request your auto insurance quote today.",
  keywords:
    "auto insurance Washington DC, car insurance DC, affordable car insurance Washington DC, car insurance quotes Washington DC, DC auto insurance companies, auto insurance foreign drivers license, auto insurance international license, auto insurance with passport, suspended license insurance, Matricula Consular auto insurance",
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
