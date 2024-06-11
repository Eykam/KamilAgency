import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <div className="flex max-w-3xl flex-col items-center justify-center space-y-6 rounded-xl bg-background py-12 text-start font-semibold">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Get in Touch
      </h2>
      <form className="w-4/5 space-y-4">
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
