import type { Entry, EntryCollection, EntryFieldTypes } from "contentful";

import type { Category } from "./Category";
import type { CONTENT_TYPES } from "./constants";
import type { Tag } from "./Tag";

export interface Blog {
  contentTypeId: CONTENT_TYPES.Blog;
  fields: {
    cardImage: EntryFieldTypes.AssetLink;
    category: EntryFieldTypes.EntryLink<Category>;
    content: EntryFieldTypes.RichText;
    description: EntryFieldTypes.Text;
    heroImage: EntryFieldTypes.AssetLink;
    peekImage: EntryFieldTypes.AssetLink;
    slug: EntryFieldTypes.Text;
    tags: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Tag>>;
    title: EntryFieldTypes.Text;
  };
}

export type BlogEntryCollection = EntryCollection<Blog, undefined, string>;
export type BlogEntry = Entry<Blog, undefined, string>;
