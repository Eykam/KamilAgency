import type { Metadata } from "next"

import { ReferralForm } from "@/components/referral-form"

export const metadata: Metadata = {
  title: "Refer a Friend or Colleague",
  description:
    "Introduce a friend, family member, or business colleague to Kamil Agency for personal or commercial insurance guidance.",
  alternates: { canonical: "/refer-a-friend" },
}

export default function ReferralPage() {
  return (
    <main className="container max-w-3xl py-16 md:py-24">
      <section className="rounded-2xl border p-6 shadow-sm md:p-10">
        <div className="mb-9 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            A trusted introduction
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Refer a Friend or Colleague
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Know someone who could use clear, local insurance guidance? Share
            their details only with permission, and our team will follow up.
          </p>
        </div>
        <ReferralForm />
      </section>
    </main>
  )
}
