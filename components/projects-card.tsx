"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, GithubIcon, BookOpen, MessageCircle, Youtube, StarIcon } from "lucide-react"
import { OpenAIIcon } from "./ui/icons/OpenAIIcon"
import { Project } from "@/app/_types"
import { cn } from "@/lib/utils"
import Image from "next/image"

const statusColors: { [key: string]: string } = {
  shipped: "bg-green-600",
  coding: "bg-blue-500",
  "getting started": "bg-green-300",
  idea: "bg-yellow-400",
}

export function ProjectCard({ project, index, isCurrent }: { project: Project; index: number; isCurrent?: boolean }) {
  return (
    <Card className="border border-dashed border-foreground/20 overflow-hidden flex flex-col w-full">
      <div className="flex flex-col flex-grow">
        <CardHeader>
          {isCurrent && project.image && (
            <Link href={project.url} target="_blank" className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
              <Image src={project.image} alt="" fill={true} className="w-full h-40 object-cover" />
            </Link>
          )}
          <div className="flex items-center justify-between">
            <CardTitle className={cn("font-bold text-foreground flex items-center gap-2", isCurrent ? "text-3xl" : "text-xl")}>
              {!isCurrent && <span className="bg-foreground/20 px-1 py-0.5 rounded font-mono text-xs tracking-wider">{String(index + 1).padStart(3, "0")}</span>}
              <span className="tracking-wide font-extrabold">{project.title}</span>
            </CardTitle>
            <div className="flex items-center border rounded py-1 px-2 font-mono">
              <div className={`w-2 h-2 rounded-full mr-1 ${statusColors[project.status] || "bg-gray-500"}`} />
              <span className="text-xs text-foreground/70 lowercase">{project.status}</span>
            </div>
          </div>
          <CardDescription className={cn("text-foreground/70 text-pretty", isCurrent ? "text-base" : "text-sm")}>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.blogPost && (
              <Link href={project.blogPost} target="_blank">
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
                  Open
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
  )
}
