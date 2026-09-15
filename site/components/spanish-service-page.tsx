import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TrackedLink } from "@/components/tracked-link"

type SpanishServicePageProps = {
  eyebrow: string
  title: string
  description: string
  highlights: string[]
  children: React.ReactNode
}

export function SpanishServicePage({
  eyebrow,
  title,
  description,
  highlights,
  children,
}: SpanishServicePageProps) {
  return (
    <>
      <section className="bg-gradient-to-br from-background via-secondary to-accent/30 py-20 md:py-28">
        <div className="container max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary/70">
            {eyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl font-heading text-4xl sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href="/quote"
              className={cn(buttonVariants({ size: "lg" }), "min-w-44")}
              eventName="quote_start"
              eventParams={{ link_location: "spanish_landing" }}
            >
              Solicitar una cotización
            </TrackedLink>
            <TrackedLink
              href="tel:+12404007393"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "min-w-44 bg-background"
              )}
              eventName="click_to_call"
              eventParams={{ link_location: "spanish_landing" }}
            >
              Llamar al (240) 400-7393
            </TrackedLink>
          </div>
          <p className="mt-5 text-sm font-semibold">
            Atención en español, inglés y árabe.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {children}
          </div>
          <aside className="h-fit rounded-2xl border border-primary/15 bg-secondary p-6 shadow-sm">
            <h2 className="font-heading text-2xl">Ayuda clara y local</h2>
            <ul className="mt-5 space-y-3">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="font-bold text-primary">
                    ✓
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-7 w-full bg-background"
              )}
            >
              Contactar a Kamil Agency
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}
