import type { ComponentProps } from "react"
import Link from "next/link"

type EventValue = string | number | boolean

type TrackedLinkProps = Omit<ComponentProps<typeof Link>, "onClick"> & {
  eventName: string
  eventParams?: Record<string, EventValue>
}

export function TrackedLink({
  eventName,
  eventParams = {},
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      data-analytics-tracked="true"
      data-analytics-event={eventName}
      data-analytics-params={JSON.stringify(eventParams)}
    />
  )
}
