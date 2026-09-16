import { Metadata } from "next"
import Link from "next/link"

import { businessIndustries } from "@/config/business-industries"
import { services, servicesMetaData } from "@/config/services"
import ServiceCard from "@/components/service-card"

export function generateMetadata(): Metadata {
  return servicesMetaData
}

export default async function ServicesPage() {
  return (
    <section
      id="services"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Services
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore our comprehensive insurance solutions. From Home and Auto, to
          commercial and renters, We&apos;ve got you covered. Discover tailored
          coverage and exceptional service.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} pageLink />
        ))}
      </div>

      <div className="mx-auto max-w-[64rem] rounded-2xl border bg-background p-6 text-center shadow-sm">
        <h2 className="text-2xl font-semibold">
          Popular local insurance searches
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Start with focused guidance for common Washington, DC personal and
          business insurance needs.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {[
            ["Vacant homes", "/services/vacant-home-insurance"],
            ["Landlords", "/services/landlord-insurance"],
            ["Condo owners", "/services/condo-insurance"],
            ["Georgetown homes", "/services/home-insurance-georgetown"],
            ["Commercial auto", "/services/commercial-auto-insurance"],
            ["General liability", "/services/general-liability-insurance"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[64rem] rounded-2xl border bg-primary p-6 text-primary-foreground shadow-sm md:p-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Commercial expertise
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold">
            Business insurance by industry
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-primary-foreground/80">
            Explore focused guidance for your type of business, then share a few
            non-sensitive details with our local commercial team.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {businessIndustries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/services/business-insurance-by-industry/${industry.slug}`}
              className="rounded-full border border-primary-foreground/25 bg-background/10 px-4 py-2 text-sm font-medium hover:bg-background/20"
            >
              {industry.shortName}
            </Link>
          ))}
        </div>
        <div className="mt-7 text-center">
          <Link
            href="/quote/commercial"
            className="inline-flex h-11 items-center justify-center rounded-md bg-background px-8 text-sm font-medium text-primary hover:bg-background/90"
          >
            Start a Commercial Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
