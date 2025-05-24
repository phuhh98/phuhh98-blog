import { siteConfig } from "@/site-config";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
// eslint-disable-next-line
export async function GET(context: any) {
  const posts = await getCollection("blog");
  return rss({
    description: siteConfig.description,
    items: posts.map((post) => ({
      ...post.data,
      link: `post/${post.slug}/`,
    })),
    site: context.site,
    title: siteConfig.title,
  });
}
