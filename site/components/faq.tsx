import { FAQ } from "@/types"
import { cn } from "@/lib/utils"
import { JsonLd } from "@/components/json-ld"

type FaqProps = {
  name: string
  FAQs: FAQ[]
  accent?: boolean
}

function FaqItem({ item, className }: { item: FAQ; className?: string }) {
  return (
    <details className="group border-none">
      <summary
        className={cn(
          "cursor-pointer rounded-md bg-accent px-6 py-4 text-start text-lg font-medium text-accent-foreground transition-colors hover:bg-accent/90",
          className
        )}
      >
        {item.question}
      </summary>
      <div className="mt-2 rounded-xl px-6 py-4 text-primary/80">
        {item.answer}
      </div>
    </details>
  )
}

export default function FaqSection({ name, FAQs, accent }: FaqProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <section className="w-[90vw] py-12 md:py-24 lg:py-32">
      <JsonLd data={faqJsonLd} />
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-primary/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get answers to the most common questions about {name} Insurance.
            </p>
          </div>
          <div className="space-y-4 text-start">
            {FAQs.map((item) => (
              <FaqItem
                key={item.question}
                item={item}
                className={
                  accent
                    ? "border-2 border-accent bg-background text-foreground hover:bg-secondary dark:hover:bg-secondary"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
