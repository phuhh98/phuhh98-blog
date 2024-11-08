import type { CodegenConfig } from "@graphql-codegen/cli";

import dotenv from "dotenv";

const envPaths = ["./.env"];

envPaths.forEach((path) => {
  dotenv.config({ path });
});

const config: CodegenConfig = {
  config: {
    headers: {
      authorization: `Bearer ${process.env.STRAPI_GRAPHQL_AUTH}`,
    },
  },
  documents: ["src/codegen/**/*.{gql,graphql}"],
  generates: {
    "./src/codegen/graphql/": {
      config: {
        dedupeFragments: true,
        exportFragmentSpreadSubTypes: true,
        exposeFetcher: true,
        exposeQueryKeys: true,
        fetcher: "~/customFetcher#customFetcher",
        inlineFragementType: "combine",
        maybeValue: "T",
        operationResultSuffix: "Response",
        preResolveTypes: true,
        rawRequest: false,
        skipTypename: false,
        withHooks: true,
      },
      plugins: ["typescript-operations"],
      preset: "near-operation-file-preset",
      presetConfig: {
        baseTypesPath: "type.graphql.ts",
        extension: ".geranated.tsx",
      },
    },
    "./src/codegen/graphql/type.graphql.ts": {
      config: {
        maybeValue: "T",
      },
      documents: ["./src/**/*.{gql,graphql}"],
      plugins: ["typescript", "typescript-operations", "typescript-graphql-request"],
    },
    "./src/codegen/schema/graphql.schema.json": {
      config: {
        maybeValue: "T",
      },
      plugins: ["introspection"],
    },
    "./src/codegen/schema/schema.graphql": {
      config: {
        maybeValue: "T",
      },
      plugins: ["schema-ast"],
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
  ignoreNoDocuments: true,
  schema: process.env.STRAPI_GRAPHQL_ENDPOINT,
};

export default config;
