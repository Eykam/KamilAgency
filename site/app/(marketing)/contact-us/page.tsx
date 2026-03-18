import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import LocationSection from "../_sections/Location"
import { contact, contactMetaData } from "@/config/contact"
import { siteConfig } from "@/config/site"
import ContactForm from "@/components/contact-form"
import { Metadata } from "next"

export function generateMetadata(): Metadata {
  return contactMetaData
}

export default function ContactPage() {
  const { landing, contactInfo } = contact

  return (
    <div className="flex flex-col overflow-hidden lg:text-start">
      <BackgroundGradientAnimation className="flex items-center justify-center">
        <section className="z-10 flex min-h-[75svh] items-center justify-center py-12 md:py-20 lg:min-h-[85svh] lg:py-24">
          <div className="container pointer-events-none gap-6 space-y-8 px-4 max-sm:w-[90%]  md:px-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
            <div className="flex flex-col justify-center space-y-6 lg:px-12">
              <div className="w-fit rounded-lg border-2 border-primary/20 bg-background px-3 py-1 text-sm">
                Contact Us
              </div>
              <div className="space-y-2 ">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  {landing.title}
                </h1>
                <p className="max-w-[600px] md:text-xl">
                  {landing.descriptionShort}
                </p>
              </div>

              <div className="flex justify-center space-x-4 px-2 lg:justify-start">
                <Link href={landing.teamURL || ""}>
                  <Button
                    variant="default"
                    size="lg"
                    className="pointer-events-auto "
                  >
                    Contact Details
                  </Button>
                </Link>

                <Link href={landing.contactURL || ""}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="pointer-events-auto bg-background"
                  >
                    Hours & Locations
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src={landing.imageURL || ""}
              width="550"
              height="310"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>
      </BackgroundGradientAnimation>

      <section
        id="info"
        className="flex w-full items-center justify-center bg-secondary py-12 md:py-16"
      >
        <div className="grid w-full max-w-6xl gap-8 px-4 max-sm:w-[90%] md:px-10 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_560px]">
          <div className="space-y-6 rounded-2xl border border-primary/15 bg-background px-6 py-8 shadow-sm md:px-8 md:py-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {contactInfo.title}
              </h2>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
                {contactInfo.descriptionShort}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${siteConfig.contactNumber}`}
                className="rounded-xl border border-primary/20 bg-secondary px-5 py-4 transition-colors hover:border-primary/40"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-primary/60">
                  Call
                </p>
                <p className="mt-2 text-lg font-semibold">{siteConfig.contactNumber}</p>
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="rounded-xl border border-primary/20 bg-secondary px-5 py-4 transition-colors hover:border-primary/40"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-primary/60">
                  Email
                </p>
                <p className="mt-2 break-all text-lg font-semibold">
                  {siteConfig.contactEmail}
                </p>
              </a>
            </div>

            <div className="rounded-xl border border-primary/20 bg-secondary px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/60">
                Quick Help
              </p>
              <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                Call for immediate assistance, or send a message if you would
                like a callback, quote review, or help with an existing policy.
                Hours and office location are listed just below.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${siteConfig.contactNumber}`}>
                  <Button>Call Now</Button>
                </a>
                <Link href={landing.contactURL || ""}>
                  <Button variant="outline" className="bg-background">
                    View Hours & Location
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <div id="hours-and-locations">
        <LocationSection />
      </div>
    </div>
  )
}
