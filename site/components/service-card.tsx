import { cn } from "@/lib/utils"
import { Service } from "@/types"
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"

export default function ServiceCard({
  service,
  pageLink = false,
}: {
  service: Service
  pageLink?: boolean
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background/80 p-2 duration-150 hover:scale-105">
      <Link href={service.pageURL}>
        <div className="flex h-[180px] flex-col items-center justify-between rounded-md p-6 text-center">
          {service.icon}

          <div className="space-y-2">
            <h3 className="font-bold">{service.name}</h3>
            <p className="text-sm text-muted-foreground">
              {service.descriptionShort}
            </p>

            <div className="w-full justify-between space-x-4">
              <Button
                className={cn(
                  buttonVariants({ size: "xs", variant: "default" }),
                  "w-2/5"
                )}
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
