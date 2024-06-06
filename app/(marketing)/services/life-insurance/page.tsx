import ServicePage from "@/components/service-page"
import { services } from "@/config/services"

export default function LifeInsurance() {
  return (
    <ServicePage {...services.find((service) => service.name === "Life")} />
  )
}
