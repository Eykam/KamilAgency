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
      "Landlord Insurance in D.C., Maryland, and Virginia | Protect Your Rental Property",
    description:
      "Get the best landlord insurance coverage in D.C., Maryland, and Virginia. Protect your rental property with affordable and comprehensive policies.",
    keywords:
      "landlord insurance, rental property insurance, D.C. landlord insurance, Maryland landlord insurance, Virginia landlord insurance, property protection, rental income protection",
  }
}
export default function LandlordInsurance() {
  return (
    <ServicePage {...services.find((service) => service.name === "Landlord")} />
  )
}
