"use client"

import { useTransition, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function RequestForm({ handleSubmit }: { handleSubmit: (data: FormData) => void }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!captchaToken) {
      alert("Complete the CAPTCHA you fool!")
      return
    }

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("contact", contact)
    formData.append("captchaToken", captchaToken)

    startTransition(async () => {
      await handleSubmit(formData)
      setTitle("")
      setDescription("")
      setContact("")
      setCaptchaToken(null)
    })
  }

  return (
    <form className="w-full max-w-xl mx-auto" onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 py-4 w-full items-start">
        <div className="w-full flex flex-col gap-1">
          <Label htmlFor="title">Give your project a name</Label>
          <Input maxLength={30} id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full" placeholder="Keep it short & catchy" required />
        </div>
        <div className="w-full flex flex-col gap-1">
          <Label htmlFor="description">Description</Label>
          <Textarea
            aria-label="Project description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full"
            rows={8}
            placeholder="What would you like me to build?"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <Label htmlFor="contact">
            Contact <span className="text-xs opacity-70 italic">(will not be shared)</span>
          </Label>
          <Textarea id="contact" value={contact} onChange={(e) => setContact(e.target.value)} className="w-full" rows={3} placeholder="How would you like me to contact you?" required />
        </div>
        <div className="flex justify-end w-full">
          <div className="pt-4 col-start-2 col-span-3">
            <div className="rounded-xl overflow-hidden w-[300px] h-[74px] border border-white/20">
              <div className="relative -left-0.5 -top-0.5">
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} theme="dark" onChange={(value) => setCaptchaToken(value)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-end pt-8 pb-2">
        <Link href="/">
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </Link>
        <Button disabled={isPending || !title || !description || !contact || !captchaToken} type="submit">
          {isPending ? "Sending..." : "Send Request"}
        </Button>
      </div>
    </form>
  )
}
