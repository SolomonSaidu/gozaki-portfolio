"use client";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-50/30 dark:bg-gray-50/10 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-xl text-gray-900 dark:text-white">Gozaki</span>
        </div>

        {/* Toggle Icon (visual only) */}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/50 dark:bg-gray-100/20 shadow-md cursor-pointer">
          <Sun size={22} className="text-yellow-500 dark:hidden" />
          <Moon size={22} className="text-gray-700 hidden dark:block" />
        </div>
      </div>
    </header>
  );
}
