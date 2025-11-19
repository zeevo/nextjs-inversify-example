import { Database } from "@myapp/database";
import { inject, injectable } from "inversify";
import { Kysely } from "kysely";
import { AuthService } from "./auth.service";
import { DB } from "./db.service";

@injectable()
export class TodoService {
  constructor(
    private authService: AuthService,
    @inject(DB) private db: Kysely<Database>
  ) {}

  async createTodo(userId: string, content: string) {
    const hasAccess = await this.authService.hasAccess(userId);

    if (hasAccess) {
      await this.db
        .insertInto("todo")
        .values({ content, user_id: userId })
        .returningAll()
        .execute();
    }

    throw new Error("Forbidden");
  }
}
