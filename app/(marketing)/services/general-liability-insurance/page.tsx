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
      "General Liability Insurance in D.C., Maryland, and Virginia | Business Protection",
    description:
      "Protect your business with comprehensive general liability insurance in D.C., Maryland, and Virginia. Get affordable and reliable coverage against claims.",
    keywords:
      "general liability insurance, business liability insurance, D.C. general liability insurance, Maryland general liability insurance, Virginia general liability insurance, business protection, liability coverage",
  }
}

export default function GeneralLiabilityInsurance() {
  return (
    <ServicePage
      {...services.find((service) => service.name === "General Liability")}
    />
  )
}
