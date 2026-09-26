import React, { useEffect, useRef } from "react";

const CUTE_PALETTE = [
  "#f472b6", // cute rose pink
  "#fb7185", // strawberry coral
  "#c084fc", // pastel lilac
  "#a78bfa", // soft violet
  "#38bdf8", // baby sky blue
  "#34d399", // mint emerald
  "#facc15", // cheerful yellow
  "#ffffff", // pure twinkle white
];

/**
 * ClickSparkle
 * High-performance, razor-sharp Canvas click animation.
 * Emits an adorable micro-burst of glowing 4-point pinch stars,
 * twinkle glitter specks, and a soft expanding fairy ring at the cursor position.
 * Only runs RAF when particles exist (0% CPU when idle).
 */
export function ClickSparkle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles = [];
    let rings = [];
    let animationId = null;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Cute 4-point pinch sparkle star shape
    const drawSparkleStar = (context, x, y, size, rotation, color, alpha) => {
      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      context.globalAlpha = Math.max(0, Math.min(1, alpha));
      context.fillStyle = color;
      context.shadowColor = color;
      context.shadowBlur = 4;

      context.beginPath();
      // 4-point pinched star using quadratic bezier curves
      context.moveTo(0, -size);
      context.quadraticCurveTo(0, 0, size, 0);
      context.quadraticCurveTo(0, 0, 0, size);
      context.quadraticCurveTo(0, 0, -size, 0);
      context.quadraticCurveTo(0, 0, 0, -size);
      context.closePath();
      context.fill();

      // Tiny white core for bright twinkle pop
      context.fillStyle = "#ffffff";
      context.beginPath();
      const core = size * 0.35;
      context.moveTo(0, -core);
      context.quadraticCurveTo(0, 0, core, 0);
      context.quadraticCurveTo(0, 0, 0, core);
      context.quadraticCurveTo(0, 0, -core, 0);
      context.quadraticCurveTo(0, 0, 0, -core);
      context.closePath();
      context.fill();

      context.restore();
    };

    // Cute glitter circle speck
    const drawSpeck = (context, x, y, radius, color, alpha) => {
      context.save();
      context.globalAlpha = Math.max(0, Math.min(1, alpha));
      context.fillStyle = color;
      context.shadowColor = color;
      context.shadowBlur = 3;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    // Cute soft expanding ring ripple
    const drawRing = (context, ring) => {
      context.save();
      context.globalAlpha = Math.max(0, Math.min(1, ring.alpha));
      context.strokeStyle = ring.color;
      context.lineWidth = ring.lineWidth;
      context.shadowColor = ring.color;
      context.shadowBlur = 4;
      context.beginPath();
      context.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
      context.stroke();
      context.restore();
    };

    const updateAndDraw = () => {
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // 1. Update and draw expanding rings
      for (let i = rings.length - 1; i >= 0; i--) {
        const ring = rings[i];
        ring.progress += 0.055;
        ring.radius = ring.maxRadius * Math.sin((ring.progress * Math.PI) / 2);
        ring.alpha = 0.55 * (1 - ring.progress);
        ring.lineWidth = Math.max(0.4, 2 * (1 - ring.progress));

        if (ring.progress >= 1) {
          rings.splice(i, 1);
        } else {
          drawRing(ctx, ring);
        }
      }

      // 2. Update and draw sparkle particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.progress += p.decay;

        // Decelerating burst motion
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.rotation += p.vRot;

        // Cute scale: quick pop up then taper down to 0
        const scale =
          p.progress < 0.2
            ? (p.progress / 0.2) * 1.15
            : 1.15 * (1 - (p.progress - 0.2) / 0.8);
        const currentSize = Math.max(0, p.size * scale);
        const alpha = Math.max(0, 1 - p.progress * 1.1);

        if (p.progress >= 1 || currentSize <= 0.1) {
          particles.splice(i, 1);
        } else {
          if (p.isStar) {
            drawSparkleStar(ctx, p.x, p.y, currentSize, p.rotation, p.color, alpha);
          } else {
            drawSpeck(ctx, p.x, p.y, currentSize, p.color, alpha);
          }
        }
      }

      if (particles.length > 0 || rings.length > 0) {
        animationId = requestAnimationFrame(updateAndDraw);
      } else {
        animationId = null;
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      }
    };

    const spawnSparkles = (e) => {
      const originX = e.clientX;
      const originY = e.clientY;
      const count = 7 + Math.floor(Math.random() * 3); // 7 to 9 sparks

      // Cute micro ring ripple
      rings.push({
        x: originX,
        y: originY,
        radius: 2,
        maxRadius: 22 + Math.random() * 8, // compact cute radius (22-30px)
        progress: 0,
        lineWidth: 2,
        alpha: 0.6,
        color: CUTE_PALETTE[Math.floor(Math.random() * (CUTE_PALETTE.length - 1))],
      });

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.45;
        const speed = 2.0 + Math.random() * 2.8; // compact cute burst
        const color = CUTE_PALETTE[Math.floor(Math.random() * CUTE_PALETTE.length)];
        const isStar = i % 3 !== 2; // mix of stars and tiny glowing specks

        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: isStar ? 5 + Math.random() * 3.5 : 2 + Math.random() * 1.5,
          color,
          isStar,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.18,
          progress: 0,
          decay: 0.038 + Math.random() * 0.02, // ~380-450ms lifespan
        });
      }

      if (!animationId) {
        animationId = requestAnimationFrame(updateAndDraw);
      }
    };

    window.addEventListener("pointerdown", spawnSparkles, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointerdown", spawnSparkles);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[99999] w-full h-full select-none"
    />
  );
}
