import type { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TrackedLink } from "@/components/tracked-link"

const portalUrl =
  "https://customerservice.agentinsure.com/EzLynxCustomerService/web/mohame/account/login"

const serviceActions = [
  {
    title: "Report or discuss a claim",
    description:
      "Call the agency for guidance, then report the loss through the appropriate carrier.",
    href: `tel:${siteConfig.contactNumber}`,
    label: "Call for claim help",
  },
  {
    title: "Billing and payments",
    description:
      "Open the secure portal to review available billing information or find your carrier details.",
    href: portalUrl,
    label: "Open secure portal",
    external: true,
  },
  {
    title: "Insurance ID cards",
    description:
      "Use the secure portal to access available policy documents and auto ID cards.",
    href: portalUrl,
    label: "Get policy documents",
    external: true,
  },
  {
    title: "Certificates of insurance",
    description:
      "Send the certificate holder and coverage details to our service team.",
    href: "mailto:info@kamilagency.com?subject=Certificate%20of%20Insurance%20Request",
    label: "Request a certificate",
  },
  {
    title: "Policy changes",
    description:
      "Request an address, vehicle, driver, property, or other policy update.",
    href: "mailto:info@kamilagency.com?subject=Policy%20Change%20Request",
    label: "Request a policy change",
  },
  {
    title: "Annual coverage review",
    description:
      "Ask us to review your limits, deductibles, discounts, and changing needs before renewal.",
    href: "mailto:info@kamilagency.com?subject=Annual%20Coverage%20Review",
    label: "Schedule a review",
  },
] as const

export const metadata: Metadata = {
  title: "Client Login & Self-Service",
  description:
    "Access Kamil Agency's secure customer portal or contact our office for help with an existing policy.",
  alternates: { canonical: "/customers" },
}

export default function CustomerPortal() {
  return (
    <main className="container px-4 py-16 md:py-24">
      <section className="mx-auto max-w-3xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary/60">
          Existing Customers
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Client Login &amp; Self-Service
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Use the secure Client Center to request ID cards, policy
          changes, certificates of insurance, view billing, and make payments.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <TrackedLink
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={cn(buttonVariants({ size: "lg" }))}
            eventName="client_portal_open"
            eventParams={{ link_location: "client_portal_page" }}
          >
            Open Client Center
          </TrackedLink>
          <Link
            href="/contact-us"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Contact Our Office
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          The Client Center opens in a separate secure window. Need help? Call{" "}
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

      <section
        aria-labelledby="service-actions-heading"
        className="mx-auto mt-14 max-w-6xl"
      >
        <h2 id="service-actions-heading" className="sr-only">
          Customer service actions
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceActions.map((action) => (
            <article
              key={action.title}
              className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{action.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                {action.description}
              </p>
              <a
                href={action.href}
                target={
                  "external" in action && action.external ? "_blank" : undefined
                }
                rel={
                  "external" in action && action.external
                    ? "noopener noreferrer nofollow"
                    : undefined
                }
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-6 w-full"
                )}
              >
                {action.label}
              </a>
            </article>
          ))}
        </div>
      </section>

      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-muted-foreground">
        Coverage cannot be bound, changed, or cancelled through email alone.
        Please wait for confirmation from Kamil Agency or your insurance
        carrier.
      </p>
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border bg-secondary/50 p-6 text-center">
        <h2 className="text-xl font-semibold">
          Know someone we may be able to help?
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Share their contact information only after they give you permission,
          or send them our referral page so they can contact us directly.
        </p>
        <Link
          href="/refer-a-friend"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-4 bg-background"
          )}
        >
          Refer a Friend
        </Link>
      </div>
    </main>
  )
}
