
"use client";
import { motion } from "framer-motion";

export default function GlossyBlob({ className = "w-96 h-96", rotate = false }) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={rotate ? { rotate: [0, 6, -6, 0] } : { y: [0, -8, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="gBlob" cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="60%" stopColor="#10b981" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
          </radialGradient>

          <linearGradient id="shine" x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>

          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        {/* main blob */}
        <g filter="url(#softBlur)">
          <path fill="url(#gBlob)" d="M450 330c60 120-30 240-160 240S110 450 90 320 140 120 270 100 390 210 450 330z" />
        </g>

        {/* glossy highlight */}
        <ellipse cx="220" cy="170" rx="110" ry="60" fill="url(#shine)" opacity="0.6" transform="rotate(-20 220 170)"/>
      </svg>
    </motion.div>
  );
}
