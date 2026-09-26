import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * BlurFade — Entrance animation that fades in from blurry to clear with a slide-up.
 * Used for consistent section entrance animations across the portfolio.
 */
export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 12,
  blur = "6px",
  inView = true,
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: `blur(${blur})`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      initial="hidden"
      {...(inView
        ? { whileInView: "visible", viewport: { once: true, amount: 0.1 } }
        : { animate: "visible" })}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
