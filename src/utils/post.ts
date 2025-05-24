import { getCollection } from "astro:content";

export const getCategories = async () => {
  return (await getCollection("category")).map((category) => category.data.name);
};

export const getPosts = async (max?: number) => {
  return (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max);
};

export const getTags = async () => {
  return (await getCollection("tag")).map((tag) => tag.data.name);
};

export const getPostByTag = async (tag: string) => {
  const posts = await getPosts();
  const lowercaseTag = tag.toLowerCase();
  return posts
    .filter((post) => !post.data.draft)
    .filter((post) => {
      return post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag);
    });
};

export const filterPostsByCategory = async (category: string) => {
  const posts = await getPosts();
  return posts.filter((post) => !post.data.draft).filter((post) => post.data.category.toLowerCase() === category);
};
