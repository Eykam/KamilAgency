import Link from "next/link"

import { washingtonGoogleMapsURL } from "@/config/locations"
import { TrackedLink } from "@/components/tracked-link"

const featuredServices = [
  { name: "Homeowners insurance", href: "/services/homeowners-insurance" },
  { name: "Auto insurance", href: "/services/auto-insurance" },
  {
    name: "Vacant-home insurance",
    href: "/services/vacant-home-insurance",
  },
  { name: "Landlord insurance", href: "/services/landlord-insurance" },
  { name: "Condo insurance", href: "/services/condo-insurance" },
  {
    name: "Georgetown home insurance",
    href: "/services/home-insurance-georgetown",
  },
  {
    name: "Glover Park home insurance",
    href: "/services/home-insurance-glover-park",
  },
  {
    name: "Cathedral Heights home insurance",
    href: "/services/home-insurance-cathedral-heights",
  },
  {
    name: "Commercial auto insurance",
    href: "/services/commercial-auto-insurance",
  },
  {
    name: "General liability insurance",
    href: "/services/general-liability-insurance",
  },
]

export default function LocalExpertiseSection() {
  return (
    <section
      aria-labelledby="local-insurance-heading"
      className="py-16 md:py-24"
    >
      <div className="container grid gap-10 md:grid-cols-[1.35fr_1fr] md:items-center">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Your DMV Area insurance agency
          </p>
          <h2
            id="local-insurance-heading"
            className="font-heading text-3xl leading-tight md:text-5xl"
          >
            Local guidance across Washington, DC, Maryland & Virginia
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            From our Wisconsin Avenue office near Georgetown and Glover Park,
            Kamil Agency helps DMV Area residents and business owners make
            sense of their coverage options. You get straightforward answers,
            responsive service, and recommendations shaped around your needs.
          </p>
          <p className="leading-7 text-muted-foreground">
            We serve clients throughout Washington, DC, Maryland, and Virginia,
            including Georgetown, Glover Park, Cathedral Heights, Cleveland
            Park, Tenleytown, and nearby communities.
          </p>
          <div className="flex flex-wrap gap-3">
            {featuredServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {service.name}
              </Link>
            ))}
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            Looking for another type of protection? Browse all of our{" "}
            <Link
              href="/services"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              personal and business insurance services
            </Link>
            .
          </p>
        </div>

        <aside className="rounded-2xl border bg-secondary p-7 shadow-sm">
          <h3 className="text-xl font-semibold">Visit or call our DC office</h3>
          <address className="mt-4 not-italic leading-7 text-muted-foreground">
            2201 Wisconsin Avenue Northwest, Suite 200
            <br />
            Washington, DC 20007
          </address>
          <TrackedLink
            href="tel:+12404007393"
            className="mt-4 block font-semibold text-accent hover:underline"
            eventName="click_to_call"
            eventParams={{ link_location: "local_office" }}
          >
            (240) 400-7393
          </TrackedLink>
          <div className="mt-6 flex flex-wrap gap-3">
            <TrackedLink
              href="/quote"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
              eventName="quote_start"
              eventParams={{ link_location: "local_office" }}
            >
              Request a quote
            </TrackedLink>
            <a
              href={washingtonGoogleMapsURL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border bg-background px-5 py-2.5 text-sm font-medium"
            >
              Get directions
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
