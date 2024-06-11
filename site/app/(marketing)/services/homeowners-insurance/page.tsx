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
      "Homeowners Insurance in D.C., Maryland, and Virginia | Protect Your Home",
    description:
      "Get the best homeowners insurance coverage in D.C., Maryland, and Virginia. Protect your home and belongings with affordable and comprehensive policies.",
    keywords:
      "homeowners insurance, home insurance, D.C. homeowners insurance, Maryland homeowners insurance, Virginia homeowners insurance, home protection, property insurance, affordable home insurance",
  }
}
export default function HomeownersInsurance() {
  const service = services.find((service) => service.name === "Homeowners")
  return service ? <ServicePage {...service} /> : notFound()
}
