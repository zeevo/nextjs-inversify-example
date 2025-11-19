import { Database } from "@myapp/database";
import { inject, injectable } from "inversify";
import { DB } from "./db.service";
import { Kysely } from "kysely";

@injectable()
export class AuthService {
  constructor(@inject(DB) private db: Kysely<Database>) {}

  async hasAccess(id: string) {
    // this.db.selectFrom("user") ...

    return true;
  }
}
