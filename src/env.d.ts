interface ImportMetaEnv {
  readonly SENTRY_AUTH_TOKEN: string;
  readonly PUBLIC_TRACKING_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
