import type { Metadata } from "next"
import Link from "next/link"

import { TrackedLink } from "@/components/tracked-link"
import { buttonVariants } from "@/components/ui/button"
import {
  googleBusinessProfileUrl,
  googleReviewUrl,
} from "@/config/google-business"

export const metadata: Metadata = {
  title: "Opiniones de Kamil Agency",
  description:
    "Comparta una opinión honesta sobre su experiencia con Kamil Agency y vea nuestro perfil actual de Google en Washington, DC.",
  alternates: {
    canonical: "/es/opiniones",
    languages: {
      "en-US": "/reviews",
      "es-US": "/es/opiniones",
      "ar-US": "/ar/reviews",
    },
  },
}

export default function SpanishReviewsPage() {
  return (
    <main lang="es">
      <section className="bg-primary py-20 text-center text-primary-foreground md:py-28">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">
            Su experiencia importa
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Comparta su opinión sobre Kamil Agency
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-primary-foreground/80">
            Su opinión honesta puede ayudar a otra familia o negocio local a
            tomar una decisión informada sobre sus seguros.
          </p>
        </div>
      </section>

      <section className="container max-w-4xl py-16 text-center md:py-24">
        <h2 className="font-heading text-3xl font-bold">
          Deje una opinión en Google
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
          Si le ayudamos con su seguro personal o comercial, agradecemos que
          comparta su experiencia real. Unas frases sobre el servicio que
          recibió son suficientes.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <TrackedLink
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            eventName="google_review_start"
            eventParams={{ language: "es", link_location: "spanish_reviews" }}
            className={buttonVariants({ size: "lg" })}
          >
            Escribir una opinión en Google
          </TrackedLink>
          <TrackedLink
            href={googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            eventName="review_profile_click"
            eventParams={{ language: "es", link_location: "spanish_reviews" }}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Ver el perfil actual de Google
          </TrackedLink>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border bg-muted/30 p-6 text-left">
          <h2 className="font-heading text-2xl font-bold">
            ¿Qué puede mencionar?
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>El tipo de seguro con el que recibió ayuda.</li>
            <li>Qué tan clara y rápida fue la atención.</li>
            <li>Si recomendaría la agencia a otras personas.</li>
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-6 text-muted-foreground">
          Aceptamos comentarios honestos de todos los clientes. No ofrecemos
          incentivos ni exigimos una calificación positiva.
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
            href="/ar/reviews"
          >
            العربية
          </Link>
        </p>
      </section>
    </main>
  )
}
