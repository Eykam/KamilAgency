import { About } from "@/types"
import { team } from "./team"
import { Icons } from "@/components/icons"
import { Metadata } from "next"

export const aboutMetaData: Metadata = {
  title: "About Us | Your Reliable DC Metro Insurance Partner",
  description:
    "Discover how our dedicated team provides tailored coverage and personalized service to protect what matters most in the DC Metro area.",
  keywords: [
    "Trusted Insurance Solutions",
    "Insurance Agency DC Metro",
    "Personalized Insurance Service",
    "Tailored Coverage",
    "Financial Protection",
    "Expert Insurance Team",
    "Reliable Insurance Partner",
    "DC Metro Insurance",
    "Comprehensive Insurance Solutions",
    "Client-Focused Insurance",
    "Mohamed",
    "Mohamed Kamil",
    "Kamil Insurance",
    "Kamil Insurance Agency",
    "Kamil Agency",
  ],
}

export const about: About = {
  landing: {
    title: "Trusted Insurance Solutions",
    descriptionShort:
      "At Kamil Agency, we're dedicated to providing tailored coverage and personalized service to protect what matters most.",
    teamURL: "#team",
    contactURL: "/contact-us",
    imageURL: "/images/about/about-hero.webp",
  },
  history: {
    title: "Reliable Coverage in the DC Metro Area",
    description:
      "Kamil Agency is known for providing reliable coverage and personalized support to individuals and businesses in the DC Metro area. We've built a reputation for excellence by consistently putting our clients' needs first.",
    imageURL: "/images/about/about-trust.webp",
  },
  mission: {
    title: "Protecting What Matters Most",
    description:
      "Our mission is to provide comprehensive insurance solutions that safeguard our clients' financial well-being and give them peace of mind. We're committed to understanding each client's unique needs and tailoring our services to ensure they're fully protected.",
    imageURL: "/images/about/about-lock.webp",
  },
  values: {
    title: "Integrity, Empathy, Expertise, and Security",
    description:
      "At the heart of our agency are the core values that guide our every decision and interaction. We're committed to integrity, empathy, expertise, and security, ensuring our clients receive the highest level of service and support.",
    values: [
      {
        icon: Icons.infinity({}),
        title: "Integrity",
        descriptionShort:
          "We uphold the highest ethical standards, always acting in the best interests of our clients.",
      },
      {
        icon: Icons.heart({}),
        title: "Empathy",
        descriptionShort:
          "We approach every client with compassion and understanding, tailoring our solutions to their unique needs.",
      },
      {
        icon: Icons.info({}),
        title: "Expertise",
        descriptionShort:
          "Our team of experienced professionals is dedicated to providing expert guidance and support.",
      },
      {
        icon: Icons.liability({
          className: "fill-none size-6 stroke-2",
        }),
        title: "Security",
        descriptionShort:
          "We prioritize your safety with robust insurance solutions to protect your assets and future.",
      },
    ],
  },
  team: {
    title: "Our Experienced Professionals",
    description:
      "Meet the dedicated team behind our trusted insurance solutions. With years of experience and a commitment to excellence, they ensure you receive the best service.",
    team: team,
  },
}
