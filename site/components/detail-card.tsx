import { CardProps, PolicyDetails } from "@/types"
import { Icons } from "./icons"
import { HTMLAttributes } from "react"

type DetailCard = HTMLAttributes<HTMLDivElement> & PolicyDetails

export default function DetailCard({
  title,
  descriptionShort,
  details,
}: DetailCard) {
  return (
    <div className="my-2 flex h-[400px] w-full flex-col justify-between space-y-4 rounded-lg bg-white p-6 font-normal shadow-md duration-150 hover:scale-105 hover:border-2 hover:border-muted-foreground dark:bg-background/80 lg:m-2 lg:w-[300px]">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-4 space-y-2 border-b-2 pb-4 text-sm">
        {details?.map((detail) => (
          <li>
            <Icons.check className="mr-2 inline-block size-4 stroke-primary/80" />
            {detail}
          </li>
        ))}
      </ul>
      <p className=" text-sm text-primary/80">{descriptionShort}</p>
    </div>
  )
}
