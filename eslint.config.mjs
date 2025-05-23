import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import markdown from "eslint-plugin-markdown";
import * as mdx from "eslint-plugin-mdx";
import perfectionist from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Ref: https://typescript-eslint.io/getting-started/#step-2-configuration
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  {
    rules: {
      "@typescript-eslint/no-extraneous-class": "warn",
    },
  },
  // Ref: https://ota-meshi.github.io/eslint-plugin-astro/user-guide/#-usage
  ...eslintPluginAstro.configs.recommended,
  // Ref https://perfectionist.dev/configs/recommended-natural
  perfectionist.configs["recommended-natural"],
  ...markdown.configs.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    ...mdx.flat,
  },
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": ["off"],
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
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
  // Ref https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#installation
  eslintConfigPrettier,
);
