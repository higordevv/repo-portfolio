declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    JWT_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
  }
}
