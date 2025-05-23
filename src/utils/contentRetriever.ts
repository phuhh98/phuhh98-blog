import {
  type Blog,
  type BlogEntryCollection,
  type Category,
  type CategoryEntryCollection,
  CONTENT_TYPES,
  type Tag,
  type TagEntryCollection,
} from "../types/contentful";
import { contentfulClient } from "./contentful";

export class ContentRetriever {
  private static categoriesCache: CategoryEntryCollection | null = null;
  private static postsCache: BlogEntryCollection | null = null;
  private static tagsCache: null | TagEntryCollection = null;

  static async filterPostsByCategory(category: string) {
    const posts = await this.getPosts();

    return posts.items.filter((post) => {
      if (post.fields.category.sys.type === "Entry" && "fields" in post.fields.category) {
        return post.fields.category.fields.title.toLowerCase() === category;
      }
      return false;
    });
  }

  static async getCategories() {
    if (!this.categoriesCache) {
      const response = await contentfulClient.getEntries<Category>({
        content_type: CONTENT_TYPES.Category,
      });
      this.categoriesCache = response;
    }
    return this.categoriesCache;
  }

  static async getPostByTag(tag: string) {
    const posts = await this.getPosts();
    const lowercaseTag = tag.toLowerCase();

    return posts.items.filter((post) => {
      return post.fields.tags.some((postTag) => {
        if (postTag.sys.type === "Entry" && "fields" in postTag) {
          return postTag.fields.title.toLowerCase() === lowercaseTag;
        }
        return false;
      });
    });
  }

  static async getPosts(max?: number) {
    if (!this.postsCache) {
      const response = await contentfulClient.getEntries<Blog>({
        content_type: CONTENT_TYPES.Blog,
        include: 3,
      });
      this.postsCache = response;
    }
    return max ? { ...this.postsCache, items: this.postsCache.items.slice(0, max) } : this.postsCache;
  }

  static async getTags() {
    if (!this.tagsCache) {
      const response = await contentfulClient.getEntries<Tag>({
        content_type: CONTENT_TYPES.Tag,
      });
      this.tagsCache = response;
    }
    return this.tagsCache;
  }
}
