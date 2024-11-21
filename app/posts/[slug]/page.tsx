import Link from "next/link"
import GlitchySubhead from "@/components/glitchy-subhead"
import { JohnnyDock } from "@/components/johnny-dock"
import { Post } from "@/app/_types"
import Waves from "@/components/waves"
import Background from "@/components/background"
import postsData from "@/app/_data/posts.json"

const posts = postsData as Record<string, Post>

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const post = posts[slug]

  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-[300px] sm:h-[400px] bg-gradient-to-b from-background to-transparent z-10" />
      <Background />
      <div className="absolute bg-gradient-to-t from-background/70 to-transparent left-0  w-full top-0 h-[240px] sm:h-[320px] z-10 pointer-events-none">
        <div className="absolute bottom-0 w-full text-background">
          <Waves className="absolute bottom-0 h-[80px] sm:h-[120px] xl:h-[140px] w-full" />
        </div>
      </div>
      <div className="z-20 flex flex-col items-center gap-2 sm:gap-4">
        <h1 className="text-[10vw] sm:text-7xl font-extrabold w-full text-center -mt-4 sm:mt-0">Johnny Builds</h1>
        <div className="-mt-3 sm:mt-0 scale-75 sm:scale-100">
          <GlitchySubhead />
        </div>
      </div>

      <div className="absolute top-[240px] sm:top-[320px] bg-gradient-to-b from-background via-background to-transparent w-full h-full"></div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-4">
        <div className="mt-16 sm:mt-24">
          <div className="sm:scale-125">
            <JohnnyDock />
          </div>
        </div>
        {post ? (
          <div className="px-8 pt-4 sm:pt-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-center text-balance">{post.title}</h2>
            <div
              className="prose prose-invert max-w-none mx-auto p-4 sm:pt-16" // Tailwind's prose class for styling
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-bold text-center text-balance">Post Not Found</h2>
            <Link className="text-2xl underline" href="/">
              Return Home
            </Link>
          </>
        )}
      </div>
    </>
  )
}
