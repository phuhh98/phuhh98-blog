interface SiteConfig {
  author: string;
  description: string;
  lang: string;
  ogLocale: string;
  paginationSize: number;
  shareMessage: string;
  title: string;
}

export const siteConfig: SiteConfig = {
  author: "DanielCG", // Site author
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", // Description to display in the meta tags
  lang: "en-GB",
  ogLocale: "en_GB",
  paginationSize: 6, // Number of posts per page
  shareMessage: "Share this post", // Message to share a post on social media
  title: "Astro Theme OpenBlog", // Site title.
};
