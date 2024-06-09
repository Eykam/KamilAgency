import { services } from "@/config/services"
import ServiceCard from "@/components/service-card"

export default async function ServicesPage() {
  return (
    <section
      id="services"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Services
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore our comprehensive insurance solutions. From Home and Auto, to
          commercial and renters, We&apos;ve got you covered. Discover tailored
          coverage and exceptional service.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard service={service} pageLink />
        ))}
      </div>
    </section>
  )
}
