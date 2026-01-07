"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Lumina Interface",
    category: "Product Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Apex Branding",
    category: "Identity",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Mono Systems",
    category: "Development",
    year: "2023",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="relative mb-20 inline-block">
          <h2 className="font-serif text-5xl md:text-7xl text-black">
            My latest work
          </h2>
          <span className="absolute -top-12 -right-32 hidden md:block transform rotate-12">
            <svg width="180" height="80" viewBox="0 0 200 100" fill="none">
              <path
                d="M10,50 Q50,10 90,50 T180,50"
                stroke="#000"
                strokeWidth="2"
                fill="none"
              />
              <text x="20" y="40" className="font-marker fill-black text-sm">
                From 2020 'til today
              </text>
            </svg>
          </span>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group w-full bg-[#f4f4f4] rounded-[32px] p-6 md:p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Text Content */}
                <div className="w-full md:w-5/12 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1 border border-gray-300 rounded-full text-xs font-mono uppercase tracking-widest text-gray-500">
                      {project.category}
                    </span>
                    <span className="px-4 py-1 border border-gray-300 rounded-full text-xs font-mono uppercase tracking-widest text-gray-500">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="font-sans font-bold text-4xl md:text-5xl group-hover:underline decoration-yellow-400 decoration-4 underline-offset-4">
                    {project.title}
                  </h3>
                  
                  <p className="font-serif text-xl text-gray-600 max-w-md">
                    A comprehensive design overhaul focusing on user retention and visual hierarchy.
                  </p>

                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-7/12 aspect-[4/3] md:aspect-[16/9] relative rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}