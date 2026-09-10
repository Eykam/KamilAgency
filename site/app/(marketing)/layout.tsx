import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { SiteFooter } from "@/components/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex flex-col justify-center">
      <header className="sticky top-0 z-10 w-full border-b bg-background lg:self-center">
        <div className="flex items-center justify-between px-4 py-6 lg:justify-around">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Link
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),

                "lg:hidden"
              )}
              href={`tel:${siteConfig.contactNumber}`}
              aria-label={`Call Kamil Agency at ${siteConfig.contactNumber}`}
            >
              <Icons.phone />
            </Link>
            <Link
              href={"/quote"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "lg:px-4"
              )}
            >
              Get A Quote
            </Link>
            <Link
              href={"/customers"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "hidden sm:inline-flex lg:px-4"
              )}
            >
              Customer Portal
            </Link>
          </nav>
        </div>
      </header>
      <main className="z-0 flex-1">{children}</main>
      <section id="contact-us">
        <SiteFooter className="border-t" />
      </section>
    </div>
  )
}
