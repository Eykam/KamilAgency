import { About } from "@/types"
import { team } from "./team"
import { Icons } from "@/components/icons"

export const about: About = {
  landing: {
    title: "Trusted Insurance Solutions",
    descriptionShort:
      "At our insurance agency, we're dedicated to providing tailored coverage and personalized service to protect what matters most.",
    teamURL: "#team",
    contactURL: "/contact-us",
    imageURL: "/images/about/about-hero.webp",
  },
  history: {
    title: "Decades of Trusted Service",
    description:
      "Our insurance agency has been providing reliable coverage and personalized support to individuals and businesses for over 50 years. We've built a reputation for excellence by consistently putting our clients' needs first.",
    imageURL: "/images/about/about-trust.webp",
  },
  mission: {
    title: "Protecting What Matters Most",
    description:
      "Our mission is to provide comprehensive insurance solutions that safeguard our clients' financial well-being and give them peace of mind. We're committed to understanding each client's unique needs and tailoring our services to ensure they're fully protected.",
    imageURL: "/images/about/about-lock.webp",
  },
  values: {
    title: "Integrity, Empathy, and Expertise",
    description:
      "At the heart of our agency are the core values that guide our every decision and interaction. We're committed to integrity, empathy, and expertise, ensuring our clients receive the highest level of service and support.",
    values: [
      {
        icon: Icons.infinity({}),
        name: "Integrity",
        descriptionShort:
          "We uphold the highest ethical standards, always acting in the best interests of our clients.",
      },
      {
        icon: Icons.heart({}),
        name: "Empathy",
        descriptionShort:
          "We approach every client with compassion and understanding, tailoring our solutions to their unique needs.",
      },
      {
        icon: Icons.info({}),
        name: "Expertise",
        descriptionShort:
          "Our team of experienced professionals are dedicated to providing expert guidance and support.",
      },
    ],
  },
  team: {
    title: "Our Experienced Professionals",
    description:
      "Get to know the dedicated team behind our insurance solutions.",
    team: team,
  },
}
