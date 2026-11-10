import Link from "next/link"
import { allGuides } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"
import { DocsPageHeader } from "@/components/page-header"

export const metadata = {
  title: "Insurance Guides for Washington, DC",
  description:
    "Practical insurance guides for Washington, DC, Maryland, and Virginia. Learn about auto, home, renters, and business coverage from a local agency.",
  alternates: { canonical: "/guides" },
}

const coverageTopics = [
  {
    title: "Auto insurance",
    description:
      "Understand liability limits, deductibles, uninsured motorist protection, and the coverage choices that help protect you on DC-area roads.",
    href: "/services/auto-insurance",
    linkText: "Explore auto insurance",
  },
  {
    title: "Home and condo insurance",
    description:
      "Learn how dwelling, personal property, liability, loss-of-use, and condo assessment coverage work together.",
    href: "/services/homeowners-insurance",
    linkText: "Explore homeowners insurance",
  },
  {
    title: "Renters insurance",
    description:
      "See how an affordable renters policy can protect your belongings, provide liability coverage, and help with temporary living expenses.",
    href: "/services/renters-insurance",
    linkText: "Explore renters insurance",
  },
  {
    title: "Business insurance",
    description:
      "Review practical protection for property, liability, vehicles, employees, and the risks that come with running a local business.",
    href: "/services/commercial-insurance",
    linkText: "Explore business insurance",
  },
]

export default function GuidesPage() {
  const guides = allGuides
    .filter((guide) => guide.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="py-6 lg:py-10">
      <DocsPageHeader
        heading="Insurance Guides for Washington, DC, Maryland & Virginia"
        text="Use these plain-language resources to understand your coverage options before you request a quote or review an existing policy. Kamil Agency serves individuals, families, and businesses across the DMV area in English, Spanish, and Arabic."
      />

      <section className="space-y-5 py-6" aria-labelledby="coverage-guides">
        <div className="max-w-3xl space-y-3">
          <h2
            id="coverage-guides"
            className="font-heading text-3xl tracking-tight"
          >
            Start with the coverage you need
          </h2>
          <p className="text-muted-foreground">
            Insurance terms can feel complicated, but the right policy starts
            with a few practical questions: what could you afford to replace,
            what risks do you face, and who or what depends on you? Choose a
            topic below for focused guidance and available coverage options.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {coverageTopics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {topic.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{topic.description}</p>
              <Link
                href={topic.href}
                className="mt-4 inline-flex font-medium text-primary underline-offset-4 hover:underline"
              >
                {topic.linkText} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 py-6" aria-labelledby="latest-guides">
        <div className="max-w-3xl space-y-3">
          <h2
            id="latest-guides"
            className="font-heading text-3xl tracking-tight"
          >
            Read our insurance guides
          </h2>
          <p className="text-muted-foreground">
            Our guides explain common insurance decisions in everyday language.
            They are educational resources, not a substitute for reviewing your
            individual situation with a licensed insurance professional.
          </p>
        </div>
        {guides?.length ? (
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {guides.map((guide) => (
              <article
                key={guide._id}
                className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                {guide.featured && (
                  <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
                    Featured
                  </span>
                )}
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-medium tracking-tight">
                      {guide.title}
                    </h2>
                    {guide.description && (
                      <p className="text-muted-foreground">
                        {guide.description}
                      </p>
                    )}
                  </div>
                  {guide.date && (
                    <p className="text-sm text-muted-foreground">
                      {formatDate(guide.date)}
                    </p>
                  )}
                </div>
                <Link href={guide.slug} className="absolute inset-0">
                  <span className="sr-only">View</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No guides published.</p>
        )}
      </section>

      <section className="my-8 rounded-xl border bg-muted/40 p-6 md:p-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-heading text-3xl tracking-tight">
            Need advice for your situation?
          </h2>
          <p className="text-muted-foreground">
            A guide can help you prepare, but your coverage should reflect your
            property, vehicles, household, business, and budget. Tell our local
            team what you need, and we will help you compare appropriate options
            without asking you to become an insurance expert first.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/quote"
              className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request a quote
            </Link>
            <Link
              href="/contact-us"
              className="rounded-md border bg-background px-4 py-2 font-medium transition-colors hover:bg-accent"
            >
              Contact Kamil Agency
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
