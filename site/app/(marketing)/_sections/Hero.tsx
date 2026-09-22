import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TrackedLink } from "@/components/tracked-link"

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden bg-gradient-to-br from-background via-secondary to-accent/30 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-5xl rounded-full bg-accent/20 blur-3xl"
      />
      <div className="container flex max-w-[68rem] flex-col items-center gap-6 text-center">
        <p className="rounded-full border bg-background/80 px-4 py-2 text-sm font-semibold shadow-sm">
          Local service across the DMV Area
        </p>
        <h1 className="relative font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Insurance for What Matters Most
          <br className="hidden sm:block" /> in the DMV Area
          
        </h1>

        <p className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
          Explore home, auto, and business coverage with a local team serving
          Washington, DC, Maryland, and Virginia. We&apos;ll help you understand
          your options and find coverage that fits.
        </p>
        <p className="text-lg font-semibold sm:text-xl">
          We speak English, Spanish, and Arabic.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href={"/quote"}
            className={cn(buttonVariants({ size: "lg" }), "min-w-40 shadow-md")}
            eventName="quote_start"
            eventParams={{ link_location: "hero" }}
          >
            Get a Quote
          </TrackedLink>
          <TrackedLink
            href="tel:+12404007393"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-w-40 border-primary bg-background/80"
            )}
            eventName="click_to_call"
            eventParams={{ link_location: "hero" }}
          >
            Call (240) 400-7393
          </TrackedLink>
        </div>
        <ul className="mt-2 grid gap-3 text-sm sm:grid-cols-3">
          <li className="rounded-lg border bg-background/70 px-4 py-3">
            Local DC office
          </li>
          <li className="rounded-lg border bg-background/70 px-4 py-3">
            Real client reviews
          </li>
          <li className="rounded-lg border bg-background/70 px-4 py-3">
            English · Español · العربية
          </li>
        </ul>
      </div>
    </section>
  )
}
