import type { Metadata } from "next"

import { SpanishServicePage } from "@/components/spanish-service-page"

export const metadata: Metadata = {
  title: "Seguro para negocios en Washington, DC",
  description:
    "Ayuda en español para comparar seguros comerciales, responsabilidad civil y protección de propiedad para negocios en Washington, DC.",
  alternates: { canonical: "/es/seguro-para-negocios" },
}

export default function SpanishBusinessInsurancePage() {
  return (
    <SpanishServicePage
      eyebrow="Seguro comercial"
      title="Cobertura para negocios con atención personal"
      description="Ayudamos a propietarios de negocios a identificar riesgos y comparar opciones de protección en Washington, DC y la región."
      highlights={[
        "Responsabilidad civil general",
        "Propiedad y equipo comercial",
        "Opciones para contratistas",
        "Orientación para pequeñas empresas",
      ]}
    >
      <h2>Protección adaptada a su operación</h2>
      <p>
        Cada negocio enfrenta riesgos distintos. Nuestro equipo le ayuda a
        explicar su operación, revisar requisitos de contratos o arrendamientos
        y considerar las coberturas que pueden responder a esos riesgos.
      </p>
      <h2>Prepare la información de su negocio</h2>
      <p>
        Para comenzar, reúna una descripción de sus operaciones, ingresos
        estimados, número de empleados, ubicación y cualquier requisito de
        seguro solicitado por sus clientes o propietario del local.
      </p>
    </SpanishServicePage>
  )
}
