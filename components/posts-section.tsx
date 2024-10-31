"use client"
import { ChevronsRightIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Section } from "./ui/section"
import { Post } from "@/app/_types"

export function PostsSection({ posts }: { posts: Post[] }) {
  return (
    <Section title="Posts">
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.pubDate} className="flex flex-col justify-center items-center">
            <a
              className="flex flex-col sm:flex-row rounded-lg sm:border-0 w-full sm:w-auto items-center gap-4 group hover:scale-[1.01] transition-all ease-in-out duration-500"
              href={post.link}
              target="_blank"
            >
              <Button className="flex-1 relative -top-1 sm:top-0 sm:left-3 font-mono font-semibold uppercase text-sm pl-2 pr-1 py-0.5 gap-0 h-auto bg-foreground transition-all ease-in-out duration-500 rounded scale-[.7] sm:scale-75 -mb-8 sm:-mb-0">
                <>
                  Read <ChevronsRightIcon className="relative -top-px" />
                </>
              </Button>
              <div className="grow flex flex-col items-center sm:flex-row sm:gap-4 border border-foreground/30 sm:border-0 px-8 py-4 sm:p-0 rounded-lg">
                <h3 className="text-xl font-bold" style={{ textWrap: "balance" }}>
                  {post.title}
                </h3>
                <span className="text-xs opacity-60 font-mono">{new Date(post.pubDate).toLocaleString()}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
