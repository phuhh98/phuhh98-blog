import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      category: z.string(),
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
  type: "content",
});

const category = defineCollection({
  schema: z.object({
    name: z.string(),
  }),
  type: "data",
});

const tag = defineCollection({
  schema: z.object({
    name: z.string(),
  }),
  type: "data",
});

export const collections = { blog, category, tag };
