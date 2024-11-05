import { defineCollection, z } from "astro:content";

const article = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    description: z.string(),
    heroImage: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    title: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
  type: "content",
});

export const collections = { article };
