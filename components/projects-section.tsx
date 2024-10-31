"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section } from "./ui/section"
import { ExternalLink, GithubIcon, BookOpen, MessageCircle, Youtube, StarIcon } from "lucide-react"

type Project = {
  title: string
  description: string
  tags: string[]
  url: string
  github: string
  stars?: number
  image: string
  status: "shipped" | "coding" | "idea"
  blogPost?: string
  additionalLinks?: {
    type: "hn" | "reddit" | "youtube" | "other"
    url: string
    label: string
  }[]
}

export function ProjectsSection() {
  const projects: Project[] = [
    // {
    //   title: "E-commerce Platform",
    //   description: "A full-stack e-commerce solution with React and Node.js",
    //   tags: ["React", "Node.js", "MongoDB", "Express"],
    //   url: "https://ecommerce-example.com",
    //   github: "https://github.com/yourusername/ecommerce-project",
    //   image: "/placeholder.svg?height=400&width=600",
    //   status: "shipped",
    //   blogPost: "https://yourblog.com/ecommerce-platform-case-study",
    //   additionalLinks: [
    //     { type: "hn", url: "https://news.ycombinator.com/item?id=12345678", label: "HN Discussion" },
    //     { type: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", label: "Demo Video" },
    //   ],
    //   stars: 1000,
    // },
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
            <p>No projects yet. I’m cooking.</p>
          </div>
        )}
        {projects.map((project, index) => (
          <Card key={index} className="border overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image src={project.image} alt={`Screenshot of ${project.title}`} layout="fill" objectFit="cover" className="bg-foreground/5 w-full h-auto" />
            </div>
            <div className="flex flex-col flex-grow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                  <div className="flex items-center border rounded py-1 px-2 font-mono">
                    <div className={`w-2 h-2 rounded-full mr-1 ${project.status === "shipped" ? "bg-green-500" : project.status === "idea" ? "bg-yellow-400" : "bg-blue-500"}`} />
                    <span className="text-xs text-foreground/70 lowercase">{project.status}</span>
                  </div>
                </div>
                <CardDescription className="text-foreground/70">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-foreground/10 text-foreground/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
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
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="bg-foreground/80 text-background hover:bg-foreground/90">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
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
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
