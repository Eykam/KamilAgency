import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Car Insurance in Washington, DC",
  description:
    "Compare car insurance in Washington, DC with local guidance on liability, collision, comprehensive, uninsured motorist, foreign-license, and alternative-ID options.",
  keywords:
    "car insurance Washington DC, auto insurance Washington DC, affordable car insurance DC, car insurance quotes Washington DC, auto insurance foreign drivers license, auto insurance international license, auto insurance with passport, suspended license insurance, Matricula Consular auto insurance",
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
