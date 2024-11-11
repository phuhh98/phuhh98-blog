import tailwindPlugin from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  plugins: [tailwindPlugin],
  theme: {
    extend: {
      colors: {
        white: "#f8f9fa",
      },
      fontFamily: {
        body: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: "0.5rem",
      },
      gridTemplateColumns: {
        list: "repeat(auto-fill, minmax(400px, max-content))",
      },
    },
  },
};
