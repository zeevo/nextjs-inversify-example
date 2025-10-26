"use client";

import { authClient } from "@myapp/auth/auth-client";
import { toast } from "sonner";
import { signIn } from "../actions";

export function SignIn() {
  const { data: session, refetch } = authClient.useSession();

  if (session) {
    return <span>{session.user.email}</span>;
  }

  return (
    <button
      className="text-2xl hover:underline cursor-pointer"
      onClick={async () => {
        await signIn();

        toast(`Successfully signed in`);

        refetch();
      }}
    >
      sign in
    </button>
  );
}
