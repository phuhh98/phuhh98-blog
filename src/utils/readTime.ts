import type { Document } from "@contentful/rich-text-types";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { fromHtml } from "hast-util-from-html";
import { toString as hastToString } from "hast-util-to-string";
import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export function remarkReadingTime() {
  // eslint-disable-next-line
  return function (tree: unknown, { data }: any) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}

export async function contentfulDocumentReadtime(document: Document) {
  const htmlString = documentToHtmlString(document, {});
  const hast = fromHtml(htmlString, { fragment: true });
  const readingTime = getReadingTime(hastToString(hast));

  return readingTime.text;
}
