"use client";
import { motion } from "framer-motion";
import { User, PenTool, Star } from "lucide-react";

export default function About() {
  return (
    <section className="py-12 px-6 md:px-20 bg-gray-50 rounded-t-[3rem] relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I’m <strong>Gozaki</strong>, a modern graphic designer passionate
          about creating clean, timeless visuals that tell stories. I believe
          good design blends strategy and creativity — and I help brands find
          that balance.
        </p>
      </div>
    </section>
  );
}
