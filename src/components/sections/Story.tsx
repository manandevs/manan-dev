"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">
              I don't have <span className="text-gray-300 line-through decoration-red-500">dark secrets</span>, just a passion for pixel-perfect design.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-600 font-sans leading-relaxed">
              <p>
                Based in the digital realm, I&apos;ve spent the last 5 years helping startups
                find their visual voice. I believe the best websites feel like a 
                conversation, not a lecture.
              </p>
              <p>
                When I&apos;m not moving rectangles in Figma, I&apos;m probably exploring
                generative art or brewing an excessively complicated cup of coffee.
              </p>
            </div>
            
            <div className="pt-8">
                <p className="font-marker text-2xl text-yellow-500 rotate-[-2deg]">
                    Lets make magic!
                </p>
            </div>
          </motion.div>

          {/* Right: Polaroids */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            {/* Polaroid 1 */}
            <motion.div
              initial={{ rotate: -10, y: 100, opacity: 0 }}
              whileInView={{ rotate: -6, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute w-64 bg-white p-4 pb-12 shadow-2xl transform -translate-x-12 z-10"
            >
              <div className="aspect-square bg-gray-100 relative mb-4">
                 <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600&auto=format&fit=crop" alt="Work" fill className="object-cover" />
              </div>
              <p className="font-marker text-center text-gray-800">Hard at work</p>
            </motion.div>

            {/* Polaroid 2 */}
            <motion.div
              initial={{ rotate: 10, y: 100, opacity: 0 }}
              whileInView={{ rotate: 6, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute w-64 bg-white p-4 pb-12 shadow-2xl transform translate-x-12 translate-y-12 z-20"
            >
              <div className="aspect-square bg-gray-100 relative mb-4">
                 <Image src="https://images.unsplash.com/photo-1522075469751-3a3694c60e9e?q=80&w=600&auto=format&fit=crop" alt="Team" fill className="object-cover" />
              </div>
              <p className="font-marker text-center text-gray-800">The Dream Team</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}