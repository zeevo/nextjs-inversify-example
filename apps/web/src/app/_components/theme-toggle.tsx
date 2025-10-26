"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative text-center"
    >
      <span className="block dark:hidden  hover:underline cursor-pointer">
        light
      </span>
      <span className="hidden dark:block  hover:underline cursor-pointer">
        dark
      </span>{" "}
    </button>
  );
}
