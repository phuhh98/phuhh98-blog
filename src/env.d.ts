/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_APP_BASE_URL: sttring;
  readonly PUBLIC_AUTHOR_EMAIL: string;
  readonly PUBLIC_GITHUB_PROFILE_URl: string;
  readonly PUBLIC_LINKEDIN_PROFILE_URL: string;
  readonly PUBLIC_X_PROFILE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
