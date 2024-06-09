import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TeamMember } from "@/types"

type TeamMemberCardProps = React.HTMLAttributes<typeof Link> & TeamMember

export default function TeamMemberCard({
  name,
  descriptionShort,
  pageUrl,
  avatar,
  title,
}: TeamMemberCardProps) {
  return (
    <Link href={pageUrl}>
      <div className="flex flex-col items-center space-y-4 rounded-xl border-2 border-primary/20 bg-accent/80 px-4 py-8 duration-150 hover:scale-105">
        <Avatar className="size-[180px]">
          <Image src={avatar} alt="John Doe" objectFit="cover" fill />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="text-center ">
          <h3 className="text-xl font-bold"> {name} </h3>
          <p className="font-semibold text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p className="text-gray-500 dark:text-gray-400">{descriptionShort}</p>
        </div>
        <Link href={pageUrl}>
          <Button variant="default" size="sm">
            View More
          </Button>
        </Link>
      </div>
    </Link>
  )
}
