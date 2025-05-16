"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-12 h-6 bg-gray-300 rounded-full" />;

  return (
    <div className="absolute right-0 top-1 p-2 flex items-center gap-2">
      <span className="text-xl">{resolvedTheme === "dark" ? "🌙" : "☀️"}</span>
      <button
        aria-label="Toggle dark mode"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full transition-all duration-300 flex items-center p-1"
      >
        <div
          className={`w-5 h-5 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-all duration-300 ${
            resolvedTheme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
