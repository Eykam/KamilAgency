import Link from "next/link"

import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import RootDocument, { metadata } from "@/components/root-document"
import { DocsSearch } from "@/components/search"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { SiteFooter } from "@/components/site-footer"
import SocialsIconList from "@/components/socials-list"

interface DocsLayoutProps {
  children: React.ReactNode
}

export { metadata }

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <RootDocument lang="en" dir="ltr">
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav items={docsConfig.mainNav}>
              <DocsSidebarNav items={docsConfig.sidebarNav} />
            </MainNav>
            <div className="flex flex-1 items-center space-x-4 sm:justify-end">
              <div className="flex-1 sm:grow-0">
                <DocsSearch />
              </div>
              <nav className="flex space-x-4">
                <ModeToggle />
                <Link
                  href={"/quote"}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "px-4"
                  )}
                >
                  Get A Quote
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <div className="container flex-1">{children}</div>
        <SiteFooter className="border-t" />
        <Toaster />
      </div>
    </RootDocument>
  )
}
