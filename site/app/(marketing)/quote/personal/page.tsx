import type { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { QuoteLeadForm } from "@/components/quote-lead-form"

export const metadata: Metadata = {
  title: "Personal Insurance Quote",
  description:
    "Start a secure home or auto insurance quote, or get help with other personal coverage from Kamil Agency.",
  alternates: { canonical: "/quote/personal" },
}

export default function PersonalQuotePage() {
  return (
    <div className="container flex min-h-[65vh] items-center justify-center px-4 py-16">
      <section className="w-full max-w-3xl space-y-7 rounded-2xl border border-primary/15 p-6 text-center shadow-sm md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary/60">
          Personal Lines
        </p>
        <h1 className="text-4xl font-bold tracking-tight">
          Start Your Insurance Quote
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          For home and auto coverage, go directly to our secure quoting provider
          without filling out a separate Kamil Agency contact form first. For
          other coverage or personal help, our team is available in English,
          Spanish, and Arabic.
        </p>
        <QuoteLeadForm />
        <section className="rounded-xl bg-muted/40 p-5 text-left md:p-6">
          <h2 className="text-xl font-semibold tracking-tight">
            What to Have Ready
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            A few basic details help make your personal insurance quote more
            accurate. You do not need every document before getting started,
            but the following information is useful:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>
              For auto insurance: driver names, dates of birth, license
              information, vehicle identification numbers, and current limits.
            </li>
            <li>
              For home insurance: the property address, occupancy, basic home
              details, and a copy of your current policy when available.
            </li>
            <li>
              For other personal coverage: select the closest option and tell
              us briefly what you want to protect.
            </li>
          </ul>
          <p className="mt-3 leading-7 text-muted-foreground">
            Coverage and pricing depend on the information provided, carrier
            eligibility, and the state where coverage is needed. Submitting a
            request does not bind insurance; our team will confirm the final
            options and next steps with you.
          </p>
        </section>
        <div className="flex justify-center">
          <Link
            href="/contact-us"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Prefer to Talk First?
          </Link>
        </div>
      </section>
    </div>
  )
}
