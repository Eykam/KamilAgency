import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import Page404 from "@/components/404"

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center">
      <header className="sticky top-0 z-10 w-full bg-background lg:self-center">
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
            >
              <Icons.phone />
            </Link>
            <Link
              href={siteConfig.quoteURL}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "lg:px-4"
              )}
              target="_blank"
              rel="nofollow"
            >
              Get A Quote
            </Link>
          </nav>
        </div>
      </header>
      <Page404 />
      <section id="contact-us">
        <SiteFooter className="border-t" />
      </section>
    </div>
  )
}
