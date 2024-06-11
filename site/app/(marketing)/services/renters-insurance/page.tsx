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
      "Renters Insurance in D.C., Maryland, and Virginia | Protect Your Belongings",
    description:
      "Secure your belongings with comprehensive renters insurance in D.C., Maryland, and Virginia. Get affordable and reliable coverage for your rental property.",
    keywords:
      "renters insurance, rental insurance, D.C. renters insurance, Maryland renters insurance, Virginia renters insurance, tenant insurance, belongings protection",
  }
}
export default function RentersInsurance() {
  const service = services.find((service) => service.name === "Renters")
  return service ? <ServicePage {...service} /> : notFound()
}
