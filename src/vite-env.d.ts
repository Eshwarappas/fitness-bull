/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string
  // add other custom env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
