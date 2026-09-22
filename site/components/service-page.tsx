import Image from "next/image"
import Link from "next/link"
import { CardProps } from "@/types"

import { serviceSeoContent } from "@/config/service-seo-content"
import { services } from "@/config/services"
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import DetailCard from "@/components/detail-card"
import { JsonLd } from "@/components/json-ld"
import RecommendedServiceCard from "@/components/recommended-service-card"
import { TrackedLink } from "@/components/tracked-link"

import FaqSection from "./faq"
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation"

export default function ServicePage({
  name,
  description,
  descriptionLong,
  quoteURL,
  docsURL,
  imageURL,
  pageURL,
  details,
  faq,
}: CardProps) {
  const seoContent = serviceSeoContent[name]
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${name} Insurance`,
    description,
    url: `https://www.kamilagency.com${pageURL}`,
    provider: {
      "@id": "https://www.kamilagency.com/#agency",
    },
    areaServed: [
      "Washington, DC",
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
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.kamilagency.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insurance Services",
        item: "https://www.kamilagency.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${name} Insurance`,
        item: `https://www.kamilagency.com${pageURL}`,
      },
    ],
  }

  return (
    <div className="flex flex-col overflow-hidden text-center font-semibold lg:text-start">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <BackgroundGradientAnimation className="flex items-center">
        <section className="container z-20 flex h-[90svh] items-center justify-center py-12 md:py-24 lg:h-screen lg:py-32">
          <div className="gap-6 space-y-8 px-4 md:px-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
            <div className="flex flex-col items-center justify-center space-y-8 lg:items-start ">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl  md:text-5xl">
                {name} Insurance in the DMV Area
              </h1>
              <p className="max-w-[600px] text-primary/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
              <div className="flex justify-center gap-2 min-[400px]:flex-row lg:justify-start">
                <TrackedLink
                  href={quoteURL}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                  eventName={
                    quoteURL.startsWith("http")
                      ? "quote_handoff"
                      : "quote_start"
                  }
                  eventParams={{
                    link_location: "service_page",
                    service_name: name,
                  }}
                >
                  Get a Quote
                </TrackedLink>
                <Link
                  href={docsURL}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              src={imageURL}
              width={600}
              height={400}
              alt={`${name} insurance guidance from Kamil Agency across the DMV Area`}
              className="object-fit  mx-auto aspect-video overflow-hidden rounded-xl object-center sm:w-full "
            />
          </div>
        </section>
      </BackgroundGradientAnimation>

      <section className="flex min-h-screen w-full items-center justify-center bg-secondary py-12 md:py-24">
        <div className="container max-w-6xl px-10 2xl:max-w-[1400px]">
          <div className="flex-col text-start md:text-center lg:text-start">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {name} Insurance Coverage Tailored to Your Needs
              </h2>
              <p className="font-normal text-primary/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                {descriptionLong}
              </p>
            </div>

            <br />

            <h2 className="mb-4 text-center text-2xl font-bold tracking-tighter md:text-3xl">
              Coverages Offered
            </h2>
            <div className="flex size-full h-auto flex-wrap items-center justify-center">
              {details.map((props) => (
                <DetailCard key={props.title} {...props} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {seoContent ? (
        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-6xl text-left">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {seoContent.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {seoContent.heading}
              </h2>
              <p className="mt-5 text-lg font-normal leading-8 text-muted-foreground">
                {seoContent.introduction}
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <InfoList
                title="Who this coverage may help"
                items={seoContent.bestFor}
              />
              <InfoList
                title="Coverage situations to discuss"
                items={seoContent.examples}
              />
              <InfoList
                title="Local considerations"
                items={seoContent.localNotes}
              />
            </div>

            <div className="mt-12 rounded-2xl border bg-secondary/40 p-6 md:p-8">
              <h3 className="text-2xl font-bold">
                Related insurance resources
              </h3>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {seoContent.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl border bg-background p-5 transition hover:border-primary"
                  >
                    <span className="font-semibold text-primary">
                      {link.label}
                    </span>
                    <span className="mt-2 block text-sm font-normal leading-6 text-muted-foreground">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="flex h-fit w-full items-center justify-center bg-background py-12 md:py-24">
        <FaqSection name={name} FAQs={faq} />
      </section>

      <section className="flex h-fit w-full items-center justify-center bg-secondary py-12 md:py-24">
        <div className="w-[95%] px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Browse Our Products
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our Insurance Products and see if one of them fits
                your needs!
              </p>
            </div>

            <Carousel className="w-full max-w-md pl-4 md:max-w-none">
              <CarouselContent>
                {services
                  .filter((service) => service.name !== name)
                  .map((props) => (
                    <RecommendedServiceCard key={props.name} {...props} />
                  ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-accent/50 p-2 shadow-lg transition-all hover:bg-accent lg:-left-12 " />
              <CarouselNext className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-accent/50 p-2 shadow-lg transition-all hover:bg-accent lg:-right-12 " />
            </Carousel>

            <div className="flex w-full justify-center">
              <Link
                href={"/services"}
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border bg-secondary/30 p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm font-normal leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
