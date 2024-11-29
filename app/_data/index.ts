import { Project } from "../_types"

export const projects: Project[] = [
  {
    slug: "johnnybuilds-com",
    title: "johnnybuilds.com",
    description: "This website right here that you be lookin’ at.",
    tags: ["website", "buildinpublic"],
    url: "https://johnnybuilds.com/",
    github: "https://github.com/johnnybuildsyo/johnnybuilds.com",
    image: "",
    status: "live",
    blogPost: "https://medium.com/@johnnybuilds/starting-from-scratch-47b8fdf6fe1f",
    additionalLinks: [],
    stars: 1,
  }, {
    slug: "johnnybuilds-nextjs-starter",
    title: "JohnnyBuilds Next.js Starter",
    description: "Next.js Starter template for all my projects to help me get up and running quickly.",
    tags: ["next.js", "starter", "template", "resource"],
    url: "https://johnnybuilds-nextjs-starter.vercel.app/",
    github: "https://github.com/johnnybuildsyo/johnnybuilds-nextjs-starter",
    image: "",
    status: "live",
    blogPost: "https://medium.com/@johnnybuilds/how-johnny-builds-new-web-projects-51f32b39bc20",
    additionalLinks: [],
    stars: 1,
  },
  {
    slug: "global-battle-royale",
    title: "Global Battle Royale",
    description: "Massively multiplayer elimination game with a series of escalating challenges until we get to an ultimate winner. Then we start all over again. A cross between One Million Checkboxes and Squid Game.",
    tags: ["next.js", "game"],
    url: "",
    github: "",
    image: "",
    status: "idea",
    blogPost: "",
    additionalLinks: [{ type: "openai", url: "https://chatgpt.com/share/67278796-34f4-8009-86b1-eb87ce7fe35e", label: "ChatGPT Idea Discussion" }],
    stars: 0,
  },
  {
    slug: "publicbuilders-org",
    title: "publicbuilders.org",
    description: "A directory of prominent folks who build in public along with stats (follower counts, github stars, etc) and links.",
    tags: ["next.js", "directory"],
    url: "https://publicbuilders.org",
    github: "https://github.com/johnnybuildsyo/publicbuilders",
    image: "/projects/publicbuilders.png",
    status: "live",
    blogPost: "https://bsky.app/profile/johnnybuilds.bsky.social/post/3la677sgu722x",
    additionalLinks: [],
    stars: 1,
    isCurrent: true,
  },
  {
    slug: "ai-tarot-card-reader",
    title: "AI Tarot Card Reader",
    description: "An AI Tarot Card reader that generates its own cards then interprets them to read your fortune.",
    tags: ["next.js", "game"],
    url: "",
    github: "",
    image: "",
    status: "idea",
    blogPost: "",
    additionalLinks: [],
    stars: 0,
  },
  {
    slug: "interactive-movie-playground",
    title: "Interactive Movie Playground",
    description: "Interactive AI playground to create movie loglines, plot outlines, movie trailers and scripts.",
    tags: ["next.js", "ai", "movies"],
    url: "",
    github: "",
    image: "",
    status: "idea",
    blogPost: "",
    additionalLinks: [],
    stars: 0,
  },
  {
    slug: "build-log-generator",
    title: "Build Log Generator",
    description: "Tool for generating daily build log entries with AI from commit history for #buildinpublic projects",
    tags: ["CLI", "ai", "tool", "buildinpublic"],
    url: "",
    github: "",
    image: "",
    status: "killed",
    blogPost: "",
    additionalLinks: [],
    stars: 0,
  },
  {
    slug: "podcastomatic",
    title: "Podcastomatic",
    description: "AI powered automated podcast interview tool",
    tags: ["podcast", "ai", "tool", "buildinpublic"],
    url: "",
    github: "",
    image: "",
    status: "idea",
    blogPost: "",
    additionalLinks: [],
    stars: 0,
  },
  {
    slug: "instapoll",
    title: "Instapoll",
    description: "AI powered automated podcast interview tool",
    tags: ["poll", "survey", "tool", "saas"],
    url: "https://instapoll.run",
    github: "",
    image: "/projects/instapoll.png",
    status: "coding",
    blogPost: "",
    additionalLinks: [],
    stars: 0,
    isCurrent: true,
  }
]
