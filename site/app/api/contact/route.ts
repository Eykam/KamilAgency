import { NextResponse } from "next/server"
import { ServerClient } from "postmark"
import { z } from "zod"

import { siteConfig } from "@/config/site"

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional().default(""),
})

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null)
  const parsed = contactSchema.safeParse(payload)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form submission." },
      { status: 400 }
    )
  }

  const token = process.env.POSTMARK_API_TOKEN
  const from = process.env.SMTP_FROM

  if (!token || !from) {
    console.error("Contact form email configuration is missing.")
    return NextResponse.json(
      { error: "Email service unavailable." },
      { status: 503 }
    )
  }

  const { name, email, phone, message } = parsed.data
  const client = new ServerClient(token)

  try {
    await client.sendEmail({
      From: from,
      To: siteConfig.contactEmail,
      ReplyTo: email,
      Subject: `Website inquiry from ${name.replace(/[\r\n]/g, " ")}`,
      TextBody: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        message,
      ].join("\n"),
    })
  } catch (error) {
    console.error("Contact form email delivery failed.", error)
    return NextResponse.json(
      { error: "Unable to send your message." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
