"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import ReCAPTCHA from "react-google-recaptcha"

export default function Home() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!captchaToken) {
      alert("Please complete the CAPTCHA")
      return
    }

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, contact, captchaToken }),
      })

      const data = await res.json()
      if (res.ok) {
        alert("Request submitted successfully")
        setDescription("")
        setCaptchaToken(null)
      } else {
        alert(data.error || "Error submitting request")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <>
      <h1 className="text-7xl font-extrabold">Johnny Builds</h1>
      <p className="text-xl text-center">Send a project build request. If it is interesting, maybe I’ll build it.</p>
      <form className="w-full max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 py-4 w-full items-start">
          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="title">Give your project a name</Label>
            <Input maxLength={30} id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full" placeholder="Keep it short & catchy" required />
          </div>
          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="title">Description</Label>
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
          </div>
          <Textarea id="contact" value={contact} onChange={(e) => setContact(e.target.value)} className="w-full" rows={3} placeholder="How would you like me to contact you?" required />
          <div className="flex justify-end w-full">
            <div className="fpt-4 col-start-2 col-span-3">
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
          <Button type="submit">Send Request</Button>
        </div>
      </form>
    </>
  )
}
