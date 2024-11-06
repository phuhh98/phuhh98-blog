import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/blog",
  integrations: [mdx(), sitemap(), react(), tailwind(), sentry(), spotlightjs()],
  site: "https://phuhh98.github.io",
});
