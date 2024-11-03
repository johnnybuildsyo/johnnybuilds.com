"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section } from "./ui/section"
import { ExternalLink, GithubIcon, BookOpen, MessageCircle, Youtube, StarIcon } from "lucide-react"
import { OpenAIIcon } from "./ui/icons/OpenAIIcon"

type Project = {
  title: string
  description: string
  tags: string[]
  url: string
  github: string
  stars?: number
  image: string
  status: "shipped" | "coding" | "getting started" | "idea"
  blogPost?: string
  additionalLinks?: {
    type: "hn" | "reddit" | "youtube" | "openai" | "other"
    url: string
    label: string
  }[]
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Global Battle Royale",
      description: "Multiplayer elimination game with a series of escalating challenges until we get to an ultimate winner. Then we start all over again.",
      tags: ["next.js", "game", "Express"],
      url: "",
      github: "",
      image: "",
      status: "getting started",
      blogPost: "",
      additionalLinks: [{ type: "openai", url: "https://chatgpt.com/share/67278796-34f4-8009-86b1-eb87ce7fe35e", label: "ChatGPT Idea Discussion" }],
      stars: 0,
    },
  ]

  useEffect(() => {
    projects.forEach((project) => {
      if (project.github) {
        // const repoName = project.github.split('/').slice(-2).join('/')
        // fetch(`https://api.github.com/repos/${repoName}`)
        //   .then(response => response.json())
        //   .then(data => {
        //     setProjects(prevProjects =>
        //       prevProjects.map(p =>
        //         p.github === project.github ? { ...p, stars: data.stargazers_count } : p
        //       )
        //     )
        //   })
        //   .catch(error => console.error('Error fetching GitHub stars:', error))
      }
    })
  }, [])

  return (
    <Section title="Projects">
      <div className="space-y-8">
        {projects.length === 0 && (
          <div className="text-center italic opacity-70">
            <p>No projects yet. I’m about to start cooking.</p>
          </div>
        )}
        {projects.map((project, index) => (
          <Card key={index} className="border overflow-hidden flex flex-col">
            <div className="flex flex-col flex-grow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span className="bg-foreground/20 px-1 py-0.5 rounded font-mono text-xs tracking-wider">001</span>
                    <span>{project.title}</span>
                  </CardTitle>
                  <div className="flex items-center border rounded py-1 px-2 font-mono">
                    <div
                      className={`w-2 h-2 rounded-full mr-1 ${project.status === "shipped" || project.status === "getting started" ? "bg-green-500" : project.status === "idea" ? "bg-yellow-400" : "bg-blue-500"}`}
                    />
                    <span className="text-xs text-foreground/70 lowercase">{project.status}</span>
                  </div>
                </div>
                <CardDescription className="text-foreground/70">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.blogPost && (
                    <Link href={project.blogPost} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <BookOpen className="mr-1 h-4 w-4" />
                        Blog Post
                      </Button>
                    </Link>
                  )}
                  {project.additionalLinks?.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        {link.type === "hn" && <MessageCircle className="mr-1 h-4 w-4" />}
                        {link.type === "youtube" && <Youtube className="mr-1 h-4 w-4" />}
                        {link.type === "openai" && <OpenAIIcon className="mr-1 h-4 w-4" />}
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
              {(project.url || project.github) && (
                <CardFooter className="flex justify-between">
                  {project.url && (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" className="bg-foreground/80 text-background hover:bg-foreground/90">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" className="bg-foreground/80 text-background hover:bg-foreground/90">
                        <GithubIcon className="h-4 w-4" />
                        GitHub
                        {project.stars !== undefined && (
                          <span className="ml-1 px-1 py-0.5 text-xs bg-background/10 rounded inline-flex scale-110">
                            <StarIcon className="scale-75" />
                            {project.stars}
                          </span>
                        )}
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
