import type { Document } from "@contentful/rich-text-types";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const Content: React.FC<{ content: Document }> = ({ content }) => {
  return <article>{documentToReactComponents(content)}</article>;
};
