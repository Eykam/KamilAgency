import type { Metadata } from "next"
import Link from "next/link"

import { SpanishServicePage } from "@/components/spanish-service-page"

export const metadata: Metadata = {
  title: "Fianzas en Washington, DC",
  description:
    "Ayuda en español con fianzas de licencia y permiso, contratistas, licitación, cumplimiento, pago y otras fianzas comerciales en DC, Maryland y Virginia.",
  keywords:
    "fianzas Washington DC, fianzas para contratistas, fianzas de licencia y permiso, fianza de licitación, fianza de cumplimiento, fianza de pago",
  alternates: {
    canonical: "/es/fianzas",
    languages: {
      "en-US": "/services/surety-bonds",
      "es-US": "/es/fianzas",
      "ar-US": "/ar/surety-bonds",
    },
  },
}

export default function SpanishSuretyBondsPage() {
  return (
    <SpanishServicePage
      eyebrow="Fianzas comerciales"
      title="Fianzas en Washington, DC"
      description="Kamil Agency ayuda a negocios, contratistas y profesionales a solicitar fianzas para licencias, permisos y contratos elegibles en Washington, DC, Maryland y Virginia."
      highlights={[
        "Fianzas de licencia y permiso",
        "Fianzas para contratistas",
        "Fianzas de licitación, cumplimiento y pago",
        "Otras fianzas comerciales",
      ]}
    >
      <h2>Orientación clara para solicitar una fianza</h2>
      <p>
        Una solicitud normalmente comienza con un requisito específico de una
        autoridad de licencias, agencia gubernamental, propietario de proyecto o
        contrato. Podemos revisar el formulario y el monto, explicar la
        información que puede pedir la compañía afianzadora y ayudar a enviar
        solicitudes elegibles a un mercado disponible.
      </p>

      <h2>Tipos de fianzas que podemos revisar</h2>
      <h3>Fianzas de licencia y permiso</h3>
      <p>
        Para actividades profesionales, permisos y negocios regulados cuando una
        agencia gubernamental exige una fianza elegible.
      </p>
      <h3>Fianzas para contratistas</h3>
      <p>
        Para requisitos relacionados con licencias de contratistas, trabajos de
        construcción y obligaciones frente a propietarios o entidades públicas.
      </p>
      <h3>Fianzas de licitación, cumplimiento y pago</h3>
      <p>
        Ayuda para identificar los documentos de fianza contractual solicitados
        en proyectos de construcción públicos o privados elegibles.
      </p>
      <h3>Otras fianzas comerciales</h3>
      <p>
        Envíenos el formulario o requisito recibido para determinar si existe un
        mercado apropiado.
      </p>

      <h2>¿Para quién puede ser útil?</h2>
      <ul>
        <li>Contratistas que licitan o realizan trabajos con fianza.</li>
        <li>Negocios que solicitan licencias o permisos.</li>
        <li>Profesionales que recibieron un requisito de una agencia.</li>
        <li>Empresas que necesitan un formulario de fianza comercial.</li>
      </ul>

      <h2>Requisitos locales</h2>
      <p>
        Los formularios, montos, procedimientos de presentación y reglas de
        elegibilidad pueden variar entre Washington, DC, Maryland, Virginia, los
        municipios, las autoridades de licencias y los propietarios de
        proyectos. Envíe el requisito exacto siempre que sea posible.
      </p>

      <h2>Información que debe preparar</h2>
      <ul>
        <li>El formulario o requisito escrito de la entidad beneficiaria.</li>
        <li>El monto requerido y la fecha de vigencia solicitada.</li>
        <li>Información del negocio, propietarios, dirección y contacto.</li>
        <li>Detalles de la licencia, permiso, licitación o contrato.</li>
        <li>Información financiera o de experiencia para la evaluación.</li>
      </ul>

      <h2>Preguntas frecuentes</h2>
      <h3>¿Una fianza es lo mismo que un seguro comercial?</h3>
      <p>
        No. Generalmente, una fianza es un acuerdo entre tres partes: el
        principal que debe obtenerla, la entidad beneficiaria que la exige y la
        compañía afianzadora. Si la afianzadora paga una reclamación válida,
        puede solicitar el reembolso al principal.
      </p>
      <h3>¿Cuánto cuesta una fianza?</h3>
      <p>
        Depende del tipo y monto, las calificaciones e historial financiero del
        solicitante, su experiencia y los requisitos de evaluación de la
        compañía. El precio solo puede confirmarse después de revisar una
        solicitud completa.
      </p>
      <h3>¿Solicitar una cotización garantiza la aprobación?</h3>
      <p>
        No. La disponibilidad, aprobación, precio y condiciones dependen de la
        evaluación de la compañía afianzadora y de los requisitos de la entidad
        beneficiaria.
      </p>

      <h2>Servicios relacionados</h2>
      <p>
        También puede revisar nuestro{" "}
        <Link href="/es/seguro-para-negocios">seguro para negocios</Link> o{" "}
        <Link href="/contact-us">contactar a Kamil Agency</Link>.
      </p>
    </SpanishServicePage>
  )
}
