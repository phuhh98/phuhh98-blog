import * as Types from "../../graphql/type.graphql";

export type GetPostsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetPostsQueryResponse = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "Post";
    category: Types.Enum_Post_Category;
    documentId: string;
    title: string;
    description: string;
    slug?: string;
    content: string;
    publishedAt?: any;
    updatedAt?: any;
    locale?: string;
    heroImage?: {
      __typename?: "UploadFile";
      url: string;
      mime: string;
      width?: number;
      height?: number;
      alternativeText?: string;
      name: string;
    };
    footer?: Array<{ __typename?: "ComponentButtonCta"; buttonTitle: string; id: string } | { __typename?: "Error" }>;
    localizations: Array<{
      __typename?: "Post";
      title: string;
      localizations: Array<{ __typename?: "Post"; localizations: Array<{ __typename?: "Post"; title: string }> }>;
    }>;
  }>;
};
