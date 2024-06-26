export default function GoogleMapsEmbed() {
  return (
    <div className="h-auto w-full overflow-hidden rounded-lg border-2  border-primary/50 shadow-lg lg:h-[50vh]">
      <iframe
        src="https://storage.googleapis.com/maps-solutions-hkl2kro3e4/locator-plus/gprp/locator-plus.html"
        width="100%"
        style={{ border: 0 }}
        className="rounded-lg"
        height="500px"
      ></iframe>
    </div>
  )
}
