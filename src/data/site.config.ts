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
  author: "Phu Huynh", // Site author
  description: "Personal spot for writing and photos", // Description to display in the meta tags
  lang: "en_US",
  ogLocale: "vi_VN",
  paginationSize: 6, // Number of posts per page
  shareMessage: "Share this post", // Message to share a post on social media
  title: "Lucas me",
};
