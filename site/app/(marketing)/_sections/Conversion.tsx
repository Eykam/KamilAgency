import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TrackedLink } from "@/components/tracked-link"

const steps = [
  ["1", "Tell us what you need", "Share a few details online or by phone."],
  [
    "2",
    "Review your options",
    "Get clear guidance shaped around your priorities.",
  ],
  [
    "3",
    "Choose with confidence",
    "Move forward when the coverage feels right.",
  ],
]

export default function ConversionSection() {
  return (
    <section aria-labelledby="quote-process-heading" className="py-16 md:py-24">
      <div className="container">
        <div className="rounded-3xl bg-primary px-6 py-12 text-primary-foreground shadow-xl md:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/75">
                A simpler next step
              </p>
              <h2
                id="quote-process-heading"
                className="mt-3 font-heading text-3xl md:text-5xl"
              >
                Get guidance without the runaround
              </h2>
              <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
                Start online or speak directly with our DMV Area team in
                English, Spanish, or Arabic.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href="/quote"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "min-w-40"
                  )}
                  eventName="quote_start"
                  eventParams={{ link_location: "home_conversion" }}
                >
                  Request a Quote
                </TrackedLink>
                <TrackedLink
                  href="tel:+12404007393"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "min-w-40 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  )}
                  eventName="click_to_call"
                  eventParams={{ link_location: "home_conversion" }}
                >
                  Call the Office
                </TrackedLink>
              </div>
            </div>

            <ol className="grid gap-4">
              {steps.map(([number, title, description]) => (
                <li
                  key={number}
                  className="grid grid-cols-[auto_1fr] gap-4 rounded-xl bg-primary-foreground/10 p-4"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground font-bold text-primary">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-primary-foreground/75">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
