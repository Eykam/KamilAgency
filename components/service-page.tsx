import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import Image from "next/image"
import RecommendedServiceCard from "@/components/recommended-service-card"
import DetailCard from "@/components/detail-card"
import { CardProps } from "@/types"
import { services } from "@/config/services"
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation"

export default function ServicePage({
  name,
  description,
  descriptionLong,
  quoteURL,
  docsURL,
  imageURL,
  details,
}: CardProps) {
  return (
    <div className="flex flex-col overflow-hidden font-semibold">
      <BackgroundGradientAnimation className="flex items-center">
        <section className="z-20 flex h-[90svh] w-full items-center justify-center py-12 md:py-24 lg:h-screen lg:py-32">
          <div className="gap-6 space-y-8 px-4 md:px-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
            <div className="flex flex-col items-center justify-center space-y-8 lg:items-start ">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl  md:text-5xl">
                {name} Insurance
              </h1>
              <p className="max-w-[600px] text-primary/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
              <div className="flex justify-center gap-2 min-[400px]:flex-row lg:justify-start">
                <Link
                  href={quoteURL}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get a Quote
                </Link>
                <Link
                  href={docsURL}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              src={imageURL}
              width={600}
              height={400}
              alt="Insurance Product"
              className="object-fit  mx-auto aspect-video overflow-hidden rounded-xl object-center sm:w-full "
            />
          </div>
        </section>
      </BackgroundGradientAnimation>

      <section className="flex min-h-screen w-full items-center justify-center bg-secondary py-12  md:py-24">
        <div className="w-[95%] px-4 md:px-6">
          <div className="mx-auto max-w-5xl flex-col">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {name} Insurance Coverage Tailored to Your Needs
              </h2>
              <p className="font-normal text-primary/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {descriptionLong.split(".").map((sentence, ind) => (
                  <>
                    {sentence}
                    {ind < descriptionLong.length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </>
                ))}
              </p>
            </div>

            <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-y-0">
              {details.map((props) => (
                <DetailCard {...props} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-fit w-full items-center justify-center bg-background py-12 md:py-24">
        <div className="w-[95%] px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Browse Our Products
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our Insurance Products and see if one of them fits
                your needs!
              </p>
            </div>

            <Carousel className="w-full max-w-md pl-4 lg:max-w-none">
              <CarouselContent>
                {services
                  .filter((service) => service.name !== name)
                  .map((props) => (
                    <RecommendedServiceCard {...props} />
                  ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-accent/50 p-2 shadow-lg transition-all hover:bg-accent lg:-left-12 " />
              <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-accent/50 p-2 shadow-lg transition-all hover:bg-accent lg:-right-12 " />
            </Carousel>

            <div className="flex w-full justify-center">
              <Link
                href={"/services"}
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
