import type { Metadata } from "next"
import Link from "next/link"

import { reviews } from "@/config/reviews"
import { buttonVariants } from "@/components/ui/button"

const REVIEW_LINK =
  "https://www.google.com/maps/search/?api=1&query=Kamil%20Agency%202201%20Wisconsin%20Avenue%20NW%20Washington%20DC%2020007"

export const metadata: Metadata = {
  title: "Kamil Agency Client Reviews",
  description:
    "Read client testimonials about Kamil Agency's insurance guidance and customer service in Washington, DC.",
  alternates: { canonical: "/reviews" },
}

export default function ReviewsPage() {
  const average = (
    reviews.reduce((total, review) => total + review.stars, 0) / reviews.length
  ).toFixed(1)

  return (
    <main>
      <section className="bg-primary py-20 text-center text-primary-foreground md:py-28">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">
            Client experiences
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Kamil Agency Reviews
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-primary-foreground/80">
            Read feedback from clients who valued clear answers, responsive
            service, and help comparing insurance options.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-background/10 px-4 py-2 text-sm font-semibold">
              {average} average across featured testimonials
            </span>
            <span className="rounded-full bg-background/10 px-4 py-2 text-sm font-semibold">
              {reviews.length} client reviews featured
            </span>
          </div>
        </div>
      </section>

      <section className="container max-w-6xl py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={`${review.name}-${review.timestamp}`}
              className="flex h-full flex-col rounded-2xl border bg-background p-6 shadow-sm"
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
                <Link
                  href={review.url || REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-semibold text-primary hover:underline"
                >
                  {review.url ? "View source" : "View Google profile"}
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={buttonVariants({ size: "lg" })}
          >
            View Kamil Agency on Google
          </Link>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-muted-foreground">
            Review dates and wording are shown as originally published. Visit
            the live Google profile for the newest available feedback. The
            summary above reflects only the testimonials displayed on this
            website and is not presented as Kamil Agency&apos;s current live
            Google rating or total review count.
          </p>
        </div>
      </section>
    </main>
  )
}
