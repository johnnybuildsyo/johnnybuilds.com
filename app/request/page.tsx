import { revalidatePath } from "next/cache"
import RequestForm from "@/components/request-form"
import { verifyCaptcha, sendRequest } from "../_actions"

export default function RequestPage() {
  async function handleSubmit(data: FormData) {
    "use server"

    const title = data.get("title") as string
    const description = data.get("description") as string
    const contact = data.get("contact") as string
    const captchaToken = data.get("captchaToken") as string

    if (!title || !description || !contact || !captchaToken) {
      throw new Error("Missing fields")
    }

    await verifyCaptcha(captchaToken)
    await sendRequest({ title, description, contact })

    revalidatePath("/")
  }

  return (
    <>
      <h1 className="text-7xl font-extrabold">Johnny Builds</h1>
      <p className="text-xl text-center">Send a project build request. If it is interesting, maybe I’ll build it.</p>
      <RequestForm handleSubmit={handleSubmit} />
    </>
  )
}
