import type { Metadata } from "next"
import Link from "next/link"

import { SpanishServicePage } from "@/components/spanish-service-page"

export const metadata: Metadata = {
  title: "Seguro de casa en Washington, DC",
  description:
    "Compare seguro de casa en Washington, DC, Maryland y Virginia con orientación en español para propietarios, condominios y propiedades de alquiler.",
  alternates: {
    canonical: "/es/seguro-de-casa",
    languages: {
      "en-US": "/services/homeowners-insurance",
      "es-US": "/es/seguro-de-casa",
      "ar-US": "/ar/home-insurance",
    },
  },
}

export default function SpanishHomeInsurancePage() {
  return (
    <SpanishServicePage
      eyebrow="Seguro de vivienda"
      title="Seguro de casa con orientación local en español"
      description="Compare protección para su vivienda, pertenencias y responsabilidad personal en Washington, DC, Maryland y Virginia."
      highlights={[
        "Vivienda y otras estructuras",
        "Pertenencias personales",
        "Responsabilidad personal",
        "Gastos de vivienda temporal",
      ]}
      quoteHref="/quote/personal"
    >
      <h2>Proteja más que la estructura de su casa</h2>
      <p>
        El seguro de vivienda puede ayudarle a proteger la casa, sus
        pertenencias y su responsabilidad financiera cuando ocurre una pérdida
        cubierta. Kamil Agency ayuda a propietarios del área metropolitana de
        Washington a comparar opciones de varias compañías y entender límites,
        deducibles y exclusiones antes de elegir una póliza.
      </p>
      <p>
        Nuestro equipo ofrece atención en español y explica las coberturas con
        palabras claras. Revisamos las características de la propiedad y cómo
        se utiliza para ayudarle a buscar una opción adecuada, no solamente la
        prima más baja.
      </p>

      <h2>Coberturas comunes de una póliza de vivienda</h2>
      <p>
        Las coberturas dependen de la compañía, la póliza y la propiedad. Una
        póliza para propietarios puede incluir:
      </p>
      <ul>
        <li>
          <strong>Vivienda:</strong> puede ayudar a reparar o reconstruir la
          estructura después de una pérdida cubierta.
        </li>
        <li>
          <strong>Otras estructuras:</strong> puede cubrir garajes separados,
          cercas u otras estructuras, según la póliza.
        </li>
        <li>
          <strong>Pertenencias personales:</strong> puede ayudar con muebles,
          ropa y otros bienes dañados o robados por una causa cubierta.
        </li>
        <li>
          <strong>Responsabilidad personal:</strong> puede ayudar si usted es
          legalmente responsable por lesiones o daños a otra persona.
        </li>
        <li>
          <strong>Gastos de vivienda temporal:</strong> puede ayudar con gastos
          adicionales si una pérdida cubierta deja la casa inhabitable.
        </li>
      </ul>

      <h2>El costo de reconstrucción no es el valor de mercado</h2>
      <p>
        El límite de la vivienda normalmente se basa en lo que podría costar
        reconstruir la casa con materiales y mano de obra actuales. No es lo
        mismo que el precio de venta, el valor fiscal o el saldo de la hipoteca.
        El tamaño, los materiales, las renovaciones y las características
        especiales pueden cambiar esa estimación.
      </p>
      <p>
        Revisar el límite después de una remodelación, una ampliación o un
        aumento importante en costos de construcción ayuda a mantener la póliza
        alineada con la propiedad.
      </p>

      <h2>Viviendas del área de DC, Maryland y Virginia</h2>
      <p>
        En el área metropolitana hay casas adosadas, viviendas antiguas,
        condominios, sótanos terminados y propiedades de alquiler. Cada una
        puede necesitar una revisión diferente. La edad del techo y de los
        sistemas eléctricos, de plomería y calefacción también puede influir en
        las opciones disponibles.
      </p>
      <p>
        Una póliza para propietarios no reemplaza automáticamente una póliza de
        condominio, inquilino o arrendador. Si ocupa un condominio, alquila su
        vivienda o posee una propiedad de inversión, es importante informar el
        uso correcto para comparar el tipo de póliza apropiado.
      </p>

      <h2>Agua, inundación y respaldo de alcantarillado</h2>
      <p>
        No todos los daños por agua se cubren de la misma manera. El seguro de
        vivienda generalmente no cubre inundaciones provenientes del exterior,
        y el respaldo de agua o alcantarillado puede requerir una cobertura
        adicional. Revisamos estas diferencias para que sepa qué preguntar y
        qué opciones pueden estar disponibles.
      </p>

      <h2>¿Qué influye en el precio?</h2>
      <p>
        El costo puede variar por la ubicación, el costo estimado de
        reconstrucción, la antigüedad y condición de la casa, el historial de
        reclamaciones, los límites, el deducible y las coberturas opcionales.
        Las compañías también pueden considerar actualizaciones del techo y de
        los sistemas principales, así como dispositivos de protección cuando
        corresponda.
      </p>

      <h2>Información para preparar una cotización</h2>
      <p>Para comparar opciones, tenga disponible:</p>
      <ul>
        <li>La dirección y el uso actual de la propiedad.</li>
        <li>El año de construcción, tamaño y tipo de estructura.</li>
        <li>La edad y las actualizaciones del techo y sistemas principales.</li>
        <li>Información de la póliza actual, si tiene una.</li>
        <li>Datos de la hipoteca, condominio o arrendamiento, cuando apliquen.</li>
        <li>Detalles de renovaciones, alarmas y otras características.</li>
      </ul>
      <p>
        Puede iniciar una{" "}
        <Link href="/quote/personal">cotización de seguro personal</Link>,
        visitar nuestra <Link href="/es">página principal en español</Link> o{" "}
        <Link href="/contact-us">contactar a Kamil Agency</Link> para hablar con
        nuestro equipo.
      </p>

      <h2>Preguntas frecuentes</h2>
      <h3>¿El prestamista decide cuánta cobertura necesito?</h3>
      <p>
        El prestamista puede exigir seguro, pero su requisito no siempre refleja
        el costo completo de reconstrucción ni la protección de sus
        pertenencias y responsabilidad. Conviene revisar todos los límites.
      </p>

      <h3>¿El seguro de casa incluye cobertura contra inundación?</h3>
      <p>
        Generalmente no. La inundación suele requerir una póliza separada.
        Podemos ayudarle a identificar esta diferencia y revisar las opciones
        disponibles para su propiedad.
      </p>

      <h3>¿Necesito una póliza diferente para una propiedad de alquiler?</h3>
      <p>
        Sí, normalmente una propiedad alquilada necesita cobertura diseñada
        para arrendadores. El uso correcto de la propiedad debe informarse a la
        compañía.
      </p>

      <h3>¿Cuándo debo revisar mi póliza?</h3>
      <p>
        Revísela al renovar, remodelar, comprar artículos de valor, cambiar el
        uso de la propiedad o realizar mejoras importantes. También es útil
        revisarla cuando cambia su situación financiera.
      </p>

      <p>
        <strong>¿Listo para comparar?</strong> Solicite una cotización o llame al
        (240) 400-7393 para recibir orientación local en español.
      </p>
    </SpanishServicePage>
  )
}
