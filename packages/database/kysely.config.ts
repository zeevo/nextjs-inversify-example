import { PostgresDialect } from "kysely";
import { defineConfig } from "kysely-ctl";
import { Pool } from "pg";
import { loadEnvConfig } from "@next/env";
import path from "path";

const projectDir = path.resolve(__dirname, "../../");

loadEnvConfig(projectDir);

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
});

export default defineConfig({
  dialect,
});
