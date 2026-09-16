import Link from "next/link"

import { reviews } from "@/config/reviews"
import { buttonVariants } from "@/components/ui/button"

const REVIEW_LINK =
  "https://www.google.com/maps/search/?api=1&query=Kamil%20Agency%202201%20Wisconsin%20Avenue%20NW%20Washington%20DC%2020007"

export default function ReviewsSection() {
  const featuredReviewCount = reviews.length
  const featuredAverage = (
    reviews.reduce((total, review) => total + review.stars, 0) /
    featuredReviewCount
  ).toFixed(1)

  return (
    <section
      id="reviews"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/75">
            Client experiences
          </p>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl">
            Service people remember
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Real feedback from people who turned to Kamil Agency for clear,
            responsive insurance guidance.
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-col justify-center gap-3 sm:flex-row">
            <span className="rounded-full bg-background/10 px-4 py-2 text-sm font-semibold">
              {featuredAverage} average across featured testimonials
            </span>
            <span className="rounded-full bg-background/10 px-4 py-2 text-sm font-semibold">
              {featuredReviewCount} client reviews featured
            </span>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col rounded-2xl bg-background p-6 text-foreground shadow-lg"
            >
              <div
                aria-label={`${review.stars} out of 5 stars`}
                className="text-lg tracking-widest text-amber-500"
              >
                {"★".repeat(review.stars)}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-7">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-5 border-t pt-4 text-sm">
                <cite className="not-italic font-semibold">{review.name}</cite>
                <span className="block text-muted-foreground">
                  Google review · {review.timestamp}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            View Kamil Agency on Google
          </Link>
        </div>
      </div>
    </section>
  )
}
