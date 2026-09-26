import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Briefcase,
  Home,
  Github,
  Linkedin,
  Volume2,
  VolumeX,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { HashLink } from "react-router-hash-link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { motion } from "framer-motion";
import { toggleSound, isSoundEnabled } from "@/lib/sound";

export default function Navbar() {
  const mode = useSelector((state) => state.theme.mode);
  const { socialLinks } = portfolioData;
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const tooltipBg = mode === "dark" ? "bg-white text-black" : "bg-black text-white";

  const navItems = [
    { to: "/#home", icon: Home, label: "Home" },
    { to: "/#projects", icon: Briefcase, label: "Projects" },
  ];

  const socialItems = [
    { href: socialLinks.github, icon: Github, label: "GitHub" },
    { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <>
      {/* Desktop Floating Glassmorphic Dock */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        className="hidden md:block fixed top-auto bottom-8 w-auto left-1/2 -translate-x-1/2 z-50"
      >
        <div
          className="
            flex items-center justify-around gap-3
            px-5 py-2.5
            rounded-full
            bg-white/40 dark:bg-zinc-950/40
            border border-white/60 dark:border-white/10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.7)]
            dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.12)]
            backdrop-blur-2xl
            backdrop-saturate-200
            transition-all duration-300
            hover:border-white/80 dark:hover:border-white/20
          "
          style={{
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
          }}
        >
          {/* Navigation Links */}
          {navItems.map(({ to, icon: Icon, label }) => (
            <div key={label} className="relative group">
              <HashLink
                smooth
                to={to}
                data-cuelume-press="sparkle"
                className="
                  flex items-center justify-center
                  p-2.5 rounded-full
                  text-muted-foreground
                  hover:text-foreground
                  hover:bg-white/50 dark:hover:bg-white/10
                  hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]
                  transition-all duration-200
                  hover:scale-110
                "
              >
                <Icon size={18} strokeWidth={1.75} />
              </HashLink>
              <span
                className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2.5 py-1 text-[11px] font-medium rounded-full shadow-lg whitespace-nowrap ${tooltipBg}`}
              >
                {label}
              </span>
            </div>
          ))}

          {/* Frosted Divider */}
          <div className="h-5 w-px bg-foreground/15 dark:bg-white/15"></div>

          {/* Social Links */}
          {socialItems.map(({ href, icon: Icon, label }) => (
            <div key={label} className="relative group">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-cuelume-press="sparkle"
                className="
                  flex items-center justify-center
                  p-2.5 rounded-full
                  text-muted-foreground
                  hover:text-foreground
                  hover:bg-white/50 dark:hover:bg-white/10
                  hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]
                  transition-all duration-200
                  hover:scale-110
                "
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
              <span
                className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2.5 py-1 text-[11px] font-medium rounded-full shadow-lg whitespace-nowrap ${tooltipBg}`}
              >
                {label}
              </span>
            </div>
          ))}

          {/* Frosted Divider */}
          <div className="h-5 w-px bg-foreground/15 dark:bg-white/15"></div>

          {/* Sound Toggle (Cuelume) */}
          <div className="relative group">
            <button
              onClick={handleToggleSound}
              aria-label={soundOn ? "Mute sound" : "Enable sound"}
              data-cuelume-press="sparkle"
              className="
                flex items-center justify-center
                p-2.5 rounded-full
                text-muted-foreground
                hover:text-foreground
                hover:bg-white/50 dark:hover:bg-white/10
                hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]
                transition-all duration-200
                hover:scale-110
              "
            >
              {soundOn ? (
                <Volume2 size={18} strokeWidth={1.75} className="text-emerald-500 dark:text-emerald-400" />
              ) : (
                <VolumeX size={18} strokeWidth={1.75} className="opacity-60" />
              )}
            </button>
            <span
              className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2.5 py-1 text-[11px] font-medium rounded-full shadow-lg whitespace-nowrap ${tooltipBg}`}
            >
              {soundOn ? "Sound: On" : "Sound: Off"}
            </span>
          </div>

          {/* Theme Toggle */}
          <div className="relative group">
            <AnimatedThemeToggler
              data-cuelume-press="sparkle"
              className="
                flex items-center justify-center
                p-2.5 rounded-full
                text-muted-foreground
                hover:text-foreground
                hover:bg-white/50 dark:hover:bg-white/10
                hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]
                transition-all duration-200
                hover:scale-110
              "
            />
            <span
              className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2.5 py-1 text-[11px] font-medium rounded-full shadow-lg whitespace-nowrap ${tooltipBg}`}
            >
              {mode === "dark" ? "Light" : "Dark"}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Mobile: Floating Glassmorphic Controls (Top Right) */}
      <div className="md:hidden fixed top-5 right-5 z-50 flex items-center gap-2">
        <button
          onClick={handleToggleSound}
          aria-label={soundOn ? "Mute sound" : "Enable sound"}
          className="
            flex items-center justify-center
            p-2.5 rounded-full
            bg-white/40 dark:bg-zinc-950/40
            border border-white/50 dark:border-white/10
            shadow-[0_4px_20px_0_rgba(0,0,0,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.5)]
            dark:shadow-[0_4px_20px_0_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.1)]
            backdrop-blur-2xl
            backdrop-saturate-200
            text-muted-foreground
            hover:text-foreground
            transition-all duration-200
            active:scale-95
          "
        >
          {soundOn ? (
            <Volume2 size={18} strokeWidth={1.75} className="text-emerald-500 dark:text-emerald-400" />
          ) : (
            <VolumeX size={18} strokeWidth={1.75} className="opacity-60" />
          )}
        </button>

        <AnimatedThemeToggler
          className="
            flex items-center justify-center
            p-2.5 rounded-full
            bg-white/40 dark:bg-zinc-950/40
            border border-white/50 dark:border-white/10
            shadow-[0_4px_20px_0_rgba(0,0,0,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.5)]
            dark:shadow-[0_4px_20px_0_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.1)]
            backdrop-blur-2xl
            backdrop-saturate-200
            text-muted-foreground
            hover:text-foreground
            transition-all duration-200
            active:scale-95
          "
        />
      </div>

      {/* Mobile: Bottom Glassmorphic Navigation Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2"
      >
        <div
          className="
            flex items-center justify-around
            py-2.5 px-2
            rounded-2xl
            bg-white/45 dark:bg-zinc-950/45
            border border-white/50 dark:border-white/10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.5)]
            dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.1)]
            backdrop-blur-2xl
            backdrop-saturate-200
          "
          style={{
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
          }}
        >
          {navItems.map(({ to, icon: Icon, label }) => (
            <HashLink
              key={label}
              smooth
              to={to}
              className="flex flex-col items-center gap-0.5 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/30 dark:hover:bg-white/10 transition-all"
            >
              <Icon size={18} strokeWidth={1.75} />
              <span className="text-[10px] font-medium">{label}</span>
            </HashLink>
          ))}
          {socialItems.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-0.5 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/30 dark:hover:bg-white/10 transition-all"
            >
              <Icon size={18} strokeWidth={1.75} />
              <span className="text-[10px] font-medium">{label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}