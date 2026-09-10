import Link from "next/link"
import { Social } from "@/types"

import { socials } from "@/config/socials"
import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

function SocialIcon(props: Social & { label: string }) {
  return (
    <Link
      className={cn(
        buttonVariants({ size: "icon" }),
        "bg-primary",
        "hover:bg-primary/50"
      )}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={`${props.label} profile`}
      title={`${props.label} profile`}
    >
      {props.icon}
    </Link>
  )
}

export default function SocialsIconList() {
  return (
    <div className="flex justify-center self-start overflow-hidden">
      <div className="flex w-full flex-col items-center justify-center">
        <h3 className="mb-[5%] font-heading text-lg leading-[1.1] sm:text-lg md:text-xl">
          Socials
        </h3>
        <div className="flex space-x-2">
          {Object.entries(socials).map(([label, details]) => (
            <SocialIcon {...details} label={label} key={details.url} />
          ))}
        </div>
      </div>
    </div>
  )
}
