import Image from "next/image"

type CarrierMarkProps = {
  name: string
  className?: string
}

const carrierLogos: Record<string, string> = {
  AAA: "/images/carriers/aaa.webp",
  AIC: "/images/carriers/aic.webp",
  AmTrust: "/images/carriers/amtrust.webp",
  Attune: "/images/carriers/attune.webp",
  biBERK: "/images/carriers/biberk.webp",
  Chubb: "/images/carriers/chubb.webp",
  Clearcover: "/images/carriers/clearcover.webp",
  CNA: "/images/carriers/cna.webp",
  GEICO: "/images/carriers/geico.webp",
  Hiscox: "/images/carriers/hiscox.webp",
  "Liberty Mutual": "/images/carriers/liberty-mutual.webp",
  Markel: "/images/carriers/markel.webp",
  "Maryland Auto": "/images/carriers/maryland-auto.webp",
  "Narragansett Bay": "/images/carriers/narragansett-bay.webp",
  "National General": "/images/carriers/national-general.webp",
  Nationwide: "/images/carriers/nationwide.webp",
  "Neptune Flood": "/images/carriers/neptune-flood.webp",
  Pathpoint: "/images/carriers/pathpoint.webp",
  Progressive: "/images/carriers/progressive.webp",
  "RT Connector": "/images/carriers/rt-connector.webp",
  Stillwater: "/images/carriers/stillwater.webp",
  Trexis: "/images/carriers/trexis.webp",
  Travelers: "/images/carriers/travelers.webp",
  "Universal Property": "/images/carriers/universal-property.webp",
}

function getCarrierInitials(name: string) {
  const words = name
    .trim()
    .split(/[\s-]+/)
    .filter(Boolean)

  if (words.length === 1) {
    return words[0].slice(0, 3).toUpperCase()
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

export function CarrierMark({ name, className = "size-10" }: CarrierMarkProps) {
  const logo = carrierLogos[name]

  if (logo) {
    return (
      <Image
        src={logo}
        alt=""
        aria-hidden="true"
        width={112}
        height={56}
        className="h-12 w-28 object-contain"
      />
    )
  }

  return (
    <span
      aria-hidden="true"
      className={`${className} inline-flex shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold tracking-wide text-primary`}
    >
      {getCarrierInitials(name)}
    </span>
  )
}
