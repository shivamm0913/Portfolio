import { useSelector } from "react-redux";
import {
  Briefcase,
  Home,
  Github,
  Linkedin,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { HashLink } from "react-router-hash-link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { motion } from "framer-motion";

export default function Navbar() {
  const mode = useSelector((state) => state.theme.mode);
  const { socialLinks } = portfolioData;

  const tooltipBg = mode === "dark" ? "bg-white" : "bg-black";
  const tooltipText = mode === "dark" ? "text-black" : "text-white";

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
      {/* Desktop Floating Dock */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        className="hidden md:block fixed top-auto bottom-8 w-auto left-1/2 -translate-x-1/2 z-50"
      >
        <div
          className="
            flex items-center justify-around gap-4
            px-5 py-2.5
            rounded-full
            bg-card/60 dark:bg-card/50
            border border-border/50 dark:border-border/40
            shadow-lg shadow-black/5 dark:shadow-black/20
            backdrop-blur-2xl
            transition-all duration-300
          "
          style={{
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          {/* Navigation Links */}
          {navItems.map(({ to, icon: Icon, label }) => (
            <div key={label} className="relative group">
              <HashLink
                smooth
                to={to}
                className="
                  flex items-center justify-center
                  p-2.5 rounded-full
                  text-muted-foreground
                  hover:text-foreground
                  hover:bg-accent/60
                  transition-all duration-200
                  hover:scale-110
                "
              >
                <Icon size={18} strokeWidth={1.75} />
              </HashLink>
              <span
                className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs rounded-md whitespace-nowrap ${tooltipBg} ${tooltipText}`}
              >
                {label}
              </span>
            </div>
          ))}

          {/* Divider */}
          <div className="h-5 w-px bg-border/50"></div>

          {/* Social Links */}
          {socialItems.map(({ href, icon: Icon, label }) => (
            <div key={label} className="relative group">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center
                  p-2.5 rounded-full
                  text-muted-foreground
                  hover:text-foreground
                  hover:bg-accent/60
                  transition-all duration-200
                  hover:scale-110
                "
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
              <span
                className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs rounded-md whitespace-nowrap ${tooltipBg} ${tooltipText}`}
              >
                {label}
              </span>
            </div>
          ))}

          {/* Divider */}
          <div className="h-5 w-px bg-border/50"></div>

          {/* Theme Toggle */}
          <div className="relative group">
            <AnimatedThemeToggler
              className="
                flex items-center justify-center
                p-2.5 rounded-full
                text-muted-foreground
                hover:text-foreground
                hover:bg-accent/60
                transition-all duration-200
                hover:scale-110
              "
            />
            <span
              className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs rounded-md whitespace-nowrap ${tooltipBg} ${tooltipText}`}
            >
              {mode === "dark" ? "Light" : "Dark"}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Mobile: Floating Theme Toggle — Top Right */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <AnimatedThemeToggler
          className="
            flex items-center justify-center
            p-2.5 rounded-full
            bg-card/70 dark:bg-card/60
            border border-border/50
            shadow-md
            backdrop-blur-xl
            text-muted-foreground
            hover:text-foreground
            transition-all duration-200
            active:scale-95
          "
        />
      </div>

      {/* Mobile: Bottom Navigation Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2"
      >
        <div
          className="
            flex items-center justify-around
            py-2.5 px-2
            rounded-2xl
            bg-card/70 dark:bg-card/60
            border border-border/50
            shadow-lg shadow-black/5 dark:shadow-black/20
            backdrop-blur-2xl
          "
          style={{
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          {navItems.map(({ to, icon: Icon, label }) => (
            <HashLink
              key={label}
              smooth
              to={to}
              className="flex flex-col items-center gap-0.5 p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
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
              className="flex flex-col items-center gap-0.5 p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
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