"use client"

import { FormEvent, useState } from "react"
import { sendGAEvent } from "@next/third-parties/google"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const quoteUrl =
  "https://www.agentinsure.com/compare/auto-insurance-home-insurance/mohame/quote.aspx"

const businessCoverage = new Set([
  "Business",
  "Commercial auto / trucking",
  "General liability",
  "Workers compensation",
])

function getQuoteDestination(coverage: string) {
  if (businessCoverage.has(coverage)) return siteConfig.commercialQuoteURL
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
          "The prospect asked to continue to the secure quote form.",
        ].join("\n"),
      }),
    }).catch(() => null)

    if (!response?.ok) {
      setStatus("error")
      return
    }

    sendGAEvent("event", "generate_lead", {
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
            sendGAEvent("event", "quote_handoff", {
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
          <Select value={coverage} onValueChange={setCoverage}>
            <SelectTrigger id="quote-coverage">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Home and auto">Home and auto</SelectItem>
              <SelectItem value="Auto">Auto</SelectItem>
              <SelectItem value="Homeowners">Homeowners</SelectItem>
              <SelectItem value="Condo">Condo</SelectItem>
              <SelectItem value="Renters">Renters</SelectItem>
              <SelectItem value="Landlord">Landlord</SelectItem>
              <SelectItem value="Vacant home">Vacant home</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Commercial auto / trucking">
                Commercial auto / trucking
              </SelectItem>
              <SelectItem value="General liability">
                General liability
              </SelectItem>
              <SelectItem value="Workers compensation">
                Workers compensation
              </SelectItem>
              <SelectItem value="Medicare">Medicare</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-language">Preferred language</Label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger id="quote-language">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Spanish">Español</SelectItem>
              <SelectItem value="Arabic">العربية</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
