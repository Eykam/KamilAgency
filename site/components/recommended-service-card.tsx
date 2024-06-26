import Link from "next/link"
import { CarouselItem } from "./ui/carousel"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { CardProps } from "@/types"

export default function RecommendedServiceCard({
  name,
  descriptionShort,
  pageURL,
}: CardProps) {
  return (
    <CarouselItem className="p-2 px-4 duration-150 hover:scale-105 md:basis-1/2 lg:basis-1/3">
      <Link href={pageURL}>
        <div className="flex h-full flex-col items-center justify-center space-y-4 rounded-lg border-2 border-gray-800 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-950 ">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {descriptionShort}
          </p>

          <div className="flex justify-center space-x-2">
            <Button
              variant={"outline"}
              size={"xs"}
              className="border-primary px-8"
            >
              View
            </Button>
          </div>
        </div>
      </Link>
    </CarouselItem>
  )
}
