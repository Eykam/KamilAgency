import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { JsonLd } from "@/components/json-ld"
import { TrackedLink } from "@/components/tracked-link"

type LocalSeoPageProps = {
  title: string
  eyebrow: string
  description: string
  introduction: string
  highlights: readonly { title: string; description: string }[]
  idealFor: readonly string[]
  relatedLinks: readonly { label: string; href: string }[]
  quoteUrl?: string
  canonicalPath: string
  localConsiderations?: string
  whatToPrepare?: readonly string[]
  commonQuestions?: readonly { question: string; answer: string }[]
}

export default function LocalSeoPage({
  title,
  eyebrow,
  description,
  introduction,
  highlights,
  idealFor,
  relatedLinks,
  quoteUrl = siteConfig.quoteURL,
  canonicalPath,
  localConsiderations,
  whatToPrepare = [],
  commonQuestions = [],
}: LocalSeoPageProps) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url: `${siteConfig.url}${canonicalPath}`,
    provider: { "@id": `${siteConfig.url}/#agency` },
    areaServed: "Washington, DC",
  }
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${siteConfig.url}${canonicalPath}`,
      },
    ],
  }
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: commonQuestions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }

  return (
    <main>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {commonQuestions.length > 0 ? <JsonLd data={faqJsonLd} /> : null}
      <section className="bg-gradient-to-br from-background via-secondary to-accent/20 py-20 md:py-28">
        <div className="container max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href={quoteUrl}
              className={cn(buttonVariants({ size: "lg" }), "min-w-40")}
              eventName={
                quoteUrl.startsWith("http") ? "quote_handoff" : "quote_start"
              }
              eventParams={{
                link_location: "local_seo_page",
                service_name: title,
              }}
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href="tel:+12404007393"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "min-w-40 bg-background"
              )}
              eventName="click_to_call"
              eventParams={{ link_location: "local_seo_page" }}
            >
              Call (240) 400-7393
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-heading text-3xl font-bold">
              Local guidance without the jargon
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {introduction}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-2xl border p-6"
                >
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border bg-secondary p-7">
            <h2 className="text-2xl font-semibold">
              Who this coverage may help
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {idealFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="font-bold text-accent">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {localConsiderations || whatToPrepare.length > 0 ? (
        <section className="bg-secondary/50 py-16">
          <div className="container grid max-w-6xl gap-8 lg:grid-cols-2">
            {localConsiderations ? (
              <div className="rounded-2xl border bg-background p-7">
                <h2 className="font-heading text-2xl font-bold">
                  Local considerations
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {localConsiderations}
                </p>
              </div>
            ) : null}
            {whatToPrepare.length > 0 ? (
              <div className="rounded-2xl border bg-background p-7">
                <h2 className="font-heading text-2xl font-bold">
                  What to prepare for a quote
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {whatToPrepare.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="font-bold text-accent"
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {commonQuestions.length > 0 ? (
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            <h2 className="text-center font-heading text-3xl font-bold">
              Common questions
            </h2>
            <div className="mt-8 space-y-4">
              {commonQuestions.map(({ question, answer }) => (
                <details
                  key={question}
                  className="rounded-2xl border bg-background p-6"
                >
                  <summary className="cursor-pointer font-semibold">
                    {question}
                  </summary>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-secondary/50 py-12">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold">
            Explore related coverage
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border bg-background px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
