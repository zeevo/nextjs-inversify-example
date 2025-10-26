"use client";

import { authClient } from "@myapp/auth/auth-client";
import { toast } from "sonner";

export async function signUp() {
  await authClient.signUp.email(
    {
      email: "user@email.com",
      password: "passwordpassword",
      name: "user",
      callbackURL: "/",
    },
    {
      onRequest: () => {
        //show loading
      },
      onSuccess: (ctx) => {
        console.log(ctx.data);
        toast("Successfully signed up");
        //redirect to the dashboard or sign in page
      },
      onError: (ctx) => {
        // display the error message
        alert(ctx.error.message);
      },
    },
  );
}

export function SignUp() {
  return (
    <button
      className="text-2xl hover:underline cursor-pointer"
      onClick={signUp}
    >
      sign up
    </button>
  );
}
