interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_APP_BASE_URL: sttring;
  readonly PUBLIC_AUTHOR_EMAIL: string;
  readonly PUBLIC_GITHUB_PROFILE_URL: string;
  readonly PUBLIC_LINKEDIN_PROFILE_URL: string;
  readonly PUBLIC_X_PROFILE_URL: string;
  // more env variables...
}

interface Window {
  // eslint-disable-next-line
  dataLayer: any[];
}
// Google analytic gtag
// eslint-disable-next-line
declare var dataLayer: any[];

declare module "decap-cms-media-library-cloudinary" {
  import type { CmsMediaLibrary } from "decap-cms-core";
  export const DecapCmsMediaLibraryCloudinary: CmsMediaLibrary;

  const cloudinaryMediaLibrary: CmsMediaLibrary;

  export default cloudinaryMediaLibrary;
}
