import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TeamMember } from "@/types"
import { cn } from "@/lib/utils"

type TeamMemberCardProps = React.HTMLAttributes<HTMLDivElement> & TeamMember

export default function TeamMemberCard({
  name,
  descriptionShort,
  pageUrl,
  avatar,
  title,
  className,
}: TeamMemberCardProps) {
  return (
    <Link href={pageUrl}>
      <div
        className={cn(
          "flex h-full flex-col items-center justify-between space-y-4 rounded-xl border-2 border-primary/20 bg-accent/80 px-4 py-8 duration-150 hover:scale-105",
          className
        )}
      >
        <Avatar className="size-[180px]">
          <Image src={avatar} alt="John Doe" objectFit="cover" fill />
          <AvatarFallback></AvatarFallback>
        </Avatar>

        <div className="space-y-2 text-center">
          <h3 className="text-xl font-bold"> {name} </h3>
          <p className="font-semibold text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p className="text-gray-500 dark:text-gray-400">{descriptionShort}</p>
        </div>

        <Button variant="default" size="sm">
          View More
        </Button>
      </div>
    </Link>
  )
}
