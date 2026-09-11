import type { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const quoteUrl =
  "https://www.agentinsure.com/compare/auto-insurance-home-insurance/mohame/quote.aspx"

export const metadata: Metadata = {
  title: "Personal Insurance Quote",
  description:
    "Start a secure personal insurance quote for home, auto, renters, and other personal coverage with Kamil Agency.",
  alternates: { canonical: "/quote/personal" },
}

export default function PersonalQuotePage() {
  return (
    <div className="container flex min-h-[65vh] items-center justify-center px-4 py-16">
      <section className="w-full max-w-2xl space-y-6 rounded-2xl border border-primary/15 p-8 text-center shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary/60">
          Personal Lines
        </p>
        <h1 className="text-4xl font-bold tracking-tight">
          Start Your Personal Insurance Quote
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          The secure quote form opens in a separate window. Confirm that you are
          working with Kamil Agency before entering personal information.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Open Secure Quote Form
          </a>
          <Link
            href="/contact-us"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Ask for Help
          </Link>
        </div>
      </section>
    </div>
  )
}
