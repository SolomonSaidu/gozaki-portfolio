"use client";
import { motion } from "framer-motion";

export default function PrismStack({ className = "w-72 h-72" }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0], rotate: [0, 4, -4, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="prismA" x1="0" x2="1">
            <stop offset="0" stopColor="#06b6d4" />
            <stop offset="1" stopColor="#10b981" />
          </linearGradient>
          <filter id="prismBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <g filter="url(#prismBlur)">
          <rect x="30" y="30" width="240" height="40" rx="12" fill="url(#prismA)" opacity="0.9"/>
          <rect x="20" y="90" width="260" height="40" rx="12" fill="url(#prismA)" opacity="0.75"/>
          <rect x="10" y="150" width="280" height="40" rx="12" fill="url(#prismA)" opacity="0.6"/>
          <rect x="0" y="210" width="300" height="40" rx="12" fill="url(#prismA)" opacity="0.45"/>
        </g>
      </svg>
    </motion.div>
  );
}