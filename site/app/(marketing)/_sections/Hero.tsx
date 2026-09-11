import Link from "next/link"

import { cn } from "@/lib/utils"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { buttonVariants } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="flex h-[90svh] items-center space-y-6 lg:h-screen">
      <BackgroundGradientAnimation className="flex h-full items-center">
        <div className="container pointer-events-none relative z-50 flex max-w-[64rem] flex-col items-center gap-4 text-center">
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
          <div className="space-x-4">
            <Link
              href={"/quote"}
              className={cn(
                buttonVariants({ size: "lg" }),
                "pointer-events-auto"
              )}
            >
              Get A Quote
            </Link>
            <Link
              href="/docs"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "pointer-events-auto",
                "border-primary"
              )}
            >
              Learn More
            </Link>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  )
}
