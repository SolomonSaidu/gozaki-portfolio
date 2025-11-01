"use client";
import { motion } from "framer-motion";
import { User, PenTool, Star } from "lucide-react";

export default function About() {
  return (
    <section className="relative px-10 py-24 bg-gray-50 overflow-hidden">
      {/* Floating Gradients */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-200 to-teal-200 opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-teal-200 to-purple-200 opacity-30 blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto text-center space-y-12 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-gray-900 dark:text-gray-900"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 dark:text-gray-700 max-w-2xl mx-auto"
        >
          I create bold visuals and motion graphics that tell stories and build brand identities.  
          My goal is to combine creativity and strategy to deliver unforgettable experiences.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center bg-white/80 dark:bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <User size={36} className="text-purple-500 mb-2" />
            <h3 className="font-semibold text-lg">Experience</h3>
            <p className="text-gray-700 dark:text-gray-200 mt-1">5+ Years Working</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center bg-white/80 dark:bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <PenTool size={36} className="text-teal-500 mb-2" />
            <h3 className="font-semibold text-lg">Design Skills</h3>
            <p className="text-gray-700 dark:text-gray-200 mt-1">Branding & Motion</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center bg-white/80 dark:bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <Star size={36} className="text-yellow-400 mb-2" />
            <h3 className="font-semibold text-lg">Achievements</h3>
            <p className="text-gray-700 dark:text-gray-200 mt-1">50+ Projects Completed</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
