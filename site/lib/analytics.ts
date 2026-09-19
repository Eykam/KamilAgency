export type AnalyticsParameter = string | number | boolean | null | undefined
export type AnalyticsParameters = Record<string, AnalyticsParameter>

type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

/** Queue a GA4 event while the performance-friendly analytics loader starts. */
export function trackAnalyticsEvent(
  eventName: string,
  eventParams: AnalyticsParameters = {}
) {
  if (typeof window === "undefined") return

  const analyticsWindow = window as AnalyticsWindow

  if (typeof analyticsWindow.gtag === "function") {
    analyticsWindow.gtag("event", eventName, eventParams)
    return
  }

  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? []
  analyticsWindow.gtag = function (..._args: unknown[]) {
    analyticsWindow.dataLayer?.push(arguments)
  }
  analyticsWindow.gtag("event", eventName, eventParams)
}
