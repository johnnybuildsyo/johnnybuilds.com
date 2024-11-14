"use client"

import { useEffect } from "react"
import { Section } from "./ui/section"
import { Project } from "@/app/_types"
import { ProjectCard } from "./projects-card"

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
  }, [projects])

  const currentProjects = projects.filter((project) => project.isCurrent)

  return (
    <Section title="Projects">
      <div className="space-y-8">
        {projects.length === 0 && (
          <div className="text-center italic opacity-70">
            <p>No projects yet. I’m about to start cooking.</p>
          </div>
        )}
        {currentProjects.length > 0 && (
          <div className="py-4 flex flex-col items-center gap-4 w-full">
            <h3 className="uppercase inline tracking-[4px] text-xs text-green-600 text-center font-bold mb-2 px-4">Active Project{currentProjects.length > 1 ? "s" : ""}</h3>
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} isCurrent={true} project={project} index={index} />
            ))}
          </div>
        )}
        <div className="py-4 flex flex-col items-center gap-4">
          <h3 className="uppercase inline tracking-[4px] text-xs opacity-80 text-center font-bold mb-2 px-4">All Projects</h3>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
