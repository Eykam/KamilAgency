import type { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const portalUrl =
  "https://customerservice.agentinsure.com/EzlynxCustomerService/mohame/Account/LogIn"

export const metadata: Metadata = {
  title: "Customer Portal",
  description:
    "Access Kamil Agency's secure customer portal or contact our office for help with an existing policy.",
  alternates: { canonical: "/customers" },
}

export default function CustomerPortal() {
  return (
    <div className="container flex min-h-[65vh] items-center justify-center px-4 py-16">
      <section className="w-full max-w-2xl space-y-6 rounded-2xl border border-primary/15 p-8 text-center shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary/60">
          Existing Customers
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Customer Portal</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          The secure EZLynx portal opens in a separate window. If it is
          unavailable, our office can help with billing, policy documents, and
          service requests.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Open Secure Portal
          </a>
          <Link
            href="/contact-us"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Contact Our Office
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          Call{" "}
          <a className="underline" href={`tel:${siteConfig.contactNumber}`}>
            {siteConfig.contactNumber}
          </a>
          {" or email "}
          <a className="underline" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </section>
    </div>
  )
}
