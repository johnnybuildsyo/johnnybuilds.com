"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ReCAPTCHA from "react-google-recaptcha"

export default function Home() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
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
        body: JSON.stringify({ name, description, captchaToken }),
      })

      const data = await res.json()
      if (res.ok) {
        alert("Request submitted successfully")
        setName("")
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
    <div className="min-h-screen flex flex-col font-display">
      <main className="flex flex-col grow gap-4 row-start-2 justify-center items-center font-display py-12">
        <h1 className="text-7xl font-extrabold">Johnny Builds</h1>
        <p className="text-xl text-center">Send your project build request. Make it interesting. Keep it fun.</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" placeholder="Enter a name for your project" required />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="description" className="text-right pt-3">
                Description
              </Label>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" rows={8} placeholder="Provide a compelling description" required />
            </div>
            <div className="grid grid-cols-4 gap-4">
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
      </main>
      <footer className="p-8">
        <h3 className="pb-4 font-bold">Posts</h3>
        <ul>
          <li>
            <a href="https://medium.com/@johnnybuilds/how-johnny-builds-new-web-projects-51f32b39bc20">How Johnny Builds New Web Projects</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
