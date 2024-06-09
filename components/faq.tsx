import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { FAQ } from "@/types"
import { PropsWithChildren } from "react"

type FaqProps = PropsWithChildren & { name: string; FAQs: FAQ[] }

function FaqItem({ item, ind }: { item: FAQ; ind: number }) {
  return (
    <AccordionItem value={`faq-${ind + 1}`} className="border-none">
      <AccordionTrigger className="flex w-full items-center justify-between rounded-md bg-accent px-6 py-4 text-start text-lg font-medium transition-colors hover:bg-border dark:hover:bg-secondary">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="mt-2 rounded-xl px-6 py-4 text-primary/80 ">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  )
}

export default function FaqSection({ name, FAQs }: FaqProps) {
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
          <Accordion type="single" collapsible className="space-y-4">
            {FAQs.map((item, ind) => (
              <FaqItem item={item} ind={ind} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
