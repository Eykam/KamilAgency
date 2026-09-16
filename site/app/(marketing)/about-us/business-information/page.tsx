import type { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Kamil Agency Business Information",
  description:
    "Verified contact, office, service-area, and company information for directories, community organizations, and media references.",
  alternates: { canonical: "/about-us/business-information" },
}

const services = [
  "Auto insurance",
  "Homeowners and condo insurance",
  "Renters insurance",
  "Landlord and vacant-home insurance",
  "Umbrella and life insurance",
  "Commercial property and general liability",
  "Commercial auto and business insurance",
  "Medicare guidance",
]

export default function BusinessInformationPage() {
  const location = siteConfig.locations[0]

  return (
    <main className="container max-w-5xl py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Directory and media reference
      </p>
      <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
        Kamil Agency Business Information
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
        Use the information below when referencing Kamil Agency in a carrier
        directory, professional association, local chamber, community listing,
        or news article. Consistent business information helps customers find
        the correct office.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border p-6">
          <h2 className="text-2xl font-bold">Official contact information</h2>
          <dl className="mt-5 space-y-4 text-sm leading-6">
            <Info label="Business name" value={siteConfig.name} />
            <Info label="Website" value={siteConfig.url} />
            <Info label="Phone" value={siteConfig.contactNumber} />
            <Info label="Email" value={siteConfig.contactEmail} />
            {location ? (
              <Info
                label="Office"
                value={`${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zip}`}
              />
            ) : null}
            <Info label="Languages" value="English, Spanish, and Arabic" />
          </dl>
        </section>

        <section className="rounded-2xl border p-6">
          <h2 className="text-2xl font-bold">Short company description</h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Kamil Agency is an independent insurance agency based in Washington,
            DC. The multilingual team helps individuals, families, property
            owners, and businesses compare available insurance options and
            understand coverage in clear language.
          </p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Please link the agency name to {siteConfig.url} and confirm current
            licensing, appointments, and service availability directly with the
            agency before publishing a specialized claim.
          </p>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border p-6">
        <h2 className="text-2xl font-bold">Services commonly referenced</h2>
        <ul className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {services.map((service) => (
            <li key={service} className="rounded-lg bg-secondary/50 px-4 py-3">
              {service}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
        <Link href="/about-us" className="text-primary hover:underline">
          About Kamil Agency
        </Link>
        <Link href="/carriers" className="text-primary hover:underline">
          Insurance markets
        </Link>
        <Link href="/contact-us" className="text-primary hover:underline">
          Contact the office
        </Link>
      </div>
    </main>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-semibold text-foreground">{label}</dt>
      <dd className="text-muted-foreground">{value}</dd>
    </div>
  )
}
