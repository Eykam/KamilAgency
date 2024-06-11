import { User } from "@prisma/client"
import type { Icon } from "lucide-react"
import { Icons } from "@/components/icons"
import { HTMLAttributes } from "react"
import { Metadata } from "next"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type DailyHours = {
  start: string
  stop: string
} | null

export type Day =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"

export type Hours = { [index: Day]: DailyHours }
export type ShortHours = { weekdays: DailyHours; weekends: DailyHours }

export type SiteConfig = {
  name: string
  description: string
  url: string
  quoteURL: string
  ogImage: string
  contactEmail: string
  contactNumber: string
  commercialQuoteURL: string
  locations: Location[]
}

export type Location = {
  name: string
  number: string
  description: string
  googleMapsURL: string
  address: Address
  hours: Hours
  hoursShortened: ShortHours
  getAddress: () => { lineOne: string; lineTwo: string }
}

export type Address = {
  street: string
  city: string
  state: string
  zip: string
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
    stripeCurrentPeriodEnd: number
    isPro: boolean
  }

export type Service = {
  name: string
  description: string
  descriptionShort: string
  descriptionLong: string
  icon: JSXElement
  quoteURL: string
  docsURL: string
  pageURL: string
  imageURL: string
  details: PolicyDetails[]
  faq: FAQ[]
}

export type PolicyDetails = {
  title: string
  descriptionShort: string
  details: string[]
}

export type Social = {
  url: string
  icon: JSX.Element
}

export type Review = {
  stars: number
  text: string
  name: string
  avatar: string
  url: string
  timestamp: string
}

export type FAQ = {
  question: string
  answer: string
}

export type TeamMember = {
  name: string
  descriptionShort: string
  description: string
  title: string
  avatar: string
  pageUrl: string
  contact: { phone: string; email: string }
  expertise: string[]
  metadata: Metadata
}

export type About = {
  landing: Section
  history: Section
  mission: Section
  values: Section
  team: Section
}

export type Contact = {
  landing: Section
  contactInfo: Section
}

export type Section = {
  title: string
  description?: string
  descriptionShort?: string
  teamURL?: string
  contactURL?: string
  imageURL?: string
  values?: Value[]
  team?: TeamMember[]
}

export type Value = {
  icon: JSX.Element
  title: string
  descriptionShort: string
}

export type CardProps = HTMLAttributes<HTMLDivElement> & Service

export type Carrier = {
  name: string
  descriptionShort: string
  description: string
  logo: string
  url: string
}

{
  /*
    For AI Assistant:

    IMMUTABLE FIELDS:
    ===============
    - typeof value !== "string" | "object"
    - Any key containing icon | logo | URL | Day | Hours | href | contact | avatar | timestamp |  number | email | address | name
    ===============



    MUTABLE FIELDS: 
    ===============
    Any keys not mentioned above
    ===============



    
    MUTABLE FIELD RULES:
    ===============
    Content Length:
      - description : 25-50 words
      - descriptionShort : 10-25 words
      - descriptionLong : 50-100 sentences
      - title : 1-7 words
      - keywords : 10 <= string[].length <= 20 
    ===============
*/
}
