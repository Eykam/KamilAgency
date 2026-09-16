import Image from "next/image"
import Link from "next/link"

import { team } from "@/config/team"

export default function LocalTeamSection() {
  return (
    <section aria-labelledby="local-team-heading" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            People, not a call center
          </p>
          <h2
            id="local-team-heading"
            className="mt-3 font-heading text-3xl md:text-5xl"
          >
            Meet your local insurance team
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            These are the people who answer questions, review options, and help
            clients from our Washington, DC office—not stock photos or a remote
            call center.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Link
              key={member.name}
              href={member.pageUrl}
              className="group rounded-2xl border bg-card p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {member.avatar ? (
                <Image
                  src={member.avatar}
                  alt={`${member.name}, ${member.title} at Kamil Agency`}
                  width={320}
                  height={320}
                  sizes="(max-width: 640px) 70vw, 28vw"
                  className="mx-auto aspect-square w-full max-w-64 rounded-xl object-cover"
                />
              ) : null}
              <h3 className="mt-5 text-xl font-semibold group-hover:text-accent">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {member.title}
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/about-us"
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            Learn more about Kamil Agency
          </Link>
        </p>
      </div>
    </section>
  )
}
