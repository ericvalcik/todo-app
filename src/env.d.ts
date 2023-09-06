interface ImportMetaEnv {
  readonly DATABASE_URL: string;
  readonly DATABASE_AUTH_TOKEN: string;
  readonly FIREBASE_PRIVATE_KEY_ID: string;
  readonly FIREBASE_PRIVATE_KEY: string;
  readonly FIREBASE_PROJECT_ID: string;
  readonly FIREBASE_CLIENT_EMAIL: string;
  readonly FIREBASE_CLIENT_ID: string;
  readonly FIREBASE_AUTH_URI: string;
  readonly FIREBASE_TOKEN_URI: string;
  readonly FIREBASE_AUTH_CERT_URL: string;
  readonly FIREBASE_CLIENT_CERT_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
