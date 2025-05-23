import type { Entry, EntryCollection, EntryFieldTypes } from "contentful";

import type { CONTENT_TYPES } from "./constants";

export interface Tag {
  contentTypeId: CONTENT_TYPES.Tag;
  fields: {
    title: EntryFieldTypes.Text;
  };
}

export type TagEntryCollection = EntryCollection<Tag, undefined, string>;
export type TagEntry = Entry<Tag, undefined, string>;
