import ServicePage from "@/components/service-page"
import { services } from "@/config/services"

export default function UmbrellaInsurance() {
  return (
    <ServicePage {...services.find((service) => service.name === "Umbrella")} />
  )
}
