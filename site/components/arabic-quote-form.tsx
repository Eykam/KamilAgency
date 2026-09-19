"use client"

import { FormEvent, useState } from "react"

import { trackAnalyticsEvent } from "@/lib/analytics"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = "idle" | "sending" | "sent" | "error"

export function ArabicQuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle")

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
          "Arabic-language quote request",
          `Coverage type: ${fields.coverageType}`,
          `ZIP code: ${fields.zip}`,
          `Preferred contact: ${fields.contactPreference}`,
          `Details: ${fields.details || "None provided"}`,
        ].join("\n"),
      }),
    }).catch(() => null)

    if (!response?.ok) {
      setStatus("error")
      return
    }

    trackAnalyticsEvent("generate_lead", {
      lead_source: "arabic_quote_form",
      preferred_language: "arabic",
      insurance_type: String(fields.coverageType),
    })
    setStatus("sent")
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-primary/20 bg-secondary p-7 text-center">
        <h2 className="text-2xl font-bold">شكراً، استلمنا طلبك.</h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          سيتواصل معك أحد أعضاء فريق وكالة كامل لمساعدتك باللغة العربية.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="arabic-website">الموقع الإلكتروني</Label>
        <Input
          id="arabic-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="arabic-name" label="الاسم الكامل">
          <Input
            id="arabic-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
          />
        </Field>
        <Field id="arabic-email" label="البريد الإلكتروني">
          <Input
            id="arabic-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </Field>
        <Field id="arabic-phone" label="رقم الهاتف (اختياري)">
          <Input
            id="arabic-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
          />
        </Field>
        <Field id="arabic-zip" label="الرمز البريدي">
          <Input
            id="arabic-zip"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            pattern="[0-9]{5}(-[0-9]{4})?"
            required
            maxLength={10}
          />
        </Field>
        <Field id="arabic-coverage" label="نوع التأمين">
          <select
            id="arabic-coverage"
            name="coverageType"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="" disabled>
              اختر نوع التأمين
            </option>
            <option value="auto">تأمين السيارات</option>
            <option value="home">تأمين المنازل</option>
            <option value="business">تأمين الأعمال</option>
            <option value="other">نوع آخر</option>
          </select>
        </Field>
        <Field id="arabic-contact" label="طريقة التواصل المفضلة">
          <select
            id="arabic-contact"
            name="contactPreference"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="" disabled>
              اختر طريقة التواصل
            </option>
            <option value="phone">الهاتف</option>
            <option value="email">البريد الإلكتروني</option>
          </select>
        </Field>
      </div>
      <Field id="arabic-details" label="كيف يمكننا مساعدتك؟ (اختياري)">
        <Textarea id="arabic-details" name="details" rows={4} maxLength={600} />
      </Field>
      <p className="rounded-xl bg-secondary p-4 text-sm leading-7 text-muted-foreground">
        لا ترسل رقم الضمان الاجتماعي أو معلومات الدفع أو أي بيانات شخصية حساسة
        عبر هذا النموذج.
      </p>
      <Button type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "جارٍ الإرسال…" : "إرسال طلب التأمين"}
      </Button>
      <p
        className="min-h-5 text-center text-sm"
        role="status"
        aria-live="polite"
      >
        {status === "error"
          ? "تعذر إرسال الطلب. يرجى الاتصال على ‎(240) 400-7393 للمساعدة."
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
