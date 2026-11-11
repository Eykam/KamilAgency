import type { Metadata } from "next"
import Link from "next/link"

import { JsonLd } from "@/components/json-ld"
import { SpanishServicePage } from "@/components/spanish-service-page"

export const metadata: Metadata = {
  title: "Seguros en español en Washington, DC",
  description:
    "Compare seguros de auto, casa y negocio con una agencia independiente que atiende Washington, DC, Maryland y Virginia en español.",
  alternates: {
    canonical: "/es",
    languages: { "en-US": "/", "es-US": "/es", "ar-US": "/ar" },
  },
}

const questions = [
  {
    question: "¿Qué tipos de seguro ofrece Kamil Agency?",
    answer:
      "Ayudamos a comparar seguros personales y comerciales, incluyendo auto, vivienda, inquilinos, condominio, arrendadores, responsabilidad civil, compensación laboral, auto comercial y otras opciones según la necesidad.",
  },
  {
    question: "¿Atienden a clientes de Maryland y Virginia?",
    answer:
      "Sí. Nuestra oficina está en Washington, DC, y atendemos a clientes elegibles en Washington, DC, Maryland y Virginia.",
  },
  {
    question: "¿Puedo recibir ayuda completamente en español?",
    answer:
      "Sí. Nuestro equipo ofrece atención en español para recopilar información, explicar términos y ayudarle a comparar opciones disponibles. También atendemos en inglés y árabe.",
  },
  {
    question: "¿Cómo comienzo una cotización?",
    answer:
      "Puede iniciar una solicitud en línea o llamar al (240) 400-7393. Le indicaremos qué información se necesita según el tipo de seguro que busca.",
  },
]

export default function SpanishHomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <SpanishServicePage
        eyebrow="Agencia de seguros local · Washington, DC"
        title="Seguros de auto, casa y negocio con atención en español"
        description="Compare opciones de varias compañías con orientación clara para proteger su familia, propiedad o negocio en Washington, DC, Maryland y Virginia."
        highlights={[
          "Agencia independiente con acceso a varias compañías",
          "Oficina local en Washington, DC",
          "Seguros personales y comerciales",
          "Servicio en español, inglés y árabe",
        ]}
      >
        <h2>Una agencia independiente para el área de Washington</h2>
        <p>
          Kamil Agency ayuda a residentes, familias y propietarios de negocios
          del área metropolitana de Washington a comparar seguros de distintas
          compañías. Escuchamos sus prioridades, recopilamos la información
          necesaria y explicamos límites, deducibles y exclusiones en lenguaje
          sencillo.
        </p>
        <p>
          Nuestra oficina está en Washington, DC, cerca de Georgetown. Atendemos
          a clientes elegibles en DC, Maryland y Virginia, con apoyo en español
          antes y después de elegir una póliza.
        </p>

        <h2>Explore nuestros seguros</h2>
        <div className="not-prose mt-6 grid gap-4 sm:grid-cols-3">
          <Link
            href="/es/seguro-de-auto"
            className="rounded-xl border bg-background p-5 shadow-sm transition-colors hover:border-primary"
          >
            <span className="block font-semibold">Seguro de auto</span>
            <span className="mt-2 block text-sm leading-6 text-muted-foreground">
              Compare responsabilidad civil, colisión, cobertura amplia y otras
              opciones para conductores del área de DC.
            </span>
          </Link>
          <Link
            href="/es/seguro-de-casa"
            className="rounded-xl border bg-background p-5 shadow-sm transition-colors hover:border-primary"
          >
            <span className="block font-semibold">Seguro de casa</span>
            <span className="mt-2 block text-sm leading-6 text-muted-foreground">
              Proteja la vivienda, sus pertenencias y su responsabilidad con
              límites adecuados para la propiedad.
            </span>
          </Link>
          <Link
            href="/es/seguro-para-negocios"
            className="rounded-xl border bg-background p-5 shadow-sm transition-colors hover:border-primary"
          >
            <span className="block font-semibold">Seguro para negocios</span>
            <span className="mt-2 block text-sm leading-6 text-muted-foreground">
              Revise responsabilidad civil, propiedad, compensación laboral,
              auto comercial y coberturas por industria.
            </span>
          </Link>
        </div>

        <h2>Más opciones para personas y empresas</h2>
        <p>
          También podemos ayudarle a revisar seguros para inquilinos,
          condominios, arrendadores, viviendas vacantes, responsabilidad civil
          adicional y viajes. Para empresas, trabajamos con coberturas como
          responsabilidad civil general, propiedad comercial, compensación
          laboral, auto comercial, responsabilidad profesional y fianzas.
        </p>
        <p>
          La cobertura adecuada depende de su situación, ubicación, historial y
          elegibilidad. Nuestro objetivo es ayudarle a comparar opciones útiles,
          no simplemente elegir la prima más baja.
        </p>

        <h2>Cómo comenzar</h2>
        <ol>
          <li>
            Elija una <Link href="/quote">solicitud de cotización</Link> o llame
            al (240) 400-7393.
          </li>
          <li>
            Comparta información sobre el vehículo, la propiedad o el negocio
            que desea asegurar.
          </li>
          <li>
            Revise las opciones disponibles, incluidos límites, deducibles y
            exclusiones importantes.
          </li>
        </ol>

        <h2>Preguntas frecuentes</h2>
        <div className="not-prose mt-6 space-y-4">
          {questions.map(({ question, answer }) => (
            <details key={question} className="rounded-xl border p-5">
              <summary className="cursor-pointer font-semibold">
                {question}
              </summary>
              <p className="mt-3 leading-7 text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>

        <h2>Hable con nuestro equipo</h2>
        <p>
          Conozca las experiencias de otros clientes en nuestra página de{" "}
          <Link href="/es/opiniones">opiniones</Link>, inicie una{" "}
          <Link href="/quote">solicitud en línea</Link> o{" "}
          <Link href="/contact-us">contacte a Kamil Agency</Link> para recibir
          atención local en español.
        </p>
        <p>
          <em>
            La información es general. La disponibilidad, elegibilidad, precio y
            cobertura dependen de la aseguradora y de los términos de la póliza
            emitida.
          </em>
        </p>
      </SpanishServicePage>
    </>
  )
}
