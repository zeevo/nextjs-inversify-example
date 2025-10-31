"use server";

import { container } from "@/container";
import { auth } from "@myapp/auth/auth";
import { TodoService } from "@myapp/services/todo.service";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

const todoService = container.get(TodoService);

export async function signIn() {
  await auth.api.signInEmail({
    body: {
      email: "user@email.com",
      password: "passwordpassword",
    },
  });
}

export async function createTodo(formData: FormData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const content = formData.get("content");

  if (session?.user && content) {
    await todoService.createTodo(session.user.id, String(content));
    revalidatePath("/");
  }
}
