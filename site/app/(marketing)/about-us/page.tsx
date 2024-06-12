import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import TeamMemberCarousel from "@/components/team-member-carousel"
import { about, aboutMetaData } from "@/config/about"
import { Value } from "@/types"
import { HTMLAttributes } from "react"
import { Metadata } from "next"

type ValueCardProps = HTMLAttributes<HTMLDivElement> & Value

function ValueCard({ icon, title, descriptionShort }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border-2 border-primary/80 p-4 duration-150 hover:scale-105 max-md:text-center lg:items-start">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-xs text-primary/70"> {descriptionShort} </p>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return aboutMetaData
}

export default function AboutPage() {
  const { landing, history, mission, values } = about

  return (
    <div className="flex min-h-dvh flex-col overflow-hidden text-start">
      <BackgroundGradientAnimation className="flex items-center">
        <section className="z-10 flex h-[90svh] w-full items-center justify-center py-12 md:py-24 lg:h-screen lg:py-32">
          <div className="container pointer-events-none grid gap-8 px-4 max-sm:w-[90%] md:px-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-6 lg:px-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg border-2 border-primary/20 bg-background px-3 py-1 text-sm">
                  About us
                </div>
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
                    Our Team
                  </Button>
                </Link>

                <Link href={landing.contactURL || ""}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="pointer-events-auto bg-background"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <Image
              src={landing.imageURL || ""}
              width={600}
              height={400}
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>
      </BackgroundGradientAnimation>

      <section className="flex min-h-screen w-full items-center justify-center bg-secondary py-12  md:py-24">
        <div className="container grid gap-12 px-4 max-sm:w-[90%] md:px-6 lg:grid-cols-2 lg:gap-16">
          <Image
            src={history.imageURL || ""}
            width="600"
            height="400"
            alt="History"
            className="order-2 mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:order-1"
          />

          <div className="order-1 my-auto flex flex-col items-start space-y-4 md:items-center md:text-center lg:order-2 lg:items-start lg:text-start">
            <div className="inline-block rounded-lg border-2 border-primary/20 bg-background px-3 py-1 text-sm">
              Our History
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {history.title}
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {history.description}
            </p>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen w-full items-center justify-center bg-background py-12 md:py-24">
        <div className="container grid gap-12 px-4 max-sm:w-[90%] md:px-6 lg:grid-cols-2 lg:gap-16 ">
          <div className="my-auto flex flex-col items-start space-y-4 md:items-center md:text-center lg:items-start lg:pl-12 lg:text-start">
            <div className="inline-block rounded-lg border-2 border-primary/20 bg-accent px-3 py-1 text-sm">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {mission.title}
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {mission.description}
            </p>
          </div>

          <Image
            src={mission.imageURL || ""}
            width="600"
            height="400"
            alt="Mission"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="flex min-h-screen w-full items-center justify-center bg-secondary py-12  md:py-24">
        <div className="container grid gap-12 px-4 max-sm:w-[90%] md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 grid grid-cols-2 gap-6 lg:order-1 lg:pl-12">
            {values.values?.map((item) => (
              <ValueCard {...item} />
            ))}
          </div>

          <div className="order-1 my-auto flex flex-col items-start space-y-4 md:items-center md:text-center lg:order-2 lg:items-start lg:text-start">
            <div className="inline-block rounded-lg border-2 border-primary/20 bg-background px-3 py-1 text-sm">
              Our Values
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {values.title}
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {values.description}
            </p>
          </div>
        </div>
      </section>

      <TeamMemberCarousel />
    </div>
  )
}
