const proofPoints = [
  {
    value: "Washington, DC",
    label: "Local office on Wisconsin Avenue",
  },
  {
    value: "3 languages",
    label: "Service in English, Spanish, and Arabic",
  },
  {
    value: "Personal + business",
    label: "Coverage guidance for households and organizations",
  },
  {
    value: "DC metro + beyond",
    label: "Regional service, subject to licensing and availability",
  },
] as const

export default function ExperienceProofSection() {
  return (
    <section
      aria-labelledby="experience-proof-heading"
      className="border-y bg-secondary/50 py-12"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Local credentials you can verify
          </p>
          <h2
            id="experience-proof-heading"
            className="mt-3 font-heading text-2xl font-bold sm:text-3xl"
          >
            Real people, a real DC office, and clear ways to reach us
          </h2>
        </div>

        <dl className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.value} className="rounded-xl border bg-background p-5">
              <dt className="text-sm leading-6 text-muted-foreground">
                {point.label}
              </dt>
              <dd className="mt-2 text-lg font-semibold">{point.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-muted-foreground">
          Insurance availability varies by state, product, carrier, and risk.
          Contact the agency to confirm licensing and availability for your
          location and coverage needs.
        </p>
      </div>
    </section>
  )
}
