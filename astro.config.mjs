import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// import spotlightjs from "@spotlightjs/astro";
// @ts-check
import { defineConfig } from "astro/config";

import { remarkReadingTime } from "./src/utils/readTime.ts";

// import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  base: "",
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
    tailwind(), // spotlightjs(),
    // icon(),
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
