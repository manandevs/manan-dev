"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [6, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-6, -20]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col items-center pt-40 overflow-hidden"
    >
      {/* Background with Green Field + Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2400&auto=format&fit=crop"
          alt="Green Field"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* The Fade Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/90 via-white/80 to-white" />
      </div>

      <div className="relative z-10 text-center max-w-7xl px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif italic text-2xl md:text-3xl text-gray-800 mb-4"
        >
          Howdy! Meet your trusted design partner...
        </motion.p>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-black text-[15vw] leading-[0.8] tracking-tighter text-black uppercase"
          >
            Daniel
            <br />
            Sun
          </motion.h1>

          {/* Sticker 1: Smiley Ticket */}
          <motion.div
            style={{ y: y1, rotate: rotate1 }}
            className="absolute -top-10 -right-4 md:right-20 w-32 md:w-48 bg-white border-2 border-black p-4 shadow-xl -rotate-6 z-20"
          >
             <div className="border-2 border-dashed border-gray-300 p-2 flex flex-col items-center">
                <span className="text-4xl">☻</span>
                <span className="font-mono text-xs uppercase mt-2">Admit One</span>
             </div>
          </motion.div>

          {/* Sticker 2: Polaroid */}
          <motion.div
            style={{ y: y2, rotate: rotate2 }}
            className="absolute top-1/2 -left-4 md:left-20 w-40 md:w-56 bg-white p-3 pb-8 shadow-2xl rotate-6 z-20"
          >
             <div className="w-full h-32 md:h-40 bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all">
                <Image 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                    alt="Portrait"
                    fill
                    className="object-cover"
                />
             </div>
             <p className="font-marker text-center mt-2 text-gray-600 transform -rotate-2">Me & Myself</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}