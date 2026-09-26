import React from "react";
import { motion } from "framer-motion";

/**
 * FloatingArtPiece
 * An ethereal, glowing abstract art piece that gracefully drifts across the screen.
 * Combines generative bezier curves, iridescent gradients, and a rotating geometric wireframe.
 */
export function FloatingArtPiece() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {/* Primary Floating Art Ribbon */}
      <motion.div
        animate={{
          x: ["-10vw", "45vw", "15vw", "-10vw"],
          y: ["15vh", "45vh", "75vh", "15vh"],
          rotate: [0, 120, 240, 360],
          scale: [0.85, 1.15, 0.95, 0.85],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] opacity-25 dark:opacity-40 filter blur-[1px]"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full fill-none drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]"
        >
          <defs>
            <linearGradient id="artGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="artGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Morphing Outer Ribbon */}
          <path
            d="M 120,250 C 120,100 250,80 350,150 C 450,220 400,380 300,420 C 180,450 120,380 120,250 Z"
            stroke="url(#artGrad1)"
            strokeWidth="2.5"
            strokeDasharray="6 8"
          />

          {/* Intersecting Geometric Fluid Loop */}
          <path
            d="M 250,120 C 380,120 420,250 350,350 C 280,450 120,400 80,300 C 50,180 120,120 250,120 Z"
            stroke="url(#artGrad2)"
            strokeWidth="2"
            strokeOpacity="0.8"
          />

          {/* Geometric Inner Core */}
          <circle
            cx="250"
            cy="250"
            r="70"
            stroke="url(#artGrad1)"
            strokeWidth="1.5"
            strokeDasharray="3 6"
          />

          <polygon
            points="250,190 302,280 198,280"
            stroke="url(#artGrad2)"
            strokeWidth="1.5"
            strokeDasharray="2 4"
          />

          {/* Subtle Ambient Center Glow */}
          <circle
            cx="250"
            cy="250"
            r="45"
            fill="url(#artGrad1)"
            className="opacity-20 filter blur-xl"
          />
        </svg>
      </motion.div>

      {/* Secondary Companion Floating Accent Orb */}
      <motion.div
        animate={{
          x: ["80vw", "20vw", "60vw", "80vw"],
          y: ["60vh", "20vh", "40vh", "60vh"],
          rotate: [360, 240, 120, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] opacity-20 dark:opacity-30 filter blur-[2px]"
      >
        <svg viewBox="0 0 300 300" className="w-full h-full fill-none">
          <ellipse
            cx="150"
            cy="150"
            rx="120"
            ry="60"
            transform="rotate(45 150 150)"
            stroke="#a855f7"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <ellipse
            cx="150"
            cy="150"
            rx="120"
            ry="60"
            transform="rotate(-45 150 150)"
            stroke="#06b6d4"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <circle
            cx="150"
            cy="150"
            r="12"
            fill="#a855f7"
            className="opacity-40 animate-ping"
          />
        </svg>
      </motion.div>
    </div>
  );
}
