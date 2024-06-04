// async function getLocationsForBusiness() {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: "./key.json",
//     scopes: ["https://www.googleapis.com/auth/business.manage"],
//   })

//   const info = google.mybusinessbusinessinformation({
//     version: "v1",
//     auth,
//   })

//   const readMask =
//     "name,storeCode,title,phoneNumbers,storefrontAddress,specialHours,serviceArea,metadata,profile,moreHours"
//   // const locations = info.locations.get({ name:"", readMask })
//   const locations = info.accounts.locations.list({
//     parent: "accounts/{438095296120896097}",
//   })

//   console.log("locations:", JSON.stringify(locations))
//   return (await locations).data
// }

import ReviewCarousel from "@/components/review-carousel"
import { reviews } from "@/config/reviews"

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="mb-10 flex min-h-[85svh] items-center overflow-hidden bg-accent dark:bg-secondary lg:min-h-screen"
    >
      <div className="mx-auto flex flex-col items-center justify-center gap-4 px-4 py-8 text-center lg:w-2/3">
        <div className=" w-full rounded-xl leading-normal text-white sm:text-lg sm:leading-7">
          <ReviewCarousel reviews={reviews} />
        </div>
      </div>
    </section>
  )
}
