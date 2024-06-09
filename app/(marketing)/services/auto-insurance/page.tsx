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
      "Auto Insurance in D.C., Maryland, and Virginia | Affordable Car Insurance",
    description:
      "Find the best auto insurance policies in D.C., Maryland, and Virginia. Get affordable quotes and comprehensive coverage for your vehicle.",
    keywords:
      "auto insurance, car insurance, D.C. auto insurance, Maryland auto insurance, Virginia auto insurance, vehicle insurance, affordable car insurance, comprehensive auto coverage",
  }
}

export default function AutoInsurance() {
  return (
    <ServicePage {...services.find((service) => service.name === "Auto")} />
  )
}
