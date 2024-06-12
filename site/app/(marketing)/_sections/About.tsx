import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="flex min-h-[85svh] items-center overflow-hidden py-16 lg:min-h-screen"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="mb-4 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          About Me
        </h2>
        <div className="flex w-full flex-col items-center justify-center space-y-8 align-middle leading-normal text-primary sm:text-lg sm:leading-7 lg:flex-row lg:space-x-16">
          <div className="relative flex w-[300px] flex-col items-center space-y-1">
            <Image
              className="rounded-[50%]"
              src={"/images/people/mohamed.webp"}
              alt="team-images-mohamed"
              layout="responsive"
              height={360}
              width={360}
              objectFit="cover"
            />
            <h3 className="text-2xl font-bold tracking-tighter lg:text-2xl">
              Mohamed Kamil
            </h3>
            <h4 className="text-lg font-semibold tracking-tighter text-muted-foreground lg:text-xl">
              Agency Owner
            </h4>
          </div>
          <div className="flex max-w-[90%] flex-col items-center text-center lg:max-w-[50%] lg:text-start">
            <p>
              As the agency owner of Kamil Agency, I am passionate about helping
              clients protect their assets and achieve financial security.
              Serving clients in Washington D.C, Maryland, Virginia,
              Pennsylvania, and beyond, I specialize in Home Insurance,
              Commercial Insurance, Medicare, and Life Insurance.
              <br />
              <br />
              At the Mohamed Kamil Agency, my team and I start by having a
              friendly conversation to learn about all aspects of your life and
              property assets. We provide a thorough breakdown of your property
              details to ensure all assets are properly covered, tailoring
              policies to fit your unique lifestyle.
              <br />
              <br />
            </p>
            <Link href="/about-us/team/mohamed-kamil" className="w-fit">
              <Button>Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
