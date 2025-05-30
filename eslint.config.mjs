import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import markdown from "eslint-plugin-markdown";
import * as mdx from "eslint-plugin-mdx";
import perfectionist from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import tseslint from "typescript-eslint";

import svelteConfig from "./svelte.config.js";

export default tseslint.config(
  // Ref: https://typescript-eslint.io/getting-started/#step-2-configuration
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  // Ref: https://ota-meshi.github.io/eslint-plugin-astro/user-guide/#-usage
  ...eslintPluginAstro.configs.recommended,
  // Ref https://perfectionist.dev/configs/recommended-natural
  perfectionist.configs["recommended-natural"],
  ...markdown.configs.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add this if you are using SvelteKit in non-SPA mode
      },
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".svelte"], // Add support for additional file extensions, such as .svelte
        parser: tseslint.parser,
        projectService: true,
        // Specify a parser for each language, if needed:
        // parser: {
        //   ts: ts.parser,
        //   js: espree,    // Use espree for .js files (add: import espree from 'espree')
        //   typescript: ts.parser
        // },

        // We recommend importing and specifying svelte.config.js.
        // By doing so, some rules in eslint-plugin-svelte will automatically read the configuration and adjust their behavior accordingly.
        // While certain Svelte settings may be statically loaded from svelte.config.js even if you don’t specify it,
        // explicitly specifying it ensures better compatibility and functionality.
        svelteConfig,
      },
    },
  },
  {
    ...mdx.flat,
  },
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": ["off"],
      "@typescript-eslint/no-explicit-any": ["warn"],
      "@typescript-eslint/triple-slash-reference": ["off"],
      "no-console": ["error"],
    },
  },
  {
    files: ["**/*.md", "**/*.mdx"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["off"],
      "no-console": ["off"],
      "no-irregular-whitespace": ["off"],
      "no-undef": ["warn"],
      "no-unused-expressions": ["error", { allowShortCircuit: true }],
    },
  },
  {
    ignores: ["dist/", ".astro/", "node_modules/", ".netlify/"],
  },
  // Ref https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#installation
  eslintConfigPrettier,
);
