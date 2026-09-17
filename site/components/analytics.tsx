"use client"

import { useEffect, useState } from "react"

type DeferredComponents = {
  Analytics: typeof import("@vercel/analytics/react")["Analytics"]
  SpeedInsights: typeof import("@vercel/speed-insights/next")["SpeedInsights"]
}

export function DeferredWebVitals() {
  const [components, setComponents] = useState<DeferredComponents | null>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void Promise.all([
        import("@vercel/analytics/react"),
        import("@vercel/speed-insights/next"),
      ])
        .then(([analytics, speedInsights]) => {
          setComponents({
            Analytics: analytics.Analytics,
            SpeedInsights: speedInsights.SpeedInsights,
          })
        })
        .catch(() => undefined)
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [])

  if (!components) return null

  const { Analytics, SpeedInsights } = components
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
