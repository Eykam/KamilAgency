export default function GoogleMapsEmbed() {
  return (
    <div className="h-[80vh] w-full overflow-hidden rounded-lg border-2  border-primary/50 shadow-lg lg:h-[50vh]">
      <iframe
        src="https://storage.googleapis.com/maps-solutions-hkl2kro3e4/locator-plus/gprp/locator-plus.html"
        width="100%"
        style={{ border: 0 }}
        height="100%"
        loading="lazy"
        className="rounded-lg"
      ></iframe>
    </div>
  )
}
