import { createHash } from "node:crypto"
import { NextResponse } from "next/server"
import { ServerClient } from "postmark"
import { z } from "zod"

import { siteConfig } from "@/config/site"

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional().default(""),
  insuranceType: z
    .string()
    .trim()
    .min(2)
    .max(80)
    .optional()
    .default("General Inquiry"),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional().default(""),
})

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const MAX_BODY_BYTES = 16_384
const rateLimitStore = new Map<string, number[]>()

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  const address =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"

  return createHash("sha256").update(address).digest("hex")
}

function isRateLimited(request: Request) {
  const now = Date.now()
  const key = getClientKey(request)
  const recent = (rateLimitStore.get(key) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  )

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitStore.set(key, recent)
    return true
  }

  recent.push(now)
  rateLimitStore.set(key, recent)
  return false
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0)
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: "Form submission is too large." },
      { status: 413, headers: { "Cache-Control": "no-store" } }
    )
  }

  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: { "Cache-Control": "no-store", "Retry-After": "600" },
      }
    )
  }

  const payload = await request.json().catch(() => null)
  const parsed = contactSchema.safeParse(payload)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form submission." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    )
  }

  const token = process.env.POSTMARK_API_TOKEN
  const from = process.env.SMTP_FROM

  if (!token || !from) {
    console.error("Contact form email configuration is missing.")
    return NextResponse.json(
      { error: "Email service unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    )
  }

  const { name, email, phone, insuranceType, message } = parsed.data
  const client = new ServerClient(token)
  const safeName = name.replace(/[\r\n]/g, " ")
  const safeInsuranceType = insuranceType.replace(/[\r\n]/g, " ")

  try {
    await client.sendEmail({
      From: from,
      To: siteConfig.contactEmail,
      ReplyTo: email,
      Subject: `${safeInsuranceType} website inquiry from ${safeName}`,
      TextBody: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Insurance type: ${insuranceType}`,
        "",
        message,
      ].join("\n"),
    })
  } catch (error) {
    console.error("Contact form email delivery failed.", error)
    return NextResponse.json(
      { error: "Unable to send your message." },
      { status: 502, headers: { "Cache-Control": "no-store" } }
    )
  }

  return NextResponse.json(
    { ok: true },
    { headers: { "Cache-Control": "no-store" } }
  )
}
