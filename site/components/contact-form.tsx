"use client"

import { FormEvent, useState } from "react"

import { trackAnalyticsEvent } from "@/lib/analytics"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = "idle" | "sending" | "sent" | "error"

const insuranceTypes = [
  "Auto Insurance",
  "Homeowners Insurance",
  "Condo Insurance",
  "Renters Insurance",
  "Landlord Insurance",
  "Vacant Home Insurance",
  "Umbrella Insurance",
  "Life Insurance",
  "Medicare",
  "Travel Insurance",
  "Commercial Insurance",
  "Other / General Inquiry",
]

const ezLynxQuoteUrl =
  "https://www.agentinsure.com/compare/auto-insurance-home-insurance/mohame/quote.aspx"
const ezLynxInsuranceTypes = new Set([
  "Auto Insurance",
  "Homeowners Insurance",
])

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [submittedInsuranceType, setSubmittedInsuranceType] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")

    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form))
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(fields),
    }).catch(() => null)

    if (!response?.ok) {
      setStatus("error")
      return
    }

    const insuranceType = String(fields.insuranceType)
    trackAnalyticsEvent("generate_lead", {
      lead_source: "contact_form",
      form_name: "contact_us",
      insurance_type: insuranceType,
    })
    setSubmittedInsuranceType(insuranceType)
    form.reset()
    setStatus("sent")
  }

  return (
    <div className="flex h-full flex-col justify-center space-y-6 rounded-2xl border border-primary/15 bg-background px-6 py-8 text-start shadow-sm md:px-8 md:py-10">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary/60">
          Send a Message
        </p>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Get in Touch
        </h2>
        <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
          Tell us what you need and your preferred language. Our English,
          Spanish, and Arabic-speaking team will follow up as soon as possible.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="hidden" aria-hidden="true">
          <Label htmlFor="website">Website</Label>
          <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="insuranceType">Insurance type</Label>
          <select
            id="insuranceType"
            name="insuranceType"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="" disabled>
              Select an insurance type
            </option>
            {insuranceTypes.map((insuranceType) => (
              <option key={insuranceType} value={insuranceType}>
                {insuranceType}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            placeholder="Enter your message"
            className="min-h-[150px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Submit"}
        </Button>
        <div
          className="min-h-5 space-y-3 text-sm"
          role="status"
          aria-live="polite"
        >
          {status === "sent" && (
            <p>Thanks—your message was sent successfully.</p>
          )}
          {status === "sent" &&
            ezLynxInsuranceTypes.has(submittedInsuranceType) && (
              <a
                href={ezLynxQuoteUrl}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                onClick={() =>
                  trackAnalyticsEvent("quote_handoff", {
                    quote_type: submittedInsuranceType,
                    link_location: "contact_form_success",
                  })
                }
              >
                Continue to Secure Home &amp; Auto Quote
              </a>
            )}
          {status === "error" && (
            <p>
              We couldn’t send your message. Please call or email our office
              instead.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
