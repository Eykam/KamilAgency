"use client"

import { useState } from "react"

import { siteConfig } from "@/config/site"
import { trackAnalyticsEvent } from "@/lib/analytics"
import { Label } from "@/components/ui/label"

const personalQuoteUrl =
  "https://www.agentinsure.com/compare/auto-insurance-home-insurance/mohame/quote.aspx"

const businessCoverage = new Set([
  "Business",
  "Commercial auto / trucking",
  "General liability",
  "Workers compensation",
])

function getQuoteDestination(coverage: string) {
  if (businessCoverage.has(coverage)) return "/quote/commercial"
  if (coverage === "Medicare") return siteConfig.medicareQuoteURL
  if (["Home and auto", "Auto", "Homeowners"].includes(coverage)) {
    return personalQuoteUrl
  }
  return "/contact-us"
}

export function QuoteLeadForm() {
  const [coverage, setCoverage] = useState("Home and auto")
  const destination = getQuoteDestination(coverage)
  const isExternal = destination.startsWith("https://")
  const isPersonalQuote = destination === personalQuoteUrl

  return (
    <div className="space-y-4 text-left">
      <div className="space-y-2">
        <Label htmlFor="quote-coverage">Coverage needed</Label>
        <select
          id="quote-coverage"
          value={coverage}
          onChange={(event) => setCoverage(event.currentTarget.value)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="Home and auto">Home and auto</option>
          <option value="Auto">Auto</option>
          <option value="Homeowners">Homeowners</option>
          <option value="Condo">Condo</option>
          <option value="Renters">Renters</option>
          <option value="Landlord">Landlord</option>
          <option value="Vacant home">Vacant home</option>
          <option value="Business">Business</option>
          <option value="Commercial auto / trucking">
            Commercial auto / trucking
          </option>
          <option value="General liability">General liability</option>
          <option value="Workers compensation">Workers compensation</option>
          <option value="Medicare">Medicare</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <a
        href={destination}
        className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        onClick={() =>
          trackAnalyticsEvent(isExternal ? "quote_handoff" : "quote_category_select", {
            quote_type: coverage,
            link_location: "quote_path_selector",
          })
        }
      >
        {isPersonalQuote ? "Start Secure Home & Auto Quote" : "Continue"}
      </a>
      <p className="text-center text-xs text-muted-foreground">
        {isPersonalQuote
          ? "You’ll enter your contact and coverage details once in our quoting provider’s secure form. A price indication depends on the information you provide and carrier availability."
          : "We’ll guide you to the right next step for this coverage."}
      </p>
      <p className="text-center text-sm">
        Prefer help from our team?{" "}
        <a href="/contact-us" className="font-medium text-primary underline">
          Ask an agent to contact you
        </a>
        .
      </p>
    </div>
  )
}
