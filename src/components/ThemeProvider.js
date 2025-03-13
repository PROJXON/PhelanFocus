"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Prevents hydration mismatch
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      {children}
    </NextThemesProvider>
  );
}