// import AboutSection from "./_sections/About"

import type { Metadata } from "next"

import { defaultFAQs } from "@/config/faq"
import FaqSection from "@/components/faq"

import HeroSection from "./_sections/Hero"
import LocalExpertiseSection from "./_sections/LocalExpertise"
import LocationSection from "./_sections/Location"
import ReviewsSection from "./_sections/Reviews"
import ServiceSection from "./_sections/Services"

export const metadata: Metadata = {
  title: "Independent Insurance Agency in Washington, DC",
  description:
    "Local insurance guidance for Washington, DC. Compare options for home, auto, business, renters, landlord, umbrella, life, and Medicare coverage.",
  alternates: { canonical: "/" },
}

export default async function IndexPage() {
  return (
    <>
      <HeroSection />
      <LocalExpertiseSection />
      <ServiceSection />
      {/* <AboutSection /> */}
      <ReviewsSection />
      <LocationSection />
      <div id="faq" className="flex justify-center bg-secondary">
        <FaqSection FAQs={defaultFAQs} name="General" accent />
      </div>
    </>
  )
}
