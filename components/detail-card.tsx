import { CardProps } from "@/types"
import { Icons } from "./icons"

export default function DetailCard({ name, description, details }: CardProps) {
  return (
    <div className="mx-2 flex min-h-[300px] flex-col justify-between space-y-4 rounded-lg bg-white p-6 font-normal shadow-sm dark:bg-background/80">
      <h3 className="text-xl font-bold">{name}</h3>
      <ul className="mt-4 space-y-2 border-b-2 pb-4 text-sm">
        {details?.map((detail) => (
          <li>
            <Icons.check className="mr-2 inline-block size-4 stroke-primary/80" />
            {detail}
          </li>
        ))}
      </ul>
      <p className=" text-sm text-primary/80">{description}</p>
    </div>
  )
}
