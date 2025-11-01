"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gray-50 text-gray-900 px-8 overflow-hidden">
      {/* Glowing background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-teal-200/40 via-purple-200/40 to-transparent blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          animate={{
            x: Math.random() * 800 - 400,
            y: Math.random() * 400 - 200,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 lg:w-1/2 space-y-6"
      >
        <h1 className="text-5xl font-extrabold leading-tight">
          Hi, I’m{" "} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
            Gozaki Graphics
          </span>
        </h1>
        <p className="text-gray-700 max-w-md">
          Graphic designer & motion artist bringing imagination to life through bold visuals and stories.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-teal-400 rounded-full font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            My Portfolio
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-400 rounded-full hover:bg-gray-200 transition"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="lg:w-1/2 flex justify-center relative z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-2 border-gradient-to-r from-purple-500 to-teal-400 shadow-2xl"
        >
          <Image src="/profile.jpg" alt="Profile" fill className="object-cover" />
        </motion.div>
      </motion.div>
    </section>
  );
}
