import type { Metadata } from "next"
import Link from "next/link"

import { TrackedLink } from "@/components/tracked-link"
import { buttonVariants } from "@/components/ui/button"
import {
  googleBusinessProfileUrl,
  googleReviewUrl,
} from "@/config/google-business"

export const metadata: Metadata = {
  title: "آراء عملاء Kamil Agency",
  description:
    "شارك رأيك الصادق عن تجربتك مع Kamil Agency واطّلع على ملفنا الحالي في Google في واشنطن العاصمة.",
  alternates: {
    canonical: "/ar/reviews",
    languages: {
      "en-US": "/reviews",
      "es-US": "/es/opiniones",
      "ar-US": "/ar/reviews",
    },
  },
}

export default function ArabicReviewsPage() {
  return (
    <main dir="rtl" lang="ar">
      <section className="bg-primary py-20 text-center text-primary-foreground md:py-28">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold text-primary-foreground/75">
            تجربتك تهمنا
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            شارك رأيك عن Kamil Agency
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-primary-foreground/80">
            رأيك الصادق قد يساعد أسرة أو شركة محلية أخرى على اتخاذ قرار واعٍ
            بشأن التأمين.
          </p>
        </div>
      </section>

      <section className="container max-w-4xl py-16 text-center md:py-24">
        <h2 className="font-heading text-3xl font-bold">
          اكتب تقييماً على Google
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
          إذا ساعدناك في تأمين شخصي أو تجاري، يسعدنا أن تشارك تجربتك الحقيقية.
          تكفي بضع جمل عن الخدمة التي تلقيتها.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <TrackedLink
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            eventName="google_review_start"
            eventParams={{ language: "ar", link_location: "arabic_reviews" }}
            className={buttonVariants({ size: "lg" })}
          >
            اكتب تقييماً على Google
          </TrackedLink>
          <TrackedLink
            href={googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            eventName="review_profile_click"
            eventParams={{ language: "ar", link_location: "arabic_reviews" }}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            شاهد ملف Google الحالي
          </TrackedLink>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border bg-muted/30 p-6 text-right">
          <h2 className="font-heading text-2xl font-bold">
            ما الذي يمكنك ذكره؟
          </h2>
          <ul className="mt-4 list-disc space-y-2 pr-6 text-muted-foreground">
            <li>نوع التأمين الذي حصلت على مساعدة بشأنه.</li>
            <li>مدى وضوح وسرعة الخدمة.</li>
            <li>هل توصي بالوكالة للآخرين.</li>
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-6 text-muted-foreground">
          نرحب بالتعليقات الصادقة من جميع العملاء. لا نقدم حوافز ولا نشترط
          تقييماً إيجابياً.
        </p>
        <p className="mt-6 text-sm">
          <Link
            className="font-semibold text-primary hover:underline"
            href="/reviews"
          >
            English
          </Link>{" "}
          ·{" "}
          <Link
            className="font-semibold text-primary hover:underline"
            href="/es/opiniones"
          >
            Español
          </Link>
        </p>
      </section>
    </main>
  )
}
