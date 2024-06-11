import { Contact } from "@/types"
import { Metadata } from "next"

export const contactMetaData: Metadata = {
  title: "Contact Us | Kamil Agency - Your Trusted Insurance Partner",
  description:
    "Get in touch with Kamil Agency for personalized insurance solutions in Washington D.C, Maryland, Virginia, Pennsylvania, Delaware, Ohio, Indiana, West Virginia, and North Carolina. Visit our offices in College Park, Bethesda, and Fredericksburg.",
  keywords: [
    "Kamil Agency",
    "Contact Kamil Insurance",
    "Insurance Agency Contact",
    "Kamil Insurance",
    "Insurance Solutions DC Metro",
    "Personalized Insurance Service",
    "College Park Insurance",
    "Bethesda Insurance",
    "Fredericksburg Insurance",
    "Insurance in Washington D.C",
    "Insurance in Maryland",
    "Insurance in Virginia",
    "Insurance in Pennsylvania",
    "Insurance in Delaware",
    "Insurance in Ohio",
    "Insurance in Indiana",
    "Insurance in West Virginia",
    "Insurance in North Carolina",
    "Mohamed",
    "Mohamed Kamil",
  ],
}

export const contact: Contact = {
  landing: {
    title: "Get in Touch with our Agents",
    descriptionShort:
      "Our team of experts is here to help you find the right insurance coverage for your needs. Give us a call today.",
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
