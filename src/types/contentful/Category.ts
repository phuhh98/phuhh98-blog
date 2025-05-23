import type { Entry, EntryCollection, EntryFieldTypes } from "contentful";

import type { CONTENT_TYPES } from "./constants";

export interface Category {
  contentTypeId: CONTENT_TYPES.Category;
  fields: {
    title: EntryFieldTypes.Text;
  };
}

export type CategoryEntryCollection = EntryCollection<Category, undefined, string>;
export type CategoryEntry = Entry<Category, undefined, string>;
