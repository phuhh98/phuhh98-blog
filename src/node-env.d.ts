declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly STRAPI_GRAPHQL_AUTH: string;
      readonly STRAPI_GRAPHQL_ENDPOINT: string;
    }
  }
}

export {};
