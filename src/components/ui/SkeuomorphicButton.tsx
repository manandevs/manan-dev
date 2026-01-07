"use client";

import { motion } from "framer-motion";

export default function SkeuomorphicButton({ text }: { text: string }) {
  return (
    <div className="relative group">
      {/* Decorative Scribbles */}
      <svg
        className="absolute -top-8 -right-8 w-12 h-12 text-yellow-400 animate-pulse"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      >
        <path d="M10,50 Q30,10 50,50 T90,50" />
      </svg>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ translateY: 10, boxShadow: "0px 0px 0px 0px #000000" }}
        className="
          relative 
          bg-[#1a1a1a] 
          text-white 
          font-serif 
          italic
          text-2xl 
          md:text-4xl 
          px-12 
          py-6 
          rounded-2xl 
          border-2 
          border-gray-800
          transition-all
          duration-100
        "
        style={{
            boxShadow: "0px 10px 0px 0px #000000",
        }}
      >
        <span className="flex items-center gap-3">
          {text}
          <span className="inline-block w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
        </span>
      </motion.button>
    </div>
  );
}