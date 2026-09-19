"use client"

import { FormEvent, useRef, useState } from "react"

import { siteConfig } from "@/config/site"
import { trackAnalyticsEvent } from "@/lib/analytics"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = "idle" | "sending" | "sent" | "error"

const selectClassName =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

export function CommercialPrequalificationForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [step, setStep] = useState<1 | 2>(1)
  const formRef = useRef<HTMLFormElement>(null)

  function continueToDetails() {
    const firstStep = formRef.current?.querySelector<HTMLFieldSetElement>(
      "[data-commercial-step='1']"
    )

    if (!firstStep) return

    const fields = Array.from(
      firstStep.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
        "input, select"
      )
    )
    const firstInvalidField = fields.find((field) => !field.checkValidity())

    if (firstInvalidField) {
      firstInvalidField.reportValidity()
      return
    }

    setStep(2)
    requestAnimationFrame(() => {
      document.getElementById("commercial-step-2-heading")?.focus()
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")

    const fields = Object.fromEntries(new FormData(event.currentTarget))
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        website: fields.website,
        message: [
          "Commercial insurance pre-qualification",
          `Business name: ${fields.businessName}`,
          `ZIP code: ${fields.zip}`,
          `Industry: ${fields.industry}`,
          `Years in business: ${fields.yearsInBusiness}`,
          `Annual revenue range: ${fields.revenue}`,
          `Employees: ${fields.employees}`,
          `Annual payroll range: ${fields.payroll}`,
          `Business vehicles: ${fields.vehicles}`,
          `Currently insured: ${fields.currentlyInsured}`,
          `Coverage requested: ${fields.coverage}`,
          `Preferred language: ${fields.language}`,
          `Additional details: ${fields.details || "None provided"}`,
        ].join("\n"),
      }),
    }).catch(() => null)

    if (!response?.ok) {
      setStatus("error")
      return
    }

    trackAnalyticsEvent("generate_lead", {
      lead_source: "commercial_prequalification",
      insurance_type: "commercial",
    })
    setStatus("sent")
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-primary/20 bg-secondary p-7 text-center">
        <h2 className="text-2xl font-bold">
          We received your business details.
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          Continue to our secure commercial quoting provider for detailed
          underwriting questions and documents.
        </p>
        <a
          href={siteConfig.commercialQuoteURL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          onClick={() =>
            trackAnalyticsEvent("quote_handoff", {
              quote_type: "commercial",
              link_location: "commercial_prequalification",
            })
          }
        >
          Continue to Secure Commercial Quote
        </a>
      </div>
    )
  }

  return (
    <form ref={formRef} className="space-y-5 text-left" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="commercial-website">Website</Label>
        <Input
          id="commercial-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="rounded-xl bg-secondary p-4" aria-live="polite">
        <p className="text-sm font-semibold">Step {step} of 2</p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-background">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>

      <fieldset data-commercial-step="1" hidden={step !== 1}>
        <legend
          id="commercial-step-1-heading"
          className="mb-5 text-xl font-semibold"
          tabIndex={-1}
        >
          Tell us how to reach your business
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="commercial-name" label="Your name">
            <Input
              id="commercial-name"
              name="name"
              autoComplete="name"
              maxLength={100}
              required
            />
          </Field>
          <Field id="commercial-business" label="Business name">
            <Input
              id="commercial-business"
              name="businessName"
              autoComplete="organization"
              maxLength={120}
              required
            />
          </Field>
          <Field id="commercial-email" label="Email">
            <Input
              id="commercial-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </Field>
          <Field id="commercial-phone" label="Phone">
            <Input
              id="commercial-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
            />
          </Field>
          <Field id="commercial-zip" label="Primary business ZIP code">
            <Input
              id="commercial-zip"
              name="zip"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={10}
              pattern="[0-9]{5}(-[0-9]{4})?"
              required
            />
          </Field>
          <Field id="commercial-industry" label="Industry or business activity">
            <Input
              id="commercial-industry"
              name="industry"
              maxLength={120}
              required
              placeholder="Example: electrical contractor"
            />
          </Field>
          <Field id="commercial-coverage" label="Coverage needed">
            <Input
              id="commercial-coverage"
              name="coverage"
              maxLength={200}
              required
              placeholder="Example: liability, property, commercial auto"
            />
          </Field>
        </div>
        <Button
          type="button"
          className="mt-6 w-full"
          onClick={continueToDetails}
        >
          Continue to Business Details
        </Button>
      </fieldset>

      <fieldset data-commercial-step="2" hidden={step !== 2}>
        <legend
          id="commercial-step-2-heading"
          className="mb-5 text-xl font-semibold"
          tabIndex={-1}
        >
          Add details that help us find the right market
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField
            id="commercial-years"
            name="yearsInBusiness"
            label="Years in business"
            options={[
              "New venture",
              "Less than 1 year",
              "1–3 years",
              "4–10 years",
              "More than 10 years",
            ]}
          />
          <SelectField
            id="commercial-revenue"
            name="revenue"
            label="Estimated annual revenue"
            options={[
              "Under $100,000",
              "$100,000–$499,999",
              "$500,000–$999,999",
              "$1 million–$5 million",
              "More than $5 million",
            ]}
          />
          <SelectField
            id="commercial-employees"
            name="employees"
            label="Number of employees"
            options={["0", "1–4", "5–10", "11–25", "26+"]}
          />
          <SelectField
            id="commercial-payroll"
            name="payroll"
            label="Estimated annual payroll"
            options={[
              "No payroll",
              "Under $100,000",
              "$100,000–$499,999",
              "$500,000–$999,999",
              "$1 million+",
            ]}
          />
          <SelectField
            id="commercial-vehicles"
            name="vehicles"
            label="Business vehicles"
            options={["0", "1", "2–5", "6–10", "11+"]}
          />
          <SelectField
            id="commercial-insured"
            name="currentlyInsured"
            label="Currently insured?"
            options={["Yes", "No", "Not sure"]}
          />
          <SelectField
            id="commercial-language"
            name="language"
            label="Preferred language"
            options={["English", "Español", "العربية"]}
          />
        </div>

        <div className="mt-5">
          <Field
            id="commercial-details"
            label="Anything else we should know? (optional)"
          >
            <Textarea
              id="commercial-details"
              name="details"
              rows={4}
              maxLength={600}
              placeholder="Briefly describe your operations or timing. Do not enter sensitive personal or financial information."
            />
          </Field>
        </div>

        <div className="mt-5 rounded-xl bg-secondary p-4 text-sm leading-6 text-muted-foreground">
          Do not enter an EIN, Social Security number, driver’s-license number,
          date of birth, payment information, or other sensitive data here. The
          secure quote provider will request any detailed underwriting
          information it needs.
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="outline" onClick={() => setStep(1)}>
            Back
          </Button>
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Details & Continue"}
          </Button>
        </div>
      </fieldset>
      <p
        className="min-h-5 text-center text-sm"
        role="status"
        aria-live="polite"
      >
        {status === "error"
          ? "We couldn't save your request. Please call (240) 400-7393 for immediate help."
          : null}
      </p>
    </form>
  )
}

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  )
}

function SelectField({
  id,
  name,
  label,
  options,
}: {
  id: string
  name: string
  label: string
  options: string[]
}) {
  return (
    <Field id={id} label={label}>
      <select
        id={id}
        name={name}
        className={selectClassName}
        required
        defaultValue=""
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Field>
  )
}
