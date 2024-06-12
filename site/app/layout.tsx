import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { absoluteUrl, cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics, SpeedInsight } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleTagManager } from "@next/third-parties/google"

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

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  geo: {
    region: "US-DC, US-MD, US-VA, US-PA, US-DE, US-ID, US-WV",
    placename:
      "Washington, D.C., Maryland, Virginia, Pennsylvania, Delaware, Idaho, West Virginia",
    position: "38.9072;-77.0369",
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
    images: "/og.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@KamilAgency",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <SpeedInsight />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId="G-FF4L3T2C99" />
    </html>
  )
}
