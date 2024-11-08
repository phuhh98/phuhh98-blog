declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly PUBLIC_APP_BASE_URL: string;
    }
  }

  interface Window {
    // eslint-disable-next-line
    dataLayer: any[];
  }
}

export {};
