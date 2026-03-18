import { Location, Address, Hours } from "types"

export const defaultHours: Hours = {
  Sunday: null,
  Monday: { start: "08:30 AM", stop: "05:30 PM" },
  Tuesday: { start: "08:30 AM", stop: "05:30 PM" },
  Wednesday: { start: "08:30 AM", stop: "05:30 PM" },
  Thursday: { start: "08:30 AM", stop: "05:30 PM" },
  Friday: { start: "08:30 AM", stop: "05:30 PM" },
  Saturday: null,
}

export const defaultHoursShortened = {
  weekdays: { start: "08:30 AM", stop: "05:30 PM" },
  weekends: null,
}

const washingtonAddress: Address = {
  street: "2201 Wisconsin Avenue Northwest, Suite 200",
  city: "Washington",
  state: "DC",
  zip: "20007",
}

const washingtonAddressQuery = encodeURIComponent(
  `${washingtonAddress.street}, ${washingtonAddress.city}, ${washingtonAddress.state} ${washingtonAddress.zip}`
)

export const washingtonGoogleMapsURL = `https://www.google.com/maps/search/?api=1&query=${washingtonAddressQuery}`
export const washingtonGoogleMapsEmbedURL = `https://maps.google.com/maps?hl=en&q=${washingtonAddressQuery}&t=&z=15&ie=UTF8&iwloc=B&output=embed`

const washingtonLocation: Location = {
  name: "Main Office",
  description: "",
  number: "(240) 400-7393",
  googleMapsURL: washingtonGoogleMapsURL,
  hours: defaultHours,
  hoursShortened: defaultHoursShortened,
  address: washingtonAddress,
  getAddress: function () {
    const address = this.address as Address
    const lineOne = address.street
    const lineTwo = `${address.city}, ${address.state} ${address.zip}`
    return { lineOne, lineTwo }
  },
}

export const locations: Location[] = [washingtonLocation]
