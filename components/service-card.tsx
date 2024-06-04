import { cn } from "@/lib/utils"
import { Service } from "@/types"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background/80 p-2">
      <div className="flex h-[180px] flex-col items-center justify-between rounded-md p-6 text-center">
        {service.icon}

        <div className="space-y-2">
          <h3 className="font-bold">{service.name}</h3>
          <p className="text-sm text-muted-foreground">{service.description}</p>
          <Link
            href={service.quoteURL}
            className={cn(buttonVariants({ size: "xs" }))}
            target="_blank"
            rel="nofollow"
          >
            Get A Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
