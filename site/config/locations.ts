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

const collegeParkAddress: Address = {
  street: "5010 Branchville Rd # C",
  city: "College Park",
  state: "MD",
  zip: "20740",
}

const bethesdaAddress: Address = {
  street: "6900 Wisconsin Ave ste 450",
  city: "Bethesda",
  state: "MD",
  zip: "20815",
}

const fredericksburgAddress: Address = {
  street: "1976 William St ste 7",
  city: "Fredericksburg",
  state: "VA",
  zip: "22401",
}

const collegeParkLocation: Location = {
  name: "Main Office",
  description: "",
  number: "(804) 270-7850",
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
  description: "",
  number: "",
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

const fredericksburgLocation: Location = {
  name: "Fredericksburg, VA - Office",
  description: "",
  number: "(804) 270-7850",
  googleMapsURL: "https://www.google.com/maps?cid=16873776127636074055",
  hours: defaultHours,
  hoursShortened: defaultHoursShortened,
  address: fredericksburgAddress,
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
  fredericksburgLocation,
]
