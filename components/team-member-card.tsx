import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TeamMemberCard() {
  return (
    <Link href="/about-us/team/mohamed-kamil">
      <div className="flex flex-col items-center space-y-4 rounded-xl border-2 border-primary/20 bg-accent/80 px-4 py-8 duration-150 hover:scale-105">
        <Avatar className="size-[180px]">
          <Image
            src="/images/people/mohamed_headshot.webp"
            alt="John Doe"
            objectFit="cover"
            fill
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="text-center ">
          <h3 className="text-xl font-bold">John Doe</h3>
          <p className="font-semibold text-gray-500 dark:text-gray-400">CEO</p>
          <p className="text-gray-500 dark:text-gray-400">
            Our team of experienced professionals are dedicated to providing
            expert guidance and support.
          </p>
        </div>
        <Link href="/about-us/team/mohamed-kamil">
          <Button variant="default" size="sm">
            View More
          </Button>
        </Link>
      </div>
    </Link>
  )
}
