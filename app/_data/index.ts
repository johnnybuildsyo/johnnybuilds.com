import { Project } from "../_types"

export const projects: Project[] = [
    {
      title: "JohnnyBuilds Next.js Starter",
      description: "Multiplayer elimination game with a series of escalating challenges until we get to an ultimate winner. Then we start all over again.",
      tags: ["next.js", "starter", "template", "resource"],
      url: "https://johnnybuilds-nextjs-starter.vercel.app/",
      github: "https://github.com/johnnybuildsyo/johnnybuilds-nextjs-starter",
      image: "",
      status: "shipped",
      blogPost: "https://medium.com/@johnnybuilds/how-johnny-builds-new-web-projects-51f32b39bc20",
      additionalLinks: [],
      stars: 1,
    },
    {
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
      title: "Build In Public Directory",
      description: "A directory of prominent folks who build in public along with stats (follower counts, github stars, etc) and links.",
      tags: ["next.js", "directory"],
      url: "https://publicbuilders.org",
      github: "https://github.com/johnnybuildsyo/publicbuilders",
      image: "",
      status: "coding",
      blogPost: "https://bsky.app/profile/johnnybuilds.bsky.social/post/3la677sgu722x",
      additionalLinks: [],
      stars: 0,
    },
    {
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
      title: "Build Log Generator",
      description: "Tool for generating daily build log entries with AI from commit history for #buildinpublic projects",
      tags: ["CLI", "ai", "tool", "buildinpublic"],
      url: "",
      github: "",
      image: "",
      status: "idea",
      blogPost: "",
      additionalLinks: [],
      stars: 0,
    }
  ]