import { getSdk } from "@/graphql";
import { GraphQLClient } from "graphql-request";

export const graphqlClient = getSdk(
  new GraphQLClient(import.meta.env.STRAPI_GRAPHQL_ENDPOINT, {
    headers: {
      authorization: `Bearer ${import.meta.env.STRAPI_GRAPHQL_AUTH}`,
    },
  }),
);
