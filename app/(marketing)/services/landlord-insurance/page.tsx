import ServicePage from "@/components/service-page"
import { services } from "@/config/services"

export default function LandlordInsurance() {
  return (
    <ServicePage {...services.find((service) => service.name === "Landlord")} />
  )
}
