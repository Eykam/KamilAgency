"use client"

import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Page404() {
  const path = usePathname()

  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-background text-primary">
      <div className="flex flex-col items-center justify-center space-y-1 rounded-lg bg-primary/10 p-8 font-bold shadow-lg">
        <h2 className="text-4xl">404</h2>
        <h2 className="text-2xl">Not Found: {path}</h2>
        <p className="text-xl text-muted-foreground">
          Could not find requested resource
        </p>
        <br />
        <p>
          <Link className={cn(buttonVariants({ variant: "default" }))} href="/">
            Return Home
          </Link>
        </p>
      </div>
    </div>
  )
}
