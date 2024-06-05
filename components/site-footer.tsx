import { cn } from "@/lib/utils"
import SocialsIconList from "./socials-list"
import { Icons } from "./icons"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export function SiteFooter({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <footer className={cn(className, "lg:p-4", "lg:pt-8")}>
      <div className="container flex flex-col justify-center gap-4 py-10 lg:items-center lg:py-0">
        <h2 className="mb-6 self-center font-heading text-3xl leading-[1.1]">
          Contact Us
        </h2>
        <div className="mx-auto grid w-full justify-center gap-4 md:max-w-[64rem] lg:grid-cols-3">
          <div className="flex-col items-center justify-center overflow-hidden lg:h-full">
            <h3 className="flex items-center justify-center font-heading text-lg leading-[1.1] sm:text-lg md:text-xl lg:h-1/5">
              Customer Service
            </h3>
            <div className="flex lg:h-4/5 lg:justify-center">
              <div className="flex flex-col items-center justify-center lg:items-start">
                <Link
                  href={`mailTo:${siteConfig.contactEmail}`}
                  className="flex items-center space-x-2 text-center text-sm text-primary/50 *:leading-loose md:text-left"
                >
                  <Icons.email />
                  <p>{siteConfig.contactEmail}</p>
                </Link>
                <Link
                  href={`tel:${siteConfig.contactNumber}`}
                  className="flex items-center space-x-2 text-center text-sm leading-loose text-primary/50 md:text-left"
                >
                  <Icons.phone />
                  <p>{siteConfig.contactNumber}</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-col items-center justify-center overflow-hidden lg:h-full">
            <h3 className="flex items-center justify-center font-heading text-lg leading-[1.1] sm:text-lg md:text-xl lg:h-1/5">
              Location
            </h3>
            <div className="flex items-center justify-center text-sm text-primary/50 lg:h-4/5">
              <Link
                href={siteConfig.address.googleMapsURL}
                className="flex flex-col items-center lg:items-start"
                target="_blank"
                rel="nofollow"
              >
                {Object.keys(siteConfig.address)
                  .filter((field) => field !== "googleMapsURL")
                  .map((field) => (
                    <p>{siteConfig.address[field]}</p>
                  ))}
              </Link>
            </div>
          </div>

          {children}
          <SocialsIconList />
        </div>

        <div className="mt-4 flex w-full items-center justify-between self-start text-sm leading-loose text-primary/60">
          <p>© 2019 Kamil Agency</p>
          <div className="space-x-4">
            <Link href="/policy/privacy">Privacy Policy</Link>
            <Link href="/policy/terms">ToS</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
