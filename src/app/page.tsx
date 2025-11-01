"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  SunMedium,
  Sparkles,
  X,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import GlossyBlob from "./components/GlossyBlob";
import TorusRing from "./components/TorusRing";
import PrismStack from "./components/PrismStack";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <div className="relative bg-white text-gray-800 font-sans overflow-hidden">
        {/* Floating Blurred Background Elements */}
        <motion.div
          className="absolute top-32 left-42 w-72 h-72 rounded-full blur-"
          animate={{
            y: [0, 20, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <GlossyBlob className="w-[150px] h-[150px]" />
        </motion.div>

        <motion.div
          className="absolute top-20 right-42 w-72 h-72 rounded-full blur-"
          animate={{
            y: [0, 20, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <TorusRing className=" w-[150px] h-[150px]" />
        </motion.div>

        <motion.div
          className="absolute top-96 right-0 w-72 h-72 rounded-full blur-"
          animate={{
            y: [0, 20, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <PrismStack className="w-[120px] h-[120px]" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-10 w-80 h-80 bg-gradient-to-r from-[#06b6d4]/30 to-[#10b981]/30 rounded-full blur-3xl"
          animate={{
            y: [0, -15, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Header */}
        <header className="flex justify-between items-center py-6 px-8 sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200">
          <h1 className="text-2xl font-bold tracking-tight">
            Gozaki <span className="text-[#10b981]">Graphics</span>
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            Contact me
          </button>
        </header>

        {/* Hero */}
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

        {/* About */}
        <section className="py-24 px-6 md:px-20 bg-gray-50 rounded-t-[3rem] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              I’m <strong>Gozaki</strong>, a modern graphic designer passionate
              about creating clean, timeless visuals that tell stories. I
              believe good design blends strategy and creativity — and I help
              brands find that balance.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="py-24 px-6 md:px-20 bg-white relative z-10"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {["Visual Identity", "Packaging Design", "Social Media Art"].map(
              (proj, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="h-48 bg-gradient-to-r from-[#06b6d4] to-[#10b981]"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{proj}</h3>
                    <p className="text-gray-600 text-sm">
                      A creative touch for modern brands looking to stand out.
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </section>

        {/* Reviews */}
        <section className="py-24 px-6 md:px-20 bg-gray-50 rounded-t-[3rem] relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Client Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Elite Brands Co.",
                review:
                  "We’ve never looked this good online. Gozaki truly understands brand identity.",
              },
              {
                name: "TrendHive Studio",
                review:
                  "Professional, sleek, and creative. He transformed our visuals completely.",
              },
            ].map((r, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md"
              >
                <p className="text-gray-700 mb-4 italic">"{r.review}"</p>
                <div className="flex items-center gap-2 text-[#10b981] font-medium">
                  <Sparkles size={16} /> {r.name}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center bg-white/60 backdrop-blur-md border-t border-gray-200 text-gray-500 relative z-10">
          © 2025 Gozaki Graphics • Designed by{" "}
          <strong className="text-[#10b981]">Solomon TheDev</strong>
        </footer>

        {/* Contact Popup Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 text-center relative w-[90%] max-w-sm"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                >
                  <X size={22} />
                </button>

                {/* Profile */}
                <img
                  src="/gozaki-profile.jpg"
                  alt="Gozaki Profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#10b981]/60 object-cover"
                />
                <h2 className="text-2xl font-bold text-gray-900">
                  Gozaki Graphics
                </h2>
                <p className="text-gray-600 mb-6">
                  Graphic Designer • Brand Expert
                </p>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/234XXXXXXXXXX"
                  target="_blank"
                  className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition inline-block"
                >
                  Chat on WhatsApp
                </a>

                {/* Socials */}
                <div className="flex justify-center gap-6 mt-6 text-gray-600">
                  <a href="#" className="hover:text-[#06b6d4] transition">
                    <Instagram />
                  </a>
                  <a href="#" className="hover:text-[#06b6d4] transition">
                    <Twitter />
                  </a>
                  <a href="#" className="hover:text-[#06b6d4] transition">
                    <Linkedin />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { SunMedium, Sparkles, X, Instagram, Twitter, Linkedin } from "lucide-react";
// import GlossyBlob from "./components/GlossyBlob";
// import TorusRing from "./components/TorusRing";
// import PrismStack from "./components/PrismStack";

// export default function Home() {
// const [showModal, setShowModal] = useState(false);

//   return (
//     <section>
//       <div className="relative bg-white text-gray-800 font-sans overflow-hidden">
//         {/* Floating Blurred Background Elements */}
//         <motion.div
//           className="absolute top-32 left-42 w-72 h-72 rounded-full blur-"
//           animate={{ y: [0, 20, 0], opacity: [0.8, 1, 0.8] }}
//           transition={{ duration: 10, repeat: Infinity }}
//         >
//           <GlossyBlob className="w-[150px] h-[150px]" />
//         </motion.div>

//         <motion.div
//           className="absolute top-20 right-42 w-72 h-72 rounded-full blur-"
//           animate={{ y: [0, 20, 0], opacity: [0.8, 1, 0.8] }}
//           transition={{ duration: 10, repeat: Infinity }}
//         >
//           <TorusRing className=" w-[150px] h-[150px]" />
//         </motion.div>

//         <motion.div
//           className="absolute top-96 right-0 w-72 h-72 rounded-full blur-"
//           animate={{ y: [0, 20, 0], opacity: [0.8, 1, 0.8] }}
//           transition={{ duration: 10, repeat: Infinity }}
//         >
//           <PrismStack className="w-[120px] h-[120px]" />
//         </motion.div>
//         <motion.div
//           className="absolute bottom-0 right-10 w-80 h-80 bg-gradient-to-r from-[#06b6d4]/30 to-[#10b981]/30 rounded-full blur-3xl"
//           animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
//           transition={{ duration: 12, repeat: Infinity }}
//         />

//         {/* Header */}
//         <header className="flex justify-between items-center py-6 px-8 sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200">
//           <h1 className="text-2xl font-bold tracking-tight">
//             Gozaki <span className="text-[#10b981]">Graphics</span>
//           </h1>
//           <button
//             onClick={() => setShowModal(true)}
//             className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
//           >
//             Contact me
//           </button>
//         </header>

//         {/* Hero */}
//         <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <div className="w-[80%] md:w-[60%] h-[60%] bg-white/40 backdrop-blur-2xl rounded-3xl shadow-inner"></div>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative text-5xl md:text-7xl font-extrabold text-gray-900 mb-4 z-10"
//           >
//             Designing{" "}
//             <span className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
//               Visual Impact
//             </span>
//           </motion.h1>

//           <TypeAnimation
//             sequence={[
//               "Branding that connects",
//               2000,
//               "Designs that speak",
//               2000,
//               "Creativity that converts",
//               2000,
//             ]}
//             wrapper="h2"
//             repeat={Infinity}
//             className="relative text-xl md:text-2xl text-gray-600 z-10"
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//             className="relative mt-10 flex gap-4 z-10"
//           >
//             <motion.button
//               whileTap={{
//                 scale: 0.9,
//                 transition: { type: "spring", stiffness: 400, damping: 10 },
//               }}
//               className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition"
//             >
//               Explore Work
//             </motion.button>

//             <motion.button
//               whileTap={{
//                 scale: 0.9,
//                 transition: { type: "spring", stiffness: 400, damping: 10 },
//               }}
//               onClick={() => setShowModal(true)}
//               className="border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//             >
//               Contact Me
//             </motion.button>
//           </motion.div>
//         </section>

//         {/* About */}
//         <section className="py-24 px-6 md:px-20 bg-gray-50 rounded-t-[3rem] relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-4xl font-bold mb-6">About Me</h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               I’m <strong>Gozaki</strong>, a modern graphic designer passionate about
//               creating clean, timeless visuals that tell stories. I believe good design
//               blends strategy and creativity — and I help brands find that balance.
//             </p>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-10 text-center bg-white/60 backdrop-blur-md border-t border-gray-200 text-gray-500 relative z-10">
//           © 2025 Gozaki Graphics • Designed by{" "}
//           <strong className="text-[#10b981]">Solomon TheDev</strong>
//         </footer>

// {/* Contact Popup Modal */}
// <AnimatePresence>
//   {showModal && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.8, opacity: 0 }}
//         transition={{ type: "spring", duration: 0.4 }}
//         className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 text-center relative w-[90%] max-w-sm"
//       >
//         {/* Close button */}
//         <button
//           onClick={() => setShowModal(false)}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
//         >
//           <X size={22} />
//         </button>

//         {/* Profile */}
//         <img
//           src="/gozaki-profile.jpg"
//           alt="Gozaki Profile"
//           className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#10b981]/60 object-cover"
//         />
//         <h2 className="text-2xl font-bold text-gray-900">Gozaki Graphics</h2>
//         <p className="text-gray-600 mb-6">Graphic Designer • Brand Expert</p>

//         {/* WhatsApp */}
//         <a
//           href="https://wa.me/234XXXXXXXXXX"
//           target="_blank"
//           className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition inline-block"
//         >
//           Chat on WhatsApp
//         </a>

//         {/* Socials */}
//         <div className="flex justify-center gap-6 mt-6 text-gray-600">
//           <a href="#" className="hover:text-[#06b6d4] transition">
//             <Instagram />
//           </a>
//           <a href="#" className="hover:text-[#06b6d4] transition">
//             <Twitter />
//           </a>
//           <a href="#" className="hover:text-[#06b6d4] transition">
//             <Linkedin />
//           </a>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
//       </div>
//     </section>
//   );
// }
