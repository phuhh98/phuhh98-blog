/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_ENVIRONMENT: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
  readonly CONTENTFUL_SPACE_ID: string;
  readonly PUBLIC_APP_BASE_URL: sttring;

  readonly PUBLIC_AUTHOR_EMAIL: string;
  // readonly PUBLIC_CLOUDINARY_NAME: string;
  readonly PUBLIC_GITHUB_PROFILE_URL: string;
  readonly PUBLIC_LINKEDIN_PROFILE_URL: string;
  readonly PUBLIC_X_PROFILE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  // eslint-disable-next-line
  dataLayer: any[];
}
// Google analytic gtag
// eslint-disable-next-line
declare var dataLayer: any[];
