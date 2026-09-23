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
            Find your quote path
          </p>
          <h2
            id="home-quote-heading"
            className="mt-3 font-heading text-3xl md:text-5xl"
          >
            Let’s find the right next step
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Choose your coverage to reach the right quote experience. For home
            and auto, you can go straight to our secure quoting provider. If
            you’d rather speak with us, ask an agent to contact you.
          </p>
          <ul className="mt-7 space-y-3 text-sm font-medium">
            <li>✓ Local insurance guidance</li>
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
