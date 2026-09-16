/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"

import {
  commercialCarriers,
  marketAccessPartners,
  personalLineCarriers,
  type InsuranceMarket,
} from "@/config/carrier-markets"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Insurance Carriers and Market Access",
  description:
    "Explore personal insurance carriers, commercial insurance carriers, and market-access partners available through Kamil Agency.",
  alternates: { canonical: "/carriers" },
}

function MarketGroup({
  title,
  description,
  markets,
}: {
  title: string
  description: string
  markets: readonly InsuranceMarket[]
}) {
  return (
    <section className="py-12 first:pt-0">
      <div className="max-w-3xl">
        <h2 className="font-heading text-3xl font-bold">{title}</h2>
        <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
      </div>
      <ul className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {markets.map((market) => (
          <li key={market.name}>
            <Link
              href={market.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border bg-background p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-primary"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${market.domain}&sz=128`}
                alt=""
                aria-hidden="true"
                width="44"
                height="44"
                loading="lazy"
                decoding="async"
                className="size-11 object-contain"
              />
              <span className="font-semibold">{market.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function CarriersPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-background via-secondary to-accent/20 py-20 text-center md:py-28">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Choice through an independent agency
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Carriers and Insurance Markets
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Kamil Agency helps clients compare options that may be available
            directly through the agency or through market-access partners for
            personal and commercial risks.
          </p>
          <Link
            href="/quote"
            className={cn(buttonVariants({ size: "lg" }), "mt-8")}
          >
            Start a Quote
          </Link>
        </div>
      </section>

      <div className="container max-w-6xl py-16">
        <MarketGroup
          title="Personal Insurance Carriers"
          description="Markets that may offer home, auto, condo, renters, landlord, vacant-home, umbrella, and other personal insurance products."
          markets={personalLineCarriers}
        />
        <MarketGroup
          title="Commercial Insurance Carriers"
          description="Insurance companies with products that may support property, liability, vehicles, workers’ compensation, professional, flood, and other business risks."
          markets={commercialCarriers}
        />
        <MarketGroup
          title="Market-Access Partners"
          description="Wholesale and digital platforms that can help an independent agency reach additional commercial insurance markets. These organizations may not issue the policy directly."
          markets={marketAccessPartners}
        />
        <div className="rounded-2xl border bg-secondary/50 p-6 text-sm leading-6 text-muted-foreground">
          Some markets may be accessed through an intermediary rather than a
          direct appointment. Carrier and market availability, eligibility,
          appointment status, and product offerings vary by state, class of
          business, underwriting, and individual risk. A logo or listing does
          not imply endorsement and does not guarantee a quote or placement.
          Contact Kamil Agency to confirm the relationship and options available
          for your needs.
        </div>
      </div>
    </main>
  )
}
