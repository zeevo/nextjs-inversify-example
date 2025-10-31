import { Database } from "@myapp/database";
import { ServiceIdentifier } from "inversify";
import { Kysely } from "kysely";

export const DB: ServiceIdentifier<Kysely<Database>> = Symbol.for("Database");
