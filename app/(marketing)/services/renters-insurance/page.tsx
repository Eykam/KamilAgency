import ServicePage from "@/components/service-page"
import { services } from "@/config/services"

export default function RentersInsurance() {
  return (
    <ServicePage {...services.find((service) => service.name === "Renters")} />
  )
}
