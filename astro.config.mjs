import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
// @ts-check
import { defineConfig } from "astro/config";

import { remarkReadingTime } from "./src/utils/readTime.ts";

// https://astro.build/config
export default defineConfig({
  // base: "/blog",
  integrations: [
    mdx({
      drafts: true,
      shikiConfig: {
        experimentalThemes: {
          dark: "material-theme-palenight",
          light: "vitesse-light",
        },
        wrap: true,
      },
      syntaxHighlight: "shiki",
    }),
    sitemap(),
    react(),
    tailwind(),
    sentry(),
    spotlightjs(),
  ],
  markdown: {
    drafts: true,
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "material-theme-palenight",
      wrap: true,
    },
  },
  site: "https://phuhh98.github.io",
});
