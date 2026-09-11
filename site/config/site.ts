import { Hours, SiteConfig } from "@/types"

import { locations } from "./locations"

export const siteConfig: SiteConfig = {
  name: "Kamil Agency",
  expandedName: "",
  description:
    "Independent insurance guidance for individuals, families, and businesses in Washington, DC and the surrounding region.",
  url: "https://www.kamilagency.com",
  quoteURL:
    "https://adb4.superioraccess.com/Platform.aspx?j=JyWP37Ak5A5VzpUOJ6EqMw%3d%3d&t=Ts2us1y3JpYfWhn3OZt9HYSD4gEC%2fk1r5rhXtiIO1A8cMiXa8oAp%2bPv2GzROr%2fa6zLwouEgCgwC8EXRpmCFaJQ%3d%3d",
  commercialQuoteURL: "https://app.boldpenguin.com/start/mohamedkamil",
  medicareQuoteURL:
    "https://eosadvisor.com/user/signup?advId=ADS1718137118673475&n=true",
  ogImage: "/og.jpg",
  contactNumber: "(240) 400-7393",
  contactEmail: "mkamil@kamilagency.com",
  locations: locations,
}
