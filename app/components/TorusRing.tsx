"use client";
import { motion } from "framer-motion";

export default function TorusRing({ className = "w-80 h-80" }) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: [0, 8, -8, 0], y: [0, -6, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="ringGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#06b6d4"/>
            <stop offset="1" stopColor="#10b981"/>
          </linearGradient>
          <filter id="ringBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        {/* outer glow */}
        <g filter="url(#ringBlur)">
          <path d="M250 50c110 0 200 90 200 200s-90 200-200 200S50 360 50 250 140 50 250 50z" fill="none" stroke="url(#ringGrad)" strokeWidth="30" strokeLinecap="round" opacity="0.85"/>
        </g>

        {/* inner carved ring */}
        <path d="M250 110c80 0 145 65 145 145s-65 145-145 145S105 335 105 255 170 110 250 110z" fill="#00000000" stroke="rgba(255,255,255,0.06)" strokeWidth="6"/>
      </svg>
    </motion.div>
  );
}