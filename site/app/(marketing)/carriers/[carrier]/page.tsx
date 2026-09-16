import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { carrierProfiles, getCarrierProfile } from "@/config/carrier-profiles"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { JsonLd } from "@/components/json-ld"

type CarrierPageProps = {
  params: { carrier: string }
}

export function generateStaticParams() {
  return carrierProfiles.map(({ slug }) => ({ carrier: slug }))
}

export function generateMetadata({ params }: CarrierPageProps): Metadata {
  const carrier = getCarrierProfile(params.carrier)
  if (!carrier) return {}

  const title = `${carrier.name} Insurance Information`
  const description = `Learn how Kamil Agency reviews possible ${carrier.name} insurance options, availability, and eligibility for clients in the states we serve.`

  return {
    title,
    description,
    alternates: { canonical: `/carriers/${carrier.slug}` },
    openGraph: {
      title,
      description,
      url: `/carriers/${carrier.slug}`,
    },
  }
}

export default function CarrierPage({ params }: CarrierPageProps) {
  const carrier = getCarrierProfile(params.carrier)
  if (!carrier) notFound()

  const pageUrl = `${siteConfig.url}/carriers/${carrier.slug}`
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${carrier.name} Insurance Information`,
    description: carrier.overview,
    url: pageUrl,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@type": "Organization", name: carrier.name, url: carrier.url },
  }
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insurance Markets",
        item: `${siteConfig.url}/carriers`,
      },
      { "@type": "ListItem", position: 3, name: carrier.name, item: pageUrl },
    ],
  }

  return (
    <main>
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <section className="bg-gradient-to-br from-background via-secondary to-accent/20 py-20 md:py-28">
        <div className="container max-w-4xl">
          <Link
            href="/carriers"
            className="text-sm font-semibold text-primary hover:underline"
          >
            â All insurance markets
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {carrier.categories.join(" Â· ")}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            {carrier.name} Insurance Information
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {carrier.overview}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/quote" className={cn(buttonVariants({ size: "lg" }))}>
              Ask About Available Options
            </Link>
            <Link
              href={carrier.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Visit Official Website
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-5xl py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Availability first"
            text="Carrier access and product availability can change by state, coverage type, underwriting appetite, and agency relationship. We verify access before discussing placement."
          />
          <InfoCard
            title="Compare the full policy"
            text="A recognizable company name is only one factor. Limits, deductibles, exclusions, endorsements, claims handling, and price all deserve review."
          />
          <InfoCard
            title="Local guidance"
            text="Kamil Agency explains available options in English, Spanish, or Arabic and helps clients understand the next step without promising eligibility or coverage."
          />
        </div>

        <div className="mt-10 rounded-2xl border bg-secondary/40 p-6 text-sm leading-7 text-muted-foreground md:p-8">
          <strong className="text-foreground">Important:</strong> This is an
          informational market profile. A listing does not represent an
          endorsement, guarantee a direct appointment, or promise that a product
          is available for a particular person, property, vehicle, or business.
          Coverage is subject to application, underwriting, policy terms, and
          state availability.
        </div>
      </section>
    </main>
  )
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
    </div>
  )
}
