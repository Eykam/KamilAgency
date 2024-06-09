import { SiteConfig } from "types"
import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Kamil Agency",
  description:
    "Mohamed Kamil - Top-rated insurance agency offering comprehensive coverage in D.C., Maryland, and Virginia. Get affordable quotes for home, auto, commercial, renters, landlord, life, general liability, and umbrella insurance. Secure your future with the best policies tailored to your needs.",
  url: env.NEXT_PUBLIC_APP_URL,
  quoteURL:
    "https://adb4.superioraccess.com/Platform.aspx?j=JyWP37Ak5A5VzpUOJ6EqMw%3d%3d&t=Ts2us1y3JpYfWhn3OZt9HYSD4gEC%2fk1r5rhXtiIO1A8cMiXa8oAp%2bPv2GzROr%2fa6zLwouEgCgwC8EXRpmCFaJQ%3d%3d",
  commercialQuoteURL: "https://app.boldpenguin.com/start/mohamedkamil",
  ogImage: "/og.jpg",
  contactNumber: "(301) 447-0444",
  contactEmail: "mkamil@kamilagency.com",
  address: {
    googleMapsURL: "https://maps.app.goo.gl/LpgcXg2o7WFD39JR6",
    street: "6900 Wisconsin Ave ste 450",
    city: "Bethesda, MD, 20815",
    state: "",
    zip: "",
  },
  hours: {
    Sunday: null,
    Monday: { start: "08:30 AM", end: "05:30 PM" },
    Tuesday: { start: "08:30 AM", end: "05:30 PM" },
    Wednesday: { start: "08:30 AM", end: "05:30 PM" },
    Thursday: { start: "08:30 AM", end: "05:30 PM" },
    Friday: { start: "08:30 AM", end: "05:30 PM" },
    Saturday: null,
  },
}
