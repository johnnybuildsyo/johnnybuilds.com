#!/usr/bin/env node

import Parser from "rss-parser"; // RSS parser for fetching Medium feed
import path from "path"; // Path utilities
import { promises as fs } from "fs"; // File system for writing JSON
import slugify from "slugify"; // For generating slugs from titles

const OUTPUT_DIR = path.resolve("./app/_data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "posts.json");

const fetchMediumPosts = async () => {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(`https://medium.com/feed/@johnnybuilds`);

    console.log(`Fetched ${feed.items.length} posts from Medium.`);

    const posts = feed.items.reduce((acc, item) => {
      // Generate a slug from the title
      const slug = slugify(item.title, { lower: true, strict: true });

      // Add the post data keyed by the slug
      acc[slug] = {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        contentSnippet: item.contentSnippet,
        content: item["content:encoded"],
      };

      return acc;
    }, {});

    // Ensure the output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Write posts to the output file
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(posts, null, 2));
    console.log(`Posts saved to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
  }
};

// Execute the script
fetchMediumPosts();
