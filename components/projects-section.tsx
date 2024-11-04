"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "./ui/section"
import { ExternalLink, GithubIcon, BookOpen, MessageCircle, Youtube, StarIcon } from "lucide-react"
import { OpenAIIcon } from "./ui/icons/OpenAIIcon"
import { Project } from "@/app/_types"

const statusColors: { [key: string]: string } = {
  shipped: "bg-green-600",
  coding: "bg-blue-500",
  "getting started": "bg-green-300",
  idea: "bg-yellow-400",
  // Add new statuses here with their color class
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
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
                    <span className="bg-foreground/20 px-1 py-0.5 rounded font-mono text-xs tracking-wider">{String(index + 1).padStart(3, "0")}</span>
                    <span>{project.title}</span>
                  </CardTitle>
                  <div className="flex items-center border rounded py-1 px-2 font-mono">
                    <div className={`w-2 h-2 rounded-full mr-1 ${statusColors[project.status] || "bg-gray-500"}`} />
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
