import { SiteConfig, Location, Address, Hours } from "types"
import { env } from "@/env.mjs"

export const defaultHours: Hours = {
  Sunday: null,
  Monday: { start: "08:30 AM", end: "05:30 PM" },
  Tuesday: { start: "08:30 AM", end: "05:30 PM" },
  Wednesday: { start: "08:30 AM", end: "05:30 PM" },
  Thursday: { start: "08:30 AM", end: "05:30 PM" },
  Friday: { start: "08:30 AM", end: "05:30 PM" },
  Saturday: null,
}

const defaultHoursShortened = {
  weekdays: "",
  weekends: "",
}

const collegeParkAddress: Address = {
  street: "6900 Wisconsin Ave ste 450",
  city: "Bethesda",
  state: "MD",
  zip: "20815",
}

const bethesdaAddress: Address = {
  street: "6900 Wisconsin Ave ste 450",
  city: "Bethesda",
  state: "MD",
  zip: "20815",
}

const fredricksburgAddress: Address = {
  street: "6900 Wisconsin Ave ste 450",
  city: "Bethesda",
  state: "MD",
  zip: "20815",
}

const collegeParkLocation: Location = {
  name: "Main Office",
  googleMapsURL: "https://maps.app.goo.gl/LpgcXg2o7WFD39JR6",
  hours: defaultHours,
  hoursShortened: defaultHoursShortened,
  address: collegeParkAddress,
  getAddress: function () {
    const address = this.address as Address
    const lineOne = address.street
    const lineTwo = `${address.city}, ${address.state} ${address.zip}`
    return { lineOne, lineTwo }
  },
}

const bethesdaLocation: Location = {
  name: "Bethesda, MD -  Office",
  googleMapsURL: "https://maps.app.goo.gl/LpgcXg2o7WFD39JR6",
  hours: defaultHours,
  hoursShortened: defaultHoursShortened,
  address: bethesdaAddress,
  getAddress: function () {
    const address = this.address as Address
    const lineOne = address.street
    const lineTwo = `${address.city}, ${address.state} ${address.zip}`
    return { lineOne, lineTwo }
  },
}

const fredricksburgLocation: Location = {
  name: "Fredricksburg, VA - Office",
  googleMapsURL: "https://maps.app.goo.gl/LpgcXg2o7WFD39JR6",
  hours: defaultHours,
  hoursShortened: defaultHoursShortened,
  address: fredricksburgAddress,
  getAddress: function () {
    const address = this.address as Address
    const lineOne = address.street
    const lineTwo = `${address.city}, ${address.state} ${address.zip}`
    return { lineOne, lineTwo }
  },
}

export const locations: Location[] = [
  collegeParkLocation,
  bethesdaLocation,
  fredricksburgLocation,
]

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
  locations: locations,
}
