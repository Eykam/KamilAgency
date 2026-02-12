// import AboutSection from "./_sections/About"
import ReviewsSection from "./_sections/Reviews"
import LocationSection from "./_sections/Location"
import ServiceSection from "./_sections/Services"
import HeroSection from "./_sections/Hero"
import FaqSection from "@/components/faq"
import { defaultFAQs } from "@/config/faq"

export default async function IndexPage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      {/* <AboutSection /> */}
      <ReviewsSection />
      <LocationSection />
      <div id="faq" className="flex justify-center bg-secondary">
        <FaqSection FAQs={defaultFAQs} name="Insurance" accent />
      </div>
    </>
  )
}
