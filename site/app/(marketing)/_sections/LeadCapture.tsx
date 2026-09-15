import { QuoteLeadForm } from "@/components/quote-lead-form"

export default function LeadCaptureSection() {
  return (
    <section
      aria-labelledby="home-quote-heading"
      className="bg-secondary py-16 md:py-24"
    >
      <div className="container grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary/70">
            Free quote request
          </p>
          <h2
            id="home-quote-heading"
            className="mt-3 font-heading text-3xl md:text-5xl"
          >
            Let’s find the right next step
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Tell us what you need and how you prefer to communicate. We’ll save
            your request before directing you to the appropriate secure quote
            experience.
          </p>
          <ul className="mt-7 space-y-3 text-sm font-medium">
            <li>✓ Local, independent guidance</li>
            <li>✓ Personal and business coverage options</li>
            <li>✓ Service in English, Spanish, and Arabic</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-primary/15 bg-background p-6 shadow-lg md:p-8">
          <QuoteLeadForm />
        </div>
      </div>
    </section>
  )
}
