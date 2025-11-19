import { authClient } from "@myapp/auth/auth-client";
import { redirect } from "next/navigation";

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
        redirect("/");
      },
      onError: (ctx) => {
        // display the error message
        alert(ctx.error.message);
      },
    }
  );
}
export function Login() {
  return (
    <div className="flex gap-4 text-2xl">
      <button
        className="text-2xl hover:underline cursor-pointer"
        onClick={signUp}
      >
        sign up
      </button>
    </div>
  );
}
