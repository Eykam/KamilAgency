import Image from "next/image"
import Link from "next/link"
import { carriers } from "@/config/carriers"
import { Carrier } from "@/types"

type CarrierCardProps = React.HTMLAttributes<HTMLDivElement> & Carrier

function CarrierCard({ name, descriptionShort, logo, url }: CarrierCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-primary/30 bg-background p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl ">
      <Link href={url || ""} className="flex flex-col items-center">
        <Image
          src={logo}
          width={80}
          height={80}
          alt={`Carrier Logo - ${name}`}
          className="mb-4 size-20 object-contain"
        />
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="text-center text-gray-500 dark:text-gray-400">
          {descriptionShort}
        </p>
      </Link>
    </div>
  )
}

export default function CarriersPage() {
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
