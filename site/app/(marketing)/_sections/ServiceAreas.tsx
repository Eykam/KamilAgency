import Link from "next/link"

const neighborhoods = [
  { name: "Georgetown", href: "/services/home-insurance-georgetown" },
  { name: "Glover Park", href: "/services/home-insurance-glover-park" },
  { name: "Cathedral Heights", href: "/services/home-insurance-cathedral-heights" },
  { name: "Cleveland Park" },
  { name: "Tenleytown" },
  { name: "Chevy Chase" },
  { name: "Woodley Park" },
  { name: "Palisades" },
] as const

export default function ServiceAreasSection() {
  return (
    <section
      aria-labelledby="service-areas-heading"
      className="bg-secondary py-16 md:py-24"
    >
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            DMV Area service coverage
          </p>
          <h2
            id="service-areas-heading"
            className="mt-3 font-heading text-3xl md:text-5xl"
          >
            Coverage guidance across Washington, DC, Maryland & Virginia
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            DC homes, vehicles, rental properties, and small businesses each
            come with local considerations. Our team helps clients compare
            coverage with those realities in mind—without jargon or pressure.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            We also serve clients across the surrounding region and in the
            additional states where Kamil Agency operates.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Explore Insurance Services
            </Link>
            <Link
              href="/contact-us"
              className="rounded-md border bg-background px-5 py-3 text-sm font-semibold"
            >
              Contact the DC Office
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Nearby communities we serve</h3>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {neighborhoods.map((neighborhood) => (
              <li
                key={neighborhood.name}
                className="rounded-lg border bg-card px-4 py-3 text-sm font-medium"
              >
                {"href" in neighborhood ? (
                  <Link
                    href={neighborhood.href}
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    {neighborhood.name}, DC
                  </Link>
                ) : (
                  <>{neighborhood.name}, DC</>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
