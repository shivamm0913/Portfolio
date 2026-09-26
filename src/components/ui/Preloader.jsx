import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { play } from "@/lib/sound";

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "Ciao", lang: "Italian" },
  { text: "Guten Tag", lang: "German" },
  { text: "नमस्ते", lang: "Hindi" },
];

export function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Keep scroll firmly locked while preloader is active
    document.body.style.overflow = "hidden";

    if (index === greetings.length - 1) {
      // Small natural pause on final word before initiating exit
      const finishTimer = setTimeout(() => {
        play("arrival", { volume: 0.4 });
        onComplete();
      }, 300);
      return () => clearTimeout(finishTimer);
    }

    const interval = setTimeout(() => {
      setIndex((prev) => prev + 1);
      play("whisper", { volume: 0.18 });
    }, 220);

    return () => clearTimeout(interval);
  }, [index, onComplete]);

  const handleSkip = () => {
    document.body.style.overflow = "unset";
    play("arrival", { volume: 0.4 });
    onComplete();
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 0.65,
          ease: [0.77, 0, 0.175, 1], // Immediate, buttery smooth fluid launch
        },
      }}
      onAnimationComplete={() => {
        // Unlock scroll only AFTER the exit animation has fully finished
        document.body.style.overflow = "unset";
      }}
      onClick={handleSkip}
      className="fixed inset-0 z-[999] h-screen w-screen flex flex-col items-center justify-center bg-background cursor-pointer select-none"
    >
      {/* Centered Greeting with Pulsing Dot */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
        <div className="h-16 sm:h-20 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.12 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground font-syne"
            >
              {greetings[index].text}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Language subtitle & skip hint */}
      <div className="absolute bottom-10 flex flex-col items-center gap-1 text-muted-foreground/60 text-xs tracking-widest uppercase">
        <span className="text-[10px] opacity-40 tracking-wider">Click anywhere to skip</span>
      </div>

      {/* Liquid curved SVG bottom edge that curves as it sweeps off screen */}
      <svg
        className="absolute top-[99.5%] left-0 w-full h-24 sm:h-36 fill-background pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L1440,0 Q720,120 0,0 Z" />
      </svg>
    </motion.div>
  );
}
