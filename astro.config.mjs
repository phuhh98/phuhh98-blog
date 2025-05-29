import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import pagefind from "astro-pagefind";

import { remarkReadingTime } from "./src/utils/readTime.ts";

// https://astro.build/config
export default defineConfig({
  adapter: netlify({
    edgeMiddleware: true,
    image: {
      domains: ["res.cloudinary.com"],
    },
  }),
  base: "",
  integrations: [
    // mdx config inherit markdown config and apply only differences
    mdx({
      shikiConfig: {
        theme: "material-theme-ocean",
        wrap: true,
      },
      syntaxHighlight: "prism",
    }),
    sitemap(),
    sentry(),
    spotlightjs(),
    react({
      include: ["**/react/.(jsx|tsx)$/"],
    }),
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

  output: "server",
  site: "https://phuhh98.github.io",
});
