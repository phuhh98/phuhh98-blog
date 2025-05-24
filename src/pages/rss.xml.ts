import { siteConfig } from "@/site-config";
import rss from "@astrojs/rss";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { ContentRetriever } from "../utils";
// eslint-disable-next-line
export async function GET(context: any) {
  const posts = await ContentRetriever.getPosts();
  return rss({
    description: siteConfig.description,
    items: posts.items.map((post) => ({
      content: documentToHtmlString(post.fields.content),
      description: post.fields.description,
      link: `post/${post.fields.slug}/`,
      pubDate: new Date(post.sys.createdAt),
      title: post.fields.title,
    })),
    site: context.site,
    title: siteConfig.title,
  });
}
