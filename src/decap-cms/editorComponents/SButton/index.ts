import type { EditorComponentOptions } from "decap-cms-core";

const SButtonDef: EditorComponentOptions = {
  fields: [
    {
      label: "Button Text",
      name: "buttonText",
      widget: "string",
    },
  ],
  fromBlock: function (match) {
    return {
      buttonText: match[1],
    };
  },
  id: "s-button",
  label: "Test Action button",
  pattern: /^<SButton>(.*?)<\/SButton>$/ms,
  toBlock: function (data) {
    return `<SButton>${data["buttonText"]}</SButton>`;
  },
  toPreview: function (data) {
    return `<button style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 4px;">${data["buttonText"]}</button>`;
  },
};

export default SButtonDef;
