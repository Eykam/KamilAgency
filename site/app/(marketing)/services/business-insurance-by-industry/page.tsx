import type { Metadata } from "next"
import Link from "next/link"

import { businessIndustries } from "@/config/business-industries"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Business Insurance by Industry in Washington, DC",
  description:
    "Explore business insurance guidance for contractors, restaurants, nonprofits, property managers, retail, delivery, technology, and professional-service firms in Washington, DC.",
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
    </main>
  )
}
