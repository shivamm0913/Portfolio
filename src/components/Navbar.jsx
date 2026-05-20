import { useDispatch, useSelector } from "react-redux";
import {
  Briefcase,
  Home,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { HashLink } from "react-router-hash-link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const { socialLinks } = portfolioData;

  const tooltipBg = mode === "dark" ? "bg-white" : "bg-black";
  const tooltipText = mode === "dark" ? "text-black" : "text-white";

  return (
    <>
      <div className="hidden md:block fixed top-4 md:top-auto md:bottom-8 w-full px-4 md:w-auto md:left-1/2 md:-translate-x-1/2 z-50">
      <div
        className="
          flex items-center justify-around gap-5
          px-6 py-3
          rounded-full

          bg-gray-300/10 dark:bg-zinc-800/30
          border border-white/10 dark:border-white/10

          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
          backdrop-blur-2xl
          supports-[backdrop-filter]:bg-gray-300/10

          transition-all duration-300
        "
        style={{
          backdropFilter: "blur(22px) saturate(180%)",
          WebkitBackdropFilter: "blur(22px) saturate(180%)",
        }}
      >
        {/* Home */}
        <div className="relative group">
          <HashLink
            smooth
            to="/#home"
            className="
              flex items-center justify-center
              p-2.5 rounded-full
              text-muted-foreground
              hover:text-foreground
              hover:bg-gray-400/15
              dark:hover:bg-white/10
              transition-all duration-300
              hover:scale-125 hover:-translate-y-1 origin-bottom
            "
          >
            <Home size={20} />
          </HashLink>

          <span
            className={`absolute top-full mt-3 md:top-auto md:bottom-full md:mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs rounded-md whitespace-nowrap ${tooltipBg} ${tooltipText}`}
          >
            Home
          </span>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-black/10 dark:bg-white/10"></div>

        {/* Projects */}
        <div className="relative group">
          <HashLink
            smooth
            to="/#projects"
            className="
              flex items-center justify-center
              p-2.5 rounded-full
              text-muted-foreground
              hover:text-foreground
              hover:bg-gray-400/15
              dark:hover:bg-white/10
              transition-all duration-300
              hover:scale-125 hover:-translate-y-1 origin-bottom
            "
          >
            <Briefcase size={20} />
          </HashLink>

          <span
            className={`absolute top-full mt-3 md:top-auto md:bottom-full md:mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs rounded-md whitespace-nowrap ${tooltipBg} ${tooltipText}`}
          >
            Projects
          </span>
        </div>

        {/* Contact */}
        <div className="relative group">
          <HashLink
            smooth
            to="/#contact"
            className="
              flex items-center justify-center
              p-2.5 rounded-full
              text-muted-foreground
              hover:text-foreground
              hover:bg-gray-400/15
              dark:hover:bg-white/10
              transition-all duration-300
              hover:scale-125 hover:-translate-y-1 origin-bottom
            "
          >
            <Send size={20} />
          </HashLink>

          <span
            className={`absolute top-full mt-3 md:top-auto md:bottom-full md:mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs rounded-md whitespace-nowrap ${tooltipBg} ${tooltipText}`}
          >
            Contact
          </span>
        </div>


        {/* GitHub */}
        <div className="relative group">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              p-2.5 rounded-full
              text-muted-foreground
              hover:text-foreground
              hover:bg-gray-400/15
              dark:hover:bg-white/10
              transition-all duration-300
              hover:scale-125 hover:-translate-y-1 origin-bottom
            "
          >
            <Github size={20} />
          </a>

          <span
            className={`absolute top-full mt-3 md:top-auto md:bottom-full md:mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs rounded-md whitespace-nowrap ${tooltipBg} ${tooltipText}`}
          >
            GitHub
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              p-2.5 rounded-full
              text-muted-foreground
              hover:text-foreground
              hover:bg-gray-400/15
              dark:hover:bg-white/10
              transition-all duration-300
              hover:scale-125 hover:-translate-y-1 origin-bottom
            "
          >
            <Linkedin size={20} />
          </a>

          <span
            className={`absolute top-full mt-3 md:top-auto md:bottom-full md:mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs rounded-md whitespace-nowrap ${tooltipBg} ${tooltipText}`}
          >
            LinkedIn
          </span>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-black/10 dark:bg-white/10"></div>

        {/* Theme Toggle */}
        <div className="relative group">
          <AnimatedThemeToggler
            className="
              flex items-center justify-center
              p-2.5 rounded-full
              text-muted-foreground
              hover:text-foreground
              hover:bg-gray-400/15
              dark:hover:bg-white/10
              transition-all duration-300
              hover:scale-125 hover:-translate-y-1 origin-bottom
            "
          />

          <span
            className={`absolute top-full mt-3 md:top-auto md:bottom-full md:mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs rounded-md whitespace-nowrap ${tooltipBg} ${tooltipText}`}
          >
            {mode === "dark" ? "Light" : "Dark"}
          </span>
        </div>
      </div>
      </div>

      {/* Mobile Floating Theme Toggle - Top Right (Mobile Only) */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <AnimatedThemeToggler
          className="
            flex items-center justify-center
            p-3 rounded-full
            bg-gray-300/20 dark:bg-zinc-800/40
            border border-black/15 dark:border-white/15
            shadow-lg
            backdrop-blur-md
            text-muted-foreground
            hover:text-foreground
            transition-all duration-300
            active:scale-95
          "
        />
      </div>
    </>
  );
}