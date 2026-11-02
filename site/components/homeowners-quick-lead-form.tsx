"use client"

import { FormEvent, useState } from "react"

import { trackAnalyticsEvent } from "@/lib/analytics"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormStatus = "idle" | "sending" | "sent" | "error"

export function HomeownersQuickLeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle")

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

    trackAnalyticsEvent("generate_lead", {
      lead_source: "homeowners_quick_form",
      form_name: "homeowners_callback",
      insurance_type: "Homeowners Insurance",
    })
    form.reset()
    setStatus("sent")
  }

  return (
    <div className="rounded-2xl border border-primary/15 bg-background p-6 text-left shadow-lg md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        Fast local help
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        Request a Home Insurance Call
      </h2>
      <p className="mt-3 text-sm font-normal leading-6 text-muted-foreground">
        Share your name and phone number. A Kamil Agency team member will call
        to discuss your Washington, DC home and available quote options.
      </p>

      {status === "sent" ? (
        <div className="mt-6 rounded-xl bg-primary/10 p-5" role="status">
          <p className="font-semibold">Thank you—your request was sent.</p>
          <p className="mt-1 text-sm font-normal text-muted-foreground">
            Our team will contact you as soon as possible during business hours.
          </p>
        </div>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="insuranceType"
            value="Homeowners Insurance"
          />
          <input
            type="hidden"
            name="message"
            value="Quick homeowners callback request from the Washington, DC homeowners insurance page."
          />
          <div className="hidden" aria-hidden="true">
            <Label htmlFor="homeowners-website">Website</Label>
            <Input
              id="homeowners-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="homeowners-name">Name</Label>
              <Input
                id="homeowners-name"
                name="name"
                autoComplete="name"
                required
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="homeowners-phone">Phone</Label>
              <Input
                id="homeowners-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                placeholder="Your phone number"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="homeowners-email">Email (optional)</Label>
            <Input
              id="homeowners-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
            />
          </div>
          <Button
            type="submit"
            className="h-11 w-full"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Request My Call"}
          </Button>
          <div
            className="min-h-5 text-sm font-normal"
            role="status"
            aria-live="polite"
          >
            {status === "error" ? (
              <p>
                We couldn’t send your request. Please call{" "}
                <a className="font-semibold underline" href="tel:+12404007393">
                  (240) 400-7393
                </a>
                .
              </p>
            ) : null}
          </div>
        </form>
      )}
    </div>
  )
}
