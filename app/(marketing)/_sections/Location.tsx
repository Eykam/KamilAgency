import { siteConfig, defaultHours } from "@/config/site"
import { Day } from "@/types"

export default function LocationSection() {
  return (
    <section className="flex min-h-[85svh] items-center space-y-6 p-4 lg:min-h-screen">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 text-center lg:w-2/3 ">
        <h2 className="mb-8 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Locations & Hours
        </h2>
        <div
          id="location"
          className="mb-8 flex h-fit w-full flex-col justify-center gap-4 rounded-lg lg:flex-row lg:bg-secondary"
        >
          <div className="flex w-full min-w-[50%] flex-col justify-center rounded-lg bg-secondary p-6 lg:min-w-[40%] lg:bg-transparent">
            <h3 className="mb-4 self-center text-2xl font-semibold md:text-3xl">
              Hours
            </h3>
            {Object.keys(defaultHours).map((day: Day) => (
              <div className="flex justify-between py-1">
                <span className="flex items-center font-semibold"> {day} </span>
                <span className="flex items-center text-sm text-muted-foreground">
                  {defaultHours[day]
                    ? `${defaultHours[day]?.start} - ${defaultHours[day]?.end}`
                    : `Closed`}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full overflow-hidden rounded-lg border-2 border-primary/50">
            <iframe
              src="https://storage.googleapis.com/maps-solutions-hkl2kro3e4/locator-plus/4rrc/locator-plus.html"
              width="100%"
              height={400}
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
