import { User } from "@prisma/client"
import type { Icon } from "lucide-react"
import { Icons } from "@/components/icons"

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

export type SiteConfig = {
  name: string
  description: string
  url: string
  quoteURL: string
  ogImage: string
  contactEmail: string
  contactNumber: string
  commercialQuoteURL: string
  address: {
    googleMapsURL: string
    street: string
    city: string
    state: string
    zip: string
  }
  hours: Hours
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
  name: string
  description: string
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

export type CardProps = PropsWithChildren & Service
