import Image from "next/image"
import Link from "next/link"
import TeamMemberCard from "./team-member-card"
import TeamMemberCarousel from "./team-member-carousel"

export default function TeamMember() {
  const people = [{}, {}, {}, {}]

  return (
    <div className="flex w-full flex-col ">
      <section className="flex min-h-[85svh] items-center space-y-6 bg-secondary p-4 lg:min-h-screen">
        <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/images/placeholder.svg"
              width="400"
              height="400"
              alt="Team Member"
              className="aspect-square w-full max-w-[300px] overflow-hidden rounded-[50%] object-cover"
            />

            <div className="space-y-1 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                John Doe
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Insurance Agent
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                About John
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                John Doe is an experienced insurance agent with a passion for
                helping clients protect their assets and achieve financial
                security. With over 10 years in the industry, he has developed a
                deep understanding of the complex world of insurance and is
                dedicated to providing personalized solutions to meet the unique
                needs of each client.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Areas of Expertise
              </h2>
              <ul className="space-y-1 text-gray-500 dark:text-gray-400">
                <li>
                  <CheckIcon className="mr-2 inline size-5 text-primary" />
                  Life Insurance
                </li>
                <li>
                  <CheckIcon className="mr-2 inline size-5 text-primary" />
                  Home Insurance
                </li>
                <li>
                  <CheckIcon className="mr-2 inline size-5 text-primary" />
                  Auto Insurance
                </li>
                <li>
                  <CheckIcon className="mr-2 inline size-5 text-primary" />
                  Business Insurance
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Contact John
              </h2>
              <div className="space-y-1 text-primary/65">
                <Link href="/">
                  <p className="flex items-center">
                    <MailIcon className="mr-2 inline size-5 text-primary" />
                    john.doe@insuranceagency.com
                  </p>
                </Link>

                <Link href="/">
                  <p className="flex items-center">
                    <PhoneIcon className="mr-2 inline size-5 text-primary" />
                    (123) 456-7890
                  </p>
                </Link>

                <Link href="/">
                  <p className="flex items-center">
                    <MapPinIcon className="mr-2 inline size-5 text-primary" />
                    123 Main St, Anytown USA
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamMemberCarousel />
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
