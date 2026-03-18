import { washingtonGoogleMapsEmbedURL } from "./locations"

export default function GoogleMapsEmbed() {
  return (
    <div className="h-auto w-full overflow-hidden rounded-lg border-2  border-primary/50 shadow-lg lg:h-[50vh]">
      <iframe
        src={washingtonGoogleMapsEmbedURL}
        title="Kamil Agency Washington DC office map"
        width="100%"
        style={{ border: 0 }}
        className="rounded-lg"
        height="500px"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
