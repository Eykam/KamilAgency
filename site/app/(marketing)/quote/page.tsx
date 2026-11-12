import { Metadata } from "next"
import { ServiceCategory } from "@/types"

import { ServiceCategories } from "@/config/serviceCategories"
import ContactForm from "@/components/contact-form"
import { TrackedLink } from "@/components/tracked-link"

export function generateMetadata(): Metadata {
  return {
    title: "Get an Insurance Quote",
    description:
      "Choose personal, commercial, Medicare, or travel coverage and start a secure insurance quote with Kamil Agency.",
    alternates: {
      canonical: "/quote",
      languages: { "en-US": "/quote", "ar-US": "/ar/quote" },
    },
    keywords: [
      "Kamil Agency",
      "Insurance Quote",
      "Get a Quote",
      "Personal Lines Insurance",
      "Commercial Insurance",
      "Medicare Insurance",
      "Travel Insurance",
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
  const href = url || "/contact-us"
  const isExternal = href.startsWith("http://") || href.startsWith("https://")

  return (
    <TrackedLink
      href={href}
      className="size-full"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer nofollow" : undefined}
      eventName={isExternal ? "quote_handoff" : "quote_category_select"}
      eventParams={{ quote_type: name, link_location: "quote_page" }}
    >
      <div className="flex h-full flex-col items-center justify-evenly rounded-lg border-2 border-primary/30 bg-background p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl ">
        {logo}
        <h2 className="mb-2 text-xl font-bold">{name}</h2>
        <p className="text-center text-gray-500 dark:text-gray-400">
          {descriptionShort}
        </p>
      </div>
    </TrackedLink>
  )
}

export default function QuotePage() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-8 lg:max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get A Quote
            </h1>
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

        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {ServiceCategories.map((category) => (
            <QuoteCard key={category.name} {...category} />
          ))}
        </div>

        <section className="mx-auto mb-12 max-w-3xl rounded-2xl border border-primary/15 bg-muted/30 p-6 text-left md:p-8">
          <h2 className="text-2xl font-bold tracking-tight">
            What to Expect When You Request a Quote
          </h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              Start by choosing personal, commercial, Medicare, or travel
              coverage above. Depending on the type of insurance, you can begin
              with a secure online quote or tell our team what you need so we
              can help you take the next step.
            </p>
            <p>
              Having the right information ready can make the process faster.
              For personal insurance, gather your current policy, driver and
              vehicle details, or basic property information. Business owners
              may also need payroll, revenue, vehicle, location, and prior
              coverage details. We will let you know if anything else is
              required for the coverage you select.
            </p>
            <p>
              Insurance options and eligibility vary by carrier and state.
              Requesting a quote does not bind coverage. If you are unsure
              which category to choose, use the form below or contact Kamil
              Agency for personal assistance in English, Spanish, or Arabic.
            </p>
          </div>
        </section>

        <div
          id="tell-us-what-you-need"
          className="mx-auto max-w-3xl scroll-mt-24"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
