import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import LocalSeoPage from "@/components/local-seo-page"

const canonicalPath = "/services/surety-bonds"

export const metadata: Metadata = {
  title: "Surety Bonds in Washington, DC",
  description:
    "Request help with license and permit, contractor, bid, performance, payment, and other commercial surety bonds in Washington, DC, Maryland, and Virginia.",
  keywords:
    "surety bonds Washington DC, contractor bonds DC, license and permit bonds, bid bonds, performance bonds, payment bonds, commercial surety bonds Maryland Virginia",
  alternates: { canonical: canonicalPath },
}

const highlights = [
  {
    title: "License and permit bonds",
    description:
      "Ask about bonds required by government agencies for eligible professional licenses, permits, and regulated business activities.",
  },
  {
    title: "Contractor bonds",
    description:
      "Review bond requirements connected to contractor licensing, construction work, and obligations to project owners or public entities.",
  },
  {
    title: "Bid, performance, and payment bonds",
    description:
      "Get help identifying the contract bond documents requested for eligible public and private construction projects.",
  },
  {
    title: "Other commercial surety bonds",
    description:
      "Share the bond form or requirement you received so the agency can determine whether an appropriate market is available.",
  },
] as const

const commonQuestions = [
  {
    question: "Is a surety bond the same as business insurance?",
    answer:
      "No. A surety bond is generally a three-party agreement among the principal who must obtain the bond, the obligee requiring it, and the surety company. Business insurance primarily protects the policyholder against covered losses, while a surety may seek reimbursement from the principal after paying a valid bond claim.",
  },
  {
    question: "What information is needed to request a surety bond?",
    answer:
      "Requirements vary by bond. Common items include the exact bond form, required amount, obligee information, business and owner details, financial information, and information about the license, permit, or contract.",
  },
  {
    question: "How much does a surety bond cost?",
    answer:
      "Pricing depends on the bond type and amount, the applicant's qualifications, financial history, experience, and the surety company's underwriting requirements. A completed review is needed before a price can be confirmed.",
  },
  {
    question: "Does requesting a quote guarantee approval?",
    answer:
      "No. Bond availability, approval, terms, and pricing are subject to the surety company's underwriting and any requirements imposed by the obligee.",
  },
] as const

export default function SuretyBondsPage() {
  return (
    <LocalSeoPage
      canonicalPath={canonicalPath}
      eyebrow="Commercial surety assistance"
      title="Surety Bonds in Washington, DC"
      description="Kamil Agency helps businesses, contractors, and professionals request surety bonds for eligible licenses, permits, and contracts in Washington, DC, Maryland, and Virginia."
      introduction="A bond request usually starts with a specific requirement from a licensing authority, government agency, project owner, or contract. Kamil Agency can review the bond form and amount, explain the information the surety may request, and help submit eligible applications to an available market. Approval and pricing are not guaranteed and depend on underwriting."
      highlights={highlights}
      idealFor={[
        "Contractors bidding on or performing bonded work",
        "Businesses applying for licenses or permits",
        "Professionals responding to an agency bond requirement",
        "Companies that received a specific commercial bond form",
      ]}
      localConsiderations="Bond forms, required amounts, filing procedures, and eligibility rules can differ among Washington, DC, Maryland, Virginia, municipalities, licensing authorities, and project owners. Send the exact requirement whenever possible so the requested obligation can be reviewed accurately."
      whatToPrepare={[
        "The bond form or written requirement from the obligee",
        "The required bond amount and requested effective date",
        "Business ownership, address, and contact information",
        "License, permit, bid, or contract details",
        "Financial or experience information requested for underwriting",
      ]}
      commonQuestions={commonQuestions}
      relatedLinks={[
        {
          label: "Commercial insurance",
          href: "/services/commercial-insurance",
        },
        {
          label: "General liability insurance",
          href: "/services/general-liability-insurance",
        },
        {
          label: "Commercial auto insurance",
          href: "/services/commercial-auto-insurance",
        },
      ]}
      quoteUrl={siteConfig.commercialQuoteURL}
    />
  )
}
