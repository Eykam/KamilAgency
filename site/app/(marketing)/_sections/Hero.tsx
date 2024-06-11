import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { buttonVariants } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Suspense } from "react"

export default function HeroSection() {
  const locations = [
    "Washington D.C",
    // "Maryland",
    // "Virginia",
    "Pennsylvania",
    "Delaware",
    "Ohio",
    "Indiana",
    "West Virginia",
    "North Carolina",
  ]

  return (
    <section className="flex h-[90svh] items-center space-y-6 lg:h-screen">
      <BackgroundGradientAnimation className="flex h-full items-center">
        <div className="container pointer-events-none relative z-50 flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className=" relative text-nowrap font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Your Insurance Experts In
            <br />
            <Suspense>
              <FlipWords words={locations} />
            </Suspense>
          </div>

          <p className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
            Our expert team is dedicated to providing personalized service,
            ensuring peace of mind and protection for you and your loved ones.
          </p>
          <div className="space-x-4">
            <Link
              href={siteConfig.quoteURL}
              className={cn(
                buttonVariants({ size: "lg" }),
                "pointer-events-auto"
              )}
              target="_blank"
              rel="nofollow"
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
