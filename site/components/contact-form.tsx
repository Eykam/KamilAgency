import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <div className="flex h-full flex-col justify-center space-y-6 rounded-2xl border border-primary/15 bg-background px-6 py-8 text-start shadow-sm md:px-8 md:py-10">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary/60">
          Send a Message
        </p>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Get in Touch
        </h2>
        <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
          Tell us what you need and our office will follow up as soon as possible.
        </p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="Enter your phone number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            className="min-h-[150px]"
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}
