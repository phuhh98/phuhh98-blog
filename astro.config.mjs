import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import yaml from "@rollup/plugin-yaml";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";
import { nodePolyfills } from "vite-plugin-node-polyfills";

import { remarkReadingTime } from "./src/utils/readTime.ts";

// https://astro.build/config
export default defineConfig({
  adapter: netlify({
    edgeMiddleware: true,
  }),
  base: "",
  image: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
    ],
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
    sitemap(),
    react({
      include: ["**/react/.(jsx|tsx)$/"],
    }),
    tailwind(),
    icon(),
    pagefind(),
    playformCompress(),
    svelte(),
  ],
  // Markdown reference https://docs.astro.build/en/reference/configuration-reference/#markdown-options
  markdown: {
    drafts: true,
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {},
  },

  output: "server",

  site: "https://phuhh98.github.io",
  vite: {
    define: {
      global: "window", // Fix for `global` not defined in some packages
    },
    plugins: [yaml(), nodePolyfills()],
  },
});
