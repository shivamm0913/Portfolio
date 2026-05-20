import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { portfolioData } from "../../data/portfolio";
import { useSelector } from "react-redux";
import { LineShadowText } from "../ui/line-shadow-text";

export default function Hero() {
  const { name, role, shortBio, resumeLink } = portfolioData.personalInfo;
  const mode = useSelector((state) => state.theme.mode);


  return (
    <section id="home" className="relative pt-20 pb-32 flex flex-col justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        {/* Open to Opportunities Badge with pulsing green dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 dark:border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5 w-fit"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open to Opportunities
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-primary font-medium tracking-wide mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-4"
        >
          <LineShadowText className="italic" shadowColor={mode === "dark" ? "white" : "black"}>
            {name}
          </LineShadowText>.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-muted-foreground mb-6"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          {shortBio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="group">
            <a href="#projects">
              View Projects
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className='border-dotted md:border-solid dark:border-white/50 border-black/50' >
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Quick Contact Action Buttons - Mobile Only & Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="md:hidden flex flex-col items-center justify-center text-center gap-4 mt-12 pt-6 border-t border-black/10 dark:border-white/10 w-full"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
            Quick Connect:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            {/* LinkedIn */}
            <a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-4 py-2 rounded-full 
                border border-blue-500/30 dark:border-blue-500/40 
                bg-blue-500/10 dark:bg-blue-500/15 
                text-blue-600 dark:text-blue-400 
                font-semibold text-sm
                transition-all duration-300 
                hover:scale-105 hover:-translate-y-0.5
                hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)]
              "
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-4 py-2 rounded-full 
                border border-foreground/20 dark:border-foreground/30 
                bg-foreground/5 dark:bg-foreground/10 
                text-foreground/80 dark:text-foreground/90 
                font-semibold text-sm
                transition-all duration-300 
                hover:scale-105 hover:-translate-y-0.5
                hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background
                hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
              "
              aria-label="GitHub"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            {/* Gmail */}
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="
                flex items-center gap-2 px-4 py-2 rounded-full 
                border border-rose-500/30 dark:border-rose-500/40 
                bg-rose-500/10 dark:bg-rose-500/15 
                text-rose-600 dark:text-rose-400 
                font-semibold text-sm
                transition-all duration-300 
                hover:scale-105 hover:-translate-y-0.5
                hover:bg-rose-600 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white
                hover:shadow-[0_4px_20px_rgba(244,63,94,0.3)]
              "
              aria-label="Gmail"
            >
              <Mail size={16} />
              <span>Gmail</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
