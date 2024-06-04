import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Review } from "@/types"
import Image from "next/image"
import { PropsWithChildren } from "react"
import Link from "next/link"

const TOTAL_STARS = 5
const REVIEW_LINK =
  "https://www.google.com/search?q=mohamed+kamil&rlz=1C1VDKB_enUS1072US1072&oq=mohamed+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg7MgYIAhBFGDsyDAgDEC4YFBiHAhiABDIMCAQQLhgUGIcCGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg8qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x89b7e9afbf6c6319:0x314752c56f0392aa,3,,,,"
type ReviewCardProps = PropsWithChildren & { review: Review }

function ReviewCard(props: ReviewCardProps) {
  const review = props.review

  const stars = () => {
    const starArr: JSX.Element[] = []

    for (let x = 0; x < TOTAL_STARS; x++) {
      starArr.push(
        <StarIcon
          className={
            x <= review.stars - 1
              ? "size-5 fill-primary"
              : "size-5 fill-muted stroke-muted-foreground"
          }
        />
      )
    }

    return starArr
  }

  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <Card className="flex h-full select-none flex-col justify-center space-y-4 bg-background/60 p-6 ">
        <div className="flex items-center gap-4">
          <Avatar>
            <Image
              src={review.avatar}
              alt={"avatar for " + review.name}
              layout="responsive"
              height={40}
              width={40}
              objectFit="cover"
            />
          </Avatar>
          <div>
            <Link href={review.url}>
              <div className="font-medium">{review.name}</div>
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">{stars()}</div>
          <p className="line-clamp-5 text-start text-sm/relaxed">
            {review.text}
          </p>
        </div>
        <div className="text-start text-sm text-gray-500 dark:text-gray-400">
          {review.timestamp}
        </div>
      </Card>
    </CarouselItem>
  )
}

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 gap-12 px-4 md:flex md:flex-col md:items-center md:px-6 lg:grid-cols-2">
        <div className="space-y-6 text-center">
          <div className="mb-4 space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              What our customers say
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Share your experience and help others make informed decisions.
            </p>
          </div>

          <Link href={REVIEW_LINK} target="_blank" rel="nofollow">
            <Button size="lg">Leave a Review</Button>
          </Link>
        </div>
        <Carousel className="w-full max-w-md lg:max-w-none">
          <CarouselContent>
            {reviews.map((review) => (
              <ReviewCard review={review} />
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-accent/50 p-2 shadow-lg transition-all hover:bg-accent ">
            <ChevronLeftIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
          </CarouselPrevious>

          <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-accent/50 p-2 shadow-lg transition-all hover:bg-accent ">
            <ChevronRightIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  )
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
