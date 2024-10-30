import Parser from 'rss-parser';

const parser = new Parser();

export async function fetchMediumPosts() {
  "use server"; // Marks this function as a Server Action
  const feed = await parser.parseURL(`https://medium.com/feed/@johnnybuilds`);

  console.log("feed.items", feed.items);
  
  // Process and map feed items
  return feed.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    contentSnippet: item.contentSnippet,
  }));
}