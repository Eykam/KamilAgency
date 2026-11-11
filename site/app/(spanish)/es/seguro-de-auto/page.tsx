import type { Metadata } from "next"
import Link from "next/link"

import { SpanishServicePage } from "@/components/spanish-service-page"

export const metadata: Metadata = {
  title: "Seguro de auto en Washington, DC",
  description:
    "Compare opciones de seguro de auto en Washington, DC, Maryland y Virginia con atención local en español de Kamil Agency.",
  alternates: {
    canonical: "/es/seguro-de-auto",
    languages: {
      "en-US": "/services/auto-insurance",
      "es-US": "/es/seguro-de-auto",
      "ar-US": "/ar/auto-insurance",
    },
  },
}

export default function SpanishAutoInsurancePage() {
  return (
    <SpanishServicePage
      eyebrow="Seguro de auto"
      title="Seguro de auto con ayuda local en Washington, DC"
      description="Compare límites, deducibles y compañías con orientación en español para conductores de Washington, DC, Maryland y Virginia."
      highlights={[
        "Responsabilidad civil",
        "Colisión y cobertura amplia",
        "Conductores sin seguro o con seguro insuficiente",
        "Opciones para varios vehículos",
      ]}
      quoteHref="/quote/personal"
    >
      <h2>Protección para conducir con mayor tranquilidad</h2>
      <p>
        Una póliza de auto debe cumplir con los requisitos del lugar donde vive
        y también proteger su presupuesto después de un accidente. Kamil Agency
        ayuda a conductores del área metropolitana de Washington a comparar
        opciones de varias compañías, entender sus límites y elegir deducibles
        que tengan sentido para su situación.
      </p>
      <p>
        Nuestro equipo ofrece atención en español y explica la póliza con
        claridad. Le ayudamos a revisar el precio junto con la protección que
        recibirá, para que pueda tomar una decisión informada sin depender solo
        de la prima más baja.
      </p>

      <h2>Coberturas comunes del seguro de auto</h2>
      <p>
        Las coberturas disponibles y los requisitos cambian según el estado, la
        compañía y el vehículo. Una póliza puede incluir:
      </p>
      <ul>
        <li>
          <strong>Responsabilidad civil:</strong> ayuda a pagar lesiones o daños
          que usted cause a otras personas, hasta los límites de la póliza.
        </li>
        <li>
          <strong>Colisión:</strong> puede ayudar a reparar o reemplazar su
          vehículo después de un choque cubierto, sujeto al deducible.
        </li>
        <li>
          <strong>Cobertura amplia:</strong> puede cubrir pérdidas como robo,
          vandalismo, incendio, ciertos daños por clima o impacto con animales.
        </li>
        <li>
          <strong>Conductor sin seguro o con seguro insuficiente:</strong> puede
          ayudar cuando la persona responsable no tiene suficiente cobertura.
        </li>
        <li>
          <strong>Asistencia en carretera y auto de alquiler:</strong> son
          opciones que pueden añadirse cuando están disponibles.
        </li>
      </ul>

      <h2>Seguro de auto en DC, Maryland y Virginia</h2>
      <p>
        Cada jurisdicción tiene sus propios requisitos mínimos y procedimientos
        de registro. Además, una póliza con el mínimo legal puede no ser
        suficiente para proteger sus ingresos, ahorros o vehículo. Revisamos
        dónde vive, dónde guarda el auto, quién lo conduce y cómo lo usa para
        ayudarle a comparar límites apropiados.
      </p>
      <p>
        Si se mudó recientemente al área, tiene licencia de otro estado o desea
        añadir un conductor o vehículo, podemos explicarle qué información
        necesita la compañía. También podemos revisar opciones para hogares con
        varios autos y posibles descuentos por combinar pólizas, cuando la
        compañía los ofrece.
      </p>

      <h2>¿Qué influye en el precio?</h2>
      <p>
        El costo puede variar por el historial de manejo, el tipo y año del
        vehículo, el lugar donde se guarda, el uso anual, los conductores, los
        límites seleccionados y los deducibles. Mantener cobertura continua y
        proporcionar información correcta ayuda a obtener una comparación más
        precisa. No todas las compañías evalúan estos factores de la misma
        manera, por eso comparar puede ser útil.
      </p>

      <h2>Información para preparar una cotización</h2>
      <p>Para comenzar, tenga disponible:</p>
      <ul>
        <li>Nombres, fechas de nacimiento y licencias de los conductores.</li>
        <li>Dirección y detalles de uso de cada vehículo.</li>
        <li>Número VIN, año, marca y modelo.</li>
        <li>Información de su póliza actual y límites vigentes, si aplica.</li>
        <li>Detalles sobre préstamos o arrendamientos del vehículo.</li>
      </ul>
      <p>
        Puede iniciar una{" "}
        <Link href="/quote/personal">cotización de seguro personal</Link>,
        visitar nuestra <Link href="/es">página principal en español</Link> o{" "}
        <Link href="/contact-us">contactar a Kamil Agency</Link> para hablar con
        nuestro equipo.
      </p>

      <h2>Preguntas frecuentes</h2>
      <h3>¿Puedo obtener atención completamente en español?</h3>
      <p>
        Sí. Nuestro equipo puede ayudarle en español durante la comparación y
        explicarle los límites, deducibles y documentos principales de la
        póliza.
      </p>

      <h3>¿La póliza más barata siempre es la mejor opción?</h3>
      <p>
        No necesariamente. Un precio bajo puede venir con límites menores,
        deducibles más altos o menos coberturas. Conviene comparar el costo y la
        protección antes de elegir.
      </p>

      <h3>¿Pueden ayudarme si tengo varios vehículos?</h3>
      <p>
        Sí. Podemos revisar opciones para varios vehículos y conductores en el
        mismo hogar, según las reglas de cada compañía.
      </p>

      <h3>¿Cuándo debo revisar mi seguro de auto?</h3>
      <p>
        Revíselo cuando compre o venda un vehículo, cambie de dirección, añada
        un conductor, cambie el uso del auto o se acerque la renovación. También
        es útil revisarlo cuando su situación financiera cambia.
      </p>

      <p>
        <strong>¿Listo para comparar?</strong> Solicite una cotización o llame al
        (240) 400-7393 para recibir orientación local en español.
      </p>
    </SpanishServicePage>
  )
}
