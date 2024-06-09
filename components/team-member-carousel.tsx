import { cn } from "@/lib/utils"
import TeamMemberCard from "./team-member-card"
import { team } from "@/config/team"

type TeamMemberCarouselProps = React.HTMLAttributes<HTMLDivElement> & {}

export default function TeamMemberCarousel({
  className,
}: TeamMemberCarouselProps) {
  return (
    <section
      id="team"
      className={cn(
        "flex min-h-screen w-full items-center justify-center bg-background py-12 md:py-24",
        className
      )}
    >
      <div className="container space-y-12 px-4 max-sm:w-[90%] md:px-6">
        <div className="space-y-4 lg:px-12">
          <div className="inline-block rounded-lg border-2 border-primary/20 bg-accent px-3 py-1 text-sm">
            Meet the Team
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Experienced Professionals
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get to know the dedicated team behind our insurance solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3  lg:px-12">
          {team.map((member) => (
            <TeamMemberCard {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
