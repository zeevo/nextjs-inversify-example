import { Database } from "@myapp/database";
import { inject, injectable } from "inversify";
import { DB } from "./db.service";
import { Kysely } from "kysely";

@injectable()
export class UserService {
  constructor(@inject(DB) private db: Kysely<Database>) {}

  async getRoles(id: string) {
    const roles = await this.db
      .selectFrom("user_role")
      .where("user_id", "=", id)
      .select("role")
      .execute();

    return roles.map(({ role }) => role);
  }

  async addRole(userId: string, role: string) {
    await this.db
      .insertInto("user_role")
      .values({ user_id: userId, role })
      .execute();
  }
}
