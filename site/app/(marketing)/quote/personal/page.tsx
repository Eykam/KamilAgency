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
