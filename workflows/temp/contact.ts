import { Contact } from "../site/types"
import { Metadata } from "next"

export const contactMetaData: Metadata = {
  title: "",
  description: "",
  keywords: [],
}

export const contact: Contact = {
  landing: {
    title: "Get in Touch with our Agents",
    descriptionShort:
      "Our team of experts is here to help you find the right insurance coverage for your needs. Schedule a consultation today.",
    teamURL: "#info",
    contactURL: "#hours-and-locations",
    imageURL: "/images/contact/contact-hero.webp",
  },
  contactInfo: {
    title: "Our Staff",
    descriptionShort:
      "Our team of insurance professionals has years of experience helping clients find the right coverage.",
  },
}
