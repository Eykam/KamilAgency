// import AboutSection from "./_sections/About"

import type { Metadata } from "next"

import { defaultFAQs } from "@/config/faq"
import FaqSection from "@/components/faq"

import HeroSection from "./_sections/Hero"
import LocationSection from "./_sections/Location"
import ReviewsSection from "./_sections/Reviews"
import ServiceSection from "./_sections/Services"

export const metadata: Metadata = {
  title: "Independent Insurance Agency in Washington, DC",
  description:
    "Personalized home, auto, business, renters, landlord, Medicare, umbrella, and life insurance guidance from Kamil Agency.",
  alternates: { canonical: "/" },
}

export default async function IndexPage() {
  return (
    <>
      <HeroSection />
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
