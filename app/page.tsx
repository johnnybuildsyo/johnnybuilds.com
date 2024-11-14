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

const posts = (await fetchMediumPosts()) as Post[]

export default function Home() {
  return (
    <>
      <h1 className="text-7xl font-extrabold w-full text-center">Johnny Builds</h1>
      <GlitchySubhead />
      <Link href="https://github.com/johnnybuildsyo/johnnybuilds.com/discussions/">
        <Button className="flex items-center gap-2 font-display">
          <GitHubLogoIcon />
          Contact
        </Button>
      </Link>
      <Intro />
      <JohnnyDock />
      <ProjectsSection projects={projects} />
      <PostsSection posts={posts} />
    </>
  )
}
