import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { TeamMember } from "@/types"

type ContactCardProps = React.HTMLAttributes<HTMLLinkElement> & TeamMember

export default function ContactCard({
  name,
  title,
  avatar,
  contact,
  pageUrl,
}: ContactCardProps) {
  return (
    <Link href={pageUrl}>
      <Card className="duration-150  hover:scale-105">
        <CardContent className="flex items-center gap-4 p-4 sm:p-6">
          <Avatar className="size-20">
            <Image src={avatar} alt={name + "-avatar"} objectFit="cover" fill />

            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {title}
            </div>
            <a href={`mailTo:${contact.email}`}>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MailOpenIcon className="size-4" />
                <span>{contact.email}</span>
              </div>
            </a>
            <a href={`tel:${contact.phone}`}>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <PhoneIcon className="size-4" />
                <span>{contact.phone}</span>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function MailOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
