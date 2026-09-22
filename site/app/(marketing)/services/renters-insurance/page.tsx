import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Renters Insurance in the DMV Area",
  description:
    "Compare renters insurance for belongings, personal liability, and temporary living costs with a multilingual independent agency serving Washington, DC, Maryland, and Virginia.",
  keywords:
    "renters insurance, rental insurance, D.C. renters insurance, Maryland renters insurance, Virginia renters insurance, tenant insurance, belongings protection",
  alternates: { canonical: "/services/renters-insurance" },
  openGraph: {
    title: "Renters Insurance in the DMV Area | Kamil Agency",
    description:
      "Understand renters coverage for belongings, liability, and additional living expenses with local guidance.",
    url: "/services/renters-insurance",
  },
}
export default function RentersInsurance() {
  const service = services.find((service) => service.name === "Renters")
  return service ? <ServicePage {...service} /> : notFound()
}
