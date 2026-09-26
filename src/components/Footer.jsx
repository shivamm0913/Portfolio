import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { socialLinks, personalInfo } = portfolioData;

  return (
    <footer className="border-t border-border mt-16 pb-28 md:pb-8 pt-8">
      <div className="mx-auto w-[92%] max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="text-muted-foreground/60">
          Designed & Built by{" "}
          <span className="text-foreground/80 font-medium">
            {personalInfo.name}
          </span>{" "}
          · © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-foreground transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
