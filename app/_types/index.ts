export type Post = {
  title: string
  link: string
  pubDate: string
  contentSnippet: string
  content: string
}

export type ProjectsDAUData = Record<string, DAUData>;
export type DAUData = Record<string, { dau: number, event?: string }>

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  github: string;
  stars?: number;
  image: string;
  status: "live" | "coding" | "getting started" | "idea" | "killed" | "abandoned";
  blogPost?: string;
  additionalLinks?: {
    type: "hn" | "reddit" | "youtube" | "openai" | "other";
    url: string;
    label: string;
  }[];
  isCurrent?: boolean;
  dau?: DAUData;
};
