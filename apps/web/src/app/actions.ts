"use server";

import { auth } from "@myapp/auth/auth";

export async function signIn() {
  await auth.api.signInEmail({
    body: {
      email: "user@email.com",
      password: "passwordpassword",
    },
  });
}
