import { ThemeToggle } from "./_components/theme-toggle";
import { SignIn } from "./_components/sign-in";
import { SingOut } from "./_components/sign-out";
import { SignUp } from "./_components/sign-up";
import { DatabaseConnectivity } from "./_components/database-connectivity";
import { api } from "@/trpc/server";
import Link from "next/link";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <div className="flex flex-col max-w-2xlg mx-auto">
      <main className="flex flex-col gap-4 items-center justify-center min-h-dvh text-center">
        <h1 className="leading-36 text-9xl font-bold bg-gradient-to-r from-black to-gray-400 dark:from-white dark:to-gray-700 bg-clip-text text-transparent">
          myapp
        </h1>
        <div className="flex gap-4 text-2xl">
          <SignUp />
          <span>|</span>
          <SignIn />
          <span>|</span>
          <SingOut />
          <span>|</span>
          <ThemeToggle />
          <span>|</span>
          <Link href={"https://next-kiln.com/docs/trpc"}>trpc</Link>
          <span>|</span>
          <DatabaseConnectivity />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </div>
  );
}
