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
import Background from "@/components/background"

const posts = (await fetchMediumPosts()) as Post[]

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-[300px] sm:h-[400px] bg-gradient-to-b from-background to-transparent z-10" />
      <Background />
      <div className="absolute bg-gradient-to-t from-background/70 to-transparent left-0  w-full top-0 h-[470px] sm:h-[450px] z-10 pointer-events-none">
        <div className="absolute bottom-0 w-full text-background">
          <Waves className="absolute bottom-0 h-[80px] sm:h-[120px] xl:h-[140px] w-full" />
        </div>
      </div>
      <div className="z-20 flex flex-col items-center gap-4">
        <h1 className="text-[14vw] sm:text-7xl font-extrabold w-full text-center">Johnny Builds</h1>
        <GlitchySubhead />
        <Link href="https://github.com/johnnybuildsyo/johnnybuilds.com/discussions/">
          <Button className="flex items-center gap-2 font-display">
            <GitHubLogoIcon />
            Contact
          </Button>
        </Link>
        <Intro />
      </div>

      <div className="absolute top-[470px] sm:top-[450px] bg-gradient-to-b from-background via-background to-transparent w-full h-full"></div>
      <div className="relative z-10">
        <div className="mt-32">
          <div className="scale-125">
            <JohnnyDock />
          </div>
        </div>
        <ProjectsSection projects={projects} />
        <PostsSection posts={posts} />
      </div>
    </>
  )
}
