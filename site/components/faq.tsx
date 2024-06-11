import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { FAQ } from "@/types"
import { PropsWithChildren } from "react"

type FaqProps = PropsWithChildren & {
  name: string
  FAQs: FAQ[]
  accent?: boolean
}

function FaqItem({
  item,
  ind,
  className,
}: {
  item: FAQ
  ind: number
  className?: string
}) {
  return (
    <AccordionItem value={`faq-${ind + 1}`} className="border-none">
      <AccordionTrigger
        className={cn(
          "flex w-full items-center justify-between rounded-md bg-accent px-6 py-4 text-start text-lg font-medium transition-colors hover:bg-border dark:hover:bg-secondary",
          className
        )}
      >
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="mt-2 rounded-xl px-6 py-4 text-primary/80 ">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  )
}

export default function FaqSection({ name, FAQs, accent }: FaqProps) {
  return (
    <section className="w-[90vw] py-12 md:py-24 lg:py-32">
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
          <Accordion type="single" collapsible className="space-y-4 text-start">
            {FAQs.map((item, ind) => (
              <FaqItem
                item={item}
                ind={ind}
                className={
                  accent
                    ? "border-2 border-accent bg-background dark:hover:bg-background/80"
                    : ""
                }
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
