import { auth } from "@myapp/auth/auth";
import { createTodo } from "./actions";
import { headers } from "next/headers";
import { container } from "@/container";
import { UserService } from "@myapp/services/user.service";
import { TodoService } from "@myapp/services/todo.service";
import { revalidatePath } from "next/cache";
import { Login } from "./_components/login";

const todoService = container.get(TodoService);

const userService = container.get(UserService);

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user.id) {
    return <Login />;
  }

  const todos = await todoService.getTodos(session.user.id);

  const roles = await userService.getRoles(session.user.id);

  return (
    <>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Todos</h1>
      </header>
      <form action={createTodo} className="flex items-center gap-2">
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

      <ul className="divide-y rounded border">
        {todos.length === 0 && (
          <li className="p-4 text-sm text-gray-500">No todos yet. Add one!</li>
        )}
        {todos.map((t) => (
          <li key={t.id} className="p-4 flex items-center gap-3">
            <div className="flex-1">
              <div className="font-medium">{t.content}</div>
              <div className="text-xs text-gray-500">{t.id}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
