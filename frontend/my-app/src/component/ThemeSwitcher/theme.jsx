import { useEffect, useState } from "react";

export default function ThemeToggle({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="
            px-4 py-2 rounded-lg font-semibold text-sm
            bg-slate-200 text-slate-800
            dark:bg-slate-800 dark:text-slate-200
            shadow-sm transition-colors duration-200
          "
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {children}
    </>
  );
}