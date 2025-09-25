import type { EditorComponentOptions } from "decap-cms-core";

const IframeCustomDef: EditorComponentOptions = {
  fields: [
    {
      label: "All Iframe Attributes",
      name: "allIframeAttributes",
      widget: "string",
    },
  ],
  fromBlock: function (match) {
    return {
      allIframeAttributes: match[1],
    };
  },
  id: "iframe",
  label: "Iframe",
  pattern: /^<Iframe (.*?)><\/Iframe>$/ms,
  toBlock: function (data) {
    return `<Iframe ${data["allIframeAttributes"]}></Iframe>`;
  },
  toPreview: function (data) {
    return `<iframe ${data["allIframeAttributes"]} width="600" height="400"></iframe>`;
  },
};

export default IframeCustomDef;
