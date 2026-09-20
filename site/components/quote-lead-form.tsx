"use client"

import { FormEvent, useState } from "react"

import { siteConfig } from "@/config/site"
import { trackAnalyticsEvent } from "@/lib/analytics"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const quoteUrl =
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
  if (coverage === "Other") return "/contact-us"
  return quoteUrl
}

type FormStatus = "idle" | "sending" | "sent" | "error"

export function QuoteLeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [coverage, setCoverage] = useState("Home and auto")
  const [language, setLanguage] = useState("English")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")

    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form))
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        website: fields.website,
        message: [
          "Personal insurance quote lead",
          `Coverage: ${coverage}`,
          `ZIP code: ${fields.zip}`,
          `Preferred language: ${language}`,
          fields.message ? `Customer message: ${fields.message}` : null,
          "The prospect asked to continue to the secure quote form.",
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    }).catch(() => null)

    if (!response?.ok) {
      setStatus("error")
      return
    }

    trackAnalyticsEvent("generate_lead", {
      lead_source: "website_quote_form",
      insurance_type: coverage,
      preferred_language: language,
    })
    setStatus("sent")
  }

  if (status === "sent") {
    const destination = getQuoteDestination(coverage)

    return (
      <div className="space-y-5 rounded-xl border border-primary/20 bg-secondary p-6 text-center">
        <div>
          <h2 className="text-2xl font-bold">
            Thank you—we received your request.
          </h2>
          <p className="mt-2 text-muted-foreground">
            Continue to the secure form for detailed quote information. A Kamil
            Agency team member can also follow up using your preferred language.
          </p>
        </div>
        <a
          href={destination}
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          onClick={() =>
            trackAnalyticsEvent("quote_handoff", {
              quote_type: coverage,
              link_location: "captured_quote_lead",
            })
          }
        >
          {coverage === "Other"
            ? "Continue to Contact Options"
            : "Continue to Secure Quote Form"}
        </a>
        <p className="text-xs text-muted-foreground">
          The secure form is operated by our quoting technology provider.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-4 text-left" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="quote-website">Website</Label>
        <Input
          id="quote-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quote-name">Name</Label>
          <Input
            id="quote-name"
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-phone">Phone</Label>
          <Input
            id="quote-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="(240) 555-0123"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quote-email">Email</Label>
          <Input
            id="quote-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-zip">ZIP code</Label>
          <Input
            id="quote-zip"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            required
            pattern="[0-9]{5}(-[0-9]{4})?"
            placeholder="20007"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quote-coverage">Coverage needed</Label>
          <select
            id="quote-coverage"
            name="coverage"
            value={coverage}
            onChange={(event) => setCoverage(event.currentTarget.value)}
            disabled={status === "sending"}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
        <div className="space-y-2">
          <Label htmlFor="quote-language">Preferred language</Label>
          <select
            id="quote-language"
            name="language"
            value={language}
            onChange={(event) => setLanguage(event.currentTarget.value)}
            disabled={status === "sending"}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="English">English</option>
            <option value="Spanish">Español</option>
            <option value="Arabic">العربية</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="quote-message">Tell us what you need</Label>
        <Textarea
          id="quote-message"
          name="message"
          maxLength={2000}
          placeholder="Share any details or questions that will help us prepare your quote."
          className="min-h-[120px]"
          disabled={status === "sending"}
        />
      </div>
      <Button type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Save My Request & Continue"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By submitting, you ask Kamil Agency to contact you about this quote.
        Your information is not sold.
      </p>
      <p
        className="min-h-5 text-center text-sm"
        role="status"
        aria-live="polite"
      >
        {status === "error" &&
          "We couldn't save your request. Please call (240) 400-7393 for immediate help."}
      </p>
    </form>
  )
}
