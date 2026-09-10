import { notFound } from "next/navigation"
import { allPages } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"
import { DocsPageHeader } from "@/components/page-header"

import "@/styles/mdx.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Kamil Agency collects, uses, and protects website visitor information.",
  alternates: { canonical: "/policy/privacy" },
}

interface PrivacyPageProps {
  params: {
    slug: string[]
  }
}

async function getPrivacyFromParams(params) {
  const privacyPage = allPages.find((page) => page.slugAsParams === "privacy")

  if (!privacyPage) {
    null
  }

  return privacyPage
}

export async function generateStaticParams(): Promise<
  PrivacyPageProps["params"][]
> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }))
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const page = await getPrivacyFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <main className="relative flex justify-center px-4 py-6 lg:gap-10 lg:py-10 xl:gap-20">
      <div className="lg:max-w-[75%] ">
        <DocsPageHeader heading={page.title} text={page.description} />
        <Mdx code={page.body.code} />
      </div>
    </main>
  )
}
