type CarrierMarkProps = {
  name: string
  className?: string
}

function getCarrierInitials(name: string) {
  const words = name.trim().split(/[\s-]+/).filter(Boolean)

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
  return (
    <span
      aria-hidden="true"
      className={`${className} inline-flex shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold tracking-wide text-primary`}
    >
      {getCarrierInitials(name)}
    </span>
  )
}
