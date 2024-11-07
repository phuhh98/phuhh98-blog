/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_GITHUB_PROFILE_URl: string;
  readonly PUBLIC_X_PROFILE_URL: string;
  readonly STRAPI_GRAPHQL_AUTH: string;
  readonly STRAPI_GRAPHQL_ENDPOINT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
