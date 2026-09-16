import type { Metadata } from "next"

import { SpanishServicePage } from "@/components/spanish-service-page"

export const metadata: Metadata = {
  title: "Seguro de auto en Washington, DC",
  description:
    "Obtenga ayuda en español para comparar seguro de auto en Washington, DC, incluyendo responsabilidad civil, colisión y cobertura amplia.",
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
      description="Entienda sus límites, deducibles y opciones antes de elegir una póliza para su vehículo."
      highlights={[
        "Responsabilidad civil",
        "Colisión y cobertura amplia",
        "Conductores sin seguro o con seguro insuficiente",
        "Opciones para varios vehículos",
      ]}
    >
      <h2>Compare la cobertura adecuada para usted</h2>
      <p>
        El precio es importante, pero también lo es saber qué protección tendrá
        después de un accidente. Nuestro equipo le ayuda a revisar las opciones
        según su vehículo, historial y necesidades familiares.
      </p>
      <h2>Información útil para comenzar</h2>
      <p>
        Tenga a mano los datos de los conductores, vehículos, cobertura actual y
        dirección donde guarda el automóvil. Esto ayuda a preparar una
        cotización más precisa.
      </p>
    </SpanishServicePage>
  )
}
