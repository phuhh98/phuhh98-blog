import { CATEGORIES } from "@/data/categories";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      category: z.enum(CATEGORIES),
      description: z.string(),
      draft: z.boolean().default(false),
      heroImage: image(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      tags: z.array(z.string()),
      title: z.string().max(80),
    }),
});

export const collections = { blog };
