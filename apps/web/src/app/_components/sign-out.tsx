"use client";

import { authClient } from "@myapp/auth/auth-client";
import { toast } from "sonner";

export function SingOut() {
  return (
    <button
      className="text-2xl hover:underline cursor-pointer"
      onClick={async () => {
        await authClient.signOut();

        toast(`Successfully signed out`);
      }}
    >
      sign out
    </button>
  );
}
