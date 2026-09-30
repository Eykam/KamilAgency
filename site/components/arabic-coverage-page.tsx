import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type ArabicCoveragePageProps = {
  eyebrow: string
  title: string
  description: string
  items: readonly { title: string; description: string }[]
  sections: readonly {
    title: string
    paragraphs: readonly string[]
    bullets?: readonly string[]
  }[]
}

export function ArabicCoveragePage({
  eyebrow,
  title,
  description,
  items,
  sections,
}: ArabicCoveragePageProps) {
  return (
    <div>
      <section className="bg-gradient-to-br from-background via-secondary to-accent/20 py-20 text-center md:py-28">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold text-primary">{eyebrow}</p>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row-reverse">
            <Link
              href="/ar/quote"
              className={cn(buttonVariants({ size: "lg" }), "min-w-40")}
            >
              اطلب عرض تأمين
            </Link>
            <a
              href="tel:+12404007393"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "min-w-40 bg-background"
              )}
            >
              اتصل بنا
            </a>
          </div>
        </div>
      </section>
      <section className="container max-w-6xl py-16 md:py-24">
        <h2 className="text-center font-heading text-3xl font-bold">
          ما الذي يمكننا مساعدتك في مراجعته؟
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border bg-background p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-4xl space-y-12 text-right">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-3xl font-bold">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border bg-secondary/40 p-4 leading-7"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-muted-foreground">
          تعتمد الأسعار والأهلية والتغطية على شركة التأمين والاكتتاب وظروف كل
          طلب. نساعدك على فهم الخيارات المتاحة ولا نضمن إصدار وثيقة أو سعراً
          معيناً.
        </p>
      </section>
    </div>
  )
}
