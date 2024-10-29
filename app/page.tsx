import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-display">
      <main className="flex flex-col grow gap-4 row-start-2 justify-center items-center font-display py-12">
        <h1 className="text-7xl font-extrabold">Johnny Builds</h1>
        <p className="text-xl text-center">I build web stuff for people in public</p>
        <Link href="/request">
          <Button className="flex items-center gap-2 font-display">
            <PlusIcon size={16} />
            Make a Request
          </Button>
        </Link>
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
