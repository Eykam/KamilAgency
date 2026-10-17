import type { Metadata } from "next"
import Link from "next/link"

import { TrackedLink } from "@/components/tracked-link"
import { buttonVariants } from "@/components/ui/button"
import {
  googleBusinessProfileUrl,
  googleReviewUrl,
} from "@/config/google-business"
import { reviews } from "@/config/reviews"

export const metadata: Metadata = {
  title: "Kamil Agency Client Reviews",
  description:
    "Read client testimonials and share an honest Google review about Kamil Agency in Washington, DC.",
  alternates: {
    canonical: "/reviews",
    languages: {
      "en-US": "/reviews",
      "es-US": "/es/opiniones",
      "ar-US": "/ar/reviews",
    },
  },
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
              key={review.name + "-" + review.timestamp}
              className="flex h-full flex-col rounded-2xl border bg-background p-6 shadow-sm"
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

        <div className="mt-12 rounded-2xl border bg-muted/30 p-6 text-center md:p-10">
          <h2 className="font-heading text-3xl font-bold">
            Share your honest experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            If Kamil Agency helped you with personal or business insurance, your
            honest Google review can help another local customer make an
            informed decision.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              eventName="google_review_start"
              eventParams={{ language: "en", link_location: "reviews_page" }}
              className={buttonVariants({ size: "lg" })}
            >
              Leave a Google Review
            </TrackedLink>
            <TrackedLink
              href={googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              eventName="review_profile_click"
              eventParams={{ language: "en", link_location: "reviews_page" }}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              View Current Google Profile
            </TrackedLink>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Prefer another language?{" "}
            <Link
              className="font-semibold text-primary hover:underline"
              href="/es/opiniones"
            >
              Español
            </Link>{" "}
            ·{" "}
            <Link
              className="font-semibold text-primary hover:underline"
              href="/ar/reviews"
            >
              العربية
            </Link>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-muted-foreground">
            Review dates and wording are shown as originally published. The
            summary above reflects only historical testimonials displayed on
            this website and is not Kamil Agency&apos;s current live Google
            rating or total review count. We welcome honest feedback from every
            client; no purchase, incentive, or positive rating is required.
          </p>
        </div>
      </section>
    </main>
  )
}
