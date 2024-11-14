import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import Intro from "@/components/intro"
import GlitchySubhead from "@/components/glitchy-subhead"
import { JohnnyDock } from "@/components/johnny-dock"
import { ProjectsSection } from "@/components/projects-section"
import { PostsSection } from "@/components/posts-section"
import { fetchMediumPosts } from "./_actions"
import { Post } from "./_types"
import { projects } from "./_data"
import Waves from "@/components/waves"

const posts = (await fetchMediumPosts()) as Post[]

export default function Home() {
  return (
    <>
      <div className="absolute bg-gradient-to-t from-foreground/10 to-transparent left-0  w-full top-0 h-[420px] lg:h-[450px] z-10 pointer-events-none">
        <div className="absolute bottom-0 w-full text-background">
          <Waves className="absolute bottom-0 left-0 h-[64px] lg:h-[96px] w-full" />
        </div>
      </div>
      <h1 className="text-7xl font-extrabold w-full text-center">Johnny Builds</h1>
      <GlitchySubhead />
      <Link href="https://github.com/johnnybuildsyo/johnnybuilds.com/discussions/">
        <Button className="flex items-center gap-2 font-display">
          <GitHubLogoIcon />
          Contact
        </Button>
      </Link>
      <Intro />
      <div className="mt-32">
        <div className="scale-125">
          <JohnnyDock />
        </div>
      </div>
      <ProjectsSection projects={projects} />
      <PostsSection posts={posts} />
    </>
  )
}
