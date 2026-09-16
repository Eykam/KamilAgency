"use client"

import { FormEvent, useState } from "react"
import { sendGAEvent } from "@next/third-parties/google"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormStatus = "idle" | "sending" | "sent" | "error"

export function ReferralForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [hasPermission, setHasPermission] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!hasPermission) return
    setStatus("sending")

    const fields = Object.fromEntries(new FormData(event.currentTarget))
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: fields.referrerName,
        email: fields.referrerEmail,
        phone: fields.referrerPhone,
        website: fields.website,
        message: [
          "Friend or colleague referral",
          `Referrer: ${fields.referrerName}`,
          `Referrer email: ${fields.referrerEmail}`,
          `Referrer phone: ${fields.referrerPhone || "Not provided"}`,
          `Referred person: ${fields.friendName}`,
          `Referred person email: ${fields.friendEmail}`,
          `Referred person phone: ${fields.friendPhone}`,
          `Insurance interest: ${fields.interest}`,
          "The referrer confirmed they have permission to share these contact details.",
        ].join("\n"),
      }),
    }).catch(() => null)

    if (!response?.ok) {
      setStatus("error")
      return
    }

    sendGAEvent("event", "generate_lead", { lead_source: "client_referral" })
    setStatus("sent")
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-primary/20 bg-secondary p-7 text-center">
        <h2 className="text-2xl font-bold">Thank you for the introduction.</h2>
        <p className="mt-3 text-muted-foreground">
          Kamil Agency received the referral and will follow up respectfully.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="referral-website">Website</Label>
        <Input
          id="referral-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <fieldset className="space-y-4">
        <legend className="text-xl font-semibold">Your information</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField id="referrer-name" label="Your name">
            <Input
              id="referrer-name"
              name="referrerName"
              autoComplete="name"
              maxLength={100}
              required
            />
          </FormField>
          <FormField id="referrer-email" label="Your email">
            <Input
              id="referrer-email"
              name="referrerEmail"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </FormField>
          <FormField id="referrer-phone" label="Your phone (optional)">
            <Input
              id="referrer-phone"
              name="referrerPhone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
            />
          </FormField>
        </div>
      </fieldset>
      <fieldset className="space-y-4 border-t pt-5">
        <legend className="text-xl font-semibold">
          Who are you referring?
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField id="friend-name" label="Name">
            <Input
              id="friend-name"
              name="friendName"
              maxLength={100}
              required
            />
          </FormField>
          <FormField id="friend-email" label="Email">
            <Input
              id="friend-email"
              name="friendEmail"
              type="email"
              maxLength={254}
              required
            />
          </FormField>
          <FormField id="friend-phone" label="Phone">
            <Input
              id="friend-phone"
              name="friendPhone"
              type="tel"
              maxLength={40}
              required
            />
          </FormField>
          <FormField id="referral-interest" label="Insurance interest">
            <Input
              id="referral-interest"
              name="interest"
              maxLength={120}
              required
              placeholder="Home, auto, business, or other"
            />
          </FormField>
        </div>
      </fieldset>
      <div className="flex items-start gap-3 rounded-xl bg-secondary p-4">
        <Checkbox
          id="referral-permission"
          checked={hasPermission}
          onCheckedChange={(value) => setHasPermission(value === true)}
        />
        <Label htmlFor="referral-permission" className="font-normal leading-6">
          I have permission to share this person’s contact information with
          Kamil Agency and understand the agency may contact them about
          insurance.
        </Label>
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={status === "sending" || !hasPermission}
      >
        {status === "sending" ? "Sending…" : "Send Referral"}
      </Button>
      <p
        className="min-h-5 text-center text-sm"
        role="status"
        aria-live="polite"
      >
        {status === "error"
          ? "We couldn't save the referral. Please call (240) 400-7393 for help."
          : null}
      </p>
    </form>
  )
}

function FormField({
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
