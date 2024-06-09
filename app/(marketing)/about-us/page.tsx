/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2ab4ogNp9ao
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import TeamMemberCard from "@/components/team-member-card"
import TeamMemberCarousel from "@/components/team-member-carousel"

{
  /* <div className="flex flex-col items-start gap-2">
<HeartIcon className="size-8" />
<h3 className="text-xl font-bold">Empathy</h3>
<p className="text-gray-500 dark:text-gray-400">
  We approach every client with compassion and understanding,
  tailoring our solutions to their unique needs.
</p>
</div>
<div className="flex flex-col items-start gap-2">
<InfoIcon className="size-8" />
<h3 className="text-xl font-bold">Expertise</h3>
<p className="text-gray-500 dark:text-gray-400">
  Our team of experienced professionals are dedicated to providing
  expert guidance and support.
</p>
</div> */
}

function ValueCard() {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border-2 border-primary/80 p-4 duration-150 hover:scale-105 max-md:text-center lg:items-start">
      <InfinityIcon className="size-8" />
      <h3 className="text-xl font-bold">Integrity</h3>
      <p className="text-xs text-primary/70">
        We uphold the highest ethical standards, always acting in the best
        interests of our clients.
      </p>
    </div>
  )
}

export default function Component() {
  const people = [{}, {}, {}, {}]
  const values = [{}, {}, {}, {}]

  return (
    <div className="flex min-h-dvh flex-col overflow-hidden text-start">
      <BackgroundGradientAnimation className="flex items-center">
        <section className="z-10 flex h-[90svh] w-full items-center justify-center py-12 md:py-24 lg:h-screen lg:py-32">
          <div className=" pointer-events-none grid gap-8 px-4 max-sm:w-[90%] md:px-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-6 lg:px-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg border-2 border-primary/20 bg-background px-3 py-1 text-sm">
                  About us
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Trusted Insurance Solutions
                </h1>
                <p className="max-w-[600px] md:text-xl">
                  At our insurance agency, we&apos;re dedicated to providing
                  tailored coverage and personalized service to protect what
                  matters most.
                </p>
              </div>

              <div className="flex justify-center space-x-4 px-2 lg:justify-start">
                <Link href="/contact-us">
                  <Button
                    variant="default"
                    size="lg"
                    className="pointer-events-auto "
                  >
                    Contact Us
                  </Button>
                </Link>

                <Link href="/contact-us/#hours-and-locations">
                  <Button
                    variant="outline"
                    size="lg"
                    className="pointer-events-auto bg-background"
                  >
                    Locations
                  </Button>
                </Link>
              </div>
            </div>

            <Image
              src="/images/placeholder.svg"
              width={600}
              height={400}
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
      </BackgroundGradientAnimation>

      <section className="flex min-h-screen w-full items-center justify-center bg-secondary py-12  md:py-24">
        <div className="container grid gap-12 px-4 max-sm:w-[90%] md:px-6 lg:grid-cols-2 lg:gap-16">
          <Image
            src="/images/placeholder.svg"
            width="550"
            height="400"
            alt="History"
            className="order-2 mx-auto aspect-[11/8] overflow-hidden rounded-xl object-cover lg:order-1"
          />

          <div className="order-1 my-auto space-y-4 lg:order-2">
            <div className="inline-block rounded-lg border-2 border-primary/20 bg-background px-3 py-1 text-sm">
              Our History
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Decades of Trusted Service
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our insurance agency has been providing reliable coverage and
              personalized support to individuals and businesses for over 50
              years. We&apos;ve built a reputation for excellence by
              consistently putting our clients&apos; needs first.
            </p>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen w-full items-center justify-center bg-background py-12 md:py-24">
        <div className="container grid gap-12 px-4 max-sm:w-[90%] md:px-6 lg:grid-cols-2 lg:gap-16 ">
          <div className="my-auto space-y-4 lg:pl-12">
            <div className="inline-block rounded-lg border-2 border-primary/20 bg-accent px-3 py-1 text-sm">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Protecting What Matters Most
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mission is to provide comprehensive insurance solutions that
              safeguard our clients&apos; financial well-being and give them
              peace of mind. We&apos;re committed to understanding each
              client&apos;s unique needs and tailoring our services to ensure
              they&apos;re fully protected.
            </p>
          </div>

          <Image
            src="/images/placeholder.svg"
            width="550"
            height="400"
            alt="Mission"
            className="mx-auto aspect-[11/8] overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="flex min-h-screen w-full items-center justify-center bg-secondary py-12  md:py-24">
        <div className="container grid gap-12 px-4 max-sm:w-[90%] md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 grid grid-cols-2 gap-6 lg:order-1 lg:pl-12">
            {values.map(() => (
              <ValueCard />
            ))}
          </div>

          <div className="order-1 my-auto space-y-4 lg:order-2">
            <div className="inline-block rounded-lg border-2 border-primary/20 bg-background px-3 py-1 text-sm">
              Our Values
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Integrity, Empathy, and Expertise
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At the heart of our agency are the core values that guide our
              every decision and interaction. We&apos;re committed to integrity,
              empathy, and expertise, ensuring our clients receive the highest
              level of service and support.
            </p>
          </div>
        </div>
      </section>

      <TeamMemberCarousel />
    </div>
  )
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function InfinityIcon(props) {
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
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  )
}

function InfoIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}
