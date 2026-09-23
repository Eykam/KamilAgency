"use client"

import { useState } from "react"

import {
  locations,
  washingtonGoogleMapsEmbedURL,
  washingtonGoogleMapsURL,
} from "./locations"

export default function GoogleMapsEmbed() {
  const [showMap, setShowMap] = useState(false)
  const { lineOne, lineTwo } = locations[0].getAddress()

  return (
    <div className="min-h-[360px] w-full overflow-hidden rounded-lg border-2 border-primary/50 shadow-lg lg:h-[50vh]">
      {showMap ? (
        <iframe
          src={washingtonGoogleMapsEmbedURL}
          title="Kamil Agency Washington DC office map"
          className="h-[360px] w-full rounded-lg border-0 lg:h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex min-h-[360px] flex-col items-center justify-center gap-5 bg-secondary p-6 text-center lg:h-full">
          <p className="text-lg font-semibold">Visit our Washington, DC office</p>
          <address className="not-italic text-foreground">
            {lineOne}
            <br />
            {lineTwo}
          </address>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Load interactive map
            </button>
            <a
              href={washingtonGoogleMapsURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary px-5 text-sm font-medium text-foreground hover:bg-background"
            >
              Get directions
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
