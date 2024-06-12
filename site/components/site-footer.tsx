import { cn } from "@/lib/utils"
import SocialsIconList from "./socials-list"
import { Icons } from "./icons"
import { siteConfig } from "@/config/site"
import Link from "next/link"

/* <footer className="w-full bg-gray-100 p-6 dark:bg-gray-800 md:py-12">
        <div className="container grid max-w-7xl grid-cols-2 gap-8 text-sm sm:grid-cols-3 md:grid-cols-5">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Auto Insurance
            </Link>
            <Link href="#" prefetch={false}>
              Home Insurance
            </Link>
            <Link href="#" prefetch={false}>
              Life Insurance
            </Link>
            <Link href="#" prefetch={false}>
              Business Insurance
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Claims Center
            </Link>
            <Link href="#" prefetch={false}>
              Contact Us
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Disclaimer
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#" prefetch={false}>
              Facebook
            </Link>
            <Link href="#" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" prefetch={false}>
              LinkedIn
            </Link>
            <Link href="#" prefetch={false}>
              Instagram
            </Link>
          </div>
        </div>
      </footer> */

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
          <Link href="/contact-us" prefetch={false}>
            Contact Us
          </Link>
        </h2>
        <div className="mx-auto grid w-full justify-center gap-8 md:max-w-5xl lg:grid-cols-3">
          <div className="flex-col items-center justify-center space-y-2 lg:h-fit">
            <h3 className="flex items-center justify-center font-heading text-lg leading-[1.1] sm:text-lg md:text-xl lg:h-1/5">
              <Link href="/contact-us#info" prefetch={false}>
                Customer Service
              </Link>
            </h3>
            <div className="flex lg:h-4/5 lg:justify-center">
              <div className="flex flex-col justify-center">
                <Link
                  href={`mailTo:${siteConfig.contactEmail}`}
                  className="flex items-center justify-center space-x-2  text-sm text-primary/70 *:leading-loose"
                >
                  <Icons.email className="text-primary hover:text-primary/50" />
                  <p>{siteConfig.contactEmail}</p>
                </Link>
                <Link
                  href={`tel:${siteConfig.contactNumber}`}
                  className="flex items-center justify-center space-x-2 text-sm leading-loose text-primary/70 lg:justify-start "
                >
                  <Icons.phone className="text-primary hover:text-primary/50" />
                  <p>{siteConfig.contactNumber}</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-col items-center justify-center space-y-2 lg:h-full">
            <h3 className="flex items-center justify-center font-heading text-lg leading-[1.1] sm:text-lg md:text-xl lg:h-1/5">
              <Link href="/contact-us#hours-and-locations" prefetch={false}>
                Locations
              </Link>
            </h3>
            <div className="flex flex-col items-center justify-center space-y-6 text-sm text-primary/70 lg:h-4/5">
              {siteConfig.locations.map((location) => (
                <Link
                  href={location.googleMapsURL}
                  className="flex flex-col hover:text-primary "
                  target="_blank"
                  rel="nofollow"
                >
                  <p className="mx-auto">{location.getAddress().lineOne}</p>
                  <p className="mx-auto">{location.getAddress().lineTwo}</p>
                </Link>
              ))}
            </div>
          </div>

          {children}
          <SocialsIconList />
        </div>

        <div className="mt-4 flex w-full items-center justify-between self-start text-sm leading-loose text-primary/60">
          <p>© 2019 Kamil Agency</p>
          <div className="space-x-4">
            <Link href="/policy/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/policy/terms" className="hover:text-primary">
              ToS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
