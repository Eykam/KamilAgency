import type { Metadata } from "next"
import Link from "next/link"

import { businessIndustries } from "@/config/business-industries"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Business Insurance by Industry in DC",
  description:
    "Compare business insurance guidance by industry for contractors, restaurants, nonprofits, property managers, retailers, delivery services, and technology firms.",
  alternates: { canonical: "/services/business-insurance-by-industry" },
}

export default function BusinessInsuranceByIndustryPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-background via-secondary to-accent/20 py-20 text-center md:py-28">
        <div className="container max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Washington, DC business coverage
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Business Insurance by Industry
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Your industry shapes the risks you face. Explore focused guidance,
            then tell our local team about your business so we can help identify
            appropriate insurance options.
          </p>
          <Link
            href="/quote/commercial"
            className={cn(buttonVariants({ size: "lg" }), "mt-8")}
          >
            Start a Commercial Quote
          </Link>
        </div>
      </section>

      <section className="container max-w-6xl py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold">
            Coverage built around how your business operates
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Two businesses with the same number of employees can face very
            different risks. A contractor works at customer locations, a
            restaurant serves the public every day, and a consultant may be more
            exposed to professional mistakes than physical damage. Kamil Agency
            starts with your operations, contracts, property, vehicles, and team
            before comparing options from available carriers.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {businessIndustries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/services/business-insurance-by-industry/${industry.slug}`}
              className="rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary"
            >
              <h2 className="text-xl font-semibold">{industry.shortName}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {industry.description}
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-primary">
                Explore coverage →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-background p-7">
            <h2 className="font-heading text-2xl font-bold">
              Common building blocks
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Depending on the industry, a business insurance plan may combine
              general liability, commercial property, business income,
              workers&apos; compensation, commercial auto, cyber liability, or
              professional liability. Some companies also need bonds, umbrella
              limits, or special endorsements required by a lease or contract.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/services/general-liability-insurance"
                className="font-semibold text-primary hover:underline"
              >
                General liability
              </Link>
              <Link
                href="/services/commercial-auto-insurance"
                className="font-semibold text-primary hover:underline"
              >
                Commercial auto
              </Link>
              <Link
                href="/services/commercial-insurance"
                className="font-semibold text-primary hover:underline"
              >
                Commercial insurance
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border bg-background p-7">
            <h2 className="font-heading text-2xl font-bold">
              What to have ready
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              A useful quote begins with accurate information. Be ready to
              describe your services, annual sales, payroll, locations,
              vehicles, subcontractor costs, and prior claims. If a landlord,
              client, or government contract requires specific coverage, share
              that document too. Our Washington, DC team can help organize the
              details and identify questions before applications go to a
              carrier.
            </p>
            <Link
              href="/quote/commercial"
              className={cn(buttonVariants({ size: "lg" }), "mt-6")}
            >
              Request a Business Insurance Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
