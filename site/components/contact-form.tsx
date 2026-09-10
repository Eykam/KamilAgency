"use client"

import { FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = "idle" | "sending" | "sent" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")

    const form = event.currentTarget
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null)

    if (!response?.ok) {
      setStatus("error")
      return
    }

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
          Tell us what you need and our office will follow up as soon as
          possible.
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
        <p className="min-h-5 text-sm" role="status" aria-live="polite">
          {status === "sent" && "Thanks—your message was sent successfully."}
          {status === "error" &&
            "We couldn't send your message. Please call or email our office instead."}
        </p>
      </form>
    </div>
  )
}
