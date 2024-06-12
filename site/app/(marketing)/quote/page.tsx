import Image from "next/image"
import Link from "next/link"
import { carriers } from "@/config/carriers"
import { Carrier, ServiceCategory } from "@/types"
import { Metadata } from "next"
import { ServiceCategories } from "@/config/serviceCategories"

export function generateMetadata(): Metadata {
  return {
    title:
      "Get an Insurance Quote | Kamil Agency - Find the Best Policy for Your Needs",
    description:
      "Select the insurance category that suits you best and get quick, accurate quotes. Our comparative rater will find the best policy by comparing multiple insurers. Need help? Check out our FAQs.",
    keywords: [
      "Kamil Agency",
      "Insurance Quote",
      "Get a Quote",
      "Personal Lines Insurance",
      "Commercial Insurance",
      "Medicare Insurance",
      "Comparative Rater",
      "Best Insurance Policy",
      "Home Insurance",
      "Auto Insurance",
      "Business Insurance",
      "Health Insurance",
      "Insurance FAQs",
      "Washington D.C",
      "Maryland",
      "Virginia",
      "Pennsylvania",
      "Delaware",
      "Ohio",
      "Indiana",
      "West Virginia",
      "North Carolina",
    ],
  }
}

type QuoteCardProps = React.HTMLAttributes<HTMLDivElement> & ServiceCategory

function QuoteCard({ name, descriptionShort, logo, url }: QuoteCardProps) {
  return (
    <Link href={url || ""} className="size-full" target="_blank" rel="nofollow">
      <div className="flex h-full flex-col items-center justify-evenly rounded-lg border-2 border-primary/30 bg-background p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl ">
        {logo}
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="text-center text-gray-500 dark:text-gray-400">
          {descriptionShort}
        </p>
      </div>
    </Link>
  )
}

export default function QuotePage() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-8 lg:max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get A Quote
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Select the category that suits you best. Our comparative rater
              will find you the best policy by comparing multiple insurers.
              <br />
              <br />
              <span className="text-lg font-semibold md:text-2xl/relaxed lg:text-lg/relaxed xl:text-2xl/relaxed">
                Need help deciding? Check out our{" "}
                <a href="/#faq" className="font-semibold underline">
                  FAQs
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {ServiceCategories.map((category) => (
            <QuoteCard {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
