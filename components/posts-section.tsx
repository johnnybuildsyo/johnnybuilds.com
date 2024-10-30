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
            <a className="flex items-center gap-4 group hover:scale-[1.01] transition-all ease-in-out duration-500" href={post.link} target="_blank">
              <Button className="text-sm pl-2 pr-1 py-0 gap-0 h-auto opacity-50 group-hover:opacity-70 transition-all ease-in-out duration-500 rounded">
                <>
                  Read <ChevronsRightIcon />
                </>
              </Button>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <span className="text-xs opacity-60 font-mono">{new Date(post.pubDate).toLocaleString()}</span>
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
