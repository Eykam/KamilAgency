import type { Metadata } from "next"

import { SpanishServicePage } from "@/components/spanish-service-page"

export const metadata: Metadata = {
  title: "Seguro de casa en Washington, DC",
  description:
    "Compare seguro para propietarios de vivienda en Washington, DC con ayuda en español para su casa, pertenencias y responsabilidad civil.",
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
      title="Proteja su casa con explicaciones claras en español"
      description="Revise la protección de su vivienda, pertenencias y responsabilidad personal con un equipo local de Washington, DC."
      highlights={[
        "Vivienda y otras estructuras",
        "Pertenencias personales",
        "Responsabilidad personal",
        "Gastos de vivienda temporal",
      ]}
    >
      <h2>Más que cumplir con el requisito del prestamista</h2>
      <p>
        Una póliza de vivienda debe considerar el costo de reconstrucción, sus
        pertenencias y los riesgos particulares de su propiedad. Le ayudamos a
        revisar esas decisiones antes de seleccionar una opción.
      </p>
      <h2>También ayudamos con propiedades especiales</h2>
      <p>
        Pregunte por opciones para condominios, propiedades de alquiler,
        viviendas vacantes y cobertura adicional de responsabilidad.
      </p>
    </SpanishServicePage>
  )
}
