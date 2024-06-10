import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import Image from "next/image"
import Link from "next/link"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import ContactCard from "@/components/contact-card"
import { contact } from "@/config/contact"
import { team } from "@/config/team"
import { locations } from "@/config/locations"
import { HTMLAttributes } from "react"
import { Location, ShortHours } from "@/types"
import GoogleMapsEmbed from "@/config/GoogleMapsEmbed"

type HourCardProps = HTMLAttributes<HTMLDivElement> & Location

function HourCard({ hoursShortened, name }: HourCardProps) {
  return (
    <div>
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="w-full font-semibold text-primary/60">
        <div className="grid grid-cols-2">
          <span>Monday - Friday: </span>
          <span>
            {hoursShortened.weekdays?.start} - {hoursShortened.weekdays?.stop}
          </span>
        </div>
        <div className="grid grid-cols-2">
          <span>Saturday - Sunday: </span>
          <span>
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
      <div className="rounded-lg border bg-white p-4 shadow-sm duration-150 hover:scale-105 dark:border-gray-800 dark:bg-gray-950">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400">
          {address.lineOne}
          <br />
          {address.lineTwo}
        </p>
        <Link
          href={googleMapsURL}
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          prefetch={false}
          target="_blank"
          rel="nofollow"
        >
          Get Directions
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </Link>
  )
}

export default function ContactPage() {
  const { landing, contactInfo } = contact

  return (
    <div className="flex flex-col overflow-hidden lg:text-start">
      <BackgroundGradientAnimation className="flex items-center">
        <section className="z-10 flex h-[90svh] w-full items-center justify-center py-12 md:py-24 lg:h-screen lg:py-32">
          <div className=" pointer-events-none grid gap-8 px-4 max-sm:w-[90%] md:px-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
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
        <div className="grid gap-8 px-4 max-sm:w-[90%] md:px-16 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
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

          <div className="flex max-w-3xl flex-col items-center justify-center space-y-6 rounded-xl bg-background  p-6 text-start font-semibold lg:p-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section
        className="w-full space-y-20 px-6 py-12 md:py-24 lg:py-32"
        id="hours-and-locations"
      >
        <div className="container grid items-start gap-8 px-4 max-md:border-b-2 max-md:border-primary/60 max-md:pb-20 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Hours
            </h2>
            <div className="space-y-4">
              {locations.map((location) => (
                <HourCard {...location} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Locations
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {locations.map((location) => (
                <LocationCard location={location} />
              ))}
            </div>
          </div>
        </div>

        <div className="container grid items-start gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Find Us on the Map
            </h2>
            <div className="mt-6 h-[80vh] w-full overflow-hidden rounded-lg border-2 border-primary/50 lg:h-[50vh]">
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
