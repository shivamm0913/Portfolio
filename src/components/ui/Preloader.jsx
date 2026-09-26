import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    // Lock scroll while intro plays
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (index === greetings.length - 1) {
      const finishTimer = setTimeout(() => {
        document.body.style.overflow = originalOverflow || "unset";
        onComplete();
      }, 255);
      return () => clearTimeout(finishTimer);
    }

    const interval = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 255);

    return () => {
      clearTimeout(interval);
      document.body.style.overflow = originalOverflow || "unset";
    };
  }, [index, onComplete]);

  const handleSkip = () => {
    document.body.style.overflow = "unset";
    onComplete();
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
      onClick={handleSkip}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background cursor-pointer select-none"
    >
      {/* Centered Greeting with Pulsing Dot */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
        <div className="h-16 sm:h-20 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.12 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground font-heading"
            >
              {greetings[index].text}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

    </motion.div>
  );
}
