import type { Metadata } from "next"
import Link from "next/link"

import { SpanishServicePage } from "@/components/spanish-service-page"

export const metadata: Metadata = {
  title: "Seguros en español en Washington, DC",
  description:
    "Compare seguros de auto, casa y negocio con una agencia local de Washington, DC. Atención en español, inglés y árabe.",
  alternates: {
    canonical: "/es",
    languages: { "en-US": "/", "es-US": "/es" },
  },
}

export default function SpanishHomePage() {
  return (
    <SpanishServicePage
      eyebrow="Kamil Agency · Washington, DC"
      title="Seguros de auto, casa y negocio con atención en español"
      description="Nuestro equipo local le ayuda a comparar opciones de cobertura, entender sus deducibles y avanzar con confianza—sin presión ni explicaciones complicadas."
      highlights={[
        "Oficina local en Washington, DC",
        "Atención personalizada y humana",
        "Opciones para personas, familias y negocios",
        "Servicio en español, inglés y árabe",
      ]}
    >
      <h2>Protección para lo que más importa</h2>
      <p>
        Kamil Agency ayuda a residentes y dueños de negocios del área de
        Washington, DC a encontrar seguros que respondan a sus necesidades.
        Revisamos sus prioridades y le explicamos las opciones en lenguaje
        sencillo.
      </p>
      <h2>Explore nuestros seguros</h2>
      <div className="not-prose mt-6 grid gap-4 sm:grid-cols-3">
        <Link
          href="/es/seguro-de-auto"
          className="rounded-xl border bg-background p-5 font-semibold shadow-sm hover:border-primary"
        >
          Seguro de auto
        </Link>
        <Link
          href="/es/seguro-de-casa"
          className="rounded-xl border bg-background p-5 font-semibold shadow-sm hover:border-primary"
        >
          Seguro de casa
        </Link>
        <Link
          href="/es/seguro-para-negocios"
          className="rounded-xl border bg-background p-5 font-semibold shadow-sm hover:border-primary"
        >
          Seguro para negocios
        </Link>
      </div>
      <h2>Una conversación es un buen primer paso</h2>
      <p>
        Llame a nuestra oficina o envíe una solicitud en línea. Un integrante de
        nuestro equipo puede ayudarle a identificar la información necesaria
        para comenzar una cotización.
      </p>
    </SpanishServicePage>
  )
}
