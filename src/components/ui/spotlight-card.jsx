import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * SpotlightCard — A card with a cursor-tracking radial glow effect.
 * Inspired by Aceternity UI spotlight cards.
 */
export function SpotlightCard({ children, className, spotlightColor = "rgba(120, 119, 198, 0.15)", ...props }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300",
        "hover:border-foreground/20",
        className
      )}
      {...props}
    >
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Content wrapper filling full height for aligned bottom buttons */}
      <div className="relative z-10 flex flex-col h-full flex-1">{children}</div>
    </div>
  );
}
