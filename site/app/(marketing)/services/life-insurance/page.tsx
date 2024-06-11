import ServicePage from "@/components/service-page"
import { services } from "@/config/services"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    slug: string[]
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title:
      "Life Insurance in D.C., Maryland, and Virginia | Secure Your Loved Ones",
    description:
      "Find the best life insurance policies in D.C., Maryland, and Virginia. Get affordable coverage to protect your loved ones and ensure their financial security.",
    keywords:
      "life insurance, D.C. life insurance, Maryland life insurance, Virginia life insurance, family protection, financial security, affordable life insurance",
  }
}
export default function LifeInsurance() {
  const service = services.find((service) => service.name === "Life")
  return service ? <ServicePage {...service} /> : notFound()
}
