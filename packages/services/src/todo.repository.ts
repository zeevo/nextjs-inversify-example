import type { Database } from "@myapp/database";
import { inject, ServiceIdentifier } from "inversify";
import { Kysely } from "kysely";
import { DB } from "./db.service";

export interface ITodoRepository {
  create(userId: string, content: string): Promise<void>;

  getTodos(userId: string): Promise<
    {
      id: string;
      user_id: string;
      content: string;
    }[]
  >;
}

export const ITodoRepository: ServiceIdentifier<ITodoRepository> =
  Symbol.for("ITodoRepository");

export class TodoRepository implements ITodoRepository {
  constructor(@inject(DB) private db: Kysely<Database>) {}

  async create(userId: string, content: string) {
    await this.db
      .insertInto("todo")
      .values({ content, user_id: userId })
      .returningAll()
      .execute();
  }

  async getTodos(userId: string) {
    return await this.db
      .selectFrom("todo")
      .where("user_id", "=", userId)
      .selectAll()
      .execute();
  }
}
