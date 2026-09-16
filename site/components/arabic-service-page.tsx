import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TrackedLink } from "@/components/tracked-link"

type ArabicServicePageProps = {
  children: React.ReactNode
}

export function ArabicServicePage({ children }: ArabicServicePageProps) {
  return (
    <main dir="rtl" lang="ar">
      <section className="bg-gradient-to-br from-background via-secondary to-accent/30 py-20 md:py-28">
        <div className="container max-w-5xl text-center">
          <p className="text-sm font-semibold tracking-wider text-primary/70">
            وكالة كامل للتأمين · واشنطن العاصمة
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl font-heading text-4xl sm:text-5xl md:text-6xl">
            تأمين السيارات والمنازل والأعمال بخدمة باللغة العربية
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">
            يساعدك فريقنا المحلي على مقارنة خيارات التغطية وفهم حدود التأمين
            ومبالغ التحمل بوضوح، حتى تتخذ قراراً يناسب احتياجاتك.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row-reverse">
            <TrackedLink
              href="/ar/quote"
              className={cn(buttonVariants({ size: "lg" }), "min-w-44")}
              eventName="quote_start"
              eventParams={{ link_location: "arabic_landing" }}
            >
              اطلب عرض تأمين
            </TrackedLink>
            <TrackedLink
              href="tel:+12404007393"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "min-w-44 bg-background"
              )}
              eventName="click_to_call"
              eventParams={{ link_location: "arabic_landing" }}
            >
              اتصل على ‎(240) 400-7393
            </TrackedLink>
          </div>
          <p className="mt-5 text-sm font-semibold">
            نخدمكم بالعربية والإنجليزية والإسبانية.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="prose prose-lg max-w-none text-right dark:prose-invert">
            {children}
          </div>
          <aside className="h-fit rounded-2xl border border-primary/15 bg-secondary p-6 shadow-sm">
            <h2 className="font-heading text-2xl">مساعدة محلية واضحة</h2>
            <ul className="mt-5 space-y-3">
              {[
                "مكتب محلي في واشنطن العاصمة",
                "خدمة شخصية ومباشرة",
                "خيارات للأفراد والعائلات والشركات",
                "شرح واضح باللغة التي تفضلها",
              ].map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="font-bold text-primary">
                    ✓
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/ar/quote"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-7 w-full bg-background"
              )}
            >
              اطلب المساعدة بالعربية
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
