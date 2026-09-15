import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"
import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { socials } from "@/config/socials"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics, SpeedInsight } from "@/components/analytics"
import { JsonLd } from "@/components/json-ld"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  other: {
    "geo.region":
      "US-DC, US-MD, US-VA, US-PA, US-DE, US-OH, US-IN, US-WV, US-NC",
    "geo.placename":
      "Washington, D.C., Maryland, Virginia, Pennsylvania, Delaware, Ohio, Indiana, West Virginia, North Carolina",
    "geo.position": "38.9072;-77.0369",
    ICBM: "38.9072, -77.0369",
  },
  keywords: [
    "insurance",
    "insurance agency",
    "D.C.",
    "insurance",
    "Maryland insurance",
    "Virginia insurance",
    "home insurance",
    "auto insurance",
    "commercial insurance",
    "renters insurance",
    "landlord insurance",
    "life insurance",
    "general liability insurance",
    "umbrella insurance",
    "affordable insurance",
    "best insurance",
    "insurance quotes",
    "insurance coverage",
    "insurance policies",
    "D.C.",
    "Maryland",
    "Virginia",
  ],
  authors: [
    {
      name: "Kamil Agency",
      url: siteConfig.url,
    },
  ],
  creator: "KamilAgency",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@KamilAgency",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

const location = siteConfig.locations[0]
const insuranceAgencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${siteConfig.url}/#agency`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  telephone: siteConfig.contactNumber,
  email: siteConfig.contactEmail,
  address: location
    ? {
        "@type": "PostalAddress",
        streetAddress: location.address.street,
        addressLocality: location.address.city,
        addressRegion: location.address.state,
        postalCode: location.address.zip,
        addressCountry: "US",
      }
    : undefined,
  hasMap: location?.googleMapsURL,
  openingHoursSpecification: location
    ? (
        Object.entries(location.hours) as [
          string,
          { start: string; stop: string } | null
        ][]
      )
        .filter(([, hours]) => hours !== null)
        .map(([day, hours]) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: `https://schema.org/${day}`,
          opens: hours?.start === "08:30 AM" ? "08:30" : hours?.start,
          closes: hours?.stop === "05:30 PM" ? "17:30" : hours?.stop,
        }))
    : undefined,
  makesOffer: [
    "Homeowners Insurance",
    "Auto Insurance",
    "Commercial Insurance",
    "Renters Insurance",
    "Landlord Insurance",
    "Umbrella Insurance",
    "Life Insurance",
    "Medicare Guidance",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
  areaServed: [
    "Washington, DC",
    "Maryland",
    "Virginia",
    "Pennsylvania",
    "Delaware",
    "Ohio",
    "Indiana",
    "West Virginia",
    "North Carolina",
  ],
  knowsLanguage: ["English", "Spanish", "Arabic"],
  sameAs: Object.values(socials).map((social) => social.url),
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NG2YZSHFJT"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NG2YZSHFJT');
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <JsonLd data={insuranceAgencyJsonLd} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <SpeedInsight />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
