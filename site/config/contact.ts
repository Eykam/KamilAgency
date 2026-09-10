import { Metadata } from "next"
import { Contact } from "@/types"

export const contactMetaData: Metadata = {
  title: "Contact Our Insurance Agency",
  description:
    "Contact Kamil Agency for quotes, policy questions, billing support, and insurance guidance in Washington, DC and the surrounding region.",
  alternates: { canonical: "/contact-us" },
  keywords: [
    "Kamil Agency",
    "Contact Kamil Insurance",
    "Insurance Agency Contact",
    "Kamil Insurance",
    "Insurance Solutions DC Metro",
    "Personalized Insurance Service",
    "Washington DC Insurance",
    "Wisconsin Avenue Insurance",
    "Georgetown Insurance",
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
    title: "Talk to Kamil Agency",
    descriptionShort:
      "Reach our office for quotes, policy questions, billing support, and coverage guidance. We make it easy to connect with a licensed team member and get clear next steps.",
    teamURL: "#info",
    contactURL: "#hours-and-locations",
    imageURL: "/images/contact/contact-hero.webp",
  },
  contactInfo: {
    title: "Contact Kamil Agency",
    descriptionShort:
      "Kamil Agency helps individuals, families, and business owners find dependable coverage without making the process complicated. Whether you need a new quote, help reviewing an existing policy, or answers about billing and service, our office is here to give you straightforward guidance and responsive support.",
  },
}
