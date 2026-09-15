// import AboutSection from "./_sections/About"

import type { Metadata } from "next"

import { defaultFAQs } from "@/config/faq"
import FaqSection from "@/components/faq"

import ConversionSection from "./_sections/Conversion"
import HeroSection from "./_sections/Hero"
import LeadCaptureSection from "./_sections/LeadCapture"
import LocalExpertiseSection from "./_sections/LocalExpertise"
import LocalTeamSection from "./_sections/LocalTeam"
import LocationSection from "./_sections/Location"
import ReviewsSection from "./_sections/Reviews"
import ServiceAreasSection from "./_sections/ServiceAreas"
import ServiceSection from "./_sections/Services"

export const metadata: Metadata = {
  title: "Compare Home, Auto & Business Insurance in Washington, DC",
  description:
    "Compare home, auto, business, renters, landlord, and condo insurance with a local Washington, DC agency. Service in English, Spanish, and Arabic.",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "es-US": "/es" },
  },
}

export default async function IndexPage() {
  return (
    <>
      <HeroSection />
      <LeadCaptureSection />
      <LocalExpertiseSection />
      <ServiceSection />
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
