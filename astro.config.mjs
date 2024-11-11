import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// import spotlightjs from "@spotlightjs/astro";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import pagefind from "astro-pagefind";

import { remarkReadingTime } from "./src/utils/readTime.ts";

// https://astro.build/config
export default defineConfig({
  base: "",
  integrations: [
    // mdx config inherit markdown config and apply only differences
    mdx({
      shikiConfig: {
        themes: {
          dark: "rose-pine-moon",
          light: "rose-pine-dawn",
        },
        wrap: true,
      },
      syntaxHighlight: "shiki",
    }),
    sitemap(),
    react(), // spotlightjs(),
    tailwind(),
    icon(),
    pagefind(),
  ],
  // Markdown reference https://docs.astro.build/en/reference/configuration-reference/#markdown-options
  markdown: {
    drafts: true,
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {},
  },

  site: "https://phuhh98.github.io",
});
