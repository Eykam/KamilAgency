import ServicePage from "@/components/service-page"
import { services } from "@/config/services"
import { Metadata } from "next"

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
      "Commercial Insurance in D.C., Maryland, and Virginia | Business Protection",
    description:
      "Protect your business with top-rated commercial insurance in D.C., Maryland, and Virginia. Get customized coverage for property, liability, and more.",
    keywords:
      "commercial insurance, business insurance, D.C. commercial insurance, Maryland commercial insurance, Virginia commercial insurance, business protection, property insurance, liability insurance",
  }
}
export default function CommercialInsurance() {
  return (
    <ServicePage
      {...services.find((service) => service.name === "Commercial")}
    />
  )
}
