import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/config/services"
import ServicePage from "@/components/service-page"

export const metadata: Metadata = {
  title: "Life Insurance in Washington, DC",
  description:
    "Find the best life insurance policies in D.C., Maryland, and Virginia. Get affordable coverage to protect your loved ones and ensure their financial security.",
  keywords:
    "life insurance, D.C. life insurance, Maryland life insurance, Virginia life insurance, family protection, financial security, affordable life insurance",
  alternates: { canonical: "/services/life-insurance" },
}
export default function LifeInsurance() {
  const service = services.find((service) => service.name === "Life")
  return service ? <ServicePage {...service} /> : notFound()
}
