"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PlusIcon } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ReCAPTCHA from "react-google-recaptcha"

export function RequestFormDialog() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

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

  const handleCancel = () => {
    setOpen(false)
    setName("")
    setDescription("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 font-display">
          <PlusIcon size={16} />
          Make a Request
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[640px] font-display p-8">
        <DialogHeader>
          <DialogTitle className="sm:text-2xl">Make a Request for Johnny to Build Your Project</DialogTitle>
          <DialogDescription>Fill out the form below to submit a new request. Make it interesting. Keep it fun.</DialogDescription>
        </DialogHeader>
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
          <DialogFooter className="pt-8 pb-2">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">Send Request</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
