import Image from "next/image"
import Link from "next/link"

type CarrierCardProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string
  description: string
  logo: string
  link?: string
}

function CarrierCard({ name, description, logo, link }: CarrierCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-primary/30 bg-background p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl ">
      <Link href={link || ""} className="flex flex-col items-center">
        <Image
          src="/images/placeholder.svg"
          width={80}
          height={80}
          alt={`Carrier Logo - ${name}`}
          className="mb-4 size-20 object-contain"
        />
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="text-center text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </Link>
    </div>
  )
}

export default function CarriersPage() {
  const carriers = [
    {
      name: "Acme Insurance",
      description:
        "Providing comprehensive coverage for individuals and businesses.",
      logo: "/placeholder-logo.svg",
    },
    {
      name: "Apex Insurance",
      description: "Specializing in auto, home, and life insurance solutions.",
      logo: "/placeholder-logo.svg",
    },
    {
      name: "Zenith Insurance",
      description:
        "Offering tailored insurance solutions for businesses and individuals.",
      logo: "/placeholder-logo.svg",
    },
    {
      name: "Emerald Insurance",
      description:
        "Providing innovative insurance products for modern lifestyles.",
      logo: "/placeholder-logo.svg",
    },
    {
      name: "Horizon Insurance",
      description:
        "Protecting your future with reliable and affordable coverage.",
      logo: "/placeholder-logo.svg",
    },
    {
      name: "Pinnacle Insurance",
      description: "Customizing insurance plans to fit your unique needs.",
      logo: "/placeholder-logo.svg",
    },
    {
      name: "Evergreen Insurance",
      description:
        "Committed to delivering exceptional service and peace of mind.",
      logo: "/placeholder-logo.svg",
    },
    {
      name: "Sapphire Insurance",
      description:
        "Empowering you to make informed decisions about your coverage.",
      logo: "/placeholder-logo.svg",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Insurance Carriers
            </h2>
            <p className="max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We&apos;ve partnered with leading insurance providers to offer you
              the best coverage options.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {carriers.map((carrier) => (
            <CarrierCard {...carrier} />
          ))}
        </div>
      </div>
    </section>
  )
}
