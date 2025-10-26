import { injectable } from "inversify";
import { DatabaseService } from "./database.service";

@injectable()
export class UserService {
  constructor(private database: DatabaseService) {}

  async readAll() {
    return await this.database.db
      .selectFrom("user")
      .orderBy("name", "desc")
      .select("id")
      .select("name")
      .select("email")
      .execute();
  }

  async getUser(id: string) {
    return await this.database.db
      .selectFrom("user")
      .where("id", "=", id)
      .orderBy("name", "desc")
      .select("id")
      .select("name")
      .select("email")
      .execute();
  }
}
