"use client"

import { useEffect } from "react"
import { sendGAEvent } from "@next/third-parties/google"

function classifyLink(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href") ?? ""

  if (href.startsWith("tel:")) return "click_to_call"
  if (href.toLowerCase().startsWith("mailto:")) return "email_click"
  if (href === "/quote" || href.startsWith("/quote/")) return "quote_start"
  if (
    (href.includes("google.com/maps") || href.includes("maps.app.goo.gl")) &&
    (href.toLowerCase().includes("kamil") ||
      anchor.textContent?.toLowerCase().includes("review") ||
      anchor.textContent?.toLowerCase().includes("rating"))
  ) {
    return "review_profile_click"
  }
  if (href.includes("google.com/maps") || href.includes("maps.app.goo.gl")) {
    return "map_click"
  }
  if (href.includes("google.com/search") && href.includes("review")) {
    return "review_profile_click"
  }
  return null
}

export function ConversionEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest("a")
      if (!(anchor instanceof HTMLAnchorElement)) return
      if (anchor.dataset.analyticsTracked === "true") return

      const eventName = classifyLink(anchor)
      if (!eventName) return

      sendGAEvent("event", eventName, {
        link_url: anchor.href,
        link_text: anchor.textContent?.trim().slice(0, 80) || "unlabeled",
        page_path: window.location.pathname,
      })
    }

    document.addEventListener("click", handleClick, { capture: true })
    return () =>
      document.removeEventListener("click", handleClick, { capture: true })
  }, [])

  return null
}
