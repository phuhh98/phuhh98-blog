import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
// import spotlightjs from "@spotlightjs/astro";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import pagefind from "astro-pagefind";

import { remarkReadingTime } from "./src/utils/readTime.ts";

// https://astro.build/config
export default defineConfig({
  base: "",
  build: {
    format: "file",
  },
  integrations: [
    // mdx config inherit markdown config and apply only differences
    mdx({
      shikiConfig: {
        theme: "material-theme-ocean",
        wrap: true,
      },
      syntaxHighlight: "prism",
    }),
    sitemap(), // spotlightjs(),
    react(),
    tailwind(),
    icon(),
    pagefind(),
    playformCompress(),
  ],
  // Markdown reference https://docs.astro.build/en/reference/configuration-reference/#markdown-options
  markdown: {
    drafts: true,
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {},
  },
  output: "static",

  site: "https://phuhh98.github.io",
});
