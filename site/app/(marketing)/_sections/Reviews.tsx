import Link from "next/link"

import { TrackedLink } from "@/components/tracked-link"
import { buttonVariants } from "@/components/ui/button"
import {
  googleBusinessProfileUrl,
  googleReviewUrl,
} from "@/config/google-business"
import { reviews } from "@/config/reviews"

export default function ReviewsSection() {
  const featuredAverage = (
    reviews.reduce((total, review) => total + review.stars, 0) / reviews.length
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
              {reviews.length} client reviews featured
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
                aria-label={review.stars + " out of 5 stars"}
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

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/reviews"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Read All Featured Reviews
          </Link>
          <TrackedLink
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            eventName="google_review_start"
            eventParams={{ language: "en", link_location: "homepage_reviews" }}
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Leave a Google Review
          </TrackedLink>
          <TrackedLink
            href={googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            eventName="review_profile_click"
            eventParams={{ language: "en", link_location: "homepage_reviews" }}
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            View Current Google Profile
          </TrackedLink>
        </div>
      </div>
    </section>
  )
}
