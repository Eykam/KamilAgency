import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden bg-gradient-to-br from-background via-secondary to-accent/30 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-5xl rounded-full bg-accent/20 blur-3xl"
      />
      <div className="container flex max-w-[68rem] flex-col items-center gap-6 text-center">
        <p className="rounded-full border bg-background/80 px-4 py-2 text-sm font-semibold shadow-sm">
          Local, independent insurance guidance from Washington, DC
        </p>
        <h1 className="relative font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Independent Insurance Agency
          <br className="hidden sm:block" /> Serving Washington, DC
        </h1>

        <p className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
          Our expert team is dedicated to providing personalized service,
          ensuring peace of mind and protection for you and your loved ones.
        </p>
        <p className="text-lg font-medium sm:text-xl">
          Insurance guidance throughout Washington, DC and the surrounding
          region.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={"/quote"}
            className={cn(buttonVariants({ size: "lg" }), "min-w-40 shadow-md")}
          >
            Request a Quote
          </Link>
          <a
            href="tel:+12404007393"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-w-40 border-primary bg-background/80"
            )}
          >
            Call (240) 400-7393
          </a>
        </div>
        <ul className="mt-2 grid gap-3 text-sm sm:grid-cols-3">
          <li className="rounded-lg border bg-background/70 px-4 py-3">
            Personal recommendations
          </li>
          <li className="rounded-lg border bg-background/70 px-4 py-3">
            A local DC office
          </li>
          <li className="rounded-lg border bg-background/70 px-4 py-3">
            Responsive human service
          </li>
        </ul>
      </div>
    </section>
  )
}
