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
  const isPersonal = carrier.categories.includes("Personal insurance")
  const isCommercial = carrier.categories.includes("Commercial insurance")
  const isMarketAccess = carrier.categories.includes("Market-access platform")
  const relatedLinks = [
    ...(isPersonal
      ? [
          { label: "Auto insurance", href: "/services/auto-insurance" },
          {
            label: "Homeowners insurance",
            href: "/services/homeowners-insurance",
          },
        ]
      : []),
    ...(isCommercial || isMarketAccess
      ? [
          {
            label: "Commercial insurance",
            href: "/services/commercial-insurance",
          },
          {
            label: "General liability",
            href: "/services/general-liability-insurance",
          },
        ]
      : []),
  ]
  const commonQuestions = [
    {
      question: `Can Kamil Agency guarantee a ${carrier.name} quote?`,
      answer:
        "No. Access, eligibility, pricing, and coverage depend on the current agency relationship, location, product, application details, and underwriting review.",
    },
    {
      question: `Should I choose ${carrier.name} based only on price?`,
      answer:
        "Price is important, but it should be reviewed with limits, deductibles, exclusions, endorsements, payment terms, and the services that matter to you.",
    },
    {
      question: "What should I prepare before asking about coverage?",
      answer:
        "Bring your current declarations pages when available, the people or business entities to be insured, property or vehicle details, desired effective date, and any lender, landlord, or contract requirements.",
    },
  ]
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: commonQuestions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }

  return (
    <main>
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <section className="bg-gradient-to-br from-background via-secondary to-accent/20 py-20 md:py-28">
        <div className="container max-w-4xl">
          <Link
            href="/carriers"
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← All insurance markets
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {carrier.categories.join(" · ")}
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
            {carrier.portalUrl && (
              <Link
                href={carrier.portalUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Open Carrier Portal
              </Link>
            )}
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

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl border p-7">
            <h2 className="font-heading text-2xl font-bold">
              How to review a {carrier.name} option
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              If an option from {carrier.name} is available, Kamil Agency can
              help you compare the proposal with your current coverage or other
              available choices. The review should include the named insured,
              covered property or operations, policy limits, deductibles,
              exclusions, endorsements, effective dates, and payment terms—not
              only the premium.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Tell us about changes such as a new driver, property renovation,
              business activity, vehicle, employee, contract, or lender
              requirement. Accurate information helps the market evaluate the
              risk and helps you understand whether the proposal addresses the
              reason you requested coverage.
            </p>
          </section>

          <section className="rounded-2xl border p-7">
            <h2 className="font-heading text-2xl font-bold">
              What to prepare for the review
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              {[
                "Current declarations pages or prior coverage information",
                "Names of the people or entities that need to be insured",
                "Property, vehicle, driver, or business-operation details",
                "The requested effective date and preferred payment method",
                "Any lender, landlord, licensing, or contract requirements",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="font-bold text-primary">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-center font-heading text-3xl font-bold">
            Common questions about this market
          </h2>
          <div className="mx-auto mt-7 max-w-4xl space-y-4">
            {commonQuestions.map(({ question, answer }) => (
              <details key={question} className="rounded-2xl border p-6">
                <summary className="cursor-pointer font-semibold">
                  {question}
                </summary>
                <p className="mt-3 leading-7 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-secondary/50 p-7 text-center">
          <h2 className="font-heading text-2xl font-bold">
            Explore related insurance services
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border bg-background px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="rounded-full border bg-background px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary"
            >
              Contact Kamil Agency
            </Link>
          </div>
        </section>
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
