import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Travel Insurance in Washington, DC",
  description:
    "Compare trip protection, emergency medical, and medical evacuation options through Kamil Agency's travel insurance partner.",
  keywords:
    "travel insurance, trip protection, travel medical insurance, medical evacuation insurance, Washington DC travel insurance",
  alternates: { canonical: "/services/travel-insurance" },
}

export default function TravelInsurance() {
  const service = services.find((service) => service.name === "Travel")

  return service ? <ServicePage {...service} /> : notFound()
}
