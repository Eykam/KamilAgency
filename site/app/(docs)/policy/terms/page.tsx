import { notFound } from "next/navigation"
import { allPages } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"
import { DocsPageHeader } from "@/components/page-header"

import "@/styles/mdx.css"

interface TermsPageProps {
  params: {
    slug: string[]
  }
}

async function getPrivacyFromParams(params) {
  const termsPage = allPages.find((page) => page.slugAsParams === "terms")

  if (!termsPage) {
    null
  }

  return termsPage
}

export async function generateStaticParams(): Promise<
  TermsPageProps["params"][]
> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }))
}

export default async function TermsPage({ params }: TermsPageProps) {
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
