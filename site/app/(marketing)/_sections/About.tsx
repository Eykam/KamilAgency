import Image from "next/image"

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="flex min-h-[85svh] items-center overflow-hidden py-16 lg:min-h-screen"
    >
      <div className="max-w-4/5 mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="mb-4 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          About Me
        </h2>
        <div className="flex w-full flex-col items-center justify-center space-y-4 align-middle leading-normal text-muted-foreground sm:text-lg sm:leading-7 lg:flex-row lg:space-x-16">
          <div className="relative flex size-[300px] items-center">
            <Image
              className="rounded-[50%]"
              src={"/images/people/mohamed.webp"}
              alt="team-images-mohamed"
              layout="responsive"
              height={360}
              width={360}
              objectFit="cover"
            />
          </div>
          <p className="my-auto max-w-[90%] text-start lg:max-w-[50%]">
            As a dedicated insurance agent and proud resident of the DC Metro
            area, I bring extensive experience in insuring homes, businesses,
            and lives in our community.
            <br />
            <br />
            As the agency owner of Kamil Agency, I am passionate about helping
            clients protect their assets and achieve financial security. Serving
            clients in Washington D.C, Maryland, Virginia, Pennsylvania, and
            beyond, I specialize in home insurance, commercial insurance,
            Medicare, and life insurance.
            <br />
            <br />
            At the Mohamed Kamil Agency, my team and I start by having a
            friendly conversation to learn about all aspects of your life and
            property assets. We provide a thorough breakdown of your property
            details to ensure all assets are properly covered, tailoring
            policies to fit your unique lifestyle. Whether it&#39;s discussing
            endorsements for your home insurance or ensuring you have enough
            dwelling coverage, I am committed to providing comprehensive and
            personalized solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
