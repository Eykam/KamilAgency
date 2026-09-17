// import AboutSection from "./_sections/About"

import type { Metadata } from "next"

import {
  commercialInsuranceMarkets,
  personalLineCarriers,
} from "@/config/carrier-markets"
import { defaultFAQs } from "@/config/faq"
import { CarrierMark } from "@/components/carrier-mark"
import FaqSection from "@/components/faq"

import ConversionSection from "./_sections/Conversion"
import ExperienceProofSection from "./_sections/ExperienceProof"
import HeroSection from "./_sections/Hero"
import LeadCaptureSection from "./_sections/LeadCapture"
import LocalExpertiseSection from "./_sections/LocalExpertise"
import LocalTeamSection from "./_sections/LocalTeam"
import LocationSection from "./_sections/Location"
import ReviewsSection from "./_sections/Reviews"
import ServiceAreasSection from "./_sections/ServiceAreas"
import ServiceSection from "./_sections/Services"
import WhyIndependentSection from "./_sections/WhyIndependent"

export const metadata: Metadata = {
  title: "Compare Home, Auto & Business Insurance in Washington, DC",
  description:
    "Compare home, auto, business, renters, landlord, and condo insurance with a local Washington, DC agency. Service in English, Spanish, and Arabic.",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "es-US": "/es", "ar-US": "/ar" },
  },
}

function PersonalLineCarriersSection() {
  return (
    <section
      aria-labelledby="personal-carriers-heading"
      className="bg-secondary/50 py-16 sm:py-20"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Personal insurance carriers
          </p>
          <h2
            id="personal-carriers-heading"
            className="mt-3 font-heading text-3xl font-bold sm:text-4xl"
          >
            More options for protecting what matters
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Kamil Agency works with a range of personal insurance carriers to
            help clients compare coverage for their homes, vehicles, and other
            personal insurance needs.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {personalLineCarriers.map((carrier) => (
            <li
              key={carrier.name}
              className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border bg-background px-4 py-5 text-center shadow-sm transition-transform hover:-translate-y-0.5"
            >
              {carrier.portalUrl ? (
                <a
                  href={carrier.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={`Open ${carrier.name} portal`}
                  className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <CarrierMark name={carrier.name} />
                </a>
              ) : (
                <CarrierMark name={carrier.name} />
              )}
              <span className="text-sm font-semibold leading-tight">
                {carrier.name}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-muted-foreground">
          Carrier availability, eligibility, and product offerings vary by state
          and individual risk. Contact our team to review available options for
          your needs.
        </p>
      </div>
    </section>
  )
}

function CommercialInsuranceMarketsSection() {
  return (
    <section
      aria-labelledby="commercial-markets-heading"
      className="bg-background py-16 sm:py-20"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Commercial insurance markets
          </p>
          <h2
            id="commercial-markets-heading"
            className="mt-3 font-heading text-3xl font-bold sm:text-4xl"
          >
            More ways to protect your business
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Kamil Agency works with commercial carriers and market-access
            partners to help businesses explore coverage for property,
            liability, vehicles, workers&apos; compensation, flood, and other
            risks.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {commercialInsuranceMarkets.map((market) => (
            <li
              key={market.name}
              className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border bg-secondary/30 px-4 py-5 text-center shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <CarrierMark name={market.name} />
              <span className="text-sm font-semibold leading-tight">
                {market.name}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-muted-foreground">
          Market access does not guarantee eligibility or placement. Products,
          appetite, and availability vary by location, industry, risk, and
          underwriting. Some listed organizations provide wholesale or digital
          market access rather than issuing coverage directly.
        </p>
      </div>
    </section>
  )
}

export default async function IndexPage() {
  return (
    <>
      <HeroSection />
      <LeadCaptureSection />
      <LocalExpertiseSection />
      <ServiceSection />
      <PersonalLineCarriersSection />
      <CommercialInsuranceMarketsSection />
      <WhyIndependentSection />
      <ExperienceProofSection />
      <LocalTeamSection />
      <ReviewsSection />
      <ServiceAreasSection />
      <ConversionSection />
      <LocationSection />
      <div id="faq" className="flex justify-center bg-secondary">
        <FaqSection FAQs={defaultFAQs} name="General" accent />
      </div>
    </>
  )
}
