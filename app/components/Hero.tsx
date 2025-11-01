"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { TypeAnimation } from "react-type-animation";

type booleanSetter = React.Dispatch<React.SetStateAction<boolean>>;

interface PopUpModel {
  setShowModal: booleanSetter;
}

const Hero: React.FC<PopUpModel> = ({ setShowModal }) => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
      {/* Blurred Glass Card Behind Hero Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[80%] md:w-[60%] h-[60%] bg-white/40 backdrop-blur-2xl rounded-3xl shadow-inner"></div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-5xl md:text-7xl font-extrabold text-gray-900 mb-4 z-10"
      >
        {/* className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent" */}
        Designing{" "}
        <span className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
          Visual Impact
        </span>
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Branding that connects",
          2000,
          "Designs that speak",
          2000,
          "Creativity that converts",
          2000,
        ]}
        wrapper="h2"
        repeat={Infinity}
        className="relative text-xl md:text-2xl text-gray-600 z-10"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative mt-10 flex gap-4 z-10"
      >
        <motion.button
          whileTap={{
            scale: 0.9,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition"
        >
          Explore Work
        </motion.button>

        <motion.button
          whileTap={{
            scale: 0.9,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          onClick={() => setShowModal(true)}
          className="border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Me
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
