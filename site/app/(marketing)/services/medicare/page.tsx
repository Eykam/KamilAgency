import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Medicare Guidance in the DMV Area",
  description:
    "Understand Medicare Parts A, B, C, and D and get guidance choosing coverage in Washington, DC, Maryland, and Virginia.",
  keywords:
    "Medicare insurance, Medicare guidance, Medicare Parts A B C D, Washington DC Medicare, Maryland Medicare, Virginia Medicare",
  alternates: { canonical: "/services/medicare" },
}
export default function MedicareInsurance() {
  const service = services.find((service) => service.name === "Medicare")
  return service ? <ServicePage {...service} /> : notFound()
}
