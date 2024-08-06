import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import dotenv from 'dotenv'

dotenv.config() //For loading the .env variables
 
export const env = createEnv({
  server: {
    NODE_ENV: z.string(),
    PORT: z.string().regex(/^\d+$/),
  
    ALLOWED_UI_DOMAINS: z.string(),
  
    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_DATABASE: z.string(),

    EMAIL: z.string(),
    PASSWORD: z.string(),

    JWT_SECRET: z.string()
  },
  clientPrefix: "PUBLIC_",
 
  client: {
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});