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
      "Umbrella Insurance in D.C., Maryland, and Virginia | Extra Liability Protection",
    description:
      "Get additional liability protection with umbrella insurance in D.C., Maryland, and Virginia. Secure your assets with comprehensive coverage.",
    keywords:
      "umbrella insurance, extra liability insurance, D.C. umbrella insurance, Maryland umbrella insurance, Virginia umbrella insurance, additional coverage, asset protection",
  }
}
export default function UmbrellaInsurance() {
  return (
    <ServicePage {...services.find((service) => service.name === "Umbrella")} />
  )
}
