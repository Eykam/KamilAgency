import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insurance Agency Locations",
  description:
    "Kamil Agency location information is available on our contact page.",
  robots: { index: false, follow: true },
}

export default function LocationsPage() {
  return <h1>Insurance Agency Locations</h1>
}
