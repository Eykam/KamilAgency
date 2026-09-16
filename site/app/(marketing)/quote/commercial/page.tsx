import type { Metadata } from "next"

import { CommercialPrequalificationForm } from "@/components/commercial-prequalification-form"

export const metadata: Metadata = {
  title: "Commercial Insurance Pre-Qualification",
  description:
    "Share basic, non-sensitive business details with Kamil Agency before continuing to a secure commercial insurance quote.",
  alternates: { canonical: "/quote/commercial" },
}

export default function CommercialQuotePage() {
  return (
    <main className="container max-w-4xl py-16 md:py-24">
      <section className="rounded-2xl border border-primary/15 p-6 shadow-sm md:p-10">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Commercial insurance
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Tell Us About Your Business
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Start with a few non-sensitive details. Our local team will receive
            your request, then you can continue to the secure commercial quote
            platform for detailed underwriting questions.
          </p>
        </div>
        <CommercialPrequalificationForm />
      </section>
    </main>
  )
}
