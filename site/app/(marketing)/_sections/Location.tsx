import GoogleMapsEmbed from "@/config/GoogleMapsEmbed"
import { defaultHours } from "@/config/locations"
import { Day } from "@/types"

export default function LocationSection() {
  return (
    <section className="flex min-h-[85svh] items-center space-y-6 p-8 lg:min-h-screen">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 text-center lg:w-2/3 ">
        <h2 className="mb-8 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Locations & Hours
        </h2>
        <div
          id="location"
          className="mb-8 flex size-full flex-col justify-center gap-4 rounded-lg shadow-lg lg:flex-row lg:bg-secondary"
        >
          <div className="flex w-full flex-col justify-center rounded-lg bg-secondary p-6 lg:min-w-[40%] lg:bg-transparent">
            <h3 className="mb-4 self-center text-2xl font-semibold md:text-3xl">
              Hours
            </h3>
            {Object.keys(defaultHours).map((day: Day) => (
              <div className="flex justify-between py-1">
                <span className="flex items-center font-semibold"> {day} </span>
                <span className="flex items-center text-sm text-muted-foreground">
                  {defaultHours[day]
                    ? `${defaultHours[day]?.start} - ${defaultHours[day]?.stop}`
                    : `Closed`}
                </span>
              </div>
            ))}
          </div>

          <GoogleMapsEmbed />
        </div>
      </div>
    </section>
  )
}
