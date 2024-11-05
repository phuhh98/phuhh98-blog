import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/blog",
  integrations: [mdx(), sitemap()],
  site: "https://phuhh98.github.io",
});
