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
      "Homeowners Insurance in D.C., Maryland, and Virginia | Protect Your Home",
    description:
      "Get the best homeowners insurance coverage in D.C., Maryland, and Virginia. Protect your home and belongings with affordable and comprehensive policies.",
    keywords:
      "homeowners insurance, home insurance, D.C. homeowners insurance, Maryland homeowners insurance, Virginia homeowners insurance, home protection, property insurance, affordable home insurance",
  }
}
export default function HomeownersInsurance() {
  return (
    <ServicePage
      {...services.find((service) => service.name === "Homeowners")}
    />
  )
}
