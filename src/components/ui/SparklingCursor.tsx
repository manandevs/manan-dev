"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function CustomCursorWithParticles() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTime = useRef(0);

  useEffect(() => {
    // 1. Setup Initial Cursor State
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
      
      // Infinite slow rotation for the sun
      gsap.to(cursorRef.current, {
        rotation: 360,
        duration: 8,
        ease: "none",
        repeat: -1,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      // 2. Smooth Cursor Movement (The "Lag" feel)
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15, // Adds subtle weight/smoothing
          ease: "power2.out",
        });
      }

      // 3. Particle Spawning Logic
      const now = Date.now();
      // Throttle: Only spawn particles every 40ms to save performance
      if (now - lastTime.current > 40) {
        lastTime.current = now;
        spawnSparkles(e.clientX, e.clientY);
      }
    };

    const spawnSparkles = (x: number, y: number) => {
      if (!containerRef.current) return;

      // Spawn 1-3 particles at a time
      const count = Math.floor(Math.random() * 3) + 1;

      for (let i = 0; i < count; i++) {
        const sparkle = document.createElement("div");
        
        // Random properties
        const size = Math.random() * 6 + 2; // 2px to 8px
        const hue = Math.random() * 20 + 45; // Yellow to Gold (45-65 hue)
        
        // Styling
        sparkle.style.position = "fixed";
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.borderRadius = "50%";
        sparkle.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
        sparkle.style.pointerEvents = "none";
        sparkle.style.zIndex = "40";
        sparkle.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 100%, 50%)`;
        
        containerRef.current.appendChild(sparkle);

        // GSAP Physics Animation
        const angle = Math.random() * Math.PI * 2; // Random direction
        const velocity = Math.random() * 30 + 10; // Random spread distance

        gsap.fromTo(
          sparkle,
          {
            x: 0,
            y: 0,
            scale: 0,
          },
          {
            x: Math.cos(angle) * velocity, // Spread out
            y: Math.sin(angle) * velocity + 40, // Add Gravity (fall down)
            scale: 1.5, // Grow then shrink
            opacity: 0,
            duration: Math.random() * 0.8 + 0.5,
            ease: "power2.out",
            onComplete: () => {
              // Cleanup DOM element immediately after animation
              sparkle.remove();
            },
          }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Container for dynamically generated sparkles */}
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-40 overflow-hidden" />

      {/* Main Cursor Element */}
      <div
        ref={cursorRef}
        className="fixed z-50 pointer-events-none select-none flex items-center justify-center"
        style={{ width: "60px", height: "60px" }}
      >
        {/* Core Sun */}
        <span 
            className="text-5xl filter drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] relative"
            style={{ 
                lineHeight: 1,
                display: 'block' 
            }}
        >
          ☀️
        </span>
        
        {/* Optional: Extra white core for intensity */}
        <div className="absolute w-4 h-4 bg-white rounded-full blur-[4px] opacity-80" />
      </div>
    </>
  );
}