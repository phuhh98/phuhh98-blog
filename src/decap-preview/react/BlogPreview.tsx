import type { PreviewTemplateComponentProps } from "decap-cms-core";

import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { materialOceanic as codeHightlightStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMdx from "remark-mdx";
import Tag from "src/components/react/Tag";
import { cld } from "src/utils/cloudinary";

/**
 *  Refer to schema in src/content/config.ts>blog
 */
export const BlogPreview: React.ComponentType<PreviewTemplateComponentProps> = ({ entry /*, ...otherprops */ }) => {
  const title = entry.getIn(entryDataPath`title`) as string;
  const pubDate = entry.getIn(entryDataPath`pubDate`) as string;
  const description = entry.getIn(entryDataPath`description`) as string;
  const tags = entry.getIn(entryDataPath`tags`) as string[];
  const image = entry.getIn(entryDataPath`heroImage`) as string;
  const body = entry.getIn(entryDataPath`body`) as string;

  return (
    <div className="mt-8 mx-auto w-5/6 text-center">
      <section title="head">
        <time className="text-sm font-bold text-opacity-60">
          {new Date(pubDate).toLocaleDateString("en-us", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
        <h1 className="text-center text-4xl md:text-6xl md:pb-2.5 font-semibold">{title}</h1>
        <div className="m-auto flex flex-row gap-2 my-2 justify-center">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div className="flex justify-center">
          <img
            alt={"heroImage"}
            className="md:w-600 md:h-300"
            height={300}
            src={cld.image(image).toURL()}
            width={600}
          />
        </div>
      </section>

      <section className="my-2" title="description">
        <hr />
        <div className="flex flex-row gap-4">
          <aside className="font-bold">Description</aside>

          <p className="border-l-2">{description}</p>
        </div>
        <hr />
      </section>
      <section className="text-left" title="body">
        <Markdown
          components={{
            code(props) {
              const { children, className, /* node, */ ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  // {...rest}
                  PreTag="div"
                  style={codeHightlightStyle}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
            img(props) {
              return <img {...props} src={cld.image(props.src).toURL()} />;
            },
          }}
          remarkPlugins={[remarkMdx]}
        >
          {body}
        </Markdown>
      </section>
    </div>
  );
};

function entryDataPath(str: TemplateStringsArray) {
  const DELIMITER = ".";
  return ["data", ...str.toString().split(DELIMITER)];
}
