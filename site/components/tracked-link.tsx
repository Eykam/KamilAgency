"use client"

import type { ComponentProps } from "react"
import Link from "next/link"
import { sendGAEvent } from "@next/third-parties/google"

type EventValue = string | number | boolean

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string
  eventParams?: Record<string, EventValue>
}

export function TrackedLink({
  eventName,
  eventParams = {},
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      data-analytics-tracked="true"
      onClick={(event) => {
        sendGAEvent("event", eventName, {
          ...eventParams,
          link_url: String(props.href),
        })
        onClick?.(event)
      }}
    />
  )
}
