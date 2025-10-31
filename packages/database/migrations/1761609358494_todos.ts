import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("todo")
    .addColumn("id", "text", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()::text`)
    )
    .addColumn("user_id", "text")
    .addColumn("content", "text")
    .addForeignKeyConstraint("todo_user_id_user_id_fk", ["user_id"], "user", [
      "id",
    ])
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {}
