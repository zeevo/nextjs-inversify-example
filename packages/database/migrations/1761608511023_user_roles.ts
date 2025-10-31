import { type Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("user_role")
    .addColumn("role", "text")
    .addColumn("user_id", "text")
    .addForeignKeyConstraint("user_role_user_id_id_fk", ["user_id"], "user", [
      "id",
    ])
    .addPrimaryKeyConstraint("user_role_pk", ["role", "user_id"])
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {}
