import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { SiteFooter } from "@/components/site-footer"
import { TrackedLink } from "@/components/tracked-link"

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
            <TrackedLink
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),

                "lg:hidden"
              )}
              href={`tel:${siteConfig.contactNumber}`}
              aria-label={`Call Kamil Agency at ${siteConfig.contactNumber}`}
              eventName="click_to_call"
              eventParams={{ link_location: "header" }}
            >
              <Icons.phone />
            </TrackedLink>
            <TrackedLink
              href={"/quote"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "lg:px-4"
              )}
              eventName="quote_start"
              eventParams={{ link_location: "header" }}
            >
              Get A Quote
            </TrackedLink>
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
      <main className="z-0 flex-1 pb-16 sm:pb-0">{children}</main>
      <section id="contact-us" className="pb-16 sm:pb-0">
        <SiteFooter className="border-t" />
      </section>
      <aside
        aria-label="Quick contact options"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t bg-background/95 p-3 shadow-2xl backdrop-blur sm:hidden"
      >
        <TrackedLink
          href={`tel:${siteConfig.contactNumber}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "w-full"
          )}
          eventName="click_to_call"
          eventParams={{ link_location: "mobile_sticky" }}
        >
          Call the Office
        </TrackedLink>
        <TrackedLink
          href="/quote"
          className={cn(buttonVariants({ size: "sm" }), "w-full")}
          eventName="quote_start"
          eventParams={{ link_location: "mobile_sticky" }}
        >
          Request a Quote
        </TrackedLink>
      </aside>
    </div>
  )
}
