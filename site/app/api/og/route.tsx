import { ImageResponse } from "next/server"
import { ogImageSchema } from "@/lib/validations/og"
import { siteConfig } from "@/config/site"

export const runtime = "edge"

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const interBold = fetch(
  new URL("../../../assets/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  try {
    const fontRegular = await interRegular
    const fontBold = await interBold

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading.length > 80
        ? `${values.heading.substring(0, 80)}...`
        : values.heading

    const { mode } = values
    const paint = mode === "dark" ? "#fff" : "#000"

    const fontSize = heading.length > 55 ? "48px" : "72px"

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col justify-between p-12 w-full h-full items-start"
          style={{
            color: paint,
            background:
              mode === "dark"
                ? "linear-gradient(90deg, #020611 0%, #1c283a 100%)"
                : "white",
          }}
        >
          <svg
            width="200"
            height="200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 20 L4 4 L12 12 L4 20" />
            <path d="M12 12 L20 4 L20 20" />
          </svg>

          <div tw="flex flex-col flex-1 py-10 ml-8">
            <div
              tw="flex text-xl uppercase font-bold tracking-tight"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              {values.type}
            </div>
            <div
              tw="flex leading-[1.1] font-bold"
              style={{
                fontFamily: "Cal Sans",
                fontWeight: "bold",
                marginLeft: "-3px",
                fontSize,
              }}
            >
              {heading}
            </div>
          </div>

          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex flex-col justify-center text-xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              <div
                tw="flex text-xl"
                style={{ fontFamily: "Inter", fontWeight: "normal" }}
              >
                KamilAgency.com
              </div>
              <div
                tw="flex text-xl"
                style={{ fontFamily: "Inter", fontWeight: "normal" }}
              >
                © 2019 Kamil Agency
              </div>
            </div>

            <div
              tw="flex flex-col justify-center text-xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              <div tw="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <p tw="p-0 m-0 ml-4">{siteConfig.contactEmail}</p>
              </div>

              <div tw="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p tw=" p-0 m-0 ml-4 ">{siteConfig.contactNumber}</p>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontRegular,
            weight: 400,
            style: "normal",
          },
          {
            name: "Cal Sans",
            data: fontBold,
            weight: 700,
            style: "normal",
          },
        ],
      }
    )
  } catch (error) {
    console.log("error", error)
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
