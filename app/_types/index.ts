export type Post = {
  title: string
  link: string
  pubDate: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  url: string
  github: string
  stars?: number
  image: string
  status: "live" | "coding" | "getting started" | "idea"
  blogPost?: string
  additionalLinks?: {
    type: "hn" | "reddit" | "youtube" | "openai" | "other"
    url: string
    label: string
  }[]
  isCurrent?: boolean
}