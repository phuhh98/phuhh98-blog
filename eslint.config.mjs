import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import markdown from "eslint-plugin-markdown";
import * as mdx from "eslint-plugin-mdx";
import perfectionist from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

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
  {
    ...mdx.flat,
    // // optional, if you want to lint code blocks at the same
    // processor: mdx.createRemarkProcessor({
    //   // optional, if you want to disable language mapper, set it to `false`
    //   // if you want to override the default language mapper inside, you can provide your own
    //   languageMapper: {},
    //   lintCodeBlocks: true,
    // }),
  },
  {
    rules: {
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
    },
  },
  includeIgnoreFile(gitignorePath),
  {
    ignores: ["strapi/"],
  },
  // Ref https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#installation
  eslintConfigPrettier,
);
