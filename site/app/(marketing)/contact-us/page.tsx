import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import ContactCard from "@/components/contact-card"
import { contact, contactMetaData } from "@/config/contact"
import { team } from "@/config/team"
import { locations } from "@/config/locations"
import { HTMLAttributes } from "react"
import { Location, ShortHours } from "@/types"
import GoogleMapsEmbed from "@/config/GoogleMapsEmbed"

import ContactForm from "@/components/contact-form"
import { Metadata } from "next"

type HourCardProps = HTMLAttributes<HTMLDivElement> & Location

function HourCard({ hoursShortened, name }: HourCardProps) {
  return (
    <div>
      <h3 className="text-md font-bold">{name}</h3>
      <div className="w-full max-w-3xl font-semibold text-primary/60 ">
        <div className="flex justify-between">
          <span>Mon - Fri: </span>
          <span className="w-2/3 text-end">
            {hoursShortened.weekdays?.start} - {hoursShortened.weekdays?.stop}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Sat - Sun: </span>
          <span className="w-2/3 text-end">
            {hoursShortened.weekends
              ? `${hoursShortened.weekends?.start} - ${hoursShortened.weekends?.stop}`
              : "Closed"}
          </span>
        </div>
      </div>
    </div>
  )
}

type LocationCardProps = HTMLAttributes<HTMLDivElement> & { location: Location }

function LocationCard({ location }: LocationCardProps) {
  const { name, googleMapsURL } = location
  const address = location.getAddress()

  return (
    <Link href={googleMapsURL} prefetch={false} target="_blank" rel="nofollow">
      <div className="rounded-lg border-2 border-primary/40 bg-background p-4 shadow-lg duration-150 hover:scale-105">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-primary/70">
          {address.lineOne}
          <br />
          {address.lineTwo}
        </p>
        <Button
          variant="ghost"
          className={
            "mt-2 inline-flex items-center gap-1 p-0 text-sm font-medium text-primary hover:bg-background hover:underline"
          }
        >
          Get Directions
          <ArrowRightIcon className="size-4" />
        </Button>
      </div>
    </Link>
  )
}

export function generateMetadata(): Metadata {
  return contactMetaData
}

export default function ContactPage() {
  const { landing, contactInfo } = contact

  return (
    <div className="flex flex-col overflow-hidden lg:text-start">
      <BackgroundGradientAnimation className="flex items-center">
        <section className="z-10 flex h-[90svh] items-center justify-center py-12 md:py-24 lg:h-screen lg:py-32">
          <div className=" pointer-events-none gap-6 space-y-8 px-4 max-sm:w-[90%] md:w-[80%] md:px-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
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
                    Agents
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
        className="flex min-h-screen w-full items-center justify-center bg-secondary py-12  md:py-24"
      >
        <div className="grid gap-8 px-4 max-sm:w-[90%] md:w-[80%] md:px-16 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="max-w-3xl space-y-6 max-md:border-b-2 max-md:border-primary/60 max-md:pb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {contactInfo.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {contactInfo.descriptionShort}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {team.map((member) => (
                <ContactCard {...member} />
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section
        className="w-full space-y-20 px-6 py-12 md:py-24 lg:py-32"
        id="hours-and-locations"
      >
        <div className="container grid items-start gap-8 px-4 max-md:border-b-2 max-md:border-primary/60 max-md:pb-20 md:max-w-[80%] md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Hours
            </h2>
            <div className=" space-y-4">
              {locations.map((location) => (
                <HourCard {...location} />
              ))}
            </div>
          </div>

          <div className="space-y-6 ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Locations
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {locations.map((location) => (
                <LocationCard location={location} />
              ))}
            </div>
          </div>
        </div>

        <div className="container grid h-fit items-start gap-8 px-4 md:w-[80%] md:px-6 lg:h-fit lg:grid-cols-2 lg:gap-16">
          <div className="col-span-2 ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Find Us on the Map
            </h2>
            <div className="mt-6 h-auto w-full overflow-hidden overflow-hidden rounded-lg border-2 border-primary/50 shadow-lg">
              <GoogleMapsEmbed />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
