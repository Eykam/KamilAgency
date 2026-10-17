import type { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { JsonLd } from "@/components/json-ld"
import { SpanishServicePage } from "@/components/spanish-service-page"

export const metadata: Metadata = {
  title: "Seguro para negocios en Washington, DC",
  description:
    "Ayuda en español para comparar seguros comerciales, responsabilidad civil y protección de propiedad para negocios en Washington, DC.",
  alternates: {
    canonical: "/es/seguro-para-negocios",
    languages: {
      "en-US": "/services/commercial-insurance",
      "es-US": "/es/seguro-para-negocios",
      "ar-US": "/ar/business-insurance",
    },
  },
}

const questions = [
  {
    question: "¿Qué seguro necesita una pequeña empresa en Washington, DC?",
    answer:
      "Depende de sus operaciones, contratos, local, empleados, vehículos y riesgos profesionales. Muchas empresas revisan responsabilidad civil general, propiedad comercial, compensación laboral y coberturas específicas para su industria.",
  },
  {
    question: "¿Cuánto cuesta un seguro para negocios?",
    answer:
      "El precio varía según la actividad, ventas, nómina, ubicación, límites, deducibles, historial de reclamaciones y coberturas seleccionadas. Una descripción precisa del negocio permite comparar cotizaciones útiles.",
  },
  {
    question: "¿Pueden ayudar con un certificado de seguro?",
    answer:
      "Podemos revisar el requisito y ayudar con certificados para una póliza elegible y vigente. Un certificado demuestra la cobertura existente, pero no cambia la póliza ni crea protección que no esté incluida.",
  },
  {
    question: "¿Atienden a propietarios de negocios en español?",
    answer:
      "Sí. Kamil Agency ofrece atención en español para explicar preguntas de cobertura, recopilar información y ayudarle a comparar opciones disponibles.",
  },
]

export default function SpanishBusinessInsurancePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Seguro para negocios en Washington, DC",
    description:
      "Ayuda en español para comparar seguros comerciales y coberturas para pequeñas empresas en Washington, DC.",
    url: `${siteConfig.url}/es/seguro-para-negocios`,
    provider: { "@id": `${siteConfig.url}/#agency` },
    areaServed: "Washington, DC",
    availableLanguage: ["Spanish", "English", "Arabic"],
  }
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
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <SpanishServicePage
        eyebrow="Seguro comercial en español"
        title="Seguro para negocios en Washington, DC"
        description="Ayudamos a propietarios de pequeñas empresas a comparar responsabilidad civil, propiedad comercial, compensación laboral, auto comercial y otras opciones con atención en español."
        quoteHref="/quote/commercial"
        highlights={[
          "Responsabilidad civil general",
          "Propiedad, equipo e inventario",
          "Compensación laboral y auto comercial",
          "Orientación en español para pequeñas empresas",
        ]}
      >
        <h2>Protección adaptada a su operación</h2>
        <p>
          Cada negocio enfrenta riesgos distintos. Revisamos qué hace la
          empresa, dónde trabaja, quiénes son sus clientes, si tiene empleados,
          vehículos, equipo o un local, y qué exige cada contrato o
          arrendamiento. Esa información ayuda a identificar las coberturas que
          merecen una comparación.
        </p>

        <h2>Coberturas que puede considerar</h2>
        <ul>
          <li>
            <strong>Responsabilidad civil general</strong> para reclamaciones
            elegibles de lesiones o daños a propiedad de terceros.
          </li>
          <li>
            <strong>Propiedad comercial</strong> para edificios, mejoras, equipo
            o inventario cubierto.
          </li>
          <li>
            <strong>Interrupción de negocios</strong> para ciertos gastos e
            ingresos perdidos después de una pérdida de propiedad cubierta.
          </li>
          <li>
            <strong>Compensación laboral</strong> para obligaciones elegibles
            relacionadas con lesiones de empleados.
          </li>
          <li>
            <strong>
              Auto comercial, responsabilidad profesional y seguro cibernético
            </strong>{" "}
            cuando las operaciones crean esos riesgos.
          </li>
        </ul>

        <h2>Información para preparar una cotización</h2>
        <p>
          Reúna el nombre legal de la empresa, una descripción completa de las
          operaciones, ventas estimadas, nómina, número de empleados,
          ubicaciones, valores de propiedad y equipo, vehículos, experiencia y
          reclamaciones anteriores. Incluya cualquier contrato, arrendamiento o
          solicitud de certificado que indique límites específicos.
        </p>

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

        <h2>Recursos relacionados</h2>
        <p>
          Explore nuestras páginas de{" "}
          <Link href="/services/general-liability-insurance">
            responsabilidad civil general
          </Link>
          ,{" "}
          <Link href="/services/commercial-auto-insurance">auto comercial</Link>{" "}
          y <Link href="/es/fianzas">fianzas</Link>, o inicie una{" "}
          <Link href="/quote/commercial">solicitud para su negocio</Link>.
        </p>
        <p>
          <em>
            La información es general. La elegibilidad, el precio y la cobertura
            dependen de la aseguradora, la suscripción y los términos de la
            póliza emitida.
          </em>
        </p>
      </SpanishServicePage>
    </>
  )
}
