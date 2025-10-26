import { connect, sql } from "@myapp/database";
import { Badge } from "@myapp/ui/components/badge";

const db = connect();

export async function DatabaseConnectivity() {
  try {
    await sql<{ success: boolean }>`SELECT 1=1 AS success`.execute(db);
  } catch (e) {
    console.log(e);
    return (
      <div className="flex items-center gap-2">
        <Badge>database disconnected</Badge>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Badge className="bg-green-500 text-white dark:bg-green-600">
        database connected
      </Badge>
    </div>
  );
}
