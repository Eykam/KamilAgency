import ServicePage from "@/components/service-page"
import { services } from "@/config/services"

export default function GeneralLiabilityInsurance() {
  return (
    <ServicePage
      {...services.find((service) => service.name === "General Liability")}
    />
  )
}
