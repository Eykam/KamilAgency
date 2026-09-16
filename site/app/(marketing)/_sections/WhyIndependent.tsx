import Link from "next/link"

const benefits = [
  {
    title: "More choice",
    description:
      "Compare options from multiple insurance companies instead of being limited to a single carrier.",
  },
  {
    title: "Advice built around you",
    description:
      "Get help weighing coverage, limits, deductibles, and price in plain language.",
  },
  {
    title: "An advocate when things change",
    description:
      "Turn to a local team for renewal reviews, policy questions, and guidance when a claim occurs.",
  },
  {
    title: "Ongoing local service",
    description:
      "Work with people who know the DC market and can help as your home, vehicles, or business evolve.",
  },
] as const

export default function WhyIndependentSection() {
  return (
    <section
      aria-labelledby="why-independent-heading"
      className="bg-background py-16 md:py-24"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Why an independent agency?
          </p>
          <h2
            id="why-independent-heading"
            className="mt-3 font-heading text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Choice at the start. Support for the life of your policy.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Kamil Agency combines access to multiple markets with personal,
            local guidance before and after you buy coverage.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-2xl border bg-card p-6 shadow-sm"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/contact-us"
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            Talk with an independent local agent
          </Link>
        </p>
      </div>
    </section>
  )
}
