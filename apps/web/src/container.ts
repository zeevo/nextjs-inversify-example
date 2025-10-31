import { Database } from "@myapp/database";
import { DB } from "@myapp/services/db.service";
import {
  ITodoRepository,
  TodoRepository,
} from "@myapp/services/todo.repository";
import { TodoService } from "@myapp/services/todo.service";
import { UserService } from "@myapp/services/user.service";
import { Container } from "inversify";
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.DATABASE_SSL === "true"
      ? { rejectUnauthorized: false }
      : undefined,
});

const db = new Kysely<Database>({
  dialect: new PostgresDialect({ pool }),
});

const container = new Container({ autobind: true });

container.bind(UserService).toSelf();
container.bind(TodoService).toSelf();
container.bind(ITodoRepository).to(TodoRepository);
container.bind(DB).toConstantValue(db);

export { container };
