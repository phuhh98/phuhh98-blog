import type { Schema, Struct } from "@strapi/strapi";

export interface ButtonCta extends Struct.ComponentSchema {
  collectionName: "components_button_ctas";
  info: {
    displayName: "cta";
    icon: "cursor";
  };
  attributes: {
    buttonTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "button.cta": ButtonCta;
    }
  }
}
