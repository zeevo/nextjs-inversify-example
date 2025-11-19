import { container } from "@/container";
import { auth } from "@myapp/auth/auth";
import { TodoService } from "@myapp/services/todo.service";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

const todoService = container.get(TodoService);

export function CreateTodo() {
  return (
    <form
      action={async (formData: FormData) => {
        "use server";
        const session = await auth.api.getSession({
          headers: await headers(),
        });

        const content = formData.get("content");

        if (session?.user && content) {
          await todoService.createTodo(session.user.id, String(content));
          revalidatePath("/");
        }
      }}
      className="flex items-center gap-2"
    >
      <input
        type="text"
        name="content"
        placeholder="New todo…"
        className="flex-1 rounded border px-3 py-2"
        autoComplete="off"
        required
      />
      <button
        type="submit"
        className="rounded bg-black px-4 py-2 text-white hover:opacity-90 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}
