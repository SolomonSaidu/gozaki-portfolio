"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Apply stored theme or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = saved || (prefersDark ? "dark" : "light");

    setTheme(current as "light" | "dark");
    document.documentElement.setAttribute("data-theme", current);
  }, []);

  // Handle toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center w-12 h-12 rounded-2xl
        bg-gradient-to-br from-purple-500/20 to-teal-400/20 dark:from-purple-600/20 dark:to-teal-500/20
        border border-gray-300/40 dark:border-gray-700/40
        backdrop-blur-xl shadow-md hover:shadow-lg transition-all duration-300 group"
    >
      {/* subtle glow ring */}
      <span
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-teal-400 opacity-0 group-hover:opacity-30 blur-md transition"
      ></span>

      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="w-5 h-5 text-gray-900" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
