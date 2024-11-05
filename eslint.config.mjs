import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

// Ref: https://typescript-eslint.io/getting-started/#step-2-configuration
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  // Ref: https://ota-meshi.github.io/eslint-plugin-astro/user-guide/#-usage
  ...eslintPluginAstro.configs.recommended,
  // Ref https://perfectionist.dev/configs/recommended-natural
  perfectionist.configs['recommended-natural'],
  // Ref https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#installation
  eslintConfigPrettier,
  {
    // Define the configuration for `.astro` file.
    files: ['*.astro'],

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
    },

    // Allows Astro components to be parsed.
    parser: 'astro-eslint-parser',
    // Parse the script in `.astro` as TypeScript by adding the following configuration.
    // It's the setting you need when using TypeScript.
    parserOptions: {
      extraFileExtensions: ['.astro'],
      parser: tsParser,
    },
  },
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': ['off'],
      'no-console': ['error'],
    },
  },
  includeIgnoreFile(gitignorePath),
);
