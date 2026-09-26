import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * TextGenerateEffect — Fades in text word-by-word for an elegant entrance.
 * Inspired by Aceternity UI text effects.
 */
export function TextGenerateEffect({ words, className, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const wordArray = words.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <p className={cn("text-lg text-muted-foreground leading-relaxed", className)}>
      <AnimatePresence>
        {isVisible &&
          wordArray.map((word, idx) => (
            <motion.span
              key={`${word}-${idx}`}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.03,
                ease: "easeOut",
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
      </AnimatePresence>
    </p>
  );
}
