import { ChevronsRightIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Section } from "./ui/section"
import { Post } from "@/app/_types"
import Link from "next/link"
import slugify from "slugify"

export function PostsSection({ posts }: { posts: Post[] }) {
  return (
    <Section title="Posts">
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.pubDate} className="flex flex-col justify-center items-center bg-background">
            <Link
              className="flex flex-col sm:flex-row rounded-lg sm:border-0 w-full sm:w-auto items-center gap-4 group hover:scale-[1.01] transition-all ease-in-out duration-500"
              href={`/posts/${slugify(post.title, {
                lower: true,
                strict: true,
              })}`}
            >
              <Button className="flex-1 relative -top-1 sm:top-0 sm:left-3 font-mono font-semibold uppercase text-sm pl-2 pr-1 py-0.5 gap-0 h-auto bg-foreground sm:bg-foreground/50 transition-all ease-in-out duration-500 rounded scale-[.7] sm:scale-75 -mb-8 sm:-mb-0">
                <>
                  Read <ChevronsRightIcon className="relative -top-px" />
                </>
              </Button>
              <div className="w-full grow flex flex-col items-center sm:flex-row sm:gap-2 border border-foreground/20 sm:border-0 px-8 py-4 sm:p-0 rounded-lg">
                <h3 className="text-xl font-bold line-clamp-1" style={{ textWrap: "balance" }}>
                  {post.title}
                </h3>
                <span className="text-xs opacity-60 font-mono pt-1">{new Date(post.pubDate).toLocaleString().split(",")[0]}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  )
}
