import React from "react";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/Button";
import { portfolioData } from "../../data/portfolio";
import { BlurFade } from "../ui/blur-fade";

export default function Hero() {
  const { name, shortBio, resumeLink, typingRoles, profileImage } = portfolioData.personalInfo;

  const typeSequence = typingRoles.flatMap((role) => [role, 2000]);

  return (
    <section id="home" className="relative pt-16 pb-24 flex items-center min-h-[85vh]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center w-full">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-3 flex flex-col">
          {/* Status Badge */}
          <BlurFade delay={0.05} inView={false}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 dark:border-emerald-500/30 bg-emerald-500/8 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to Opportunities
            </div>
          </BlurFade>

          {/* Greeting */}
          <BlurFade delay={0.15} inView={false}>
            <p className="text-muted-foreground font-medium tracking-wide mb-3 text-base">
              Hi, I'm
            </p>
          </BlurFade>

          {/* Name */}
          <BlurFade delay={0.25} inView={false}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-3">
              {name}
              <span className="text-muted-foreground/40">.</span>
            </h1>
          </BlurFade>

          {/* Typing Animation */}
          <BlurFade delay={0.35} inView={false}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground/70 mb-6 h-[1.3em]">
              <TypeAnimation
                sequence={typeSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: "inline-block" }}
              />
            </div>
          </BlurFade>

          {/* Short Bio */}
          <BlurFade delay={0.45} inView={false}>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              {shortBio}
            </p>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={0.55} inView={false}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View Projects
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-accent">
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </BlurFade>

          {/* Social Links */}
          <BlurFade delay={0.65} inView={false}>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                Connect
              </span>
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </BlurFade>
        </div>

        {/* Right: Profile Image */}
        <BlurFade delay={0.3} inView={false} className="lg:col-span-2 flex justify-center lg:justify-end order-first lg:order-last">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Gradient border glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 blur-sm" />
            <div className="relative w-full h-full rounded-2xl bg-muted/50 border border-border overflow-hidden flex items-center justify-center">
              <img
                src={profileImage}
                alt="Shivam Kewat — Software Engineer"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                className="hidden items-center justify-center w-full h-full bg-gradient-to-br from-muted to-accent text-4xl font-bold text-muted-foreground/40"
              >
                SK
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
